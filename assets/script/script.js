document.addEventListener("DOMContentLoaded", () => {

    // see it button 
    document.getElementById("seeBtn").addEventListener("click", () => {
        getImg();
        showAll();
    });

    //see it now btn shortcut
    document.addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            getImg();
            showAll();
        };
    });

    //get the image according to the entered number
    function getImg() {
        const inputNum = parseInt(document.getElementById("userInput").value); //input value in number
        document.getElementById("imgField").innerHTML = ""; //clear previous img
        if (inputNum >= 1 && inputNum < 50) {
            let showImg = document.createElement("img");
            showImg.src = `assets/images/people/${inputNum}/${inputNum}.jpg`;
            showImg.className = "rounded-lg w-full h-60 text-zinc-400 md:h-auto"
            document.getElementById("imgField").appendChild(showImg);
        } else {
            let closestNum = getClosestNum(inputNum);
            console.log(closestNum);
        };
    };

    //get the closest number from the inputted number
    function getClosestNum(inputNum) {
        const numChunk = [50, 75, 100, 250, 500, 750, 1000, 2500, 5000, 7500, 10000, 25000, 50000, 75000, 100000, 250000, 500000, 750000, 1000000, 2500000, 5000000, 7500000, 10000000];
        let closestNum = numChunk[0];
        let closestNumDiff = Math.abs(inputNum - closestNum);
        for (i = 1; i < numChunk.length; i++) {
            let currentNum = numChunk[i];
            let currentNumDiff = Math.abs(inputNum - currentNum);
            if (currentNumDiff < closestNumDiff) {
                closestNum = currentNum;
                closestNumDiff = currentNumDiff;
            };
        };
        return closestNum;
    };

    // close overlay and image card
    function closeAll() {
        document.getElementById("outputField").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }

    //show overlay and image card
    function showAll() {
        document.getElementById("outputField").style.display = "inline-block";
        document.getElementById("overlay").style.display = "inline-block";
    }

    //close buttons
    document.getElementById("closeBtn").addEventListener("click", closeAll);
    document.getElementById("closeIcon").addEventListener("click", closeAll);
    document.getElementById("overlay").addEventListener("click", closeAll);

});