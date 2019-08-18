function initMap(){
       
    var lt=39.04868266590034;
    var lg= -94.48397221719665;

    // var lt = ltd;
    // var lg = lgd;
    
  var options = {
      zoom : 14,
      center: {lat:lt  , lng:lg}
  }
  
  var map = new google.maps.Map(document.querySelector('.map'), options);

  var marker = new google.maps.Marker({
      position : {lat:lt, lng:lg},
      map:map
  });
  
}

window.addEventListener('scroll', function(){
    if (window.scrollY > 150){
        document.querySelector('#navbar').style.opacity = 0.8;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

$("#navbar a, .btn").on("click", function(event){
     if (this.hash !== '') {
         event.preventDefault();
         const hash = this.hash;

         $('html, body').animate({
             scrollTop: $(hash).offset().top - 100
         },
         800
         );
     }
});