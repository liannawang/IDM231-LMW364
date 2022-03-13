const wrapper = document.querySelector('.js-total-wrapper')
//const nameContainer = document.querySelector('.js-name-element')
const resultContainer = document.querySelector('.js-result-element')
const descriptionContainer = document.querySelector('.js-description-element')
// const icon = document.querySelectorAll('.character_spot')
const submitButton = document.querySelector('.js-submit-button')
const help = document.querySelector('.helpbutton')


$(".help-button").on("click", function() {
    $(".help-button-wrapper").toggleClass("expanded");
  });
  
  $(document).on("click", function(event) {
    if (!$(event.target).closest(".help-button").length) {
      $(".help-button-wrapper").removeClass("expanded");
    }
  });
  

submitButton.addEventListener('click', function(event){
    event.preventDefault()
    const dateInput = document.querySelector('.js-date-input').value
    //const name = document.querySelector('.js-name-input').value

    const dt = new Date(dateInput);

    const month = dt.getMonth() + 1;
    const day = dt.getDate() + 1;
    console.log(month);
    console.log(day);

    let astro_sign="";
    let description="";
    let audio = "";
            if (month == "12"){
                
                if (day < 22){
                astro_sign = "Hello Kitty";
                document.getElementById("x").src="pictures/kitty.png"
                audio = new Audio('sounds/meow.mp3');
                
                }else{
                astro_sign ="Choco Cat";
                audio = new Audio('sounds/meow.mp3');
                document.getElementById("x").src="pictures/chococat.webp"
                }
                
            }
                
            else if (month == 1){

                if (day < 20){
                astro_sign = "Choco Cat";
                document.getElementById("x").src="pictures/chococat.webp"
                audio = new Audio('sounds/meow.mp3');
                }else{
                astro_sign = "Keroppi";
                document.getElementById("x").src="pictures/kero.png"
                audio = new Audio('sounds/ribbit.wav');
                
                }

            }
                
            else if (month == 2){

                if (day < 19){
                astro_sign = "Keroppi";
                document.getElementById("x").src="pictures/kero.png"
                audio = new Audio('sounds/ribbit.wav');
            }else{
                astro_sign = "Cinnamoroll";
                document.getElementById("x").src="cinna.png"
                audio = new Audio('sounds/bell.mp3');
            }

            }
                
            else if(month == "3"){

                if (day < 21){
                astro_sign = "Cinnamoroll";
                document.getElementById("x").src="cinna.png"
                audio = new Audio('sounds/bell.mp3');
            }else{
                astro_sign = "Aggretsuko";
                document.getElementById("x").src="aggret.png"
                audio = new Audio('sounds/rock.wav');
                description = "This Red Panda is stuck in a frustrating office job that forces her to suppress her natural Arien traits. She vents her frustrations with death metal karaoke.";
            }
        }
            else if (month == "4"){
                if (day < 20){
                astro_sign = "Aggretsuko";
                document.getElementById("x").src="aggret.png"
                audio = new Audio('sounds/rock.wav');
                description = "This Red Panda is stuck in a frustrating office job that forces her to suppress her natural Arien traits. She vents her frustrations with death metal karaoke.";
                }else{
                astro_sign = "Gudetama";
                document.getElementById("x").src="pictures/emojis/gude.png"
                audio = new Audio('sounds/yawn.mp3');
            }
        }
                
            else if (month == "5"){
                if (day < 21){
                astro_sign = "Gudetama";
                document.getElementById("x").src="pictures/emojis/gude.png"
                audio = new Audio('sounds/yawn.mp3');
                }else{
                astro_sign = "Little Twin Stars";
                document.getElementById("x").src="pictures/emojis/twin.png"
                audio = new Audio('sounds/twinkle.mp4');
            }
        }
                
            else if( month == "6"){
                if (day < 21){
                astro_sign = "Little Twin Stars";
                document.getElementById("x").src="pictures/emojis/twin.png"
                audio = new Audio('sounds/twinkle.mp4');
                }else{
                astro_sign = "Melody";
                document.getElementById("x").src="pictures/emojis/melody.png"
                audio = new Audio('sounds/twinkle.mp4');
            }
        }
                
            else if (month == "7"){
                if (day < 23){
                astro_sign = "Melody";
                document.getElementById("x").src="pictures/emojis/melody.png"
                audio = new Audio('sounds/twinkle.mp4');
                }else{
                astro_sign = "Pocchaco";
                document.getElementById("x").src="pictures/pochacco.webp"
                audio = new Audio('sounds/boing.mp4');
            }
        }
                
            else if( month == "8"){
                if (day < 23){
                astro_sign = "Pocchaco";
                document.getElementById("x").src="pictures/pochacco.webp"
                audio = new Audio('sounds/boing.mp4');
                }else{
                astro_sign = "Badtz";
                document.getElementById("x").src="pictures/emojis/bad.png"
                audio = new Audio('sounds/punch.mp4');
            }
        }
                
            else if (month == "9"){
                if (day < 23){
                astro_sign = "Badtz";
                document.getElementById("x").src="pictures/emojis/bad.png"
                audio = new Audio('sounds/punch.mp4');
                }else{
                astro_sign = "Pom Pom Purin";
                document.getElementById("x").src="pictures/purin.png"
                audio = new Audio('sounds/bubblebell.mp3');

            }
        }
                
            else if (month == "10"){
                if (day < 23){
                astro_sign = "Pom Pom Purin";
                document.getElementById("x").src="pictures/purin.png"
                audio = new Audio('sounds/bubblebell.mp3');
                }else{
                astro_sign = "Kuromi";
                document.getElementById("x").src="pictures/emojis/kuro.png"
                audio = new Audio('sounds/naughty.mp4');
            }
        }
                
            else if (month == "11"){
                if (day < 22){
                astro_sign = "Kuromi";
                document.getElementById("x").src="pictures/emojis/kuro.png"
                audio = new Audio('sounds/naughty.mp4');
                }else{
                astro_sign = "Hello Kitty";
                document.getElementById("x").src="pictures/kitty.png"
                audio = new Audio('sounds/meow.mp3');
            }
        }
            const zodiac= astro_sign;
            console.log(astro_sign);
            resultContainer.innerHTML = zodiac;
            descriptionContainer.innerHTML=description;
            audio.play();
        //nameContainer.innerHTML =  name;
        wrapper.style.display = 'block';

        

})

document.querySelectorAll('.character_spot').forEach(item => {
    item.addEventListener('click', event => {
      console.log('hi');
    })
  })

   