const body = document.querySelector("body");
const element = document.querySelector(".container");
const light = document.getElementById('light');

function updateBackground() {
  const containerHeight = element.scrollHeight - element.clientHeight;
  const scrollPosition = element.scrollTop;
  const value = (scrollPosition / containerHeight) * 255;
  body.style.backgroundColor = `rgb(${value}, ${value}, ${value})`;
}

element.addEventListener("scroll", updateBackground);
element.addEventListener("touchmove", updateBackground);
/*const body = document.querySelector("body");
const element = document.querySelector(".container");
const light = document.getElementById('light');

element.addEventListener("scroll", ()=>{
  const value = 255-(((light.getBoundingClientRect().top-8)/200)*255);
  body.style.backgroundColor = `rgb(${value}, ${value}, ${value})`
});

element.addEventListener("touchmove", ()=>{
  const value = 255-(((light.getBoundingClientRect().top-8)/200)*255);
  body.style.backgroundColor = `rgb(${value}, ${value}, ${value})`
});
*/
