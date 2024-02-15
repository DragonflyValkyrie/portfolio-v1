import '../style.css';

function projectScrolling() {
    // Selecting project slider items, navigation buttons, and thumbnails
    let items = document.querySelectorAll('.projects-slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let thumbnails = document.querySelectorAll('.thumbnail .item');

    // Counting the total number of items in the project slider
    let countItem = items.length;
    // Keeping track of the currently active item
    let itemActive = 0;

    // Handling the click event for the "Next" button
    next.onclick = function () {
        itemActive = itemActive + 1;
        // If reached the end, loop back to the first item
        if (itemActive >= countItem) {
            itemActive = 0;
        }
        showProjectSlider();
    };

    // Handling the click event for the "Previous" button
    prev.onclick = function () {
        itemActive = itemActive - 1;
        // If at the first item, loop to the last item
        if (itemActive < 0) {
            itemActive = countItem - 1;
        }
        showProjectSlider();
    };

    // Setting up an automatic slider with a 5-second interval
    let refreshInterval = setInterval(() => {
        next.click();
    }, 5000);

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
        }, 5000);
    }

    // Adding click event listeners to each thumbnail for direct navigation
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            // Update the active item based on the clicked thumbnail
            itemActive = index;
            showProjectSlider();
        });
    });
}

export default projectScrolling;
