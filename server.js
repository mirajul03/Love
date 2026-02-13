const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.post("/calculate", (req, res) => {
    const { name1, name2 } = req.body;

    const lovePercent = Math.floor(Math.random() * 91) + 10;

    let message;
    if (lovePercent > 80)
        message = "Perfect Couple 💕";
    else if (lovePercent > 60)
        message = "Great but needs improvement 😍";
    else if (lovePercent > 40)
        message = "You need to spend more time together 💞";
    else
        message = "Sorry i can't say anything. Good will help you 😉";
    setTimeout(() => {
        res.send(`
            <html>
            <head><title>Result</title></head>
            <body style="text-align:center; font-family:Arial;">
                <h1>💘 Compatibility Result 💘</h1>
                <h2>❤️ ${name1} + ${name2} = ${lovePercent}% ❤️</h2>
                <h3>${message}</h3>
                <br>
                <a href="/">Try Again</a>
            </body>
            </html>
        `);
    }, 5000);
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

