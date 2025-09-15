import coolImage from "./hammer-sickle.svg";

const about = () => {
    const content = document.createElement("div");
    content.classList.add("content");
    const image = document.createElement("img");
    image.src = coolImage;
    image.classList.add("icon");
    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = "About"
    content.append(image, description);
    return content;
}
    
export const About = about();