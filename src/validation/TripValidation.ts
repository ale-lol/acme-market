import { check } from "express-validator";

const creationValidator = [
  check("ticker")
    .exists({ checkNull: true, checkFalsy: true })
    .isString()
    .trim()
    .escape(),
  check("title")
    .exists({ checkNull: true, checkFalsy: true })
    .isString()
    .trim()
    .escape(),
  check("description")
    .exists({ checkNull: true, checkFalsy: true })
    .isString()
    .trim()
    .escape(),
  check("price")
    .exists({ checkNull: true, checkFalsy: true })
    .isNumeric()
    .trim()
    .escape(),
  check("list_of_requirements")
    .optional()
    .isArray()
    .trim()
    .escape(),
  check("start_date")
    .exists({ checkNull: true, checkFalsy: true })
    .isDate()
    .trim()
    .escape(),
  check("end_date")
    .exists({ checkNull: true, checkFalsy: true })
    .isDate()
    .trim()
    .escape(),
  check("pictures")
    .optional()
    .isArray()
    .trim()
    .escape(),
  check("reason")
    .optional()
    .isString()
    .trim()
    .escape(),
];
export { creationValidator };
