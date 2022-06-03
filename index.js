import Tesseract from 'tesseract.js';

Tesseract.recognize(
  './epicuro.jpeg',
  'eng',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
})
;