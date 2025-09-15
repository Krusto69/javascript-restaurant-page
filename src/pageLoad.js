import {Home} from "./home.js"
import {Menu} from "./menu.js"
import {About} from "./about.js"
import {Settings} from "./settings.js"

const header = document.createElement("header");
header.classList.add("header");
const nav = document.createElement("nav");
const names = ["Home", "Menu", "About", "Settings"];
for(const name of names){
    const button = document.createElement("button");
    button.classList.add(name);
    button.textContent = name;
    button.addEventListener("click", () => {
        document.querySelector(".content").remove(); //remove old content
        let newContent = null;
        if(name === "Home"){
            newContent = Home;
        } else if(name === "Menu"){
            newContent = Menu;
        } else if(name === "About"){
            newContent = About;
        } else {newContent = Settings;}
        document.querySelector("body").append(newContent);
    })
    nav.append(button);
}
header.append(nav);

const content = Home;
document.querySelector("body").append(header, content);