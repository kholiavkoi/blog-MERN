import { body } from 'express-validator'

export const registerValidation = [
    body('email', 'invalid email format').isEmail(),
    body('password', 'password requires min 5 symbols').isLength({ min: 5 }),
    body('fullName', 'enter correct name').isLength({ min: 3 }),
    body('avatarUrl', 'url is not valid').optional().isURL(),
]

export const loginValidation = [
    body('email', 'invalid email format').isEmail(),
    body('password', 'password requires min 5 symbols').isLength({ min: 5 }),
]

export const postCreateValidation = [
    body('title', 'Enter post title').isLength({min: 3}).isString(),
    body('text', 'Enter post text').isLength({ min: 3 }).isString(),
    body('tags', 'Incorrect tag format (enter string)').optional().isString(),
    body('imageUrl', 'Incorrect image url').optional().isString(),
]