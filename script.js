
const wrapper = document.querySelector('.js-total-wrapper')
//const nameContainer = document.querySelector('.js-name-element')
const resultContainer = document.querySelector('.js-result-element')
const descriptionContainer = document.querySelector('.js-description-element')

const submitButton = document.querySelector('.js-submit-button')
const help = document.querySelector('.helpbutton')

//help.addEventListener('click',function(event){
 //   alert("Instructions: ejfheqkhfkhqw");
//})
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
            if (month == "12"){
                
                if (day < 22){
                astro_sign = "Hello Kitty";
                description = "Djdfk";
                }else{
                astro_sign ="Choco Cat";
                }
                
            }
                
            else if (month == 1){

                if (day < 20){
                astro_sign = "Choco Cat";
                }else{
                astro_sign = "Keroppi";
                }

            }
                
            else if (month == 2){

                if (day < 19){
                astro_sign = "Keroppi";
            }else{
                astro_sign = "Cinnamoroll";
                document.getElementById("x").src="cinna.png"
            }

            }
                
            else if(month == "3"){

                if (day < 21){
                astro_sign = "Cinnamoroll";
                document.getElementById("x").src="cinna.png"
            }else{
                astro_sign = "Aggretsuko";
                document.getElementById("x").src="aggret.png"
                description = "This Red Panda is stuck in a frustrating office job that forces her to suppress her natural Arien traits. She vents her frustrations with death metal karaoke.";
            }
        }
            else if (month == "4"){
                if (day < 20){
                astro_sign = "Aggretsuko";
                document.getElementById("x").src="aggret.png"
                description = "This Red Panda is stuck in a frustrating office job that forces her to suppress her natural Arien traits. She vents her frustrations with death metal karaoke.";
                }else{
                astro_sign = "Gudetama";
            }
        }
                
            else if (month == "5"){
                if (day < 21){
                astro_sign = "Gudetama";
                }else{
                astro_sign = "Little Twin Stars";
            }
        }
                
            else if( month == "6"){
                if (day < 21)
                astro_sign = "Little Twin Stars";
                else
                astro_sign = "Melody";
            }
                
            else if (month == "7"){
                if (day < 23)
                astro_sign = "Melody";
                else
                astro_sign = "Pocchaco";
            }
                
            else if( month == "8"){
                if (day < 23)
                astro_sign = "Pocchaco";
                else
                astro_sign = "Badtz";
            }
                
            else if (month == "9"){
                if (day < 23)
                astro_sign = "Badtz";
                else
                astro_sign = "Pom Pom Purin";
            }
                
            else if (month == "10"){
                if (day < 23)
                astro_sign = "Pom Pom Purin";
                else
                astro_sign = "Kuromi";
            }
                
            else if (month == "11"){
                if (day < 22)
                astro_sign = "Kuromi";
                else
                astro_sign = "Hello Kitty";
            }
            const zodiac= astro_sign;
            console.log(astro_sign);
            resultContainer.innerHTML = zodiac;
            descriptionContainer.innerHTML=description;
     
        //nameContainer.innerHTML =  name;
        wrapper.style.display = 'block';

        if(astro_sign=="Little Twin Stars (Gemini)"){
            descriptionContainer.innerHTML= "Gemini have a number of distinctive traits, and they're visually represented by a set of twins. In the Sanrio universe, the Little Twin Stars are twins who travel to Earth from Dream Star-Cloud with plans to learn how to be the greatest and shiniest stars in the world. Their impressive goal fits well with the air sign's ambitious side. Not every sign strives to be the absolute best, but Geminis hardly lack determination or initiative."
        }

})