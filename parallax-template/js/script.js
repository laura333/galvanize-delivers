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
    console.log(subtotal);
}
