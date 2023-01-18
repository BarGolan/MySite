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
