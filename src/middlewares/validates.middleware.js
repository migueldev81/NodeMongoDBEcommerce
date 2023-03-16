import { check } from 'express-validator';
import { validateResult } from '../helpers/validates.helper.js';

export const validateProduct = [
  check('title')
    .isLength({ min: 5 })
    .withMessage('El producto tiene minimo 5 caracteres'),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
export const validateAuth = [
  check('username')
    .isLength({ min: 5 })
    .withMessage('El username tiene minimo 5 caracteres'),
  check('password')
    .isLength({ min: 5 })
    .withMessage('El password tiene minimo 5 caracteres'),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];
