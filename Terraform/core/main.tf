# Configure Terraform Cloud
terraform {
  cloud {
    organization = "AtonixCorp"

    workspaces {
      name = "AtonixCore"
    }
  }
}

# Specify required providers
terraform {
  required_providers {
    gitlab = {
      source  = "gitlabhq/gitlab"
      version = ">=3.12.0"  # Specify the version you want to use
    }
  }
}

# Configure the GitLab provider
provider "gitlab" {
  token = var.gitlab_token
}

# Configure the Kubernetes provider
provider "kubernetes" {
  config_path    = "~/.kube/config"
  config_context = "gitlab_com-atonixcore_atonixcore-atonixcofoo"
}

# Define input variables for sensitive data
variable "gitlab_token" {
  description = "Personal access token for GitLab"
  type        = string
}

variable "tf_state_name" {
  description = "Name of the Terraform state"
  type        = string
  default     = "default"
}

# ConfigMap for the GitLab Agent
resource "kubernetes_config_map" "atonixcofoo" {
  metadata {
    name      = "atonixcofoo"
    namespace = "atonixcorp-system"
  }

  data = {
    "config.yaml" = <<-EOF
      ci_access:
        projects:
          - id: 65936411
      agents:
        atonixcofoo:
          token:

      user_access:
        access_as:
          agent: {}  # for free
          user: {}   # for premium+
        projects:
          - id: https://gitlab.com/atonixcore/atonixcore.git

      subjects:
        - name: gitlab:atonixcore-project-65936411:maintainer
          kind: Group
          groups:
            - id: 99999995
    EOF
  }
}
