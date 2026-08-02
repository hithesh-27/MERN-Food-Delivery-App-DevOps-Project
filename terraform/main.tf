

module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 20.0"
  cluster_endpoint_public_access  = true
  cluster_endpoint_private_access = false

  cluster_name    = "mern-eks"
  cluster_version = "1.32"

  subnet_ids = [
  "subnet-02bb6a11a4c3f9c57",
  "subnet-02c7bb87ba3cf7125",
  "subnet-01c18448c72d9928d"
]

  vpc_id = "vpc-088550075565d0d5b"

  eks_managed_node_groups = {
    default = {
      instance_types = ["t3.small"]

      min_size     = 2
      max_size     = 2
      desired_size = 2
    }
  }
}
