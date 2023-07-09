const { User } = require("../models/users");
const { Role } = require("../models/role");
const { Permission } = require("../models/permissions");

class RBAC {
  async createPermission(req, res) {
    try {
      const { description } = req.body;

      if (!description) {
        return res.status(400).send({
          message: "O campo descrição é obrigatório.",
        });
      }

      const permission = await Permission.findOne({
        where: {
          description: description,
        },
      });

      if (permission) {
        return res.status(400).send({
          message: "Permissão já existe.",
        });
      }

      const dataPermission = await Permission.create({ description });

      return res.status(201).send(dataPermission);
    } catch (error) {
      return res.status(400).send({
        message: "A permissão nãp pode ser criada.",
        cause: error.message,
      });
    }
  }

  async listPermission(req, res) {
    const data = await Permission.findAll();
    const total = await Permission.count();

    return res.status(200).send({
      records: data,
      total,
    });
  }

  async createRole(req, res) {
    try {
      const { description } = req.body;

      if (!description) {
        return res.status(400).send({
          message: "A descrição é um campo obrigatório",
          cause: error.message,
        });
      }

      const role = await Role.findOne({
        where: {
          description: description,
        },
      });
      if (role) {
        return res.status(400).send({
          message: "Função já existe",
        });
      }

      const dataRole = await Role.create({ description });

      return res.status(201).send(dataRole);
    } catch (error) {
      return res.status(500).send({
        message: "A função não pode ser criada",
        cause: error.message,
      });
    }
  }

  async listRole(req, res) {
    const data = await Role.findAll();
    const total = await Role.count();

    return res.status(200).send({
      records: data,
      total,
    });
  }

  async createPermissionByRole(){}
  async listPermissionByRole(){}
}

module.exports = new RBAC();
