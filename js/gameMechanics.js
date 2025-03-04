// NEW VARS
let heartIcon = document.querySelector("#lifes i");
let prevNumCon = document.querySelector("#prevNums");
let numInput = document.querySelector("input[type='number']");
let guessBtn = document.querySelector("input[type='submit']")
let lifesCon = document.getElementById("lifes");
let status = document.querySelector("#status");
let newGameBtn = document.querySelector("#newGame");
let timerCon = document.querySelector("#timerCon");
let decimalptsSection = document.querySelector("#decimalptsSection");
let audioElement = document.querySelector("#audio-element");
let settings_settings = document.querySelector("#settings");
let settings_lifesBtns = document.querySelectorAll(".setting-lifes button");
let settings_rangeBtns = document.querySelectorAll(".setting-range button");
let settings_decimalsSwt = document.querySelector("#toggleDecimalNums");
let settings_decimalsBtns = document.querySelectorAll(".setting-decimalpts button");
let settings_timerSwt = document.querySelector("#toggleTimer");
let timerSection = document.querySelector("#timerSection");
let audioBtn = document.querySelector("#toggleMusic");
let console_openBtn = document.querySelector("#consoleOpen");
let console_console = document.querySelector("#console");
let console_input = document.querySelector("#input");
let console_output = document.querySelector("#output");

// DEFAULT VALUES BY ENTERING THE PAGE
let lifes = 10;
let unlimitedLife = false;
let rdnRange = 100;
let decimal = false;
let decimalpts = 1;
let time;

// LATER USED VARS
let prevNumArr = [], numInputValue, i, statusAbbr, submitCounter = 0, audioState = false, musicCounter = 0, setting_unlimitedlife = false;
let musicPlaylist = [
    "media/audio/imagefilm-040-by-sascha-ende-from-filmmusic-io.mp3",
    "media/audio/hades-by-sascha-ende-from-filmmusic-io.mp3",
    "media/audio/sirius-by-sascha-ende-from-filmmusic-io.mp3",    
    "media/audio/midnight-rendezvous-by-sascha-ende-from-filmmusic-io.mp3",
    "media/audio/eternal-summer-by-sascha-ende-from-filmmusic-io.mp3",
];

// GENERATING A RANDOM NUMBER
newRandomNumber();


// IF SOMEONE CLICK THE SUBMIT BUTTON TO GUESS
guessBtn.addEventListener("click", guess);
numInput.addEventListener("keypress", function(event) {
	if(event.key === "Enter") {
		event.preventDefault();
		guess();
	}
});

function guess() {
	numInputValue = Number(numInput.value);
    prevNumArr.push(numInputValue);

    if (numInputValue == rdnNum){
        status.style.backgroundColor = "rgba(0,150,0,0.5)";
        status.textContent = "Congratulations, you won! :)";
        numInput.disabled = true;
        guessBtn.disabled = true;
        statusAbbr = "won";
    } else{
        if (!setting_unlimitedlife){
            lifes--;
        }

        if (lifes === 0){
            numInput.disabled = true;
            guessBtn.disabled = true;
            heartIcon.classList = "fas fa-heart-broken";
            status.style.backgroundColor = "rgba(150,0,0,.5)";
            status.textContent = "You're out of lifes. The number was "+rdnNum+" :)";
        } else {
            status.style.backgroundColor = "rgba(150,150,150, 0.8)";
            if (numInputValue > rdnNum) {
                status.textContent = "The number you're looking for is smaller.";
                statusAbbr = "s";
            } else if (numInputValue < rdnNum){
                status.textContent = "The number you're looking for is bigger.";
                statusAbbr = "b";
            }
        }
        (unlimitedLife) ? lifesCon.innerHTML = `<i class="${heartIcon.classList}"></i> <i class="fas fa-infinity"></i>` : lifesCon.innerHTML = `<i class="${heartIcon.classList}"></i> ${lifes}`;
    }
    if (lifes === 0 && statusAbbr === "won"){
        prevNumCon.textContent += `${prevNumArr[submitCounter]} (${statusAbbr})`;
    } else {
        prevNumCon.textContent += `${prevNumArr[submitCounter]} (${statusAbbr}), `;
    }

    submitCounter++;
    numInput.value = "";
    numInput.focus();
}

// BUTTON TO START A NEW GAME
newGameBtn.addEventListener("click", newGame);

// RESETS ALL CHANGED PROPERTIES
function newGame(){
    numInputValue = 0;
    numInput.disabled = false;
    guessBtn.disabled = false;
    heartIcon.classList = "fas fa-heart";
    (unlimitedLife) ? setLifes(unlimitedLife) : setLifes(Number(document.querySelector(".setting-lifes .selected").textContent)) ;
    (unlimitedLife) ? lifesCon.innerHTML = `<i class="${heartIcon.classList}"></i> <i class="fas fa-infinity"></i>` : lifesCon.innerHTML = `<i class="${heartIcon.classList}"></i> ${lifes}`;
    prevNumArr = [];
    prevNumCon.textContent = "";
    status.style.backgroundColor = "#fff";
    status.textContent = "";
    newRandomNumber();
    submitCounter = 0;
};

// CREATING AN ARRAY OF CLOSING (&TIMES;) SYMBOLS
let closeSymbols = document.getElementsByClassName("close");

// THEIR MENUES SHOULD DISAPPEAR
for (i = 0; i < closeSymbols.length; i++){
    closeSymbols[i].addEventListener("click", function(){
        this.parentNode.parentNode.style.animationName = "leavingToRight";
        this.parentNode.parentNode.style.animationDuration = "1s";
        this.parentNode.parentNode.style.animationFillMode = "forwards";
    });
}

// FUNCTION TO GENERATE A NEW RANDOM NUMBER
function newRandomNumber(){
    rdnNum = (Math.random() * rdnRange) + 1;
    if (decimal === false){
        rdnNum = Math.floor(rdnNum);
    } else{
        rdnNum = rdnNum.toFixed(decimalpts);
    }
}

function setLifes(setting){
    lifes = setting;
}
function setRange(setting){
    rdnRange = setting;
}
function setDecimalPTS(setting){
    decimalpts = setting;
}