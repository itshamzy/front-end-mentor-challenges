$(document).ready(function(){
    $('.harmburger').on("click",function(){
        $('.header ul').toggleClass('open');
    });
    if($(' body .header ul.open')){
        $('*').on('click',function(){
            $(this).removeClass('open');
        });
    }
});