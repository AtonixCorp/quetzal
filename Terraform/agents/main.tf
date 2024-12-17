terraform {
  required_providers {
    maas = {
      source  = "maas/maas"
      version = "~>1.0"
    }
  }
}

provider "maas" {
  api_key     = "yrxXWgwFmMc9P7gtqj:GTK564Qvf7V9q22M4p:SSxrnPZq6gNnK38zaQ2Rnf5FKVT4GcVP"
  api_url     = "http://192.168.137.131:5240/MAAS"
  api_version = "2.0"
}

resource "maas_fabric" "tf_fabric" {
  name = "tf-fabric"
}

resource "maas_vlan" "tf_vlan" {
  fabric = maas_fabric.tf_fabric.id
  vid    = 0
  name   = "default-vlan"
}

resource "maas_subnet" "subnet_1" {
  name        = "subnet-1"
  cidr        = "172.17.0.0/16"
  fabric      = maas_fabric.tf_fabric.id
  vlan        = maas_vlan.tf_vlan.vid
}

resource "maas_subnet" "subnet_2" {
  name        = "subnet-2"
  cidr        = "192.168.137.0/24"
  fabric      = maas_fabric.tf_fabric.id
  vlan        = maas_vlan.tf_vlan.vid
  gateway_ip  = "192.168.137.2"
}

resource "maas_subnet" "subnet_3" {
  name        = "subnet-3"
  cidr        = "10.1.189.192/32"
  fabric      = maas_fabric.tf_fabric.id
  vlan        = maas_vlan.tf_vlan.vid
}

resource "maas_subnet" "subnet_4" {
  name        = "subnet-4"
  cidr        = "192.168.49.0/24"
  fabric      = maas_fabric.tf_fabric.id
  vlan        = maas_vlan.tf_vlan.vid
}

resource "maas_subnet" "subnet_5" {
  name        = "subnet-5"
  cidr        = "10.230.142.0/24"
  fabric      = maas_fabric.tf_fabric.id
  vlan        = maas_vlan.tf_vlan.vid
}

resource "maas_subnet" "subnet_6" {
  name        = "subnet-6"
  cidr        = "fd42:e310:d1f:7988::/64"
  fabric      = maas_fabric.tf_fabric.id
  vlan        = maas_vlan.tf_vlan.vid
}

resource "maas_subnet" "subnet_7" {
  name        = "subnet-7"
  cidr        = "10.145.142.0/24"
  fabric      = maas_fabric.tf_fabric.id
  vlan        = maas_vlan.tf_vlan.vid
}

resource "maas_subnet" "subnet_8" {
  name        = "subnet-8"
  cidr        = "fd42:2869:5267:409::/64"
  fabric      = maas_fabric.tf_fabric.id
  vlan        = maas_vlan.tf_vlan.vid
}

resource "maas_subnet" "subnet_9" {
  name        = "subnet-9"
  cidr        = "192.168.122.0/24"
  fabric      = maas_fabric.tf_fabric.id
  vlan        = maas_vlan.tf_vlan.vid
}

resource "maas_subnet" "subnet_10" {
  name        = "subnet-10"
  cidr        = "172.18.0.0/16"
  fabric      = maas_fabric.tf_fabric.id
  vlan        = maas_vlan.tf_vlan.vid
}

resource "maas_subnet" "subnet_11" {
  name        = "subnet-11"
  cidr        = "172.19.0.0/16"
  fabric      = maas_fabric.tf_fabric.id
  vlan        = maas_vlan.tf_vlan.vid
}

resource "maas_subnet" "subnet_14" {
  name        = "subnet-14"
  cidr        = "192.168.52.0/24"
  fabric      = maas_fabric.tf_fabric.id
  vlan        = maas_vlan.tf_vlan.vid
  gateway_ip  = "192.168.52.2"
}
