import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 60
    },

    summary: {
        type: String,
        required: true,
        maxlength: 120
    },

    author: {
        type: ObjectId,
        required: true
    },

    imgURL: {
        type: String
    },

    body: {
        type: String,
        required: true
    },


}, { timestamps: true })

export default class BlogService {
    get repository() {
        return mongoose.model('blogs', _model)
    }
}