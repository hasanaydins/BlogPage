const   express              = require('express'),
        mongoose             = require('mongoose'),
        passport             = require('passport'),
        LocalStrategy        = require('passport-local'),
        bodyParser           = require('body-parser'),
        User                 = require('./models/userModel'),
        expressSession       = require('express-session'),
        app                  = express();


// Routes
const indexRoutes = require('./routes/indexRoutes');
const adminRoutes = require('./routes/adminRoutes');


// App Config
mongoose.connect("mongodb://localhost/BlogApp",{ useNewUrlParser: true });
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: "true"}));

//Passport Config
app.use(require("express-session")({
    secret: "bu bizim guvenlik cumlemiz.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes Using
app.use(indexRoutes);
app.use(adminRoutes);


const server = app.listen(3000, (err) => {
    if(err)
        console.log(err);
    console.log('server %d portunda', server.address().port);
})