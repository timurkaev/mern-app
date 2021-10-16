const Router = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const router = new Router();

//api/auth/signup
router.post('/signup',
  [
    check('email', 'Некорректный email').isEmail(),
      check('password', 'Минимальная длина пароля 6 символов')
      .isLength({min: 6})
  ],
  async (req, res, next) => {
  try {
    console.log(req.body);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Некорректные данные при регистрации', errors
      })
    }

    const {email, password, fullName, lastName} = req.body;

    const candidate = await User.findOne({email: req.body.email});

    if (candidate) {
      return res.status(400).json({message: `Пользователь с таким email уже создан`})
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const user = new User({email, password: hashedPassword, fullName, lastName});

    await user.save();

    res.json({message: 'Пользователь создан'});

    next()

  } catch (e) {
    console.log(e);
    res.send({ message: 'Что-то пошло не так попробуйте снова епта'})
  }
});

//api/auth/login

router.post('/login',
    async (req, res) => {
      try {
        const {email, password, fullName, lastName} = req.body;
        const user = await User.findOne({email});
        if (!user) {
          return res.status(404).json({message: "Неверный email или пароль"})
        }
        const isPassValid = bcrypt.compareSync(password, user.password);
        if (!isPassValid) {
          return res.status(400).json({message: "Неверный email или пароль"})
        }
        const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"});
        return res.json({
          token,
          user: {
            id: user.id,
            email: user.email,
            fullName: user.fullName,
            lastName: user.lastName
          }
        })
      } catch (e) {
        console.log(e);
        res.send({message: "Ошибка сервера"})
      }
    });

module.exports = router;