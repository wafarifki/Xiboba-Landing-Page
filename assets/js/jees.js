function SliderProduk(anything)
{
    document.querySelector('.xibobah').src = anything
}
function UbahWarnaBg(color)
{
    const menue = document.getElementById("menue")
    const circle = document.querySelector('.circle')
    const span = document.querySelector('span')
    const a = document.querySelector('.kontener-teks a')
    circle.style.background = color
    span.style.color = color
    a.style.background = color
    a.style.borderColor = color
    a.style.color = "#fff";

    a.onmouseover = function() {
        a.style.borderColor = color;
        a.style.background = "#b9aeae00";
        a.style.color = color;
    }

    menue.style.background = color
}

function toggleMenu()
{
    var menu = document.getElementById("menue")
    var navMenu = document.querySelector('.menu-utama')
    menu.classList.toggle('active')
    navMenu.classList.toggle('active')
}