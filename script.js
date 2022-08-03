function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info=function(){
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}
const bible = new Book("Bible", "Various", 2500, "Yes");
const diet = new Book("Diet Book", "Greg", 500, "No");
const chair = new Book("Chair", "IKEA", 430, "No");


// DOM element selectors 

const display = document.getElementById('display');
const wrapper = document.getElementById('wrapper');

let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let read = document.getElementById('read');
let button = document.querySelector('#submit');

const library = {bible, diet, chair,}

let bookCount = 0;

function showBooks(){
    library.forEach(element => {
        const card = document.createElement('div')
        //need to create the element for hte actual card by adding the text and check box wahtever
        wrapper.appendChild(card);
    });
}

function addBookToLibrary(book){
    library.push(book);
    showBooks();
}

function createBook(){
    bookCount += 1;
    const book = new Book(title,author,pages, read);
    library.push(book);
}

button.addEventListener('click', ()=>{

})