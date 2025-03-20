import express from 'express';
import cors from 'cors';
import FieldRouter from './Router/FieldRouter';
import CropRouter from './Router/CropRouter';
import StaffRouter from './Router/StaffRouter';
import EquipmentRouter from './Router/EquipmentRouter';
import VehicleRouter from './Router/VehicleRouter';
import LogRouter from './Router/LogRouter';
import dotenv from 'dotenv';
import authRoutes, {authenticateToken} from "./Router/authRoutes";

const app = express();
dotenv.config();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use('/field', FieldRouter);
app.use('/crop', CropRouter);
app.use('/staff', StaffRouter);
app.use('/equipment', EquipmentRouter);
app.use('/vehicle', VehicleRouter);
app.use('/log', LogRouter);
app.use('/auth', authRoutes);

console.log("Loaded SECRET_KEY:", process.env.SECRET_KEY);
app.use(authenticateToken);


app.listen(8080, () => {
    console.log('Server running on port 8080');
});