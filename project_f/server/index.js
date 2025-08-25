import express from 'express';
import multer from 'multer';
import cors from 'cors';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import swaggerUi from 'swagger-ui-express';
import { specs } from './swagger.js';
import usersRouter from './routes/users.js';
import productsRouter from './routes/products.js';
import cartRouter from './routes/cart.js';

// 設定區
const upload = multer();
let whitelist = [
  'http://localhost:5500',
  'http://localhost:3000',
  'http://localhost:3005',
  'http://127.0.0.1:3005',
  'http://127.0.0.1:5500',
  'http://127.0.0.1:3000',
];
let corsOptions = {
  credentials: true,
  origin(origin, callback) {
    // 允許沒有 origin 的請求（如 Postman、curl 等）
    if (!origin) {
      callback(null, true);
      return;
    }

    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      console.log(`CORS blocked: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
};

// 路由區
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger 文檔路由
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: '購物車 API 文檔',
  }),
);

app.get('/', (req, res) => {
  res.send("首頁 - 查看 API 文檔請前往 <a href='/api-docs'>/api-docs</a>");
});

app.use('/api/users', usersRouter);
app.use('/api/pts', productsRouter);
app.use('/api/cart', cartRouter);

app.listen(3005, () => {
  console.log('主機啟動 http://localhost:3005');
  console.log('API 文檔: http://localhost:3005/api-docs');
});
