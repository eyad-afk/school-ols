document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const sideMenu = document.getElementById('side-menu');
    const closeBtn = document.getElementById('close-btn');

    menuBtn.addEventListener('click', function() {
        sideMenu.style.right = '0'; // تظهر القائمة
    });

    closeBtn.addEventListener('click', function() {
        sideMenu.style.right = '-320px'; // تخفي القائمة
    });
});