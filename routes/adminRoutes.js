const express       = require('express'),
      User          = require('../models/userModel'),
      passport      = require('passport');

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
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next;
    }
    else {
        res.redirect("/signin");
    }

};


router.get('/admin', isLoggedIn, (req, res) => {
    res.render('admin/admin', {adminActions:adminActions});
});
router.get('/signin', (req, res) => {
    res.render('admin/signin');
});
router.post('/signin', passport.authenticate("local",
    {
        successRedirect: "/",
        failureRedirect: "/signin"
}
),(req, res)=> {
});

router.get('/signup', (req, res) => {
    res.render('admin/signup');
});
router.post('/signup',isLoggedIn, (req, res) => {
    let newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, (err,user) => {
        if(err) {
            console.log(err);
            res.redirect("/signup");
        }
            passport.authenticate("local") (req, res, () => {
               res.redirect("/");
            });
    })
});
router.get("/signout", (req,res) => {
    req.logout();
    res.redirect("/");
});



module.exports = router;
