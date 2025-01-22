function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('header-shadow');
    } else {
        header.classList.remove('header-shadow');
    }
});
        document.getElementById('loading-link').addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('loading-overlay').style.display = 'flex';
            setTimeout(function() {
                window.location.href = event.target.href;
                document.getElementById('my-loading-overlay').style.display = 'none';
            }, 1000);
        });