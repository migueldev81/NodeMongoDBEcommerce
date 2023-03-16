import { Router } from 'express';
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from '../middlewares/jwt.middleware.js';

const router = Router();

//Product
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.js';

router.get('/products', getProducts);
router.get('/product/:productId', getProduct);
router.post('/product', addProduct);
router.put('/product/:productId', updateProduct);
router.delete('/product/:productId', deleteProduct);

//Auth
import { signup, login } from '../controllers/auth.controller.js';

router.post('/signup', signup);
router.post('/login', login);

//User
import {
  getUsers,
  getUser,
  getUserStats,
  updateUser,
  deleteUser,
} from '../controllers/user.controller.js';

router.get('/', getUsers);
router.get('/find/:userId', getUser);
router.get('/stats', getUserStats);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

//Order
import {
  getOrders,
  getUserOrders,
  getMonthlyIncome,
  addOrder,
  updateOrder,
  deleteOrder,
} from '../controllers/order.controller.js';

router.get('/', getOrders);
router.get('/:userId', getUserOrders);
router.get('/income', getMonthlyIncome);
router.post('/', addOrder);
router.put('/:orderId', updateOrder);
router.delete('/:orderId', deleteOrder);

//Cart
import {
  getAllCart,
  getUserCart,
  addCart,
  updateCart,
  deleteCart,
} from '../controllers/cart.controller.js';

router.get('/', getAllCart);
router.get('/find/:userId', getUserCart);
router.post('/', addCart);
router.put('/:cartId', updateCart);
router.delete('/:cartId', deleteCart);

export default router;
