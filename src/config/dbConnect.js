import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:admin@cluster0.s3532ao.mongodb.net/node");

let db = mongoose.connection


export default db