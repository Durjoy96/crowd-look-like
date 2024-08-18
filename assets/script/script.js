document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("seeBtn").addEventListener("click", () => { 
        const inputNum = parseInt(document.getElementById("userInput").value);
        document.querySelector(".crowd-field").innerHTML = "";
        if(inputNum >= 1 && inputNum < 50) {
            let showImg = document.createElement("img");
            showImg.src = `assets/images/people/${inputNum}/${inputNum}.jpg`
            document.querySelector(".crowd-field").appendChild(showImg);
        } else {
            let closestNum = getClosestNum(inputNum);
            console.log(closestNum);
        }
    });

    function getClosestNum(inputNum) {
        const numChunk = [50, 75, 100, 250, 500, 750, 1000, 2500, 5000, 7500, 10000, 25000, 50000, 75000, 100000, 250000, 500000, 750000, 1000000, 2500000, 5000000, 7500000, 10000000];
        let closestNum = numChunk[0];
        let closestNumDiff = Math.abs(inputNum - closestNum);
        for(i = 1; i < numChunk.length; i++) {
            let currentNum = numChunk[i];
            let currentNumDiff = Math.abs(inputNum - currentNum);
            if(currentNumDiff < closestNumDiff) {
                closestNum = currentNum;
                closestNumDiff = currentNumDiff;
            };
        };
        return closestNum;
    }

})