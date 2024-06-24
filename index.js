

function startAnimation() {
    var element = document.getElementById("loadingText");
    var bot = document.getElementById("bot");
    var leftEye = document.getElementById("left-eye");
    var rightEye = document.getElementById("right-eye");
    var leftEarInner = document.getElementById("leftEarInner");
    var rightEarInner = document.getElementById("rightEarInner");
    
    
        if (element.textContent.trim() === "Press The Power Button") {
            element.textContent = "Rebooting..";
            element.classList.add("textEffect");
            if (element.textContent.trim() === "Rebooting..") {
                element.classList.add("animated");
                setTimeout(function () {
                    element.textContent = "Rebooting complete!";
                    element.style.color = "#fff";
                    element.style.textShadow = "0 0 10px #03bcf4, 0 0 20px #03bcf4, 0 0 40px #03bcf4, 0 0 80px #03bcf4, 0 0 160px #03bcf4";
                    element.classList.add("complete");
                    if(element.textContent.trim() === "Rebooting complete!") {
                        setTimeout(function() {
                            element.textContent = "Connecting to Home Page..";
                            setTimeout(function() {
                                window.location.href = "home.html";
                                // var homePage = 'index.html';
                                // window.open(homePage,'_blank');
                            }, 2000);
                        }, 3000);
                    }
                }, 4000);
            }
            bot.classList.add("botAnimation");
            leftEye.classList.add("leftEyeAnimation");
            rightEye.classList.add("rightEyeAnimation");
            leftEarInner.classList.add("leftEarInner");
            rightEarInner.classList.add("rightEarInner");
        }
        
}