module.exports = function() {

    var mongoose = require("mongoose");
    var ThreadSchema = require("./thread.schema.server")();
    var Thread = mongoose.model("Thread", ThreadSchema);

    var api = {
        createThreadForUser: createThreadForUser,
        findAllThreadsForUser: findAllThreadsForUser,
        findThreadById: findThreadById,
        updateThread: updateThread,
        deleteThread: deleteThread
    };
    return api;

    function createThreadForUser(userId, thread) {
        thread._user = userId;
        return Thread.create(thread);
    }

    function findAllThreadsForUser(userId) {
        return Thread.find({_user: userId});
    }

    function findThreadById(threadId) {
        return Thread.findById(threadId);
    }

    function updateThread(threadId, thread) {
        return Thread
                .update({_id: threadId},{
                    $set: {
                        query: thread.query,
                        description: thread.description,
                        views: thread.views
                    }
                });
    }

    function deleteThread(threadId) {
        return Thread.remove({_id: threadId});
    }
};