function totalCharge(price, tax, tip) {
  var subTotal = price * tax/100 + price;
  var tipDollar = price * tip/100;
  var total = subTotal + tipDollar;
  var arrTotal = new Array(subTotal, tipDollar, total);
  return arrTotal;
}
