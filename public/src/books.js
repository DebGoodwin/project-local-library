// Note: Please do not change the name of the functions. The tests use those names to validate your code.

//Return the author that has the matching id
findAuthorById = (authors, id) => authors.find((author) => author.id === id);
  
  
//Return the book object with the matching id
findBookById = (books, id) => books.find((book) => book.id === id);

//Returns an array with two arrays inside of it. The first array contains books that have been loaned out, 
//and have not been returned, while the second array contains books that have been returned.
function partitionBooksByBorrowedStatus(books) { 
  const booksLoanedOut = [];
  const booksReturned = [];

  //Loop through each book to check their return status
  for (const book of books) { // 'for of' is for arrays and 'for in' is for object
    //Check for the return status by looking at the first transaction in the `borrows` array.
    (book.borrows[0].returned) ? booksReturned.push(book) : booksLoanedOut.push(book);
  }

  return [booksLoanedOut, booksReturned];
}

//Return an array of all the transactions from the book's `borrows` key. 
//Each transaction should include the related account information and the `returned` key.
/*
* Get accounts that have a borrowed book.
*/
function getBorrowersForBook({ borrows } , accounts) {
  const finalArr = [];
  
  //For each transaction in the book's borrow array
  borrows.forEach((borrow) => {
    //a transaction is a book has been checked out and checked back in
    if(borrow.returned) {
      //Find the account id that matches the id in th book borrow array
      let account = accounts.find((acct) => acct.id === borrow.id);
      finalArr.push({...account, returned: borrow.returned});
    }
  });
   
  return finalArr;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
