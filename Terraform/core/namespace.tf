resource "kubernetes_namespace" "atonixcorp_system" {
  metadata {
    name = "atonixcorp-system"
  }
}
