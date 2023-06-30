function getImage() {
    let randomImage = new Array();

    randomImage[0] = "singing.png";
    randomImage[1] = "danceq.jpg";
    randomImage[2] = "walk.jpg";
    randomImage[3] = "audience.png";
    randomImage[4] = "choice.jpeg";

    let number = Math.floor(Math.random() * randomImage.length);

    return document.getElementById("resImage").innerHTML = '<img src="' + randomImage[number] + '" style="width:300px" />'
}