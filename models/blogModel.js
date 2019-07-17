const mongoose  = require('mongoose');

var blogSchema  = new mongoose.Schema({
        title:          {type: String, required: "Can not be empty"},
        comSentence:    {type: String, required: "Can not be empty"},
        comImage:       {type: String, required: "Can not be empty"},
        blog:           {type: String, required: "Can not be empty"},
        date:           {type: Date, default: Date.now}
});