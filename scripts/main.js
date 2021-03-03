var gfail = false;
var typeProblem = undefined;
//Scroll
const anchors = document.querySelectorAll('a[href^="#"]')
for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
// Progress BAR

const progress = document.querySelector('.progress');
window.addEventListener('scroll', progressBar);

function progressBar(e) {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let per = windowScroll / windowHeight * 100;
    progress.style.width = per + '%';
}



//Validation

function windowShow(header, paragraph) {
    document.getElementById("h2").innerHTML = header;
    document.getElementById("p1").innerHTML = paragraph;
    $(".js-overlay-campaign").fadeIn();
}

function changeColor(ok) {

    let box = document.querySelector('.js-popup-campaign');

    let textarea = document.querySelectorAll('textarea');

    if (ok) {
        box.setAttribute('style', 'background-color: green');

    } else {
        box.setAttribute('style', 'background-color: #db1f1f');

    }
}

$('.js-close-campaign').click(function () {
    $('.js-overlay-campaign').fadeOut();
});

// -----------------message showing
$(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign').fadeOut();

    }
});




function valid(form) {
    let name = form.name.value;
    let email = form.email.value;
    let password = form.password.value;
    let message = form.message.value;

    let header;
    let paragraph;
    let ok;



    if ((name.trim() == "") && !checked) {
        ok = false;
        header = "Something is wrong";
        paragraph = "Write your name";
    } else if (email.trim() == "" || !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        ok = false;
        header = "Something is wrong";
        paragraph = "Write email";
    } else if (password == "" || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(password)) {
        ok = false;
        header = "Something is wrong";
        paragraph = "Write password";
    } else if (message.trim() == "") {

        ok = false;
        header = "Something is wrong";
        paragraph = "Write feedback";
    } else {
        ok = true;
        header = "Thanks for your help";
        paragraph = "Soon we'll recive your feedback. We give you an answer as quick as we can.";
    }
    changeColor(ok);
    windowShow(header, paragraph);

}
//  -------------------Accordion--------------------------
$(document).ready(function () {

    $('.panel-heading').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.panel-heading').not(this).removeClass('in').next().slideUp();
    });

});
//  ---------------Show slider---------------------

$(document).ready(function () {
    $('.button').on('click', function () {  
        $('.show').toggle();
    });
    $('.show').hide();

    
});




// ---------------Check function ----------------
var checked = false;
$('input[type=checkbox]').change(function () {

    if (checked) {
        checked = false;
    } else {
        checked = true;
    }
    $('input[name=name]').toggle();
    $('label[for=name]').toggle();

});

//  --------Hide pictures -------------
 $("img").on('click', function(){
    $(this).hide();
    var explode = function(){
        $('img').show();
      };
      setTimeout(explode, 5000);
      
 });


  
  