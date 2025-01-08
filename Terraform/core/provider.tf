# Configure the GitLab provider
provider "gitlab" {
  token = var.gitlab_token
}

# Configure the backend for storing the Terraform state
terraform {
  backend "http" {
    address        = "https://gitlab.com/api/v4/projects/65936411/terraform/state/${var.tf_state_name}"
    lock_address   = "https://gitlab.com/api/v4/projects/65936411/terraform/state/${var.tf_state_name}/lock"
    unlock_address = "https://gitlab.com/api/v4/projects/65936411/terraform/state/${var.tf_state_name}/lock"
    username       = "guxegdsa"
    password       = var.gitlab_token
    lock_method    = "POST"
    unlock_method  = "DELETE"
    retry_wait_min = 5
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
