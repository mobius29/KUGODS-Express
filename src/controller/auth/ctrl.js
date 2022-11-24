const { runQuery } = require("../../lib/database");
const jwt = require("../../utils/jwt");

const register = async (req, res) => {
  const { username, password, nickname } = req.body;

  if (!username || !password || !nickname) {
    return res.status(400).send('Bad request');}

  const sql = 'INSERT INTO user (username, password, nickname) VALUES (?, ?, ?)';
  const data = [username, password, nickname];

  try {
    const result = await runQuery(sql, data);

    if (result.affectedRows === 1) {
      return res.status(201).send('Created');}

  } catch (e) {
    console.log(e);
    return res.status(500).send('Internal server error');
  }
};


const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password){
    return res.status(400).send('Bad request');}

  const sql = 'SELECT * FROM user WHERE username = ? AND password = ?';
  const data = [username, password];

  try{
    const result = await runQuery(sql, data);

    if (result.affectedRows === 1) {
      const token = jwt.sign(result)
      return res.status(200).send('OK');
    } else {
      return res.status(401).send('Unauthorized');
    }
  } catch(e) {
    console.log(e);
    return res.status(500).send('Internal server error');
  }
};


const logout = async (req, res) => {

};

module.exports = {
  register,
  login,
  logout,
};
