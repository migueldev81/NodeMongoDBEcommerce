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

router.get('/product', getProducts);
router.get('/product/:productId', getProduct);
router.post('/product', addProduct);
router.put('/product/:productId', updateProduct);
router.delete('/product/:productId', deleteProduct);

//Auth
import { signup, login } from '../controllers/auth.controller.js';

router.post('/auth/signup', signup);
router.post('/auth/login', login);

//User
import {
  getUsers,
  getUser,
  getUserStats,
  updateUser,
  deleteUser,
} from '../controllers/user.controller.js';

router.get('/user', getUsers);
router.get('/user/find/:userId', getUser);
router.get('/user/stats', getUserStats);
router.put('/user/:userId', updateUser);
router.delete('/user/:userId', deleteUser);

//Order
import {
  getOrders,
  getUserOrders,
  getMonthlyIncome,
  addOrder,
  updateOrder,
  deleteOrder,
} from '../controllers/order.controller.js';

router.get('/order', getOrders);
router.get('/order/:userId', getUserOrders);
router.get('/order/income', getMonthlyIncome);
router.post('/order', addOrder);
router.put('/order/:orderId', updateOrder);
router.delete('/order/:orderId', deleteOrder);

//Cart
import {
  getAllCart,
  getUserCart,
  addCart,
  updateCart,
  deleteCart,
} from '../controllers/cart.controller.js';

router.get('/cart', getAllCart);
router.get('/cart/find/:userId', getUserCart);
router.post('/cart', addCart);
router.put('/cart/:cartId', updateCart);
router.delete('/cart/:cartId', deleteCart);

export default router;
