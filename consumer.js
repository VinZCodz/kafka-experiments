import kafka from "./client.js";
import * as topics from "./topics.js";

const topic = topics.RIDER_UPDATES;

const userGroup = kafka.consumer({
    groupId: "user-1",
});
userGroup.subscribe({ topic });

const runUserConsumer = async () => {
    await userGroup.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(`Received Message\n
                    Topic: ${topic}\n
                    Partition: ${partition}
                    Message: ${message.value.toString()}`);
        }
    });
};

runUserConsumer().catch((err)=>{
    console.error("Error while running UserConsumer", err);
});