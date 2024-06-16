// -------------------------------------------------------------
// -----------------LOADER--------------------------------------
// -------------------------------------------------------------
let loader = document.getElementsByClassName('loader');
let click = document.getElementsByClassName('click');

for (let a = 0; a < click.length; a++) {
    click[a].onclick = function () {
        document.documentElement.style.setProperty('--height', "100%");
        btn[a].style.cssText = `
        opacity:1;
        transition:2s;
        `
    }
}
// -------------------------------------------------------------
// -----------------REVEAL-TOP----------------------------------
// -------------------------------------------------------------
window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 100;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
// -------------------------------------------------------------
// -----------------REVEAL-BOTTOM-------------------------------
// -------------------------------------------------------------

window.addEventListener("scroll", bottom);

function bottom() {
    var bottoms = document.querySelectorAll(".bottom");

    for (var b = 0; b < bottoms.length; b++) {
        let windowheight = window.innerHeight;
        let revealbottom = bottoms[b].getBoundingClientRect().top;
        let bottompoint = 100;

        if (revealbottom < windowheight - bottompoint) {
            bottoms[b].classList.add("active");
        } else {
            bottoms[b].classList.remove("active");
        }
    }
}

// -------------------------------------------------------------
// -----------------REVEAL-LEFT---------------------------------
// -------------------------------------------------------------


window.addEventListener("scroll", left);

function left() {
    var lefts = document.querySelectorAll(".left");

    for (var l = 0; l < lefts.length; l++) {
        let windowheight = window.innerHeight;
        let revealleft = lefts[l].getBoundingClientRect().top;
        let leftpoint = 100;

        if (revealleft < windowheight - leftpoint) {
            lefts[l].classList.add("active");
        } else {
            lefts[l].classList.remove("active");
        }
    }
}

// -------------------------------------------------------------
// -----------------REVEAL-RIGHT--------------------------------
// -------------------------------------------------------------


window.addEventListener("scroll", right);

function right() {
    var rights = document.querySelectorAll(".right");

    for (var r = 0; r < rights.length; r++) {
        let windowheight = window.innerHeight;
        let revealright = rights[r].getBoundingClientRect().top;
        let rightpoint = 100;

        if (revealright < windowheight - rightpoint) {
            rights[r].classList.add("active");
        } else {
            rights[r].classList.remove("active");
        }
    }
}

// -------------------------------------------------------------
// -----------------ROTATE--------------------------------------
// -------------------------------------------------------------

window.addEventListener("scroll", rotate);

function rotate() {
    var rotates = document.querySelectorAll(".rotate");

    for (var t = 0; t < rotates.length; t++) {
        let windowheight = window.innerHeight;
        let revealtop = rotates[t].getBoundingClientRect().top;
        let revealpoint = 100;

        if (revealtop < windowheight - revealpoint) {
            rotates[t].classList.add("active");
        } else {
            rotates[t].classList.remove("active");
        }
    }
}


// ----------------------------------------------------------
// -----------------ARROW-TO-FIRST-SECTION-------------------
// ----------------------------------------------------------

let arr = document.getElementById("arrow");

window.onscroll = function () {
  if (scrollY >= 740) {
    arr.style.display = "block";
  } else {
    arr.style.display = "none";
  }
};
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------


let color1 = document.querySelector('.yellow');
let color2 = document.querySelector('.red');
let color3 = document.querySelector('.silver');
let color4 = document.querySelector('.blue');
let homeimg = document.querySelector('.homeimg');
let designimg = document.querySelector('.designimg');
let featuersimg = document.querySelector('.featuersimg');
let contactimg = document.querySelector('.contactimg');
let gallimg = document.querySelector('.gallimg');
let gall1 = document.querySelector('.gall1');
let gall2 = document.querySelector('.gall2');
let gall3 = document.querySelector('.gall3');
let gall4 = document.querySelector('.gall4');

