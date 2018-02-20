const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a8b9e96e0979217400b666411';
//
// if (!ObjectID.isValid(id)) {
//     console.log('ID is invalid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo', JSON.stringify(todo, undefined, 2));
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo by Id', JSON.stringify(todo, undefined, 2));
// }).catch((e) => console.log(e));

// CHALLENGE: User.findById

var id = '5a8a544f99a875293cd3362b';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('No user with the given ID could be found.');
    }

    console.log('User', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
