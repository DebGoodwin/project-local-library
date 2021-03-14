// Note: Please do not change the name of the functions. The tests use those names to validate your code.

//takes in array of accounts and returns the account object that has the matching id
findAccountById = (accounts, id) => accounts.find((acct) => acct.id === id);


//returns a sorted array of ojects. objects are sorted by last name
sortAccountsByLastName = accounts => { 
  return accounts.sort((acctA, acctB) => acctA.name.last > acctB.name.last ? 1 : -1);
}

//takes in an account object, and an array of books returns the number of times the 
//accounts id appears in any book borrow array
function getTotalNumberOfBorrows(account, books) {
  let total = 0;

  books.forEach((book) => {
    let totalArr = book.borrows.filter((book => book.id.includes(account.id)));
    total += totalArr.length;
  });
  
  return total; 
}

//Returns an array of books and authors that represents all books currently checked out 
//by the given account
function getBooksPossessedByAccount({ id }, books, authors) {
  const finalArr = [];

    books.forEach((book) => {
    const first = book.borrows[0];
    if (first.id === id && !first.returned) {
      let authorObj = authors.find((author) => author.id === book.authorId);
      finalArr.push({...book, author: authorObj});
    }
  });
  return finalArr;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
