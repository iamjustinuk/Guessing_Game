// OPEN CONSOLE WINDOW
document.querySelector("#consoleOpen").addEventListener("click", function(){
    console_console.style.display = "block";
    console_console.style.animationName = "comingFromRight";
    console_console.style.animationDuration = "1s";
})

console_console.style.display = "none";

console_input.addEventListener("keypress", function(event){
    if (event.keyCode === 13){
        startConsole();
    }
})
console_input.addEventListener("blur", startConsole);
function startConsole(event){
    let console_preInput = document.createElement("p");

    if (console_input.value !== ""){
	if(console_input.value == "help") {
	    console_preInput.innerHTML =
	    `
		Commands available:<br/>
                - enable (and more)<br/>
                - set (and more)<br/>
	    `;
	} else if (console_input.value == "enable"){
            console_preInput.innerHTML =
            `
                Commands with "enable":<br/>
                - enable decimals<br/>
                - enable ukop-timerfunction (planned)<br/>
                - enable musicplayer<br/>
                - enable ukop-fairplay (planned)<br/>
                - enable ukop-advancedconfiguration (planned)<br/>
		- enable unlimitedlife<br/>
            `;
            
        } else if (console_input.value === "enable decimals"){
            setConsoleText("enable", "decimals");
            settings_decimalsSwt.checked = true;
            toggleDecimals();
        } else if (console_input.value === "enable musicplayer"){
            setConsoleText("enable", "musicplayer");
            audioBtn.checked = true;
            startMusicPlayer();
        } else if (console_input.value === "enable unlimitedlife"){
            setConsoleText("enable", "unlimitedlife");
            settings_lifesBtnsClassReset();
            unlimitedLife = true;
	    setting_unlimitedlife = true;
            newGame();
        } else if (console_input.value == "set"){
            console_preInput.innerHTML =
            `
                Commands with "set":<br/>
                - set lifes to &lt;number of lifes&gt; (planned)<br/>
                - set ukop-timerfunction to &lt;length in seconds&gt; (planned)<br/>
                - set range to &lt;max. number&gt; (planned)<br/>
            `;
        } else {
            console_preInput.innerHTML = `Command "${console_input.value}" not found.`;
        }
    
        if (console_output.firstChild === null){
            console_output.appendChild(console_preInput);
        } else {
            console_output.insertBefore(console_preInput, console_output.firstElementChild);
        }

        console_input.value = "";
        console_input.focus();




        function setConsoleText(verb, setting){
            if (verb == "enable"){
                console_preInput.innerHTML = `> ${verb}d ${setting}`;
            } else if (verb == "set"){
                console_preInput.innerHTML = `> ${setting} ${verb} to ${lifes}`;
            }
        }
    }
}