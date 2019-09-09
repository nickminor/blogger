import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
    blogId: {
        type: String,
        required: true
    },

    author: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },

    body: {
        type: String,
        required: true
    },


}, { timestamps: true })

export default class CommentService {
    get repository() {
        return mongoose.model('comments', _model)
    }
}