const container = document.querySelector('.container');
const card = document.querySelector('.card');

const title = document.querySelector('.title');
const iphone = document.querySelector('.iphone img');
const addtocart = document.querySelector('.addtocart button');
const description = document.querySelector('.description h3');
const storage = document.querySelector('.storage');

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

    title.style.textShadow = '0 10px 5px rgba(0, 0, 0, 0.2)';

    title.style.transform = 'translateZ(120px)';
    iphone.style.transform = 'translateZ(125px) rotateZ(360deg) rotateX(360deg) rotateY(360deg)';
    addtocart.style.transform = 'translateZ(120px)';
    description.style.transform = 'translateZ(100px)';
    storage.style.transform = 'translateZ(100px)';
})

container.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
})

container.addEventListener('mouseleave', (e)  => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';

    title.style.textShadow = 'none';

    title.style.transform = 'translateZ(0px)';
    iphone.style.transform = 'translateZ(0px) rotateZ(0deg)';
    addtocart.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    storage.style.transform = 'translateZ(0px)';  
})