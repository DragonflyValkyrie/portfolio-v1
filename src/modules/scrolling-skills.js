import '../style.css';

function scrollingSkills() {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            scroller.setAttribute('data-animated', true);

            const scrollerInner = scroller.querySelector('.scroller_inner');
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
                const duplicitedItem = item.cloneNode(true);
                duplicitedItem.setAttribute('aria-hidden', true);
                scrollerInner.appendChild(duplicitedItem);
            });
        });
    }
}
export default scrollingSkills;
