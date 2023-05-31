const express = require("express");
const app = express();
const port = 3000;
const users = require("./users");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const newUsers = req.body;
  users.push(newUsers);
  // console.log(req.body)
  res.send(newUsers);
});

app.get("/users/:id", (req, res) => {
  console.log(req.params);
  const usersById = users.find((element) => element.id == req.params.id);
  res.send(usersById);
});

app.delete("/users/:id", (req, res) => {
  let i = 0;
  while (i < users.length) {
    if (users[i].id === req.params.id) {
      users.splice(i, 1);
      res.send("Data pengguna berhasil dihapus");
      break;
    }
    
    i++;
    if (i == users.length) {
      res.send("Data pengguna tidak ditemukan");
      break;
    }
  }
});

app.put("/users/:id", (req, res) => {
    const body = req.body;
    let i = 0;
    while (i < users.length) {
      if (users[i].id == req.params.id) {
        users.splice(i, 1, body);
        res.send({message: "Data pengguna berhasil diubah", data: body});
        break;
      }
      i++;
      if (i == users.length) {
        res.send("Data pengguna tidak ditemukan");
        break;
      }
    }
  }); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
