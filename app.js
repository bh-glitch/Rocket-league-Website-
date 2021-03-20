// Selectors
let searchbutton = document.querySelector("#search-icon");
let searchContainer = document.querySelector(".search-container");
let globebutton = document.querySelector("#globe-icon");
let languageContainer = document.querySelector(".language-container");
let container = document.querySelector(".container");
let car1 = document.querySelector(".car-1");
let car2 = document.querySelector(".car-2");
let ball = document.querySelector(".ball");
let heading = document.querySelector(".heading");



// Search button Animation 
searchbutton.addEventListener("click", () => {
    searchContainer.classList.toggle("open");
    searchbutton.classList.toggle("openToggle");


    setTimeout(() => {
        globebutton.classList.remove("openToggle2");

    }, 10);
    setTimeout(() => {
        searchContainer.style.zIndex = "2";

    }, 1000);
    languageContainer.classList.remove("openLang");
    languageContainer.classList.add("closeLang");
})






// Globe button Animation 

globebutton.addEventListener('click', () => {

    setTimeout(() => {
        searchbutton.classList.remove("openToggle");

    }, 100);
    globebutton.classList.toggle("openToggle2");


    searchContainer.classList.remove("open");
    searchContainer.classList.add("close");
    languageContainer.classList.remove("closeLang");

    languageContainer.classList.toggle("openLang");
    setTimeout(() => {
        languageContainer.style.zIndex = "1";
    }, 1000);


})



// Cars animation

container.addEventListener('mousemove',(e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX);
    let yAxis = (window.innerHeight /2 - e.pageY);

    car1.style.transform = `translate(${xAxis /150}px,${yAxis/150}px)`;
    car2.style.transform = `translate(${xAxis /150}px,${yAxis/150}px)`;
    ball.style.transform = `translate(${xAxis /300}px,${yAxis/300}px)`;
    heading.style.transform = `translate(${xAxis /500}px,${yAxis/500}px)`;



})








