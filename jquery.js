$(document).ready(function(){

    $('.fa-align-right').click(function(){

$('.nav-list').toggleClass('open');
    });

});
//    $('button').click(function(){
//        $('.test1').toggleClass('open');
// $('.test1').load('test.txt')

//    });
// });

$.ajax({
    url: "https://formsubmit.co/ajax/your@email.com",
    method: "POST",
    data: {
        name: "FormSubmit",
        message: "I'm from Devro LABS"
    },
    dataType: "json"
});