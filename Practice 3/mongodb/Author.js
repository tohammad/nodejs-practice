//author
{
    _id : 1,
    name: "Peter",
    books    [1,2,3] //Two Way Embedding
}
{
    _id : 2,
    name: "John",
    books    [2,3]   //Two Way Embedding
}

//book
{
    _id : 1,
    title: "A tale of two people",
    categories: [1],  // One Way Embedding
    authors[1,2]    //Two Way Embedding
}
{
    _id : 2,
    title: "How to train your dragon",
    categories: [2],  //One Way Embedding
    authors[2] //Two Way Embedding
}
{
    _id : 3,
    title: "Harry Potter",
    categories: [1],   //One Way Embedding
    authors[1]  //Two Way Embedding
}

//category
{
    _id : 1,
    name: "drama",
   
}
{
    _id : 2,
    name: "animation",
   
}


// Fetch books by specific author

var author = author.findOne({name: "Peter"})
book.find({_id: { $in:  author.book  }}).toArray()

// Fetch authors of a specific book

var book = book.findOne({ title: "A tale of two people"})
author.find({_id: { $in : books.authors}}).toArray()

// The relation between author and book is few to few so we embed references in each other
/*
Let take the category drama that might have thousands of books in it and with many new books consistently being added and removed. This makes it impracticable to embed all the books in a category document. Each book, however, can easily have categories embedded within it, as the rate of change of categories for a specific book might be very low.
In this case we should consider One way embedding as a strategy.
*/

// Fetch categories for a specific book 

var book = book.findOne({ title: "A tale of two people"})
category.find({_id: { $in:  book.categories  }}).toArray()

//Fetch books for a specific category 

var category = category.findOne({ title: "drama"})
book.find({_id: { $in:  category._id  }}).toArray()