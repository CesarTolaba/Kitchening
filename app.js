const express = require("express");
const app = express();
const path = require("path");
let port = 3000;

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
})
app.listen(port, () => {
    console.log(`Server runing in: http://localhost:${port}`)
});
