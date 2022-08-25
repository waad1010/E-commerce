
// const express = require('express');
// const router = express.Router();
// const path = require("path")
// const multer = require("multer")

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, "pictures");
//   },
//   filename(req, file, cb) { 
//     cb(
//       null,
//       `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });


// function checkFileType(file, cb) {  console.log("AA");
//   const fileTypes = /jpg|jpeg|png/;
//   const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = fileTypes.test(file.mimetype);
//   return extname && mimetype ? cb(null, true) : cb("Images only!");
// }

// const upload = multer({
//   storage,
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },
// });
// router.post('/api/upload', upload.single("img"), (req, res) => {

//   res.send(`/${req.file.path}`);
// });


// module.exports = router;