"use strict";
console.log("hi");

// var orderBurger = document.querySelector("body > div.container > div > div.col.s4.l6 > div > div:nth-child(1) > div > div.card-action > a");
var cards = document.querySelectorAll("div.card");
// console.log(orderBurger);

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
    console.log(itemDetails);
    buildTable(itemDetails);
  });
}
function buildTable(itemDetails) {
  var table = document.getElementById('table');
  var tr = document.createElement('tr');
  var tdName = tr.appendChild(document.createElement('td'));
  var tdPrice = tr.appendChild(document.createElement('td'));
  tdPrice.setAttribute("class", "right-align");
  tdName.innerHTML = itemDetails.name;
  tdPrice.innerHTML = itemDetails.price;
    table.appendChild(tr);
}
