const fs = require('fs');

const bosses = [];

const PATH = 'bosses/firstgen'

fs.readdirSync(`./${PATH}`).forEach((file) => {
  bosses.push({
    name: file,
    image: `https://emmanuelsage.github.io/HBPIXELIMG/${PATH}/${file}`,
  });
});

fs.writeFileSync('./githubio/data.json', JSON.stringify(bosses), null, 2);
