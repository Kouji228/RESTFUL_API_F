import express from 'express';
import multer from 'multer';

const upload = multer();

const router = express.Router();

/**
 * @swagger
 * /api/pts:
 *   get:
 *     summary: 獲取所有產品
 *     description: 獲取系統中所有產品的資訊
 *     tags: [產品管理]
 *     responses:
 *       200:
 *         description: 成功獲取所有產品
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
 *                 message:
 *                   type: string
 *                   example: 已獲取所有產品
 */
// 獲取所有產品
router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: [],
    message: '已 獲取所有產品',
  });
});

/**
 * @swagger
 * /api/pts/search:
 *   get:
 *     summary: 搜尋產品
 *     description: 根據關鍵字搜尋產品
 *     tags: [產品管理]
 *     parameters:
 *       - in: query
 *         name: key
 *         schema:
 *           type: string
 *         description: 搜尋關鍵字
 *         example: "手機"
 *     responses:
 *       200:
 *         description: 搜尋成功
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
 *                     key:
 *                       type: string
 *                       example: "手機"
 *                 message:
 *                   type: string
 *                   example: 搜尋產品成功
 */
// 搜尋產品
router.get('/search', (req, res) => {
  // 網址參數(查詢參數)會被整理到 req 中的 query 裡
  const key = req.query.key;
  res.status(200).json({
    status: 'success',
    data: { key },
    message: '搜尋產品成功',
  });
});

/**
 * @swagger
 * /api/pts/{id}:
 *   get:
 *     summary: 獲取特定產品
 *     description: 根據 ID 獲取特定產品的詳細資訊
 *     tags: [產品管理]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: 產品 ID
 *         example: "123"
 *     responses:
 *       200:
 *         description: 成功獲取產品資訊
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
 *                       example: "123"
 *                 message:
 *                   type: string
 *                   example: 已獲取產品資訊
 */
// 獲取特定 ID 的產品
router.get('/:id', (req, res) => {
  // 路由參數
  const id = req.params.id;
  res.status(200).json({
    status: 'success',
    data: { id },
    message: `已 獲取 ${id} 的產品`,
  });
});

/**
 * @swagger
 * /api/pts:
 *   post:
 *     summary: 新增產品
 *     description: 新增一個產品到系統
 *     tags: [產品管理]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: 產品名稱
 *                 example: "iPhone 13"
 *               price:
 *                 type: number
 *                 description: 產品價格
 *                 example: 25000
 *               description:
 *                 type: string
 *                 description: 產品描述
 *                 example: "最新款 iPhone 13，搭載 A15 仿生晶片"
 *               image:
 *                 type: string
 *                 description: 產品圖片 URL
 *                 example: "https://via.placeholder.com/150"
 *     responses:
 *       201:
 *         description: 產品新增成功
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
 *                   example: 新增一個產品成功
 *       400:
 *         description: 新增資料不完整或價格無效
 */
// 新增一個產品
router.post('/', (req, res) => {
  res.status(201).json({
    status: 'success',
    data: {},
    message: '新增一個產品成功',
  });
});

/**
 * @swagger
 * /api/pts/{id}:
 *   put:
 *     summary: 更新產品
 *     description: 更新特定產品的資訊
 *     tags: [產品管理]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: 產品 ID
 *         example: "123"
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: 新產品名稱
 *                 example: "iPhone 13 Pro"
 *               price:
 *                 type: number
 *                 description: 新產品價格
 *                 example: 28000
 *               description:
 *                 type: string
 *                 description: 新產品描述
 *                 example: "最新款 iPhone 13 Pro，搭載 A15 仿生晶片"
 *               image:
 *                 type: string
 *                 description: 新產品圖片 URL
 *                 example: "https://via.placeholder.com/150"
 *     responses:
 *       200:
 *         description: 產品更新成功
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
 *                       example: "123"
 *                 message:
 *                   type: string
 *                   example: 更新產品成功
 *       400:
 *         description: 更新失敗或參數錯誤
 */
// 更新(特定 ID 的)產品
router.put('/:id', (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    status: 'success',
    data: { id },
    message: '更新產品成功',
  });
});

/**
 * @swagger
 * /api/pts/{id}:
 *   delete:
 *     summary: 刪除產品
 *     description: 刪除特定產品
 *     tags: [產品管理]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: 產品 ID
 *         example: "123"
 *     responses:
 *       200:
 *         description: 產品刪除成功
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
 *                       example: "123"
 *                 message:
 *                   type: string
 *                   example: 刪除產品成功
 */
// 刪除(特定 ID 的)產品
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    status: 'success',
    data: { id },
    message: '刪除產品成功',
  });
});

/**
 * @swagger
 * /api/pts/login:
 *   post:
 *     summary: 產品管理登入
 *     description: 產品管理系統的使用者登入
 *     tags: [產品管理]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               account:
 *                 type: string
 *                 description: 使用者帳號
 *                 example: "admin"
 *               password:
 *                 type: string
 *                 description: 使用者密碼
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: 登入成功
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: string
 *                   description: 認證 token
 *                   example: "token123"
 *                 message:
 *                   type: string
 *                   example: 使用者登入成功
 */
// 產品管理登入
router.post('/login', upload.none(), (req, res) => {
  const { account, password } = req.body;
  res.status(200).json({
    status: 'success',
    data: 'token',
    message: `使用者${account}登入成功`,
  });
});

/**
 * @swagger
 * /api/pts/logout:
 *   post:
 *     summary: 產品管理登出
 *     description: 產品管理系統的使用者登出
 *     tags: [產品管理]
 *     responses:
 *       200:
 *         description: 登出成功
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: string
 *                   description: 認證 token
 *                   example: "token123"
 *                 message:
 *                   type: string
 *                   example: 使用者登出成功
 */
// 產品管理登出
router.post('/logout', checkToken, (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'token',
    message: '使用者登出成功',
  });
});

/**
 * @swagger
 * /api/pts/status:
 *   post:
 *     summary: 檢查產品管理登入狀態
 *     description: 檢查產品管理系統的登入狀態
 *     tags: [產品管理]
 *     responses:
 *       200:
 *         description: 檢查成功
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: string
 *                   description: 認證 token
 *                   example: "token123"
 *                 message:
 *                   type: string
 *                   example: 檢查登入狀態成功
 */
// 檢查產品管理登入狀態
router.post('/status', checkToken, (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'token',
    message: '檢查登入狀態成功',
  });
});

function checkToken(req, res, next) {
  next();
}

export default router;
