import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: '購物車 RESTful API',
      version: '1.0.0',
      description:
        '一個完整的購物車系統 API，包含使用者管理、產品管理和購物車功能',
      contact: {
        name: 'API 支援',
        email: 'support@example.com',
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
    },
    servers: [
      {
        url: 'http://localhost:3005',
        description: '開發環境',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: '請在 Authorization header 中使用 Bearer token',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: '使用者 ID',
            },
            account: {
              type: 'string',
              description: '使用者帳號',
              example: 'user123',
            },
            name: {
              type: 'string',
              description: '使用者姓名',
              example: '張三',
            },
            mail: {
              type: 'string',
              format: 'email',
              description: '使用者信箱',
              example: 'user@example.com',
            },
            head: {
              type: 'string',
              description: '使用者頭像 URL',
              example: 'https://randomuser.me/api/portraits/men/1.jpg',
            },
          },
        },
        LoginRequest: {
          type: 'object',
          required: ['account', 'password'],
          properties: {
            account: {
              type: 'string',
              description: '使用者帳號',
              example: 'user123',
            },
            password: {
              type: 'string',
              description: '使用者密碼',
              example: 'password123',
            },
          },
        },
        RegisterRequest: {
          type: 'object',
          required: ['account', 'password', 'mail'],
          properties: {
            account: {
              type: 'string',
              description: '使用者帳號',
              example: 'user123',
            },
            password: {
              type: 'string',
              description: '使用者密碼',
              example: 'password123',
            },
            mail: {
              type: 'string',
              format: 'email',
              description: '使用者信箱',
              example: 'user@example.com',
            },
          },
        },
        ApiResponse: {
          type: 'object',
          properties: {
            status: {
              type: 'string',
              enum: ['success', 'fail', 'error'],
              description: '回應狀態',
            },
            data: {
              description: '回應資料',
            },
            message: {
              type: 'string',
              description: '回應訊息',
            },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'], // 指定包含 API 註解的路由檔案
};

export const specs = swaggerJsdoc(options);
