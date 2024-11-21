terraform {
  required_providers {
    kubernetes = {
      source = "hashicorp/kubernetes"
      version = "2.33.0"
    }
  }

  cloud {
    organization = "AtonixCorp"

    workspaces {
      name = "AtonixCorp"
    }
  }
}

provider "kubernetes" {
  config_path = "~/.kube/config"
}