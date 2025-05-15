// script.js

// You can add JavaScript functionality here, such as handling post submissions,
// liking posts, or adding comments.

// Example: Simple alert on button click

const postButton = document.querySelector('.post-form button');

if (postButton) {
    postButton.addEventListener('click', () => {
        alert('Post submitted (not really, this is just a demo)');
    });
}

const likeButtons = document.querySelectorAll('.post-footer button:nth-child(1)');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Liked! (Not really)');
    });
});