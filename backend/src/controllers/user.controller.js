const { User } = require("../models/users");
const { sign } = require("jsonwebtoken");
const { config } = require("dotenv");
config();

class UserController {
  async createOneUser(req, res) {
    try {
      const { traineeId, name, email, password } = req.body;

      const dataUsers = await User.create({
        traineeId,
        name,
        email,
        password,
      });

      return res.status(201).send(dataUsers);
    } catch (error) {
      return res.status(400).send({
        message: "Não foi possível criar o registro do usuário.",
        cause: error.message,
      });
    }
  }

  async loginUser(req, res) {
    try {
      const { email, password } = req.body;

      const dataUser = await User.findOne({
        where: { email: email },
      });

      if (dataUser.password === password) {
        const payload = { email: dataUser.email };

        const token = sign(payload, process.env.SECRET_JWT);

        return res.status(200).send({ token });
      } else {
        return res.status(400).send({
          message: "Senha incorreta, você tem 3 tentativas.",
          cause: error.messages,
        });
      }
    } catch (error) {
      return res.status(401).send({
        message: "Tentativa de login falhou.",
        cause: error.message,
      });
    }
  }
}

module.exports = new UserController();
