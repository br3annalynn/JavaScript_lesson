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
            readDate = new Date(readDate[0], readDate[1]-1, readDate[2]);
        }
        var book = new Book(bookTitle, genre, author, photoLink, isRead, readDate);
        if (isRead === true){
            this.booksRead.push(book);
        } else {
            this.booksNotRead.push(book);
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


var displayBooks = function(){
    var pageNode = document.getElementsByTagName('div')[0];
    var newUl = document.createElement('ul');
    pageNode.appendChild(newUl);
    for (i = 0; i < megsBooks.bookShelf().length; i++){
        var newLi = document.createElement('li');
        var bookText = document.createTextNode(megsBooks.bookShelf()[i].bookTitle + ", " + megsBooks.bookShelf()[i].author);
        var newImg = document.createElement('img');
        newImg.setAttribute("src", megsBooks.bookShelf()[i].photoLink);
        
        newLi.appendChild(newImg);
        newLi.appendChild(bookText);
        newUl.appendChild(newLi);
    }
};


var megsBooks = new BookDatabase('Meghan');

megsBooks.addBook("The Magus", "coming of age", "John Fowles", "http://d202m5krfqbpi5.cloudfront.net/books/1344264891l/16286.jpg");
megsBooks.addBook("Harry Potter and the Sorcerer's Stone", "fantasy", "Jk Rowling", "http://upload.wikimedia.org/wikipedia/en/b/bf/Harry_Potter_and_the_Sorcerer's_Stone.jpg", [2002, 6, 30]);
megsBooks.addBook("All the Truth That's in Me", "Young Adult", "Julie Berry", "http://d202m5krfqbpi5.cloudfront.net/books/1364245088l/17297487.jpg");
megsBooks.addBook("Don't let's go to the dogs tonight", "memoir", "Alexandra Fuller", "http://msjeannieology.files.wordpress.com/2012/08/dont-lets-go-to-the-dogs-tonight.jpg?w=560", true, [2008, 10, 30]);
megsBooks.addBook("Out of Africa", "memoir", "Isak Dinesen", "http://d202m5krfqbpi5.cloudfront.net/books/1178296503l/781787.jpg", false);

// console.log("Meg's current book: ");
// console.log(megsBooks.currentBook());

// console.log(megsBooks.finishCurrentBook());
// console.log("Books Read: ");
// console.log(megsBooks.booksRead);
// console.log("Books not Read: ");
// console.log(megsBooks.booksNotRead);
// console.log("Meg's new current book");
// console.log(megsBooks.currentBook());

displayBooks();




