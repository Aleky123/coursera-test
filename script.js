
let menuham = document.querySelector('.menuham');
let nav = document.querySelector('nav');

menuham.onclick = function () {
    nav.classList.toggle('open');
}

document.body.style.transform = "scale(1)";

document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale='+(1/window.devicePixelRatio));
