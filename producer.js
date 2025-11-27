import kafka from "./client.js";
import * as topics from "./topics.js";

const producer = kafka.producer();

const runProducer = async () => {
    await producer.connect();
}

const publishMessage = async (topic, message) => {
    await producer.send({
        topic,
        messages: [message]
    });
}

runProducer()
    .then(() => publishMessage(topics.RIDER_UPDATES, {
        partition: 0,
        key: "location-update",
        value: JSON.stringify({
            name: "Vin'z",
            time: new Date(),
            location: "Corporation"
        })
    }))
    .then(() => {
        console.log("Message Published!");
    })
    .catch((err) => {
        console.error("Error while Publishing", err);
    })
    .finally(() => producer.disconnect());