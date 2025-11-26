import kafka from "./client.js";
import * as topics from "./topics.js";

const init = async () => {
    const admin = kafka.admin();
    await admin.connect();
    console.log("Admin Connected!");

    const topic=topics.RIDER_UPDATES;
    await admin.createTopics({
        topics: [
            {
                topic,
                numPartitions: 2,
            }
        ],
    });
    console.log(`Created Topic [${topic}]!`);
    await admin.disconnect();
    console.log(`Admin Disconnected!`);
}

await init();