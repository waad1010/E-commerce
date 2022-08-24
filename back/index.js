const express = require ('express');
const app = express();
const path = require('path');
const cors = require('cors');
const userR = require('./Routes/UserR');
const prosR = require('./Routes/ProsR')
const catsR = require('./Routes/CatsR')
const CommentR = require('./Routes/CommentsR')
const OrderR = require('./Routes/OrdersR')
const uploadRoutes = require("./Routes/uploadRoutes.js")



app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use(userR);
app.use(prosR);
app.use(catsR);
app.use(CommentR);
app.use(OrderR);
app.use("/api/upload", uploadRoutes);


// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/build")));
//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
//   );
// }

app.listen (8080, ()=> {
    console.log('we are on port : 8080');
})
