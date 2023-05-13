
var today = new Date().getHours();

if (today >= 7 && today <= 19) {
   document.querySelector(".image-background").style.backgroundImage = "url('./assets/images/real_balkon_day.jpg')";
} else {
    document.querySelector(".image-background").style.backgroundImage = "url('./assets/images/real_balkon_night.jpg')";
}


var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});