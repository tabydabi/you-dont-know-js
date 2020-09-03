'use strickt'
let books = document.querySelectorAll('.books');
let book1 = document.querySelectorAll('.book')[1];
let book2 = document.querySelectorAll('.book')[0];
let book3 = document.querySelectorAll('.book')[4];
let book4 = document.querySelectorAll('.book')[3];
let book5 = document.querySelectorAll('.book')[5];
let book6 = document.querySelectorAll('.book')[2];

console.log(books);
console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);
console.log(book5);
console.log(book6);

books[0].insertBefore(book1, null);
books[0].insertBefore(book2, null);
books[0].insertBefore(book3, null);
books[0].insertBefore(book4, null);
books[0].insertBefore(book5, null);
books[0].insertBefore(book6, null);






document.body.style.backgroundImage = "url('you-dont-know-js.jpg')"; // replace background 


let bbb = document.querySelectorAll('li')[21]; // add "this" to 3book for 3chapter
bbb.innerHTML = 'Глава 3. <em>this</em> и Прототипы Объектов';

//delite trashBox
function demoDisplay() {
    document.querySelector('.adv').style.display = "none";
  }
  demoDisplay();

//replace some order on the 3rd book
  let tableOfContentsTwo = document.querySelectorAll('ul')[1];
  let bookChapterListTwo = tableOfContentsTwo.querySelectorAll('li');
  tableOfContentsTwo.insertBefore(bookChapterListTwo[2], bookChapterListTwo[10]);
  tableOfContentsTwo.insertBefore(bookChapterListTwo[6], bookChapterListTwo[4]);
  tableOfContentsTwo.insertBefore(bookChapterListTwo[8], bookChapterListTwo[6]);
  tableOfContentsTwo.insertBefore(bookChapterListTwo[6], bookChapterListTwo[8]);


////replace some order on the 5rd book
  let tableOfContentsFive = document.querySelectorAll('ul')[4];
  let bookChapterListFive = tableOfContentsFive.querySelectorAll('li');

  tableOfContentsFive.insertBefore(bookChapterListFive[9], bookChapterListFive[2]);
  tableOfContentsFive.insertBefore(bookChapterListFive[3], bookChapterListFive[2]);
  tableOfContentsFive.insertBefore(bookChapterListFive[4], bookChapterListFive[2]);
  tableOfContentsFive.insertBefore(bookChapterListFive[6], bookChapterListFive[5]);
  tableOfContentsFive.insertBefore(bookChapterListFive[7], bookChapterListFive[5]);

  //add new Elem to book #6
  let tableOfContents6 = document.querySelectorAll('ul')[5];
  let addChapterToBook6 = tableOfContents6.querySelectorAll('li');
  let newLem = document.createElement('li');
  newLem.textContent = 'Глава 8: За пределами ES6';
  addChapterToBook6[8].appendChild(newLem);
  //console.log(addChapterToBook6);
  