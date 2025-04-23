import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes';

dotenv.config();

const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.get('/', (_req: Request, res: Response) => {
  res.send(`
    <html>
      <head>
        <style>
          @keyframes pulse {
            0% { opacity: 0.5; transform: scale(0.98); }
            50% { opacity: 1; transform: scale(1); }
            100% { opacity: 0.5; transform: scale(0.98); }
          }
          body {
            background-color: #0f0f0f;
            color: #facc15; /* yellow-500 */
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            animation: pulse 2s infinite;
            font-size: 2rem;
          }
        </style>
      </head>
      <body>
        This is devsch server, welcome!
      </body>
    </html>
  `);
});


app.use('/api/auth', authRoutes);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('🔥 Global Error:', err.message);
  res.status(500).json({ message: 'Internal server error' });
});

const PORT: number = parseInt(process.env.PORT || '5000', 10);
const MONGO_URI: string = process.env.MONGO_URI!;

if (!MONGO_URI) {
  console.error('❌ MongoDB URI is not defined in environment variables!');
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');

    const env = process.env.NODE_ENV;
    const host = env === 'production' ? 'https://your-live-domain.com' : `http://localhost:${PORT}`;

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on ${host}`);
    });
  })
  .catch((err: Error) => {
    console.error('❌ DB connection error:', err.message);
    process.exit(1);
  });
