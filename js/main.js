/* Task 1 */

const url = 'https://rivegauche.ru/product/origins-ginzing-into-the-glow-brightening-serum'

const urlContains = (url) => { return url.indexOf('product')> -1 ? true : false}

let div = document.createElement('div');
div.className = "price__info";

let containerPrice = document.querySelector('.price')
let buttonPrice = document.querySelector('.price__button')

buttonPrice.before(div);

function newPrice (urlContains, price) {
  if (price <= 30000 && urlContains === true) {
    return div.innerHTML = price / 4;
  } return false
}

containerPrice.append(div);

console.log(newPrice(urlContains(url), 30000))


/* Task 2 */

const urlCheckout = 'https://rivegauche.ru/checkout/multi'

const urlCheckoutContains = (url) => { return url.indexOf('checkout')> -1 ? true : false}

let divMore = document.createElement('div');
divMore.className = "more__info";

let containerCheck = document.querySelector('.more')

let buttonCheck = document.querySelector('.more__button')

buttonCheck.before(divMore);

function checkPrice (urlCheckoutContains, price) {
  if (price <= 30000 && urlCheckoutContains === true) {
    let priceData =  price / 4
    return divMore.innerHTML = '<p>2 недели: ' + priceData + '</p><p>4 недели: '+ priceData + '</p><p>6 недель: '+ priceData + '</p><p>8 недель: '+ priceData + '</p>';
  } return divMore.innerHTML = '<p> 2 недели : 25% </p><p> 4 недели : 25% </p><p> 6 недель : 25% </p><p> 8 недель : 25% </p>';
}

containerCheck.append(divMore);

console.log(checkPrice(urlCheckoutContains(urlCheckout), 20000))

/* Task 3 */

let main = document.querySelector('.main')

function getMax(data) {
    return +data.children.length && (1 + Math.max.apply(Math, [].map.call(data.children, getMax)));
}

console.log(getMax(main));


