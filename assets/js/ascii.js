window.onload = function () {
    let animationSelect = document.getElementById("animation");
    let fontSizeSelect = document.getElementById("fontsize");
    let turboInput = document.getElementById("turbo");
    let startBtn = document.getElementById("start");
    let stopBtn = document.getElementById("stop");
    let textArea = document.getElementById("text-area");
    const seperator = "=====\n";

    let animationType = animationSelect.value;
    let animFrame = 250;
    let animInterval;
    let currentScreen = 0;

    textArea.style.fontSize = "medium";
    animationSelect.addEventListener("change", setAnimationType);
    startBtn.addEventListener("click", startAnimation);
    stopBtn.addEventListener("click", stopAnimation);
    turboInput.addEventListener("change", setUnsetTurbo);
    fontSizeSelect.addEventListener("change", setTextSize);
    
    function setAnimationType(e) {
        textArea.value = ANIMATIONS[e.target.value];
        animationType = e.target.value;
    }

    function startAnimation() {
        animInterval = setInterval(animationFunc, animFrame);
        startBtn.disabled = true;
        stopBtn.disabled = false;
        animationSelect.disabled = true; 
    }

    function animationFunc() {
        if (animationType) {
          let animationArr = ANIMATIONS[`${animationType}`].split(seperator);
          const animationFrameCount = animationArr.length;
          textArea.value = animationArr[currentScreen];
          currentScreen =
            currentScreen == animationFrameCount - 1 ? 0 : ++currentScreen;
        }
      }

    function stopAnimation() {
        clearInterval(animInterval);
        animInterval = undefined;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        animationSelect.disabled = false;
        animationSelect[0].selected = true; // first option in animationSelect select box
        fontSizeSelect[2].selected = true; //  third option in fontSizeSelect select box
      }
    
      function setUnsetTurbo() {
        animFrame = turboInput.checked ? 50 : 250; // turbo frame speed is 50 ms
        if (animInterval) {
          clearInterval(animInterval);
          animInterval = setInterval(animationFunc, animFrame);
        }
      }
    
      function setTextSize(e) {
          console.log(e.target.value, e.target.value)
        textArea.style.fontSize = e.target.value;
      }
};