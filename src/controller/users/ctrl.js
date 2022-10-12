const findByTag = (req, res) => {
  const { tag } = req.query;
  const people = obj_list.filter((obj) => obj.tags.includes(tag));

  if (people.length === 0) {
    res.send('존재하지 않습니다.');
  } else {
    res.send(people);
  }
};

const register = (req, res) => {
  const { name, age } = req.body;
  obj_list = obj_list.concat({
    id: id++,
    name,
    age,
  });

  res.send(obj_list);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  idx = obj_list.findIndex((obj) => obj.id === id);
  if (obj_idx === -1) {
    res.send('존재하지 않습니다.');
  } else {
    obj_list[idx] = { id, name, age };
    res.send(obj_list);
  }
};

const deleteByAge = (req, res) => {
  const { age } = req.params;
  const obj = obj_list.find((obj) => obj.age === age);

  if (obj === undefined) {
    res.send('존재하지 않습니다.');
  } else {
    obj_list = obj_list.filter((obj) => obj.age !== age);
    res.send(obj);
  }
};

module.exports = {
  findByTag,
  register,
  updateUser,
  deleteByAge,
};
