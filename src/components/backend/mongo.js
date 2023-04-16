const mongoose = require('mongoose');
const express = require('express')
const app = express()

app.use(express.json());
app.listen(3000)

const userRouter = express.Router();

app.use("/user",userRouter)

userRouter
.route("/")
.get(getUsers)
.post(postUser)
.patch(updateUser)
.delete(deleteUser)


async function getUsers(req, res) {
    let allUsers = await userModel.find();

    res.json({ message: 'List of all users', data: allUsers });
}

async function postUser(req,res){
    let dataObj = req.body;
    let user = await userModel.create(dataObj);
    res.json({message:"user created successfully",userDetails:user})
}

let dblink = 'mongodb+srv://admin:DwWms96CeBjAk9Rs@cluster0.4inbhei.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(dblink)
    .then((db) => {
        console.log("dbconnected")
    })
    .catch((err) => console.log(err))

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    confirmPassword: {
        type: String,
        required: true,
        minLength: 8
    },
});

//model

const userModel = mongoose.model('userModel', userSchema);

// (async function createUser() {
//     let user = {
//         name: 'Keshav',
//         email: 'Hello@mail.com',
//         password: 12345678,
//         confirmPassword: 12345678
//     };
//     let data = await userModel.create(user);
//     console.log(data)
// })()