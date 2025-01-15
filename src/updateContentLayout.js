// updateContentLayout.js

/**
 * Dynamically updates the .content-container's layout based on loggedIn status.
 * If loggedIn === true, remove "centered-content" class.
 * If loggedIn === false, add "centered-content" class.
 *
 * @param {boolean} loggedIn - The login state.
 */
export function updateContentLayout(loggedIn) {
    const contentContainer = document.querySelector('.content-container');
    if (!contentContainer) return; // Guard clause if element not found

    if (loggedIn) {
        // Remove centering
        contentContainer.classList.remove('centered-content');
    } else {
        // Center the content
        contentContainer.classList.add('centered-content');
    }
}
