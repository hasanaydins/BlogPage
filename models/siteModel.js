const mongoose  = require('mongoose');

const siteSchema  = new mongoose.Schema({
    homeImage:      {type: String, required: "Can not be Empty"},
    aboutImage:     {type: String, required: "Can not be Empty"},
    aboutText:      {type: String, required: "Can not be Empty"},
    contactImage:   {type: String, required: "Can not be Empty"},
    contactText:    {type: String, required: "Can not be Empty"}
});

module.exports = mongoose.model("Site", siteSchema);