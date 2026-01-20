const wrapper = document.querySelector('.horizontal-accordion');
const cardArray = wrapper.querySelectorAll('.card');
let openOnHover = false;

if (wrapper.hasAttribute('open-on-hover')) {
    openOnHover = true;
}

cardArray.forEach(card => {
    const cardHeader = card.querySelector('.card-header');

    if (openOnHover) {
        card.addEventListener('mouseover', () => {
            card.classList.add('expanded');
        });

        card.addEventListener('mouseout', () => {
            card.classList.remove('expanded');
        });
    }

    cardHeader.addEventListener('click', (e) => {
        e.preventDefault();

        cardArray.forEach(cardElement => {
            cardElement.classList.remove('expanded');
        });

        card.classList.add('expanded');
    });
});