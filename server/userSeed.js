import User from './models/user.js'
import bycrypt from 'bcrypt'
import connectToDatabase from './db/db.js'

const userRegister = async () => {
    connectToDatabase()
    try {
        const hashPassword = await bycrypt.hash("admin", 10)
        const newUser = new User({
            name: "admin",
            email: "admin@gmail.com",
            password: hashPassword,
            role: "admin"
        })
        await newUser.save()
    } catch (error) {
        console.log(error)
    }
}

userRegister();