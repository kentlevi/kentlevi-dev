import fs from 'fs';
const html = fs.readFileSync('site.html', 'utf8');

// find snippet around FF3401
const regex = /.{0,100}FF3401.{0,100}/g;
const matches = html.match(regex);
if (matches) {
  matches.slice(0, 5).forEach(m => console.log(m));
}
