// Note: Please do not change the name of the functions. The tests use those names to validate your code.

//Return number of book objects in array.
getTotalBooksCount = books => books.length;
  

//Return number of account objects in array.
getTotalAccountsCount = accounts => accounts.length;
  

//Returns number of books that are currently checked out of the library
function getBooksBorrowedCount(books) {
  
  const totalBooks = books.reduce((total, book) => {
    const [first] = book.borrows;
    if (!first.returned) {
      total += 1
    }
    return total;
  }, 0);
     
  return totalBooks;
}

/*Returns an array containing five objects or fewer that represents the 
  most common occurring genres, ordered from most common to least.
  Each object in the returned array has two keys:

- The `name` key which represents the name of the genre.
- The `count` key which represents the number of times the genre occurs.*/
function getMostCommonGenres(books) {
  let genreArr = [];

  //For each book in the array
  for (let item in books) {
    const book = books[item];  

    // check to see if the genre already exists
    let foundObj = genreArr.find((item) => item.name === book.genre);
    if (foundObj) {
      foundObj.count +=1;
    } else {
      const newGenre = {
      name: book.genre,
      count: 1
      }
      genreArr.push(newGenre);
    }   
  }

  //Sort the final array with the 5 most popular
  return final = topFiveSorted(genreArr);
}


/*Returns an array containing five objects or fewer that represents the 
  most popular books in the library. Popularity is represented by the number 
  of times a book has been borrowed*/
function getMostPopularBooks(books) {
  const newArr = books.map((book) => { 
    return {
      name: book.title,
      count: book.borrows.length}
  });

  return final = topFiveSorted(newArr);
}

/*Returns an array containing five objects or fewer that represents the 
  most popular authors whose books have been checked out the most. Popularity 
  is represented by finding all of the books written by the author and then 
  adding up the number of times those books have been borrowed.*/
function getMostPopularAuthors(books, authors) {

  let finalArray = [];
  let result = {};
  //For each author lets create a new object and push it into the final array
  const authorObj = authors.forEach((author) => {
    const id = author.id;
    const { name: {first, last} } = author;
    const authorName = `${first} ${last}`;
    
    // Check to see if the author is already in the final array, and if so ignore
    if (!finalArray.some((authorObj) => authorObj["name"] === authorName)) {

      //Find each book that that an author has written
      books.forEach((book) => {
        let total = book.borrows.length;
        if (book.authorId === id) {
          if (!finalArray.some((authorObj) => authorObj["name"] === authorName)) {
            result = {name: authorName, count: total};
            finalArray.push(result);
          } 
          else {
            const foundAuthor = finalArray.find((authorObj) => authorObj["name"] === authorName);
            foundAuthor.count += total;
          }
        }
      }); 
    }   
  });
  
  //Sort the final array with the 5 most popular
  return final = topFiveSorted(finalArray);
}

//Helper function to sort and return the top five items
topFiveSorted = arr => arr.sort((a,b) => (a.count > b.count ? -1 : 1)).slice(0,5);


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
