provider "kubernetes" {
  config_path    = "~/.kube/config"
  config_context = "atonixcore"
}

provider "terraform" {
  organization = "AtonixCorp"

  cloud {
    workspaces {
      name = "AtonixCore"
    }
  }
}
