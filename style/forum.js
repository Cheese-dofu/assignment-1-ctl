app.post("/post", (req, res) => {
    const message = req.body.message;

    // Save the message to a database

    res.redirect("/");
});