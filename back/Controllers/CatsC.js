const Config = require("../Config/dbConf");
const sql = require("mssql/msnodesqlv8");

const getCats = async (req, res) => {
    try {
      let pool = await sql.connect(Config);
      let allE = await pool.request().query("SELECT * from dbo.Cats");
      return res.json(allE.recordset);
    } catch (e) {
      console.log(e);
    }
  };



   const createCat = async (req, res) => {
    console.log("i am adding")
    const { title, Desc, Img} =  req.body;
  
    console.log(title ,Desc , Img)
   
    try {
      let pool = await sql.connect(Config);
    
      await pool
      .request()
      .query(`INSERT INTO Cats VALUES 
      ( '${title}', '${Desc}' , '${Img}' 
       )`, (err, result) => {
    

        if (err) throw err;
        res.status(200).json({
         title,
         Desc,
         Img
        });
      });
  } catch (e) {
    console.log(e.message);
  }
};

const DeleteCat = async (req, res) => {
  try {
    let pool = await sql.connect(Config);
    const c_id = req.params.id;
    console.log(c_id);

    await pool
      .request()
      .query(`DELETE FROM Cats WHERE Id='${c_id}'`, (err, result) => {
        if (err) throw err;
        res.status(200).json({
          c_id,
        });
      });
  } catch (e) {
    console.log(e.message);
  }
};

  module.exports = {getCats,createCat , DeleteCat}