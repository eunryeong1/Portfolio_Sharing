import { Router } from "express";
import { UserModel } from "../db/schemas/user";
import { login_required } from "../middlewares/login_required";

const paginationRouter = Router();

paginationRouter.get(
  "/profiles",
  login_required,
  async function (req, res, next) {
    try {
      // url 쿼리에서 page 받기, 기본값 1
      const page = Number(req.query.page || 1);
      // url 쿼리에서 perPage 받기, 기본값 10
      const perPage = Number(req.query.perPage || 10);

      // 전체 프로필 수 쿼리하기
      const [total, profiles] = await Promise.all([
        UserModel.countDocuments({}),
        UserModel.find({})
          .sort({ createdAt: -1 })
          .skip(perPage * (page - 1))
          .limit(perPage),
      ]);

      const totalPage = Math.ceil(total / perPage);

      res.status(200).send({ profiles, page, perPage, totalPage });
    } catch (error) {
      next(error);
    }
  }
);

export { paginationRouter };
