// OPEN THEIR MENUES + ANIMATIONS
document.querySelector("#settingsOpen").addEventListener("click", function(){
    settings_settings.style.display = "block";
    settings_settings.style.animationName = "comingFromRight";
    settings_settings.style.animationDuration = "1s";
})

settings_settings.style.display = "none";

// SETTINGS - LIFES
settings_lifesBtns.forEach(function(item){
    item.addEventListener("click", function(){
        settings_lifesBtnsClassReset();
        unlimitedLife = false;
        item.classList = "selected";
        setLifes(Number(item.textContent));
        newGame();
    })
})

// SETTINGS - RANGE
settings_rangeBtns.forEach(function(item){
    item.addEventListener("click", function(){
        for (i = 0; i < settings_rangeBtns.length; i++){
            settings_rangeBtns[i].classList = "";
        }
        item.classList = "selected";
        setRange(Number(item.textContent));
        newGame();
    })
})

// SETTING - DECIMAL NUMBERS
settings_decimalsSwt.addEventListener("change", toggleDecimals);
function toggleDecimals(){
    if (settings_decimalsSwt.checked === true){
        decimal = true;
        decimalptsSection.style.display = "block";
    } else {
        decimal = false;
        decimalptsSection.style.display = "none";
    }
    newGame();
};

settings_decimalsBtns.forEach(function(item){
    item.addEventListener("click", function(){
        for (i = 0; i < settings_decimalsBtns.length; i++){
            settings_decimalsBtns[i].classList = "";
        }
        item.classList = "selected";
        setDecimalPTS(Number(item.textContent));
        newGame();
    })
})

// SETTING - COUNTDOWN
settings_timerSwt.addEventListener("click", function(){
    if (this.checked === true){
        timerSection.style.display = "block";
    } else {
        timerSection.style.display = "none";
    }
})















function settings_lifesBtnsClassReset(){
    for (i = 0; i < settings_lifesBtns.length; i++){
        settings_lifesBtns[i].classList = "";
    }
}