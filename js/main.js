// add scripts
$(document).on('ready', function() {

  $('input[value=Submit]').on('click', function(e){
    e.preventDefault();
    var price = parseInt($('input[name=meal-tiprate]').val());
    var tax = parseInt($('input[name=meal-price]').val());
    var tip = parseInt($('input[name=meal-taxrate]').val());
    var x = totalCharge(price, tax, tip);
    var y = runningTotals(tips);

    $('#subTotal').text(x.subTotal);
    $('#tip').text(x.tipDollar);
    $('#total').text(x.total);

    $('#totalTips').text(y.totTips);
    $('#totalCount').text(y.mealCount);
    $('#averageTip').text(y.avgTip);

    $('.form-input').val('');

  });

  $('input[value=Clear]').on('click', function(){
    $('.form-input').val('');
  });
});
