// $(document).ready(function(){
//     // $("h1").css('color', 'green');


//     // Adding Classes for separation for concerns 
    $('h1').addClass("big-title");
//     // $('h1').removeClass("big-title");
    

//     // $('button').css('display', 'block');
//     // $('button').css('margin', '1rem');
//     // console.log(
//     //     $('button').css('margin')
//     // );

//     // Text Maninpulation
//     $('h1').text("Bye");

//     $('button').text("Don't Click me");

//     $('button').html("<em>Don't Click me</em>");


//     // Attribute manipulation
//     console.log($('button').attr("style"));
//     $('a').attr('href', 'https://www.yahoo.com')

//     $('h1').click(function (e) { 
//         $('h1').css('color', 'purple');
//     });

//     $('button').click(function () { 
//         $('h1').css('color', 'purple');
        
//     });

//     $('body').keydown(function (e) { 
//         $('h1').text(e.key);
//     });

//     $('h1').on('mouseover', function () {
//         $('h1').css('color', 'blue');
//     });

//     $('h1').before('<button>New</button>');
//     $('h1').after('<button>New</button>');
//     $('h1').prepend('<button>New</button>');
//     $('h1').append('<button>New</button>');
    
//     $('button').remove();
// })


// $('button').on('click', function () {
//     $('h1').hide();
// });
// $('button').on('click', function () {
//     $('h1').toggle();
// });
// $('button').on('click', function () {
//     $('h1').fadeToggle();
// });
// $('button').on('click', function () {
//     $('h1').slideUp();
// });
// $('button').on('click', function () {
//     $('h1').slideDown();
// });

// $('button').on('click', ()=>{
//     $('h1').slideToggle();
// })
// $('button').on('click', ()=>{
//     $('h1').animate({opacity: 0.5})
// })
$('button').on('click', ()=>{
    $('h1').slideUp().slideDown().animate({opacity: 0.5})
})