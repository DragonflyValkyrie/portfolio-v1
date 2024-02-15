import '../style.css';

function scrollingSkills() {
    // Selecting all elements with the class 'scroller'
    const scrollers = document.querySelectorAll('.scroller');

    // Checking if the user prefers reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // If not, add the animation
        addAnimation();
    }

    // Function to add animation to each scroller
    function addAnimation() {
        // Iterating over each scroller
        scrollers.forEach((scroller) => {
            scroller.setAttribute('data-animated', true);

            const scrollerInner = scroller.querySelector('.scroller_inner');

            // Creating a copy of each item in the scroller and appending it to the end
            const scrollerContent = Array.from(scrollerInner.children);
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }
}

export default scrollingSkills;
