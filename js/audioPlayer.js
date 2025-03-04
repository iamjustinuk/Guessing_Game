audioBtn.addEventListener("click", startMusicPlayer);

function startMusicPlayer(){
    audioElement.volume = 0.3;
    if (audioBtn.checked === true){
        audioElement.play();

        audioElement.addEventListener("ended", function(){
            musicCounter++;
            if(musicCounter === musicPlaylist.length){
                musicCounter = 0;
            }
            audioElement.src = musicPlaylist[musicCounter];
            audioElement.load();
            audioElement.play();
        })

    } else {
        audioElement.pause();
    }
}