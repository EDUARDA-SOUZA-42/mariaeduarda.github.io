const myImage = 
document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "imagens/foto-1.jpg") {
        myImage.setAttribute("src", "imagens/foto-2.jpg");
    } else {
        myImage.setAttribute("src", "imagens/foto-1.jpg");
    }
};