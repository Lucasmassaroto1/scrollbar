const body = document.querySelector("body");
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
