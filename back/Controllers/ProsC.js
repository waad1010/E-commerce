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

const Specpro = async (req, res) => {
  const id = req.params.id;
  try {
    let pool = await sql.connect(Config);
    let allE = await pool
      .request()
      .query(`SELECT * from dbo.Product where Id = ${id}`);
    return res.json(allE.recordset);
  } catch (e) {
    console.log(e);
  }
};

const Updatepro = async (req, res) => {
  console.log("XXX");
  const id = req.params.id;

  
  const { rates, number } = req.body;
  try {console.log("ASD", rates , number);
    let pool = await sql.connect(Config);
    await pool.request().query(`UPDATE dbo.Product
      SET rates = ${rates} , number = ${number}
       where Id = ${id}`);

    let allE = await pool
      .request()
      .query(`SELECT * from dbo.Product where Id = ${id}`);
    console.log(allE.recordset);
    return res.json(allE.recordset);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getPros, Specpro, Updatepro };
