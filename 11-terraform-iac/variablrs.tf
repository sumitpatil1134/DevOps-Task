variable "project_name" {
  description = "Name of the DevOps project"
  type        = string
  default     = "devops-linux-server-lab"
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "development"
}
