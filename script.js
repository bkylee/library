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

let button = document.querySelector('#submit');
const library = [bible, diet, chair,];

function showBooks(){
    library.forEach(element => {
        const card = document.createElement('div')
        card.textContent = element;
        wrapper.appendChild(card);
    });
}

function addBookToLibrary(book){
    library.push(book);
    showBooks();
}

function createBook(){
    const display = document.getElementById('display');
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = Number(document.getElementById('pages').value);
    let read = document.getElementById('read').value;

    const book = new Book(title,author,pages, read);
    library.push(book);
    
    const bookCard = document.createElement('div');

    const bTitle = document.createElement('div');
        bTitle.textContent = `Title: ${title}`;
        bookCard.appendChild(bTitle);
    const bAuthor = document.createElement('div');
        bAuthor.textContent = `Author: ${author}`;
        bookCard.appendChild(bAuthor);
    const bPages = document.createElement('div');
        bPages.textContent = `Pages: ${pages}`;
        bookCard.appendChild(bPages);
    const bRead = document.createElement('div');
        bRead.textContent = `Read: ${read}`;
        bookCard.appendChild(bRead);

    display.appendChild(bookCard);

}

button.addEventListener('click', ()=>{
    createBook();
})


// function removeBook(); 
