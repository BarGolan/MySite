"use strict";

/*
* Generates an animation displying the webpage title (Bar Golan Software Engineer).
* Invoked on first load of he webpage.
*/

const textName = "Bar Golan";
let i = 0;
const div = document.getElementById("landingPage");
const para1 = document.createElement("p");
para1.setAttribute("class", "title");
div.appendChild(para1);

const text = "Software Engineer";
let j = 0;
const para2 = document.createElement("p");
para2.setAttribute("class", "title");
para2.style.fontSize = "160%";
div.appendChild(para2);

function writeText() {   
    if (i < 10) {
        para1.innerHTML += textName.charAt(i);
        i++;
        setTimeout(writeText, 200);
    } else if (j < 17) {
        para2.innerHTML += text.charAt(j);
        j++;
        setTimeout(writeText, 200);
    } else {
        para1.style.color = "LightCyan";
        para2.style.color = "LightCyan";
    }
}

if (i < 10) {
    writeText();
} 

/*
* Generates an animation displying the hobbie title.
* Invoked infinately and synced with the images animation (css animation).
*/

/*
* Gets the values from the submit button,
* than returns an alert message confirming message recived.
*/
function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target); 
    let name = formData.get("name"); 
    name = name[0].toUpperCase() + name.substring(1);
    const email = formData.get("email"); 
    alert(name + " your message was recived!\nWe will respond as fast as possible to your email:\n" + email);
    event.target.reset();
}

checkWindowSize();

function checkWindowSize() {
    if (window.matchMedia("(max-width: 1000px)").matches) {
        scaleDown();
    } else {
        scaleUp();
    }
}


function scaleDown() {
    const hobbies = document.querySelectorAll(".hobbie-names p");
    hobbies.forEach(hobbie => hobbie.style.display = "none");
    // Hides the nav bar
    const nav = document.getElementById("navBar");
    nav.style.display = "none";
    // Streches the content on 100% of the width of the screen
    const content = document.getElementById("content");
    content.style.width = "100%";

    const menuButton = document.getElementById('menu-button');
    menuButton.style.display = 'block';

}

function scaleUp() {
    const hobbies = document.querySelectorAll(".hobbie-names p");
    hobbies.forEach(hobbie => hobbie.style.display = "block");

    const nav = document.getElementById("navBar");
    nav.style.display = "flex";

    const content = document.getElementById("content");
    content.style.width = "85%";

    const menuButton = document.getElementById('menu-button');
    menuButton.style.display = 'none';
    if (window.matchMedia("(width: 1001px)").matches) {
        menuButton.click();
    }
}

// Listents and calls the checkWindowSize function on window resizing
window.addEventListener("resize", checkWindowSize);

const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', function() {
    const dropDownNavBar = document.getElementById("container");
    const elementExists = !!document.querySelector('#container #homeLink');
    if (elementExists) {
        removeDropDownNavBar();
        dropDownNavBar.style.backgroundColor = "transparent";
        dropDownNavBar.style.justifyContent = "flex-start";
    } else {
        createDropDownNavBar();
        dropDownNavBar.style.backgroundColor  = "black";
        dropDownNavBar.style.justifyContent = "space-between";

        const dropDownNavBarLinks = document.querySelectorAll('#container a');
        for (let i = 0; i < dropDownNavBarLinks.length; i++) {
            dropDownNavBarLinks[i].addEventListener('click', handleClick);
        }
    }
});

function createDropDownNavBar() {
    // Get the container element
    const container = document.getElementById('container');

    // Create the Home link
    const homeLink = document.createElement('a');
    homeLink.id = 'homeLink';
    homeLink.href = '#landingPage';
    homeLink.textContent = 'Home';
    container.appendChild(homeLink);

    // Create the About me link
    const aboutMeLink = document.createElement('a');
    aboutMeLink.id = 'aboutMeLink';
    aboutMeLink.href = '#aboutMe';
    aboutMeLink.textContent = 'About me';
    container.appendChild(aboutMeLink);

    // Create the Education link
    const educationLink = document.createElement('a');
    educationLink.id = 'educationLink';
    educationLink.href = '#education';
    educationLink.textContent = 'Education';
    container.appendChild(educationLink);

    // Create the Employment link
    const employmentLink = document.createElement('a');
    employmentLink.id = 'employmentLink';
    employmentLink.href = '#employment';
    employmentLink.textContent = 'Employment';
    container.appendChild(employmentLink);

    // Create the Hobbies link
    const hobbiesLink = document.createElement('a');
    hobbiesLink.id = 'hobbiesLink';
    hobbiesLink.href = '#hobbies';
    hobbiesLink.textContent = 'Hobbies';
    container.appendChild(hobbiesLink);

    // Create the Contact link
    const contactLink = document.createElement('a');
    contactLink.id = 'contactLink';
    contactLink.href = '#contact';
    contactLink.textContent = 'Contact';
    container.appendChild(contactLink);
}

function removeDropDownNavBar() {
    const aElements = document.querySelectorAll('#container a');
    aElements.forEach((element) => {
    element.remove();
    });
}

// Define a function to be called when an element is clicked
function handleClick(event) {
    const menuButton = document.getElementById('menu-button');
    menuButton.click();
  }
