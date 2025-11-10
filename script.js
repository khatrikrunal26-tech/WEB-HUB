document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const sections = document.querySelectorAll('main section');

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.trim().toLowerCase();
        sections.forEach(section => {
            let hasMatch = false;
            const items = section.querySelectorAll('li');
            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(query) ? '' : 'none';
                if (text.includes(query)) hasMatch = true;
            });
            section.style.display = hasMatch || query === '' ? '' : 'none';
        });
    });

    // For interaction: subtle animation on hover
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseenter', function () {
            link.style.boxShadow = '0 6px 20px #7f00ff55';
            link.style.transform = 'scale(1.11)';
        });
        link.addEventListener('mouseleave', function () {
            link.style.boxShadow = '';
            link.style.transform = '';
        });
    });
});
