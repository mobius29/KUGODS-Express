const { runQuery } = require("../../lib/database");

const getAllUser = async (req, res) => {
  const sql = 'SELECT nickname FROM user';

  try {
    const result = await runQuery(sql);
    return res.status(200).send(result);

  } catch (e) {
    console.log(e);
    return res.status(500).send('Internal server error');
  }
};

const findByID = async (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM user WHERE id = ?';
  const data = [id];

  try {
    const result = await runQuery(sql, data);

    if (result.length === 1) {
      return res.status(200).send(result[0]);
    } else{
      return res.status(400).send("Bad Request");
    }

  } catch (e) {
    console.log(e);
    return res.status(500).send('Internal server error');
  }
};

const includeNick = async (req, res) => {
  const { string } = req.body;

  if (!string) {
    return res.status(400).send('Bad request');}

  const sql = 'SELECT * FROM user WHERE nickname LIKE "%?%"';;
  const data = [string];

  try {
    const result = await runQuery(sql, data);

    if (result.length === 0) {
      return res.status(200).send('empty');
    } else {
      return res.status(200).send(result);
    }

  } catch (e) {
    console.log(e);
    return res.status(500).send('Internal server error');
  }
};

const updateByID = async (req, res) => {
  const { id } = req.params;
  const sql = 'UPDATE user SET nickname = "" WHERE id = ?;';
  const data = [id];

  try {
    const result = await runQuery(sql, data);

    if (result.affectedRows === 1) {
      return res.status(200).send('OK');
    }else{
        return res.status(400).send("Bad Request");
      }

  } catch (e) {
    console.log(e);
    return res.status(500).send('Internal server error');
  }
};
 
const deleteByID = async (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM user WHERE id = ?;';
  const data = [id];

  try {
    const result = await runQuery(sql, data);

    if (result.affectedRows === 1) {
      return res.status(200).send('OK');
    }else{
        return res.status(400).send("Bad Request");
      }

  } catch (e) {
    console.log(e);
    return res.status(500).send('Internal server error');
  }
};



module.exports = {
  getAllUser, 
  findByID,
  includeNick,
  updateByID,
  deleteByID,
};
