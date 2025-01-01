import mongoose from "mongoose";

export const ConnectDB = async () => {

    await mongoose.connect('mongodb+srv://shanks:Lacasadepapel@cluster0.l9nhk.mongodb.net/todo-app');
    console.log("DB CONNECTED");

};