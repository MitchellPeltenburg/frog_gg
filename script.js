const openButton = document.getElementsByClassName("open-button");
const closeButton = document.getElementById("close-button");
const modal = document.getElementById("modal");

// adds listener to all character cards
// (flexible with adding more character cards)
for(let i = 0; i < openButton.length; i++) {
    openButton[i].addEventListener("click", openModal)
}

// called when character card is clicked 
// (thinking of using this to decide which character to load (would involve big switch statement))
function openModal() {
    let characterID = this.id; // get id of button pressed
    let characterTitle = document.getElementById("character-title"); // get title element
    let characterImage = document.getElementById("character-bigimage"); // get image element

    switch (characterID) {
        case "mario":
            characterTitle.innerHTML = "MARIO"; // change title to character name
            characterImage.src = "assets/mario.png"; // change image
            break;
        case "donkeykong":
            characterTitle.innerHTML = "DONKEY KONG"; 
            characterImage.src = "assets/donkeykong.png"; 
            break;
        case "link":
            characterTitle.innerHTML = "LINK"; 
            characterImage.src = "assets/link.png"; 
            break;
        case "samus":
            characterTitle.innerHTML = "SAMUS"; 
            characterImage.src = "assets/samus.png"; 
            break;
    }
        

    modal.showModal();
}

// close button on popup
closeButton.addEventListener("click", () => {
    modal.close();
})