terraform {
  required_version = ">= 1.6.0"
}

resource "terraform_data" "devops_lab" {
  input = "DevOps Terraform Infrastructure as Code Lab"
}
