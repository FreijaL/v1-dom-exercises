// Code here!


// 1 - Byt namn på första hoodien från 'Ash' till 'Potato'
let changeName = document.querySelector('h3');
changeName.innerHTML = 'Potato';


// 2 - Byt namn på 'Home' till 'Start'
let changeHome = document.querySelector('header > nav > a');
changeHome.innerHTML = 'Start';


let changeFooterHome = document.querySelector('footer > section > article > a');
changeFooterHome.innerHTML = 'Start';


// 3 - Byt ut namn på 'Contact' till 'Mail Us'
let changeContact = document.querySelectorAll('a')[2];
changeContact.innerHTML = 'Mail Us';

let changeFooterContact = document.querySelectorAll('a')[5];
changeFooterContact.innerHTML = 'Mail Us';


// 4 - Byt ut informationen om 'Sinus hoodie - fire'
let changeInfo = document.querySelector('.art-2 > p');
changeInfo.innerHTML = 'Hej jag försöker mitt bästa men det går inte så bra';


// 5 - Byt bakgrundsfärg och text på en knapp
let changeBgcButton = document.querySelector('.art-3 > button');
changeBgcButton.style.backgroundColor = 'lightblue';


// 6 - Byt bakgrundfärg på någon av produkterna
let changeBgcImg = document.querySelector('.art-3 > figure');
changeBgcImg.style.backgroundColor = 'lightblue';


// 7 - Byt ut adressen på sidan
let changeAdress = document.querySelector('footer > section > article > p');
changeAdress.innerHTML = 'Test Testsson <br> Testvägen 1 <br> 110 10 Testaholm';


// 8 - Byt färg på samtliga <p>
let allP = document.querySelectorAll('p');
allP.forEach((x) => (x.style.color = 'orange'));


// 9 - Ändra text på samtliga knappar till 'add to cart'
let changeBtnText = document
    .querySelectorAll('button')
    .forEach((x) => (x.innerHTML = 'Add to cart'));


// 10 - Lägg till classen 'active' på menyalternativet 'home'
let giveAName = document.querySelector('nav > a');
giveAName.setAttribute('class', 'active');
//homer.classList.add('active');


// 11 - Ta bort classen 'logo' på logotypen
let removeAName = document.querySelector('img');
removeAName.removeAttribute('class', 'logo');


// 12 - Lägg till ett nytt menyalternativ
let footerElem = document.querySelector('footer > section > article');
let newMenuAlt = document.createElement('a');
newMenuAlt.innerHTML = 'FAQ';
footerElem.appendChild(newMenuAlt);


// 13 - Lägg till en ny produkt med följande info ....
let newProduct = document.querySelector('main');

let html = `<article class="art-4">
<figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
<h2>Sinus Hoodie</h2>
<h3>Forrest</h3>
<p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
<button>Buy</button>
</article>`;

newProduct.insertAdjacentHTML('beforeend', html);


// 14 - Lyssna efter ett klick på logotypen (.logo). När den registrerar
let foundYou = document.querySelector('img');
foundYou.addEventListener('click', function() {
    console.log('Found you!');
});



// 15 - Lyssna efter klick på samtliga produkter (<article>). När den 
// .    registrerar ett klick skall du console.log:a "Hi, Im article Fire/Ash/Water"
let products = document.querySelectorAll('main > article');

products.forEach((product) => {
    let type = poducts.querySelector('h3');
    poducts.addEventListener('click', () => {
        console.log(`Hi, im article ${type.innerText}`);
    });
});
