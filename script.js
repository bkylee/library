function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info=function(){
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}


// DOM element selectors 

//selector to grab button 
let button = document.querySelector('#submit');

let library = [];

function clear(){
    let display = document.getElementById('display');
    display.value = '';
    let title = document.getElementById('title');
    title.value = '';
    let author = document.getElementById('author');
    author.value = '';
    let pages = document.getElementById('pages');
    pages.value = '';
}


//function to remove book from library. 

function createBook(){
    const display = document.getElementById('display');
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = Number(document.getElementById('pages').value);
    let read = document.getElementById('read').value;
    
    //add values from text input into object, add object to library
    const book = new Book(title,author,pages, read);
    library.push(book);
    
    const bookCard = document.createElement('div');

    // title of book
    const bTitle = document.createElement('div');
        bTitle.textContent = `Title: ${title}`;
        bTitle.setAttribute('class', 'title');
        bookCard.appendChild(bTitle);

        //author
    const bAuthor = document.createElement('div');
        bAuthor.textContent = `Author: ${author}`;
        bookCard.appendChild(bAuthor);

        //number of pages 
    const bPages = document.createElement('div');
        bPages.textContent = `Pages: ${pages}`;
        bookCard.appendChild(bPages);

//read box
        const bRead = document.createElement('div');
        bRead.textContent = `Read: ${read}`;
        bookCard.appendChild(bRead);

        //remove button and function
    function removeBook(title){
        for (i = 0; i < library.length; i ++){
            if (library[i].title === title) {
                library.slice(library[i], library[i+1]);
            }
        } 
    }
    const remove = document.createElement('button');
    remove.setAttribute("type","button");
    remove.textContent = "Remove";
    remove.addEventListener('click', removeBook(name));
    bookCard.appendChild(remove);

    display.appendChild(bookCard);
    clear();
}


button.addEventListener('click', ()=>{
    createBook();
});

