const router = require('express').Router();
const {register, login, authenticate, updateProfile} = require('../controllers/authControllers');
const {restrict} = require('../middlewares/authMiddlewares');
const {image} = require('../libs/multer');

router.post('/register', register);
router.post('/login', login);
router.get('/authenticate', restrict, authenticate);
router.put('/updateprofile/:id', image.single('image'), updateProfile);

module.exports = router;