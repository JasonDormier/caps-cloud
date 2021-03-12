'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
const sns = new AWS.SNS();
const faker = require('faker');

const topic = 'arn:aws:sns:us-west-2:409687769195:pickup';
//const orderItem = process.env[2];

const order = {
  orderId: faker.random.uuid(),
  customer: faker.name.findName(),
  vendorId: 'https://sqs.us-west-2.amazonaws.com/409687769195/acme',
}

const params = {
  //MessageId: faker.random.uuid(),
  TopicArn: topic,
  Message: JSON.stringify(order),
};

setInterval(() => {

  sns.publish(params).promise().then(console.log).catch(console.error);

}, 5000)
