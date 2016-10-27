"use strict";
console.log("yummy food!");

var cards = document.querySelectorAll("div.card");
var tempCard = {};

for(var i = 0; i < cards.length; i++) {
  tempCard = cards[i];
  tempCard.addEventListener('click', function(evt) {
    var itemDetails = {};
    var itemContent = this.querySelector('div.card-content');
    var itemName = itemContent.querySelectorAll('p')[0];
    var itemPrice = itemContent.querySelectorAll('p')[1];
    itemDetails['name'] = itemName.innerText;
    itemDetails['price'] = itemPrice.innerText;
    // console.log(itemDetails);
    buildTable(itemDetails);
  });
}

var subtotal = 0;
var tax = 0;
var total = 0;

function buildTable(itemDetails) {
  var table = document.getElementById('table');
  var tr = document.createElement('tr');
  var tdName = tr.appendChild(document.createElement('td'));
  var tdPrice = tr.appendChild(document.createElement('td'));
  tdPrice.setAttribute("class", "right-align");
  tdName.innerHTML = itemDetails.name;
  tdPrice.innerHTML = itemDetails.price;
    table.appendChild(tr);
    var hasSym = itemDetails.price;
    var removeSym = hasSym.substring(1, hasSym.length);
    // console.log(removeSym);
      subtotal += parseFloat(removeSym);
    tax = subtotal * 0.0816;
    var fee = 2.50;
    total = (subtotal + tax + fee);
    document.getElementById('subtotal').innerHTML = "$" + subtotal;
    document.getElementById('tax').innerHTML = "$" + tax.toFixed(2);
    document.getElementById('fee').innerHTML = "$" + fee.toFixed(2);
    document.getElementById('total').innerHTML = "$" + total.toFixed(2);
    console.log('$' + subtotal);
    console.log('$' + tax.toFixed(2));
    console.log('$' + total.toFixed(2));}

var placeOrder = document.querySelector('.btn-large');
placeOrder.addEventListener('click', function () {
  var name = document.getElementById('icon_prefix').value;
  var telephone = document.getElementById('icon_telephone').value;
  var address = document.getElementById('textarea1').value;
        if (subtotal == 0) {
          Materialize.toast('Please select an item.', 3000);
        } else if (name.length === 0) {
          Materialize.toast('Please enter your name.', 3000);
        } else if (telephone.length === 0) {
          Materialize.toast('Please enter your phone number.', 3000);
        } else if (address.length === 0) {
          Materialize.toast('Please enter your address.', 3000);
        } else {
          Materialize.toast('Order Placed!', 3000);
        }
        // console.log(name);
    });
