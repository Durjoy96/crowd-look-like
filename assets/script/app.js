document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("userInput").addEventListener("input", () => {
        const crowdField = document.querySelector(".crowd-field");
        const userInput = parseInt(document.getElementById("userInput").value);
        crowdField.innerHTML = "";

        let count = 0;
        function addImg() {
            for (i = 0; i < 1000 && count < userInput; i++) {
                const img = document.createElement("img");
                img.src = `assets/images/${getImgSrc()}`;
                crowdField.appendChild(img);
                count++;
                console.log(count);
            };
            if (count < userInput) {
                requestAnimationFrame(addImg);
            };
        };

        addImg();
    });

    function getImgSrc() {
        const imgSrc = ["image-1.png", "image-2.png", "image-3.png", "image-4.png", "image-5.png", "image-6.png", "image-7.png", "image-8.png", "image-9.png", "image-10.png"];
        let index = Math.floor(Math.random() * imgSrc.length);
        return imgSrc[index];
    };
});