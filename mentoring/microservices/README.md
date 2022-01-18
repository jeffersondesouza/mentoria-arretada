# MICROSERVICES

## COMMON ARCHITECTURE COMPONENTS

- UI
  > browser
  > web apps
  > mobile apps
  > Iot
  > and so on

- UI
- API Gateway
Service
Config Server
Service Registry
Circuit Breaker
LOGS (Spring Cloud Sleuth)
Metric Store
Message Brokers
Data bases
                         


### FLUX
                                            |--Config Server 
                     |--> Service 1 (DB)    |--Service Registry
UI --> API_GATEWAY --|--> Service 2 (DB)    |--Circuit Breaker 
                     |--> Service 3 (no DB) |  LOGS (Spring Cloud Sleuth)
                     |--------|-------------| 
                              |
                              | Metric Store
                              | Message Brokers
                              | Data bases


