import coolImage from "./hammer-sickle.svg";

const settings = () => {
    const content = document.createElement("div");
    content.classList.add("content");
    const image = document.createElement("img");
    image.src = coolImage;
    image.classList.add("icon");
    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = "Settings";
    content.append(image, description);
    return content;
}

export const Settings = settings();