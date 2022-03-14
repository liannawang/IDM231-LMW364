// define all constant variables that are needed for future functions
const wrapper = document.querySelector('.js-total-wrapper') //to show and hide results
const resultContainer = document.querySelector('.js-result-element')
const descriptionContainer = document.querySelector('.js-description-element')
const submitButton = document.querySelector('.js-submit-button')

// these variables will change depending on the character
let character="";
let description="";
let audio = "";

// opens up help button
$(".help-button").on("click", function() {
    $(".help-button-wrapper").toggleClass("expanded");
});

// closes help button
$(document).on("click", function(event) {
    if (!$(event.target).closest(".help-button").length) {
        $(".help-button-wrapper").removeClass("expanded");
    }
});
  
// for when date input is used:
submitButton.addEventListener('click', function(event){
    event.preventDefault()

    // when submit button is pressed, function saves month and day into variables
    const dateInput = document.querySelector('.js-date-input').value
    const dt = new Date(dateInput);
    const month = dt.getMonth() + 1;
    const day = dt.getDate() + 1;
    console.log(month);
    console.log(day);

    // uses month and day to find the character, then stores into variable "character"
    if (month == "12"){
        if (day < 22){
        character = "Hello Kitty";
        } else {
        character ="Choco Cat";
        }
    } else if (month == 1){
        if (day < 20){
        character = "Choco Cat";
        } else {
        character = "Keroppi";
        }
    } else if (month == 2){
        if (day < 19){
        character = "Keroppi";
        } else {
        character = "Cinnamoroll";
        }
    } else if(month == "3"){
        if (day < 21){
        character = "Cinnamoroll";
        } else {
        character = "Aggretsuko";
        }
    } else if (month == "4"){
        if (day < 20){
        character = "Aggretsuko";
        } else {
        character = "Gudetama";
        }
    } else if (month == "5"){
        if (day < 21){
        character = "Gudetama";
        } else {
        character = "Little Twin Stars";
        }
    } else if( month == "6"){
        if (day < 21){
        character = "Little Twin Stars";
        } else {
        character = "Melody";
        }
    } else if (month == "7"){
        if (day < 23){
        character = "Melody";
        } else {
        character = "Pochacco";
        }
    }
    else if( month == "8"){
        if (day < 23){
        character = "Pochacco";
        } else {
        character = "Badtz Maru";
        }
    } else if (month == "9"){
        if (day < 23){
        character = "Badtz Maru";
        } else {
        character = "Pom Pom Purin";
        }
    } else if (month == "10"){
        if (day < 23){
        character = "Pom Pom Purin";
        }else{
        character = "Kuromi";
        }
    }else if (month == "11"){
        if (day < 22){
        character = "Kuromi";
        }else{
        character = "Hello Kitty";
        }
    }
    displayEverything();
})

//when click on character icons
document.querySelectorAll('.character_spot').forEach(item => {
    item.addEventListener('click', event => {
    const idValue = item.getAttribute("id");
    character = idValue;
    console.log(character);
    displayEverything();
    })
})

//grabs assets needed
function getAssets (character){
    if (character == "Hello Kitty"){
        document.getElementById("x").src="pictures/kitty.png"
        audio = new Audio('sounds/haha.mp3');
        description= "she's kind and loves to bake!";
   
    } else if (character == "Choco Cat"){
        audio = new Audio('sounds/meow.mp3');
        document.getElementById("x").src="pictures/chococat.webp"
        description= "he knows things before others do!";
   
    } else if (character == "Keroppi"){
        document.getElementById("x").src="pictures/kero.png"
        audio = new Audio('sounds/ribbit.wav');
        description= "he's bubbly and loves adventure!";
    
    } else if (character == "Cinnamoroll"){
        document.getElementById("x").src="cinna.png"
        audio = new Audio('sounds/bell.mp3');
        description= "he's shy and loves cinnamon rolls!";
   
    } else if (character == "Aggretsuko"){
        document.getElementById("x").src="aggret.png"
        audio = new Audio('sounds/rock.wav');
        description = "she loves death metal karaoke!";
    
    } else if (character == "Gudetama"){
        document.getElementById("x").src="pictures/emojis/gude.png"
        audio = new Audio('sounds/yawn.mp3');
        description= "he's a lazy egg!";
   
    } else if (character == "Little Twin Stars"){
        document.getElementById("x").src="pictures/emojis/twin.png"
        audio = new Audio('sounds/twinkle.mp4');
        description= "they're artistic and curious!";
    
    } else if (character == "Melody"){
        document.getElementById("x").src="pictures/emojis/melody.png"
        audio = new Audio('sounds/twinkle.mp4');
        description= "she's honest and sociable!";
    
    } else if (character == "Pochacco"){
        document.getElementById("x").src="pictures/pochacco.webp"
        audio = new Audio('sounds/boing.mp4');
        description= "he's sporty and playful!";
    
    } else if (character == "Badtz Maru"){
        document.getElementById("x").src="pictures/emojis/bad.png"
        audio = new Audio('sounds/punch.mp4');
        description= "he's silly and mischevious!";
    
    } else if (character == "Pom Pom Purin"){
        document.getElementById("x").src="pictures/purin.png"
        audio = new Audio('sounds/bubblebell.mp3');
        description= "he's energetic and curious!";
    
    } else if (character == "Kuromi"){
        document.getElementById("x").src="pictures/emojis/kuro.png"
        audio = new Audio('sounds/naughty.mp4');
        description= "she's cheeky but charming!";
    } 
}

//does exactly what the name says
function displayEverything (){
    getAssets(character);
    audio.play();
    resultContainer.innerHTML = character;
    descriptionContainer.innerHTML=description;
    wrapper.style.display = 'block';
    
}
   