# Load balancer with Docker containers

Layer 7 load balancer using Nginx as reverse proxy.

```
           ----------
           | client |
           ----------
               |
               |
       ----------------
       | loadbalancer |
       ----------------
            |  |  |
   ---------|  |  |-------       
   |           |         |
   |           |         |   
--------   --------   --------
| app1 |   | app2 |   | app3 |   
--------   --------   --------
```

## How to set up?

1. Clone the repo
2. Build the backend application: `docker build -t app .`
3. Start the Compose: `docker-compose up`


## Dependencies

- NodeJS
  - Express
- Docker

## TODO

- Issue: Traffic gets to the first node in the list if one node is shut down.