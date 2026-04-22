import fs from 'fs';
const html = fs.readFileSync('site.html', 'utf8');

// Find all elements with data-custom-content or ids or classes
// Just find all inline styles
const inlineStyles = html.match(/style="([^"]*)"/g);
if (inlineStyles) {
  let colors = {};
  inlineStyles.forEach(style => {
    let match = style.match(/(?:color|background-color|background):\s*([^;]+)/g);
    if (match) {
      match.forEach(m => {
        let key = m.split(':')[1].trim();
        colors[key] = (colors[key] || 0) + 1;
      });
    }
  });
  console.log("Inline style colors:", Object.entries(colors).sort((a,b)=>b[1]-a[1]).slice(0, 10));
}

// Find CSS variables defined in <style> blocks
const styleBlocks = html.match(/<style[^>]*>([\s\S]*?)<\/style>/g);
if (styleBlocks) {
  let cssVars = {};
  styleBlocks.forEach(block => {
    let matches = block.match(/--[a-zA-Z0-9-]+:\s*([^;]+);/g);
    if (matches) {
      matches.forEach(m => {
        let [vars, val] = m.split(':');
        cssVars[vars] = val.trim();
      });
    }
  });
  console.log("CSS Vars:", Object.keys(cssVars).length > 0 ? cssVars : "none");
}
