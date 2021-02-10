# Load balancer with Docker containers

Layer 7 load balancer using Nginx as reverse proxy.

```
           ----------
           | client |
           ----------
               |
       ----------------
       | loadbalancer |
       ----------------
   ---------|  |  |-------       
   |           |         |
--------   --------   --------
| app1 |   | app1 |   | app1 |   
--------   --------   --------
```

## Dependencies

- NodeJS
  - Express
- Docker

## TODO

- Issue: Traffic gets to the first node in the list if one node is shut down.