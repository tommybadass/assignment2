// List of image files in the "img" folder
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

// Grab all the important elements from the HTML
const studentIdElement = document.getElementById('myStudentId');
const customNumberInput = document.getElementById('customNumber');
const custColorButton = document.querySelector('.custColor');
const randColorButton = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const imageDisplay = document.getElementById('images');

// This function is triggered when the "Change custom color" button is clicked
function changeCustomColor() {
    const userInput = parseInt(customNumberInput.value, 10); // Get the number the user enters
    if (!isNaN(userInput)) {
        let color; // We will set this variable to store the selected color

        // Change the color based on the input
        if (userInput < 0 || userInput > 100) {
            color = 'red'; // If the number is out of range, it's red
        } else if (userInput <= 20) {
            color = 'green'; // Green for numbers between 0-20
        } else if (userInput <= 40) {
            color = 'blue'; // Blue for numbers between 20-40
        } else if (userInput <= 60) {
            color = 'orange'; // Orange for numbers between 40-60
        } else if (userInput <= 80) {
            color = 'purple'; // Purple for numbers between 60-80
        } else {
            color = 'yellow'; // Yellow for numbers between 80-100
        }

        // Set the background color to the chosen one
        document.body.style.backgroundColor = color;
        studentIdElement.textContent = 'Student ID: 200590277'; 
    } else {
        alert('Oops! Please enter a valid number between 1 and 100.'); // If input is invalid
    }
}

// This function gets called when the "Change random color" button is clicked
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Get a random number between 1 and 100
    let color;

    // Based on the random number, pick a color
    if (randomNumber <= 20) {
        color = 'green';
    } else if (randomNumber <= 40) {
        color = 'blue';
    } else if (randomNumber <= 60) {
        color = 'orange';
    } else if (randomNumber <= 80) {
        color = 'purple';
    } else {
        color = 'yellow';
    }

    // Set the background color to the randomly chosen color
    document.body.style.backgroundColor = color;
    studentIdElement.textContent = 'Student ID: 200590277'; // Replace with your actual student ID
}

// This function populates the select dropdown with options
function addList() {
    // Make sure we're not adding duplicate options if they're already there
    if (imageSelect.options.length > 1) return;

    // Loop through the images array and add each image as an option
    images.forEach(image => {
        const option = document.createElement('option');
        option.value = image;
        option.textContent = image;
        imageSelect.appendChild(option);
    });
}

// This function displays the selected image when a choice is made
function changeImage() {
    const selectedImage = imageSelect.value; // Get the value of the selected option
    if (selectedImage) {
        imageDisplay.src = `img/${selectedImage}`; // Set the image source to the selected one
        imageDisplay.alt = selectedImage; // Set the alt text for the image

        // Show the image now that it's selected
        imageDisplay.removeAttribute('hidden');
    }
}

// Add event listeners to the buttons and the image select dropdown
custColorButton.addEventListener('click', changeCustomColor); // When the custom color button is clicked
randColorButton.addEventListener('click', changeRandomColor); // When the random color button is clicked
imageSelect.addEventListener('change', changeImage); // When a new image is selected from the dropdown

// Populate the image dropdown when the page loads
window.onload = addList;
