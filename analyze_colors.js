import fs from 'fs';

const html = fs.readFileSync('site.html', 'utf8');
const css1 = fs.readFileSync('site.css', 'utf8');
const css2 = fs.readFileSync('main.css', 'utf8');

const combined = css1 + '\\n' + css2;

const regex = /(color|background-color|background|border-color|fill|stroke)\s*:\s*([^;]+);/gi;
let match;
const colors = {};

while ((match = regex.exec(combined)) !== null) {
  const color = match[2].trim();
  if (color.startsWith('#') || color.startsWith('rgb') || color.startsWith('hsl') || color.startsWith('var')) {
    colors[color] = (colors[color] || 0) + 1;
  }
}

const sorted = Object.entries(colors).sort((a, b) => b[1] - a[1]);
console.log(sorted.slice(0, 30));
