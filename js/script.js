$(document).ready(function(e){
    AOS.init(1); 
    let loader = document.getElementById("preloader");

     window.addEventListener("load",function(){
         loader.style.display = "none";
     })

    $('.mb_header_menu').click(function(event){
        $('.mb_header_menu, .mb_header_menus').toggleClass('active');
    });
    let myModal1 = new bootstrap.Modal(document.querySelector('.modal1'))
    $('.gas-station.1').on('click',function(e){      
     
        myModal1.show();
    })
    let myModal2 = new bootstrap.Modal(document.querySelector('.modal2'))
    $('.gas-station.2').on('click',function(e){      
     
        myModal2.show();
    })
    let myModal3 = new bootstrap.Modal(document.querySelector('.modal3'))
    $('.gas-station.3').on('click',function(e){      
     
        myModal3.show();
    })
    $('.gas-slider.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        thumbs:true,
        thumbsPrerendered:true,
        autoplay:true,
        autoplayTimeout:1500,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
   
   
    
})

