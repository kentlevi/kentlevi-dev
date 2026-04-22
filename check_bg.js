import fs from 'fs';
const css2 = fs.readFileSync('main.css', 'utf8');
const lines = css2.split(';').filter(l => l.includes('background-color'));
const bgColors = {};
lines.forEach(l => {
  const match = l.match(/background-color:\s*([^;]+)/);
  if (match) {
    let color = match[1].trim().toLowerCase();
    bgColors[color] = (bgColors[color] || 0) + 1;
  }
});
console.log(Object.entries(bgColors).sort((a,b)=>b[1]-a[1]).slice(0, 10));
