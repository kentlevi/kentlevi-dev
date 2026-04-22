import https from 'https';
import fs from 'fs';

https.get('https://designbybrandin.com/wp-content/uploads/siteground-optimizer-assets/siteground-optimizer-combined-css-554fbd344177776409d28e7a15c599b9.css', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('main.css', data);
    console.log('Main CSS downloaded.');
  });
});
