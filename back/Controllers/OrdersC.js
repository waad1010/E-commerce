const Config = require("../Config/dbConf");
const sql = require("mssql/msnodesqlv8");

const getAllOrders = async (req, res) => {
  try {
    let pool = await sql.connect(Config);
    let allE = await pool.request().query("SELECT * from dbo.Orders");
    return res.json(allE.recordset);
  } catch (e) {
    console.log(e);
  }
};

const saveOrder = async (req, res) => {
  try {
   
    let pool = await sql.connect(Config);
    const { total_price, u_id, address, cardnum, data } = req.body;

    await pool.request().query(
      `INSERT INTO Orders VALUES 
         ( '${total_price}', '${u_id}' , '${address}' ,'${cardnum}')`,
      (err, result) => {
        if (err) throw err;
       
      }
    );

    let allE = await pool.request().query(`SELECT TOP 1 * FROM dbo.Orders  
          ORDER BY Id DESC; `);
    const requiredId = allE.recordset[0].Id;
    console.log(requiredId);

    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < data[i].amount; j++) {
        
     await pool.request().query(
      `INSERT INTO ordered_item VALUES 
         ( ${data[i].id}, ${requiredId})`,
      (err, result) => {
        if (err) throw err;
       
      }
    );
      }
    }
    res.status(200).json({
      total_price,
      u_id,
      address,
      cardnum,
      data
    });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { getAllOrders, saveOrder };
