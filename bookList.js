var Book = function(bookTitle, genre, author, photoLink, isRead, readDate){
    this.bookTitle = bookTitle;
    this.genre = genre;
    this.author = author;
    this.photoLink = photoLink;
    this.isRead = isRead;
    this.readDate = readDate;
};


var BookDatabase = function(username){
    this.username = username;
    this.booksRead = [];
    this.booksNotRead = [];

    this.addBook = function(bookTitle, genre, author, photoLink, isRead, readDate){
        if (readDate){
            readDate = new Date(readDate);
        }
        var book = new Book(bookTitle, genre, author, photoLink, isRead, readDate);
        if (isRead === true){
            this.booksRead.push(book);
            displayBooks([book]);
        } else {
            this.booksNotRead.push(book);
            displayBooks([book]);
        }
    };
    this.numBooksNotRead = this.booksNotRead.length;
    this.numBooksRead = this.booksRead.length;

    this.currentBook = function(){
        this.currentBook.isRead = true;
        return this.booksNotRead[0];
    };
    
    this.nextBook = function(){
        return this.booksNotRead[1];
    };
    this.lastBook = function(){
        return this.booksRead[this.booksRead.length -1];
    };

    this.bookShelf = function(){
        return this.booksRead.concat(this.booksNotRead);
    };
    this.finishCurrentBook = function(){
        this.currentBook.readDate = new Date();
        this.booksRead.push(this.currentBook());
        this.booksNotRead.shift();

    };
    
};


function displayBooks(arrayOfBooks){
    var pageNode = document.getElementsByTagName('div')[0];
    var newUl = document.createElement('ul');
    pageNode.appendChild(newUl);
    for (i = 0; i < arrayOfBooks.length; i++){
        var newLi = document.createElement('li');
        var bookText = document.createTextNode(arrayOfBooks[i].bookTitle + ", " + arrayOfBooks[i].author);
        var newImg = document.createElement('img');
        newImg.setAttribute("src", arrayOfBooks[i].photoLink);
        
        newLi.appendChild(newImg);
        newLi.appendChild(bookText);
        newUl.appendChild(newLi);
    }
}

function displayCurrentBook(){
    var currentBook = document.getElementById('currentBook');
    var currentBookImage = document.createElement('img');
    currentBookImage.setAttribute("src", megsBooks.currentBook().photoLink);
    currentBookImage.setAttribute("id", "bigImage");
    var currentBookHeader = document.createElement('h3');
    var currentBookTitle = document.createTextNode(megsBooks.currentBook().bookTitle);
    currentBookHeader.appendChild(currentBookTitle);
    currentBook.appendChild(currentBookHeader);
    currentBook.appendChild(currentBookImage);
}

var submitButton = document.getElementById("submit");
function onButtonClick(){
    var bookTitle = document.getElementById('title').value;
    var genre = document.getElementById('genre').value;
    var author = document.getElementById('author').value;
    var photoLink = document.getElementById('photoLink').value;
    var isRead = document.getElementById('isRead').checked;
    var readDate = document.getElementById('readDate').value;
    
    megsBooks.addBook(bookTitle, genre, author, photoLink, isRead, readDate);
    
}

//starts here
var megsBooks = new BookDatabase('Meghan');

megsBooks.addBook("The Magus", "coming of age", "John Fowles", "http://d202m5krfqbpi5.cloudfront.net/books/1344264891l/16286.jpg");
megsBooks.addBook("Harry Potter and the Sorcerer's Stone", "fantasy", "Jk Rowling", "http://upload.wikimedia.org/wikipedia/en/b/bf/Harry_Potter_and_the_Sorcerer's_Stone.jpg", '6/10/2013');
megsBooks.addBook("All the Truth That's in Me", "Young Adult", "Julie Berry", "http://d202m5krfqbpi5.cloudfront.net/books/1364245088l/17297487.jpg");
megsBooks.addBook("Don't let's go to the dogs tonight", "memoir", "Alexandra Fuller", "http://msjeannieology.files.wordpress.com/2012/08/dont-lets-go-to-the-dogs-tonight.jpg?w=560", true, '10/30/2000');
megsBooks.addBook("Out of Africa", "memoir", "Isak Dinesen", "http://d202m5krfqbpi5.cloudfront.net/books/1178296503l/781787.jpg", false);

displayCurrentBook();
submitButton.addEventListener('click', onButtonClick, false);




