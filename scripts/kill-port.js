const { execSync } = require('child_process');

try {
    const output = execSync('netstat -ano | findstr :4321').toString();
    const lines = output.trim().split('\n');
    lines.forEach(line => {
        const parts = line.trim().split(/\s+/);
        if (parts.length >= 5 && parts[1].includes(':4321') && parts[3] === 'LISTENING') {
            const pid = parts[4];
            console.log(`Killing PID ${pid}`);
            execSync(`taskkill /F /PID ${pid}`);
        }
    });
    console.log("Successfully cleared port 4321.");
} catch (e) {
    console.log('No process found or error:', e.message);
}
