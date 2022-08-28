const express = require ('express');
const app = express();
const path = require('path');
const cors = require('cors');
const userR = require('./Routes/UserR');
const prosR = require('./Routes/ProsR')
const compression = require('compression');
const catsR = require('./Routes/CatsR')
const CommentR = require('./Routes/CommentsR')
const OrderR = require('./Routes/OrdersR')
// const uploadRoutes = require('./Routes/UploadRoutes');
const router = express.Router();
const multer = require("multer")

app.use(compression());
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use(userR);
app.use(prosR);
app.use(catsR);
app.use(CommentR);
app.use(OrderR);



const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "../pictures");
  },
  filename : (req, file, cb) => { 
    console.log("xd" , file)
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});


function checkFileType(file, cb) {  console.log("AA");
  const fileTypes = /jpg|jpeg|png/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);
  return extname && mimetype ? cb(null, true) : cb("Images only!");
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

app.post('/api/upload', upload.single("img"), (req, res) => {
    
  res.send(JSON.stringify(`${req.file.path}`))
});



// app.use("/api/upload", uploadRoutes);


app.use("/pictures", express.static(path.join(__dirname, "/pictures")));



app.listen (8080, ()=> {
    console.log('we are on port : 8080');
})
