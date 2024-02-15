import '../style.css';

function projectScrolling() {
    // Selecting project slider items, navigation buttons, and thumbnails
    let items = document.querySelectorAll('.projects-slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let thumbnails = document.querySelectorAll('.thumbnail .item');
    let thumbnailContainer = document.querySelector('.thumbnail');

    // Counting the total number of items in the project slider
    let countItem = items.length;
    // Keeping track of the currently active item
    let itemActive = 0;

    // Handling the click event for the "Next" button
    next.onclick = function () {
        itemActive = (itemActive + 1) % countItem;
        showProjectSlider();
        updateThumbnailScroll();
    };

    // Handling the click event for the "Previous" button
    prev.onclick = function () {
        itemActive = (itemActive - 1 + countItem) % countItem;
        showProjectSlider();
        updateThumbnailScroll();
    };

    // Setting up an automatic slider with an interval
    let refreshInterval = setInterval(() => {
        next.click();
    }, 15000);

    // Function to update the project slider based on the active item
    function showProjectSlider() {
        // Retrieving the currently active item and thumbnail
        let itemActiveOld = document.querySelector(
            '.projects-slider .list .item.active'
        );
        let thumbnailActiveOld = document.querySelector(
            '.thumbnail .item.active'
        );

        // Removing the 'active' class from the previous item and thumbnail
        itemActiveOld.classList.remove('active');
        thumbnailActiveOld.classList.remove('active');

        // Adding the 'active' class to the new item and thumbnail
        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');

        // Clearing the previous interval and setting up a new one
        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
            next.click();
        }, 15000);
    }

    // Function to update the thumbnail container's scroll position
    function updateThumbnailScroll() {
        let thumbnailWidth = thumbnails[0].offsetWidth;
        let containerWidth = thumbnailContainer.offsetWidth;
        let scrollPosition =
            thumbnailWidth * itemActive - (containerWidth - thumbnailWidth) / 2;
        thumbnailContainer.scrollLeft = scrollPosition;
    }

    // Adding click event listeners to each thumbnail for direct navigation
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            // Update the active item based on the clicked thumbnail
            itemActive = index;
            showProjectSlider();
            updateThumbnailScroll();
        });
    });
}

export default projectScrolling;
