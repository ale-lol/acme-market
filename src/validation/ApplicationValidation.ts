import { check } from "express-validator";

const creationValidator = [
  check("create_date")
    .exists({ checkNull: true, checkFalsy: true })
    .isDate()
    .trim()
    .escape(),
  check("status")
    .exists({ checkNull: true, checkFalsy: true })
    .isString()
    .isIn(['PENDING', 'REJECTED', 'CANCELLED', 'ACCEPTED', 'DUE']),
  check("comments")
    .optional()
    .isString()
    .trim()
    .escape(),
  check("reason")
    .optional()
    .isString()
    .trim()
    .escape(),
];
export { creationValidator };
