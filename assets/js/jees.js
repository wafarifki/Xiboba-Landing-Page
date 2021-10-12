        
/*-------------------------------------
       JavaScript for Peloader start     
-------------------------------------*/

const preloader = document.getElementById('loading');
function myFunction()
{
    preloader.style.display = 'none';
}

/*-------------------------------------
       JavaScript for Peloader end    
-------------------------------------*/
const btn = document.querySelector('button.btn')

function SliderProduk(anything)
{
    document.querySelector('.xibobah').src = anything;
    if(anything === 'assets/images/img1.png'){
        btn.style.backgroundColor = '#dd303e';
        btn.style.color = '#fff';
    }
    else if(anything === 'assets/images/img2.png'){
        btn.style.backgroundColor = '#926c15';
        btn.style.color = '#fff';
    }
    else{
        btn.style.backgroundColor = '#240046';
        btn.style.color = '#fff';
    }
    
}
function UbahWarnaBg(color)
{
    const menue = document.getElementById("#menue")
    const menuuu = document.querySelector(".menu-utama2")
    const circle = document.querySelector('.circle')
    const span = document.querySelector('span')
    const a = document.querySelector('.kontener-teks a')
    menuuu.style.background = color
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
function spanColor(color)
{
    const span = document.querySelector('.kontener-teks h2 span')
    span.style.color = color
}

function toggleMenu()
{
    var menu = document.getElementById("#menue")
    var navMenu = document.querySelector('.menu-utama2')
    menu.classList.toggle('active')
    navMenu.classList.toggle('active')
}
