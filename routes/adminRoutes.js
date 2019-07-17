const express = require('express'),
    router  = express.Router();

let adminActions = [
    {
        actionId : 1,
        actionName: "changeHomeImage",
        displayName: "Change Homepage Header Background"
    },
    {
        actionId : 2,
        actionName: "changeAboutImage",
        displayName: "Change About Header Background"
    },
    {
        actionId : 3,
        actionName: "changeAboutText",
        displayName: "Change Homepage Header Background"
    },
    {
        actionId : 4,
        actionName: "addNewBlog",
        displayName: "Add New Blog"
    },
    {
        actionId : 5,
        actionName: "listAllBlogs",
        displayName: "list All Blogs"
    }
];



router.get('/admin', (req, res) => {
    res.render('admin/admin', {adminActions:adminActions});
});
router.get('/signin', (req, res) => {
    res.render('admin/signin');
});
router.post('/signin', (req, res) => {

});
router.get('/signup', (req, res) => {
    res.render('admin/signup');
});
router.post('/signup', (req, res) => {

});

module.exports = router;
