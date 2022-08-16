const jsHeadings = document.getElementsByTagName('h2');
for (const heading of jsHeadings) {
    heading.style.color = 'tomato';
}

// backpact section 
document.getElementById('backpack').style.backgroundColor = 'tomato';
document.getElementById('backpack').style.paddingBottom = '30px';

// card style by js 
const cards = document.getElementsByClassName('card');

for (const card of cards) {
    card.style.borderRadius = '30px';
}

// custom_slide_btn style 
function slideBtn() {
    console.log('This product is not available');
}

// buy button action 
const buyButtons = document.getElementsByClassName('panda_product_btn');
for (const buyButton of buyButtons) {
    buyButton.addEventListener('click', function () {
        buyButton.style.display = 'none';
    });
}

// email section validation 
const mailSubmitButton = document.getElementById('exampleInputEmail1');
mailSubmitButton.addEventListener('keyup', function (event) {
    const text = event.target.value;
    if (text === 'email') {
        // console.log(mailSubmitButton.classList);
        subButton.classList.remove("disable");
    }
    else {
        subButton.classList.add("disable", true);
    }
});