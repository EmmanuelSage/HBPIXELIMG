const fs = require('fs');

const bosses = [];

const PATH = 'bosses/firstgen'
const PATH2 = 'bosses/secgen'
const PATH3 = 'bosses/firstdiffbee'

fs.readdirSync(`./${PATH}`).forEach((file) => {
  bosses.push({
    name: file,
    image: `https://emmanuelsage.github.io/HBPIXELIMG/${PATH}/${file}`,
  });
});

fs.readdirSync(`./${PATH2}`).forEach((file) => {
  bosses.push({
    name: file,
    image: `https://emmanuelsage.github.io/HBPIXELIMG/${PATH2}/${file}`,
  });
});

fs.readdirSync(`./${PATH3}`).forEach((file) => {
  bosses.push({
    name: file,
    image: `https://emmanuelsage.github.io/HBPIXELIMG/${PATH3}/${file}`,
  });
});

fs.writeFileSync('./githubio/data.json', JSON.stringify(bosses), null, 2);
