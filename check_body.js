import fs from 'fs';
const html = fs.readFileSync('site.html', 'utf8');
const match = html.match(/<body[^>]*>/i);
console.log("Body tag:", match ? match[0] : "Not found");
