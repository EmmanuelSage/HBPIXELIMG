
(function start(){
const data = [...imageData];

const galleryContainer = document.getElementById("galleryContainer");

for (let i = 0; i < data.length; i++) {
  const div = document.createElement("DIV");
  div.setAttribute("class", "gallery");
  div.innerHTML = `
    <a target="_blank" href="${data[i].image}">
        <img src="${data[i].image}" alt="${data[i].name}" width="600" height="400"/>
      </a>
    <div class="desc">${data[i].name.replace('.png', '').replace('quest_', '')}</div>

  `
  galleryContainer.appendChild(div);
}
})()