module.exports = function() {

    var mongoose = require("mongoose");
    var CommentSchema = require("./comment.schema.server")();
    var Comment = mongoose.model("Comment", CommentSchema);

    var api = {
        createCommentForThread: createCommentForThread,
        findAllCommentsForThread: findAllCommentsForThread,
        findCommentById: findCommentById,
        updateComment: updateComment,
        deleteComment: deleteComment
    };
    return api;

    function createCommentForThread(threadId, comment) {
        comment._thread = threadId;
        return Comment.create(comment);
    }

    function findAllCommentsForThread(threadId) {
        return Comment.find({_thread: threadId});
    }

    function findCommentById(commentId) {
        return Comment.findById(commentId);
    }

    function updateComment(commentId, comment) {
        return Comment
            .update({_id: commentId},{
                $set: {
                    comments: comment.comments,
                    likes: comment.likes,
                    dislikes: comment.dislikes
                }
            });
    }

    function deleteComment(commentId) {
        return Comment.remove({_id: commentId});
    }
};