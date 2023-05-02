const NUM_OF_FIGURES = 200;

const refreshBtn = document.getElementById("refresh");
const colorPalette = ["#9fb4ff", "#00ffc6", "#a91079", "#ffd36e", "#e900ff", "#7900ff"];
// const mixBlendModeArr = ["normal", "multiply", "hard-light", "difference"];
const canvas = document.getElementById("canvas");

const getRandomColor = (colorPaletteArr) => {
    return colorPaletteArr[Math.floor(Math.random() * colorPaletteArr.length)];
}
const getBackgroundImageGradient = (colorPaletteArr) => {
    const startColor = getRandomColor(colorPaletteArr) + "00";
    const endColor = getRandomColor(colorPaletteArr);
    const direction = Math.random() * 90 + "deg";
    return `linear-gradient(${direction}, ${startColor}, ${endColor})`;
}

const createElement = () => {
    const newEl = document.createElement("div");
    newEl.classList.add("element");
    
    // shaping element
    newEl.style.width = (Math.random() * 5) + 5 + "%";   /* 5-10% */
    newEl.style.height = (Math.random() * 5) + 5 + "%";  /* 5-10% */
    newEl.style.transform = `rotate(${Math.random() * 180}deg)`;
    newEl.style.left = Math.random() * 110 - 10 + "%"; /* -10-100% */
    newEl.style.top = Math.random() * 110 - 10 + "%";  /* -10-100% */
    newEl.style.backgroundImage = getBackgroundImageGradient(colorPalette);
    // newEl.style.mixBlendMode = mixBlendModeArr[Math.floor(Math.random() * mixBlendModeArr.length)];
    newEl.style.borderRadius = `${Math.random() * 50 + 50}% ${Math.random() * 50}%`;
    newEl.style.boxShadow = `${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 3px 3px ${getRandomColor(colorPalette)}`;
    
    canvas.appendChild(newEl);
}

const generateArt = () => {
    let currElNum = 0;
    const createElInterval = setInterval(() => {
        if (currElNum < NUM_OF_FIGURES) {
            createElement();
        } else {
            clearInterval(createElInterval);
        }
        currElNum++;
    }, 50);
}

generateArt();

refreshBtn.addEventListener("click", (e) => {
    canvas.innerHTML = '';
    generateArt();
});