const Config = require("../Config/dbConf");
const sql = require("mssql/msnodesqlv8");
const moment = require("moment");
const bcrypt = require("bcryptjs");

const getLast = async (req, res ) => {
  try {
    let pool = await sql.connect(Config);
    let allE = await pool.request().query("SELECT TOP 5 * from dbo.Users ORDER BY ID DESC; ");
    return res.json(allE.recordset);
  } catch (e) {
    console.log(e);
  }
}
const getall = async (req, res) => {
  try {
    let pool = await sql.connect(Config);
    let allE = await pool.request().query("SELECT * from dbo.Users");
    return res.json(allE.recordset);
  } catch (e) {
    console.log(e);
  }
};

const save = async (req, res) => {
  try {
    let pool = await sql.connect(Config);
    const { firstname, last_name, password, email } = req.body;
   const age = moment(new Date(req.body.age).getTime()).format("LL");
    await pool.request().query(
      `SELECT count (*) as exist
        from Users 
        Where Email = '${email}' `,
      async (err, result, fields) => {
        if (err) throw err;
        if (result.recordset[0].exist) {
          res.status(400).send("User with this Email already exists");
          return;
        }
        


      //  console.log("asdao");
        await pool.request().query(`INSERT INTO Users VALUES 
         ( '${firstname}', '${last_name}' , '${password}' ,'${email}'
           , '${age}'
          )`,(err , result) => { 
            if (err) throw err;
            res.status(200).json({
                firstname,
                last_name,
                email,
                password,
                age,
            })
          });
      }
    );
  } catch (e) {
    console.log(e.message);
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  let pool = await sql.connect(Config);
  await pool.request().query(
    `SELECT Id, FName, LName, DateOfBirth ,Email,Password
    from Users 
    Where Email = '${email}' `,
    (err, result) => {
      if (err) {
        res.status(400).json({ message: "not Found" });
        return;
      }
      if (!result.recordset[0]){
        res.status(400).send("Email is not registered!");
        return ;
      }
      if ( result.recordset[0].Password === password) {
        res.status(200).send(result.recordset[0]);
      }
      else {
        res.status(400).send("Password is not correct!");
      }
    }
  );
};

const DeleteUser = async (req, res) => {
  try {
    let pool = await sql.connect(Config);
    const p_id = req.params.id;
    console.log(p_id);

    await pool
      .request()
      .query(`DELETE FROM Users WHERE ID='${p_id}'`, (err, result) => {
        if (err) throw err;
        res.status(200).json({
         p_id,
        });
      });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { DeleteUser,Login, getall, save , getLast};
