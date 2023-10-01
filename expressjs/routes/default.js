const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    // You can send text response
    res.send("hello world");

})
router.get("/html", (req, res) => {

    fs.readFile("home.html", "utf-8", (err, data) => {
        if (err) {
            res.send("Error");
            return
        }
        res.send(data);
    })

})

router.get("/htmlpage", (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "home.html"));

})
router.get("/contact", (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "contact.html"));

})
router.get("/about", (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "about.html"));

})

// build a simple website with 
// about page
// home page
// contact us page


// For sending the json response

router.get("/json", (req, res) => {
    res.json({
        name: "Shubham"
    })
})

// How to get the request parameters



// Path params
router.get("/jsondata/:id/:data", (req, res) => {
    const idRequest = req.params["id"];
    const dataRequest = req.params["data"];

    res.json({
        params: idRequest,
        dataRequest
    })
})

//Query Parameters
router.get("/jsonurl", (req, res) => {
    const name = req.query["name"];
    const city = req.query["city"];


    res.json({
        params: name,
        city
    })
})

// The question for you is 
//Write a route that accepts query parameters
// And as per the query params it sends the htmlpage
// if page query param = home --->render home page and so on

router.get("/url", (req, res) => {
    const page = req.query["page"];
    // res.sendFile(path.join(__dirname,`${page}.html`));

    res.redirect(`/${page}`);

})

module.exports=router;