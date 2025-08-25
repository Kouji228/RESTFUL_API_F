import express from 'express';
import multer from 'multer';

const upload = multer();
const router = express.Router();

/**
 * @swagger
 * /api/cart:
 *   get:
 *     summary: 獲取購物車內容
 *     description: 獲取當前使用者的購物車內容
 *     tags: [購物車管理]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: 成功獲取購物車內容
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       productId:
 *                         type: string
 *                         example: "123"
 *                       quantity:
 *                         type: integer
 *                         example: 2
 *                       price:
 *                         type: number
 *                         example: 25000
 *                 message:
 *                   type: string
 *                   example: 已獲取購物車內容
 *       401:
 *         description: 未授權或身份驗證失敗
 */
// 獲取購物車內容
router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: [],
    message: '已獲取購物車內容',
  });
});

/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: 新增商品到購物車
 *     description: 將商品新增到使用者的購物車中
 *     tags: [購物車管理]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required: [productId, quantity]
 *             properties:
 *               productId:
 *                 type: string
 *                 description: 產品 ID
 *                 example: "123"
 *               quantity:
 *                 type: integer
 *                 description: 數量
 *                 example: 1
 *     responses:
 *       201:
 *         description: 商品新增到購物車成功
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *                   example: 商品新增到購物車成功
 *       400:
 *         description: 新增資料不完整
 *       401:
 *         description: 未授權或身份驗證失敗
 */
// 新增商品到購物車
router.post('/', upload.none(), (req, res) => {
  res.status(201).json({
    status: 'success',
    data: {},
    message: '商品新增到購物車成功',
  });
});

/**
 * @swagger
 * /api/cart/{id}:
 *   put:
 *     summary: 更新購物車商品數量
 *     description: 更新購物車中特定商品的數量
 *     tags: [購物車管理]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: 購物車項目 ID
 *         example: "cart123"
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required: [quantity]
 *             properties:
 *               quantity:
 *                 type: integer
 *                 description: 新數量
 *                 example: 3
 *     responses:
 *       200:
 *         description: 購物車商品數量更新成功
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *                   example: 購物車商品數量更新成功
 *       400:
 *         description: 更新失敗或參數錯誤
 *       401:
 *         description: 未授權或身份驗證失敗
 */
// 更新購物車商品數量
router.put('/:id', upload.none(), (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    status: 'success',
    data: { id },
    message: '購物車商品數量更新成功',
  });
});

/**
 * @swagger
 * /api/cart/{id}:
 *   delete:
 *     summary: 從購物車移除商品
 *     description: 從購物車中移除特定商品
 *     tags: [購物車管理]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: 購物車項目 ID
 *         example: "cart123"
 *     responses:
 *       200:
 *         description: 商品從購物車移除成功
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "cart123"
 *                 message:
 *                   type: string
 *                   example: 商品從購物車移除成功
 *       401:
 *         description: 未授權或身份驗證失敗
 */
// 從購物車移除商品
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    status: 'success',
    data: { id },
    message: '商品從購物車移除成功',
  });
});

/**
 * @swagger
 * /api/cart/clear:
 *   delete:
 *     summary: 清空購物車
 *     description: 清空使用者的整個購物車
 *     tags: [購物車管理]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: 購物車清空成功
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *                   example: 購物車清空成功
 *       401:
 *         description: 未授權或身份驗證失敗
 */
// 清空購物車
router.delete('/clear', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {},
    message: '購物車清空成功',
  });
});

export default router;
