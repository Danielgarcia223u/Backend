import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const filePath = path.join(process.cwd(), 'Copia clase', 'prueba.txt');
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('error reading file:', err);
        return;
    }
    console.log('file content:', data);
});

console.log('os platform:', os.platform());
console.log ('operating system:', os.type());
console.log('cpu architecture:', os.arch());
console.log('home directory:', os.homedir());
console.log('temporary directory:', os.tmpdir());
console.log('number of cpus:', os.cpus().length / 2);
console.log('number of threads:', os.cpus().length);
console.log('total memory:', (os.totalmem() /1024 /1024).toFixed(2) + ' MB');
console.log('free memory:', (os.freemem() /1024 /1024).toFixed(2) + ' MB');   
const usedmem = os.totalmem() - os.freemem();
console.log('used memory:', (usedmem /1024 /1024).toFixed(2) + ' MB');
const cpufrec = os.cpus().map(cpu => cpu.speed);
console.log('cpu frequencies:', cpufrec.join(', ') + ' MHz');
console.log('cpu frequencies:', (cpufrec.reduce((a, b) => a + b, 0) / cpufrec.length / 1000).toFixed(2)   + ' GHz' );
const cpuModel = os.cpus().map(cpu => cpu.model);
console.log('cpu models:', cpuModel.join(', '));
const time = os.uptime();
const hours = Math.floor(time / 3600);
const minutes = Math.floor((time % 3600) / 60);
const seconds = time % 60;
console.log(`uptime: ${hours}h ${minutes}m ${seconds}s`);