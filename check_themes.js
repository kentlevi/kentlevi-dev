import fs from 'fs';
const html = fs.readFileSync('site.html', 'utf8');

const bgMatches = html.match(/(?:background-color|background):\s*(#[A-Fa-f0-9]{3,6}|rgb[^;]+)/g);
if (bgMatches) {
  let counts = {};
  bgMatches.forEach(m => {
    let color = m.split(':')[1].trim();
    counts[color] = (counts[color] || 0) + 1;
  });
  console.log("Backgrounds inline:", Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0, 10));
}

const colorMatches = html.match(/color:\s*(#[A-Fa-f0-9]{3,6})/g);
if (colorMatches) {
  let counts = {};
  colorMatches.forEach(m => {
    let color = m.split(':')[1].trim();
    counts[color] = (counts[color] || 0) + 1;
  });
  console.log("Text colors inline:", Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0, 10));
}
