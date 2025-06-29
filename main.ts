provider "aws" {
  region = "eu-west-2"
}

resource "aws_s3_bucket" "example" {
  bucket = "joao-felipe-bn-terraform-demo-bucket"
}