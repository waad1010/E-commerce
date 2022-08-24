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
      }
    );
    let allE = await pool.request().query(`SELECT TOP 1 * FROM dbo.Comments  
    ORDER BY id DESC; `);
    console.log("id : " , allE.recordset[0].id)
    const requiredId = allE.recordset[0].id;
    res.status(200).json({
      Name,
      comment,
      rating,
      u_id,
      p_id,
      requiredId,
    });
  } catch (e) {
    console.log(e.message);
  }
};

const DeleteComment = async (req, res) => {
  try {
    let pool = await sql.connect(Config);
    const c_id = req.params.id;
    console.log(c_id);

    await pool
      .request()
      .query(`DELETE FROM Comments WHERE id='${c_id}'`, (err, result) => {
        if (err) throw err;
        res.status(200).json({
          c_id,
        });
      });
  } catch (e) {
    console.log(e.message);
  }
};



const EditComment = async (req, res) => {
  try {
    
    let pool = await sql.connect(Config);
    const c_id = req.params.id;
    const { comment, rating } = req.body;
    
 
    await pool
      .request()
      .query(`UPDATE dbo.Comments
      SET Comment = '${comment}' , Rate = '${rating}'
       where id = ${c_id}`, (err, result) => {
    

        if (err) throw err;
        res.status(200).json({
          c_id,
          comment,
          rating,
        });
      });
  } catch (e) {
    console.log(e.message);
  }
};



module.exports = { getComments, saveComment, DeleteComment , EditComment };
