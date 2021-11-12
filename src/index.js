import PlayerSentences from "./utils/PlayerSentences.js";

const player = new PlayerSentences(document.getElementById("sentence"));
player.getSentences();
player.renderSentence();

const buttonPrevious = document.getElementById("carousel_previous");
const buttonNext = document.getElementById("carousel_next");

buttonPrevious.onclick = () => {
    player.previousSentence();
}

buttonNext.onclick = () => {
    player.nextSentence();  
};

