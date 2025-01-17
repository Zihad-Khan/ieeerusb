function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    const menuButton = document.querySelector('.menu-button');

    menu.classList.toggle('active');

    menuButton.innerHTML = ''; // Clear the current icon

    if (menu.classList.contains('active')) {
        const crossIcon = document.createElement('i');
        crossIcon.className = 'fa-solid fa-xmark';
        menuButton.append(crossIcon);
    } else {
        const barsIcon = document.createElement('i');
        barsIcon.className = 'fa-solid fa-bars';
        menuButton.append(barsIcon);
    }
}
