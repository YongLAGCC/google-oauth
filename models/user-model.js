// const mongoose = require('mongoose');
// const Schema = mongoose.Schema; 


// // const Schema = mongoose.Schema,
// //     ObjectId = Schema.ObjectId;
 
// const userSchema = new Schema({ // mongoose schema 
//  username: String, 
//  googleId: String,

// });

// const User = mongoose.model('ModelName', userSchema); // first one modelName
// // User is the Schema, then export it
// module.exports = User; 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    googleId: String
});

const User = mongoose.model('user', userSchema ); // 'user' represent user modules

module.exports = User;