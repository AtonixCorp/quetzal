# Configure the GitLab provider
provider "gitlab" {
  token = var.gitlab_token
}

# Configure Terraform Cloud
terraform {
  cloud {
    organization = "AtonixCorp"

    workspaces {
      name = var.tf_state_name
    }
  }
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
