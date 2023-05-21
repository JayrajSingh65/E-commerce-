const menubar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const CloseNav = document.getElementById("close");

if(menubar){
    menubar.addEventListener('click', () => {
        nav.classList.add('active');
        console.log("clicked");
    })
}

CloseNav.addEventListener('click', () => {
    nav.classList.remove('active');
})