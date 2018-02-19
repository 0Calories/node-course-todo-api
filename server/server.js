var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var User = mongoose.model('User', {
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

// var anotherTodo = new Todo({
//     text: 'Wash the car',
//     completed: false,
//     completedAt: 7
// });

// anotherTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (error) => {
//     console.log('Failed to save new todo');
// });


// CHALLENGE
// User
// email - require it - trim it - set type - set min length of 1

var newUser = new User({
    name: 'Ash',
    email: 'asdf'
});

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (error) => {
    console.log('Error occurred when saving new user: ', error);
})
