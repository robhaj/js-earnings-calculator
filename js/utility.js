var tips = [];

function totalCharge(price, tax, tip) {
  var subTotal = price * tax/100 + price;
  var tipDollar = price * tip/100;
  var total = subTotal + tipDollar;
  var objTotal = new Charge(subTotal.toFixed(2), tipDollar.toFixed(2), total.toFixed(2));
  tips.push(tipDollar);
  return objTotal;
}

function runningTotals(array){
  var totTips = array.reduce(function(a,b){
    return a+b;
  });
  var mealCount = array.length;
  var avgTip = totTips / mealCount;
  var runTotal = new Earnings(totTips.toFixed(2), mealCount, avgTip.toFixed(2));
  return runTotal;
}
var Charge = function(subTotal, tipDollar, total) {
  this.subTotal = subTotal;
  this.tipDollar = tipDollar;
  this.total = total;
};

var Earnings = function(totTips, mealCount, avgTip){
  this.totTips = totTips;
  this.mealCount = mealCount;
  this.avgTip = avgTip;
};
