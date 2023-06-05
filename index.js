const menubar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const CloseNav = document.getElementById("close");
const ProImg = document.getElementById("p-img-4");
const Logo = document.getElementsByClassName("logo");

const mainImg = document.getElementById("MainImg");
const SmallImg = document.getElementsByClassName("small-img");


//When User click on small img change big one



// SmallImg[1].onclick = function(){
//     mainImg.src = SmallImg[1].src;
// }

if(menubar){
    menubar.addEventListener('click', () => {
        nav.classList.add('active');
        console.log("clicked");
    })
}

CloseNav.addEventListener('click', () => {
    nav.classList.remove('active');
})