import https from 'https';
import fs from 'fs';

https.get('https://designbybrandin.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('site.html', data);
    console.log('Site downloaded. Extracted links:');
    const cssLinks = data.match(/<link[^>]*rel="stylesheet"[^>]*>/g);
    console.log(cssLinks);
    
    // Also extract all style blocks
    const styleBlocks = data.match(/<style[^>]*>([\s\S]*?)<\/style>/g);
    if (styleBlocks) {
      fs.writeFileSync('site.css', styleBlocks.join('\n'));
      console.log('Saved inline styles to site.css');
    }
  });
});
