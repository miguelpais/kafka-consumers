**Node Kafka Consumers**

This repo includes two sample Node scripts:
- **Sample Kafka Consumer**: simple high level consumer listenning on single-parition topic 'messages';
- **Two Consumers Same Consumer Group**: two consumers on same consumer group listening for messages on double-partitioned topic 'users', thus splitting the work between them

For producing message please check this repo, with an API that generates the messages this repo listens on:

https://github.com/miguelpais/node-kafka-producer-api
