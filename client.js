import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: 'kafka-experiments',
  brokers: ['localhost:9092'],
})

export default kafka;