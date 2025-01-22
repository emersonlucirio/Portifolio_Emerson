function toggleMenu() {
    const menu = document.querySelector('.menu');
    const content = document.querySelector('.conteudo');

    menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';

    // Desloca o conteúdo abaixo do menu
    if (menu.style.display === 'flex') {
        content.style.marginTop = menu.offsetHeight + 'px';
    } else {
        content.style.marginTop = '0';
    }
}

document.addEventListener('click', function (event) {
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-icon');
    const content = document.querySelector('.conteudo');

    if (window.innerWidth < 768) {
        if (!menu.contains(event.target) && event.target !== menuIcon) {
            menu.style.display = 'none';
            content.style.marginTop = '0'; // Reseta a margem superior do conteúdo
        }
    }
});
