const insertAfter = (referenceNode, newNode) => {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

const anchorMenu = () => {
    const content = document.getElementById('content');
    const h3Els = content.getElementsByTagName('h3');

    // Create menu
    const anchorMenuContainer = document.createElement('ul');
    anchorMenuContainer.classList.add('menu-anchor');

    // Loop on each h3
    for(let i = 0; i < h3Els.length; i++) {
        const item = h3Els[i];
        const itemId = item.getAttribute('id');
        const itemText = item.textContent;
        const itemLi = document.createElement('li');
        const itemLink = document.createElement('a');

        itemLink.href = '#' + itemId;
        itemLink.innerHTML = itemText;

        itemLi.appendChild(itemLink);
        anchorMenuContainer.appendChild(itemLi);
    }

    const refNode = document.querySelector('.content > header');
    insertAfter(refNode, anchorMenuContainer);
};

const scrollAnchor = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};

document.addEventListener("DOMContentLoaded", function(event) {
    anchorMenu();
    scrollAnchor();
});
