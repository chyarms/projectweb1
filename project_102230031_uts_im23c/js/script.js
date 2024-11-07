// toggle class active (tadinya ada jadi gak ada, tadinya gak ada jadi ada)
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar sidbar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener ('click', function (e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove ('active');
    }
});