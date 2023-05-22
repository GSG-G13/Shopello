import express from 'express';
import getSearchProducts from '../controllers/getSearchProducts.js';

const router = express.Router();

router.post('/search/:product', getSearchProducts);

export default router;
