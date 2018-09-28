const { spawn } = require('child_process');

const arguments = Array.prototype.slice.call(process.argv, 2);

arguments.forEach(cmd => {
    const cmdAsArray = cmd.split(' ');
    const childProcess = spawn(cmdAsArray[0], cmdAsArray.slice(1));
    childProcess.stdout.on('data', data => {
        process.stdout.write(`[${cmd}]\r\n`);
        process.stdout.write(data);
    });
    childProcess.stderr.on('data', data => {
        process.stdout.write(`[${cmd}]\r\n`);
        process.stderr.write(data);
    });
});