const Config = require("../Config/dbConf");
const sql = require("mssql/msnodesqlv8");


const getPros = async (req, res) => {
    try {
      let pool = await sql.connect(Config);
      let allE = await pool.request().query("SELECT * from dbo.Product");
      return res.json(allE.recordset);
    } catch (e) {
      console.log(e);
    }
  };


  const Specpro = async (req, res) =>{

    const id = req.params.id;
    try {
      let pool = await sql.connect(Config);
      let allE = await pool.request().query(`SELECT * from dbo.Product where Id = ${id}`);
      return res.json(allE.recordset);
    }
    catch(e){
      console.log(e);
    }
  }

  module.exports = { getPros , Specpro };
