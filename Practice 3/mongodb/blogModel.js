var mongoose = require('mongoose');
var blogSchema = new mongoose.Schema({
    blogId: {type:String, default: '', required:true},
    heading: {type:String, default: '', required:true},
    subHeading: {type:String, default: ''},
    bodyHtml: {type:String, default: ''},
    author: {type:String, default: ''},
    comments: [],   // sub document approach, write is slow, Read is fast
});

var Blog = mongoose.model("Blog", blogSchema);

// Another Approach
// You won't be able to use commands like find, findOneAndUpdate etc
// Write is faster
var commentSchema = new mongoose.Schema({
    blogId: {type:String, default: '', required:true},
    comment: {type:String, default: '', required:true},
    author: {type:String, default: ''}
});


module.exports = Blog;
