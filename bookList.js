var Book = function(bookTitle, genre, author, isRead, readDate){
    this.bookTitle = bookTitle;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead;
    this.readDate = readDate;
};


var BookDatabase = function(username){
    this.username = username;
    this.booksRead = [];
    this.booksNotRead = [];

    this.addBook = function(bookTitle, genre, author, isRead, readDate){
        var book = new Book(bookTitle, genre, author, isRead, readDate);
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
        return this.booksNotRead[this.booksNotRead.length - 1];
    };
    
    this.nextBook = function(){
        return this.booksNotRead[this.booksNotRead.length - 2];
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
        this.booksNotRead.pop();

    };
    
};




var megsBooks = new BookDatabase('Meghan');

megsBooks.addBook("The Magus", "coming of age", "John Fowles");
megsBooks.addBook("Harry Potter", "fantasy", "Jk Rowling", true, new Date(2002, 6, 30));
megsBooks.addBook("All the Truth in Me", "Young Adult", false, "Angela Burns");

console.log("Meg's current book: ");
console.log(megsBooks.currentBook());

console.log(megsBooks.finishCurrentBook());
console.log("Books Read: ");
console.log(megsBooks.booksRead);
console.log("Books not Read: ");
console.log(megsBooks.booksNotRead);
console.log("Meg's new current book");
console.log(megsBooks.currentBook());
