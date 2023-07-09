const { createOneUser, loginUser } = require("../controllers/user.controller");
const { Router } = require("express");

class UserRouter {
  router() {
    const userRoutes = Router();

    userRoutes.post("/criarUsuario", createOneUser);
    userRoutes.post("/login", loginUser);
    // userRoutes.post("/criarUsuario", createOneUser);

    return userRoutes;
  }
}

module.exports = new UserRouter().router();
