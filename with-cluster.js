const cpus = require('os').cpus();
const cluster = require('cluster');
const express = require('express');
const app = express();

const nodeType = (cluster.isMaster) ? 'Master' : 'Worker';

if (cluster.isMaster) {
    for (let i = 0; i < cpus.length; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log('Worker #' + worker.process.pid, 'exited');
        cluster.fork();
    });
} else {
    app.get('/', (req, res) => res.send('Response from Worker #' + process.pid));
    app.listen(3000);
}

console.log(nodeType + ' #' + process.pid, 'is running');
