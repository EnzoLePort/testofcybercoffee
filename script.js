const clues = ["The FIRST is the color of the SUN", "the SECOND is the color of the ANGER", "the THIRD is the color of LOVE", "the LAST is the color of the SKY"];

function giveClues() {
    window.alert(clues[Math.floor(Math.random() * 4)]);
}
