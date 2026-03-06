const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']
/* Declaring the alternative text for each image file */
const alternatives = ['Closeup of a human eye', 'Rock that looks like a wave', 'Purple and white pansies', "Section of wall from a pharoah's tomb", 'Large moth on a leaf']
/* Looping through images */
for(let i = 0; i < filenames.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + filenames[i]);
    newImage.setAttribute('alt', alternatives[i]);
    newImage.addEventListener("click", () => {
        displayedImage.src = newImage.src;
    });
    thumbBar.appendChild(newImage);   
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if (btn.textContent === "Darken") {
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else {
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    };
});
