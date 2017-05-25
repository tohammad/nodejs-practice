var bookSchema = new Schema({

    bookId: {type: String},
    name: {type: String},
    createdOn: {type:Date},

    authors : []
});