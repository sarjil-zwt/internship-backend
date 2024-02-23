const { Op } = require("sequelize");
const db = require("../models");

const User = db.User;
const UserMetaData = db.UserMetaData;
const ProjectMeta = db.ProjectMeta;

exports.gerUsers = async (req, res, next) => {
  console.log(req.body);

  const users = await User.findAll({
    attributes: ["id", "vFirstName", "vLastName"],
    where: {
      [Op.or]: [
        db.Sequelize.where(
          db.Sequelize.fn("lower", db.Sequelize.col("Technologies.id")),
          db.Sequelize.Op.eq,
          req.body.technologies
        ),
        //   "$Technologies.id$"={
        //       req.body.technologies
        //   }
      ],
      //   "$Technologies.id$": {
      //     [Op.or]: req.body.technologies,
      //   },
      //   "$Frameworks.id$": {
      //     [Op.or]: req.body.frameworks,
      //   },
    },
    include: [
      {
        as: "Technologies",
        model: ProjectMeta,
        attributes: ["id", "vName", "eMetaType"],
        where: {
          eMetaType: "Technology",
        },
        through: {
          attributes: [],
        },
        required: false,
        right: true,
      },
      {
        as: "Frameworks",
        model: ProjectMeta,
        attributes: ["id", "vName", "eMetaType"],
        where: {
          eMetaType: "Framework",
        },
        through: {
          attributes: [],
        },
      },
    ],
  });

  res.status(200).json({
    users,
  });
};
