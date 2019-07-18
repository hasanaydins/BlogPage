const   express     = require('express'),
        Blog        = require('../models/blogModel'),

    router  = express.Router();

router.get('/new-blog', (req, res) => {
    res.render('blog/new-blog');
});

router.post('/new-blog', (req, res) => {
    let blogTitle = req.body.blogTitle;
    let comSentence = req.body.comSentence;
    let comImage = req.body.comImage;
    let blog = req.body.blog;

    let newBlog = {blogTitle:blogTitle, comSentence:comSentence, comImage:comImage,blog:blog};

    Blog.create(newBlog)
        .then((newBlog)=> {
            console.log(newBlog);
            res.status(201).json(newBlog);
        })
        .catch((err)=> {
            console.log('hataa');
            console.log(err);
            res.send(err);
        });
});



module.exports = router;
