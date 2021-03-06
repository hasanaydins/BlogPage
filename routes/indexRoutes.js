const express   = require('express'),
    Blog        = require('../models/blogModel'),
    router      = express.Router();

// let data = [
//     {
//         postTitle : "Baslık 1",
//         postSubtitle: "alt baslık 1 deneme ",
//         image: "https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg"
//     },
//     {
//         postTitle : "Baslık 2",
//         postSubtitle: "alt baslık 2 deneme ",
//         image: "https://cdn.pixabay.com/photo/2019/06/28/20/22/dragonfly-4304947_960_720.jpg"
//     },
//     {
//         postTitle : "Baslık 3",
//         postSubtitle: "alt baslık 3 deneme ",
//         image: "https://cdn.pixabay.com/photo/2019/07/02/21/28/sandburg-4313223_960_720.jpg"
//     }
//
// ]
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next;
    }
    else {
        res.redirect("/signin");
    }

};


router.get('/', (req, res) => {
    Blog.find({}, (err, foundBlogs)=> {
        if(err){
            console.log('hata******');
            console.log(err);
        }
        else {
            res.render('home', {foundBlogs: foundBlogs});
        }

    });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});
router.get('/resume', (req, res) => {
    res.render('resume');
});
router.get('/signin', (req, res) => {
    res.render('admin/signin');
});

router.get('/signup',isLoggedIn, (req, res) => {
    res.render('admin/signup');
});

module.exports = router;

