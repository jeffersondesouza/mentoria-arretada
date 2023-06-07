
# Mentoring let's rule K8s


### INTRO
- Produtores:
- Consumidores:


### GENERAL
- zookeeper: Kafka needs it to store kafka data. Kafka will connect with zookeeper
  > bin/zookeeper-server-start.sh config/zookeeper.properties
- run kafka
  > bin/kafka-server-start.sh config/server.properties 

- topics:
  > CREATE: bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic TOPIC_NAME
  > LIST: bin/kafka-topics.sh --list --bootstrap-server localhost:9092
  > PRODUCE: bin/kafka-console-producer.sh --broker-list localhost:9092 --topic TOPIC_NAME
  > CONUSME: bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic TOPIC_NAME --from-beginning
  > DESCRIBE: bin/kafka-topics.sh --bootstrap-server localhost:9092 --describe
  
  > describe groups:  bin/kafka-consumer-groups.sh --all-groups --bootstrap-server localhost:9092 --describe

- partitions:
  > Responsible for add partitions to the topic
  > update partitions: 
     - bin/kafka-topics.sh --alter --bootstrap-server localhost:9092 --topic ECOMMERCE_NEW_ORDER --partitions NUMBER
- Rebalancing partitons:
  > MAX_POLL_RECORDS_CONFIG: force to use one partition per time before re rebalance the partitions

## Test





