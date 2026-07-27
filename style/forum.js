app.post("/post", (req, res) => {
    const message = req.body.message;

    // Save "message" to your database

    res.redirect("/");
});