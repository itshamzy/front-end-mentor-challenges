
$(document).ready(function(){
 var count=$('.count').html();
 var currentPrice=$('.current-price').html();
 
 $('#add').on('click',function(){
     ++count;
      var newPrice=currentPrice*count;
     $('.count').html(count);
     $('.current-price').html(newPrice);
 });
 
 $('#minus').on('click',function(){
    if(count>1){
        --count;
        $('.count').html(count);
        var updatedPrice=$('.current-price').html();
        var newPrice=currentPrice*count;
    $('.current-price').html(newPrice);
    }
    
});
});