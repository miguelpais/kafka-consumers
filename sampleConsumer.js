'use strict';

var kafka = require('kafka-node');
const HOST_ZOOKEEPER = '192.168.99.100:2181';

var HighLevelConsumer = kafka.HighLevelConsumer;
var Client = kafka.Client;
var topic = 'messages';
var client = new Client(HOST_ZOOKEEPER);

var topics = [{ topic: topic }];
var options = { groupId: 'consumer1', autoCommit: true, fetchMaxWaitMs: 1000, fetchMaxBytes: 1024 * 1024 };
var consumer = new HighLevelConsumer(client, topics, options);

consumer.on('ready', (arg) => {
  console.log(`consumer ready.${JSON.stringify(arg)}`);
  console.log(consumer.getMetadata());
});

consumer.on('connect', function(lol) {
  client.loadMetadataForTopics([], function (error, results) {
    if (error) {
      return console.error(error);
    }
    console.log('%j', _.get(results, '1.metadata'));
  });
});

consumer.on('message', function (message) {
  console.log(message.value);
});

consumer.on('error', function (err) {
  console.log('error', err);
});