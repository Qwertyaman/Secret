const { spawn, execSync } = require('child_process');

async function capture() {
  console.log('Starting preview server...');
  const preview = spawn('npx.cmd vite preview --port 4173', {
    shell: true,
    stdio: 'ignore'
  });

  await new Promise(r => setTimeout(r, 4000));

  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const flags = '--headless=new --no-sandbox --disable-gpu --hide-scrollbars';

  console.log('Capturing desktop preview...');
  try {
    execSync(`"${chromePath}" ${flags} --screenshot="desktop-preview.png" --window-size=1440,900 http://localhost:4173`, { stdio: 'inherit' });
    console.log('Desktop preview captured: desktop-preview.png');
  } catch (e) {
    console.error('Desktop preview error:', e.message);
  }

  console.log('Capturing mobile preview...');
  try {
    execSync(`"${chromePath}" ${flags} --screenshot="mobile-preview.png" --window-size=390,844 http://localhost:4173`, { stdio: 'inherit' });
    console.log('Mobile preview captured: mobile-preview.png');
  } catch (e) {
    console.error('Mobile preview error:', e.message);
  }

  try {
    process.kill(preview.pid);
  } catch (e) {}

  console.log('Done capturing previews!');
  process.exit(0);
}

capture();
