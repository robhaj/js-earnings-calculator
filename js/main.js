// add scripts
$(document).on('ready', function() {

  $('input[value=Submit]').on('click', function(e){
    e.preventDefault();
    var price = parseInt($('input[name=meal-tiprate]').val());
    var tax = parseInt($('input[name=meal-price]').val());
    var tip = parseInt($('input[name=meal-taxrate]').val());
    var x = totalCharge(price, tax, tip);
     $('#subTotal').text(x[0]);
     $('#tip').text(x[1]);
     $('#total').text(x[2]);

    $('.form-input').val('');
  });

  $('input[value=Clear]').on('click', function(){
    $('.form-input').val('');
  });
});