color1.addEventListener('click', function(){
    document.body.classList.add('yellow');
    document.body.classList.remove('red');
    document.body.classList.remove('silver');
    document.body.classList.remove('blue');
    homeimg.src="images/home.png";
    designimg.src="images/design1.png";
    featuersimg.src="images/feature1.png";
    contactimg.src="images/y1.jpg";
    gallimg.src="images/y1.jpg";
    gall1.src="images/y2.jpg";
    gall2.src="images/y3.jpg";
    gall3.src="images/y4.jpg";
    gall4.src="images/y5.jpg";
})
color2.addEventListener('click', function(){
    document.body.classList.remove('yellow');
    document.body.classList.add('red');
    document.body.classList.remove('silver');
    document.body.classList.remove('blue');
    homeimg.src="images/home2.png";
    designimg.src="images/design2.png";
    featuersimg.src="images/feature2.png";
    contactimg.src="images/r1.jpg";
    gallimg.src="images/r1.jpg";
    gall1.src="images/r2.png";
    gall2.src="images/r3.jpg";
    gall3.src="images/r4.jpg";
    gall4.src="images/r5.jpg";
})
color3.addEventListener('click', function(){
    document.body.classList.remove('yellow');
    document.body.classList.remove('red');
    document.body.classList.add('silver');
    document.body.classList.remove('blue');
    homeimg.src="images/home3.png";
    designimg.src="images/design3.png";
    featuersimg.src="images/feature3.png";
    contactimg.src="images/s1.jpg";
    gallimg.src="images/s1.jpg";
    gall1.src="images/s2.jpg";
    gall2.src="images/s3.jpg";
    gall3.src="images/s4.jpg";
    gall4.src="images/s5.jpg";
})
color4.addEventListener('click', function(){
    document.body.classList.remove('yellow');
    document.body.classList.remove('red');
    document.body.classList.remove('silver');
    document.body.classList.add('blue');
    homeimg.src="images/home4.png";
    designimg.src="images/design4.png";
    featuersimg.src="images/feature4.png";
    contactimg.src="images/b3.jpg";
    gallimg.src="images/b1.jpg";
    gall1.src="images/b2.jpg";
    gall2.src="images/b3.jpg";
    gall3.src="images/b4.jpg";
    gall4.src="images/b5.jpg";
})


let fspan1 = document.querySelector('.fspan1');
let fspan2 = document.querySelector('.fspan2');
let fspan3 = document.querySelector('.fspan3');
let featurespar = document.querySelector('.featurespar');

fspan1.addEventListener('click', function(){
    featurespar.innerText= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae a culpa vel repellat libero temporibus rerum non veritatis quibusdam eaque, quidem dolore natus deserunt enim provident omnis commodi accusantium? Aliquam.';
})
fspan2.addEventListener('click', function(){
    featurespar.innerText= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae a culpa vel repellat libero temporibus rerum non veritatis quibusdam eaque, quidem dolore natus deserunt enim provident omnis commodi accusantium?';
})
fspan3.addEventListener('click', function(){
    featurespar.innerText= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae a culpa vel repellat libero temporibus rerum non veritatis quibusdam eaque, quidem dolore natus deserunt enim provident omnis commodi?';
})
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
let row1 = document.querySelector('.row1');
let row2 = document.querySelector('.row2');
let row3 = document.querySelector('.row3');
let row4 = document.querySelector('.row4');

row1.addEventListener('click', function(){
    this.classList.add('active');
    row2.classList.remove('active');
    row3.classList.remove('active');
    row4.classList.remove('active');
})
row2.addEventListener('click', function(){
    this.classList.add('active');
    row1.classList.remove('active');
    row3.classList.remove('active');
    row4.classList.remove('active');
})
row3.addEventListener('click', function(){
    this.classList.add('active');
    row1.classList.remove('active');
    row2.classList.remove('active');
    row4.classList.remove('active');
})
row4.addEventListener('click', function(){
    this.classList.add('active');
    row1.classList.remove('active');
    row2.classList.remove('active');
    row3.classList.remove('active');
})
// ---------------------------------------------------
// ----------------EXAMPLE-OF-FUNCTION----------------
// ---------------------------------------------------
// let btn = document.getElementsByClassName('btn');
// let box = document.getElementsByClassName('box');


// for(let i = 0 ; i < btn.length; i++){
//     btn[i].onclick = function(){
//         box[i].style.cssText = `
//         opacity:0;
//         `;
//     }
// }

// ---------------------------------------------------------------
// ---------------------DARK-LIGHT-MODES--------------------------
// ---------------------------------------------------------------

// let moon = document.getElementById('moon');
// let sun = document.getElementById('sun');

// moon.addEventListener('click', function(){
//     document.body.classList.remove('light');
//     this.style.display='none';
//     sun.style.display='block';
// })

// sun.addEventListener('click', function(){
//     document.body.classList.add('light');
//     this.style.display='none';
//     moon.style.display='block';
// })
