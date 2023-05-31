"use strict";
const userModel = require("../models/user");

class UserController {
  static async register(req, res, next) {
    console.log(req.body);
    const user = new userModel(req.body);

    try {
      await user.save();

      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { username, password } = req.body;

      const findUser = await userModel.findOne({ username: username }).exec();
      if (findUser) {
        if (findUser.password == password) {
          res.send("Login berhasil");
        } else {
          res.send("Password salah");
        }
      } else {
        // res.send("Username tidak ditemukan");
        res.status(400).json({ message: "Username tidak ditemukan" });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = UserController;
