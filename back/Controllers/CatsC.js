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

  module.exports = {getCats}