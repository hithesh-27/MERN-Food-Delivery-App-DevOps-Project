

module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 20.0"
  enable_cluster_creator_admin_permissions = true
  cluster_endpoint_public_access  = true
  cluster_endpoint_private_access = false

  cluster_name    = "mern-eks"
  cluster_version = "1.32"

  subnet_ids = [
  "subnet-09da83991b4dcd10a",
  "subnet-05a85cc6290125b37",
  "subnet-0d53ef2e1df79fe97"
]

  vpc_id = "vpc-0a20a949971bf3005"

  eks_managed_node_groups = {
    default = {
      instance_types = ["t3.small"]

      min_size     = 2
      max_size     = 2
      desired_size = 2
    }
  }
}
