const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, "Files", "lorem.txt"),{encoding: "utf8"});

const ws = fs.createWriteStream(path.join(__dirname, "Files", "new-lorem.txt"));

rs.pipe(ws);

/* 
rs.on('data',(dataChunk) => {
    ws.write(dataChunk);
}) */