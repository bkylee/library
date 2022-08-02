function book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info=function(){
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}
const bible = new book("Bible", "Various", 2500, "Yes");
const diet = new book("Diet Book", "Greg", 500, "No");
const chair = new book("Chair", "IKEA", 430, "No");


const library = {bible, diet, chair,}

function addBookToLibrary(){
    library.array.forEach(element => {
        console.log(element);
    });
}