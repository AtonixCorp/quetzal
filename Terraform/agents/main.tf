terraform { 
  cloud { 
    
    organization = "AtonixCorp" 

    workspaces { 
      name = "AtonixCore" 
    } 
  } 
}
