const toggle = document.getElementById('toggle');
//Toggle nav
toggle.addEventListener('click', () =>
    document.body.classList.toggle('show-nav')
);
//Move toggle down on scroll
$(document).scroll(function(){
    if($(document).scrollTop()>"50"){
        $("#toggle").addClass('moved');
    }else{
        $("#toggle").removeClass('moved');
    }
});