const Config = require("../Config/dbConf");
const sql = require("mssql/msnodesqlv8");

const getComments = async (req, res) => {
  try {
    const id = req.params.id;
    let pool = await sql.connect(Config);
    let allE = await pool
      .request()
      .query(`SELECT * FROM dbo.Comments WHERE p_id = ${id}`);
     // console.log(allE.recordset);
    return res.json(allE.recordset);
  } catch (e) {
    console.log(e);
  }
};

const saveComment = async (req, res) => {
  try {
    console.log("HAH");
    let pool = await sql.connect(Config);
    const { Name, comment, rating, u_id, p_id } = req.body;

    await pool.request().query(
      `INSERT INTO Comments VALUES 
         ( '${Name}', '${comment}' , '${rating}' ,'${u_id}'
           , '${p_id}'
          )`,
      (err, result) => {
        if (err) throw err;
        res.status(200).json({
         
          Name,
          comment,
          rating,
          u_id,
          p_id,
        });
      }
    );
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { getComments, saveComment };
