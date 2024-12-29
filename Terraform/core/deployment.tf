resource "kubernetes_deployment" "atonixforge" {
  metadata {
    name      = "atonixforge"
    namespace = kubernetes_namespace.atonixcorp_system.metadata[0].name
  }
  spec {
    replicas = 1
    selector {
      match_labels = {
        app = "atonixforge"
      }
    }
    template {
      metadata {
        labels = {
          app = "atonixforge"
        }
      }
      spec {
        container {
          name  = "atonixforge"
          image = "ofidohubvm/atonixforge:latest"
          ports {
            container_port = 80
          }
        }
      }
    }
  }
}

resource "kubernetes_deployment" "another_app" {
  metadata {
    name      = "atonixcore"
    namespace = kubernetes_namespace.atonixcorp_system.metadata[0].name
  }
  spec {
    replicas = 2
    selector {
      match_labels = {
        app = "atonixcore"
      }
    }
    template {
      metadata {
        labels = {
          app = "atonixcore"
        }
      }
      spec {
        container {
          name  = "atonixcore"
          image = "ofidohubvm/atonixcore:latest"
          ports {
            container_port = 8080
          }
        }
      }
    }
  }
}
