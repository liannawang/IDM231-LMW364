
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
                astro_sign = "Sagittarius";
                description = "Djdfk";
                }else{
                astro_sign ="capricorn";
                }
                
            }
                
            else if (month == 1){
                if (day < 20)
                astro_sign = "Capricorn";
                else
                astro_sign = "aquarius";
            }
                
            else if (month == 2){
                if (day < 19)
                astro_sign = "Aquarius";
                else
                astro_sign = "pisces";

            }
                
            else if(month == "3"){
                if (day < 21)
                astro_sign = "Pisces";
                else
                astro_sign = "Aggretsuko (Aries)";
            }
            else if (month == "4"){
                if (day < 20)
                astro_sign = "Aggretsuko (Aries)";
                else
                astro_sign = "Gudetama (Taurus)";
            }
                
            else if (month == "5"){
                if (day < 21)
                astro_sign = "Gudetama (Taurus)";
                else
                astro_sign = "Little Twin Stars (Gemini)";
            }
                
            else if( month == "6"){
                if (day < 21)
                astro_sign = "Gemini";
                else
                astro_sign = "Little Twin Stars (Gemini)";
            }
                
            else if (month == "7"){
                if (day < 23)
                astro_sign = "Cancer";
                else
                astro_sign = "leo";
            }
                
            else if( month == "8"){
                if (day < 23)
                astro_sign = "Leo";
                else
                astro_sign = "virgo";
            }
                
            else if (month == "9"){
                if (day < 23)
                astro_sign = "Virgo";
                else
                astro_sign = "libra";
            }
                
            else if (month == "10"){
                if (day < 23)
                astro_sign = "Libra";
                else
                astro_sign = "scorpio";
            }
                
            else if (month == "11"){
                if (day < 22)
                astro_sign = "scorpio";
                else
                astro_sign = "sagittarius";
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