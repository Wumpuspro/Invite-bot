  
const { ShardingManager } = require("discord.js");
const manager = new ShardingManager("./index.js", {
    token: require("./config").token,
    totalShards: require("./config").shardCount,
    shardArgs: [ ...process.argv, ...[ "--sharded" ] ]
});

const log = require("./helpers/logger");
log("Inviteplus has been started! 🚀\n");

manager.spawn();