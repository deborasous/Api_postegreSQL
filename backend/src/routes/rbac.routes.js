const {
  createPermission,
  listPermission,
  listRole,
  createRole,
  createPermissionByRole,
  listPermissionByRole,
} = require("../controllers/rbac.controller");
const { Router } = require("express");

class RBACRouter {
  router() {
    const rbacRoutes = Router();

    rbacRoutes.post("/criarPermissao", createPermission);
    rbacRoutes.get("/listarPermissoes", listPermission);
    rbacRoutes.post("/criarFuncao", createRole);
    rbacRoutes.get("/listarFuncao", listRole);
    rbacRoutes.post("/criarFuncao", createPermissionByRole);
    rbacRoutes.get("/listarFuncao", listPermissionByRole);

    return rbacRoutes;
  }
}

module.exports = new RBACRouter().router();
