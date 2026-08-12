import express from 'express';
import cors from 'cors';
import empleadosRouter from './routes/empleados.routes.js';
import login from './routes/login.routes.js';
import reciboDePagoRoutes from './routes/recibodepago.routes.js';
import signupRouter from './routes/signup.routes.js';
import prestacionesRouter from './routes/prestaciones.routes.js';
import arc from './routes/arc.routes.js';
import vacacionesRouter from './routes/vacaciones.routes.js';
import permisosRouter from './routes/permisos.routes.js';
import changepassword from './routes/changepassword.routes.js';
import constancideTrabajoRouter from './routes/constanciaDeTrabajo.routes.js';
import googleDriveRoutes from './routes/GoogleDrive.routes.js';
import notificacionRouter from './routes/notificaciones.routes.js';
import expedienteRouter from './routes/expediente.routes.js';
import estadisticasRouter from './routes/stadistic.routes.js';
import adminRouter from './routes/admin.routes.js';
import galeriaRouter from './routes/galeria.routes.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*', // Permitir cualquier origen
    credentials: true
}));
const apiRouter = express.Router();
apiRouter.use('/google-drive', googleDriveRoutes);
apiRouter.use('/notificaciones', notificacionRouter);
apiRouter.use(changepassword);
apiRouter.use('/expediente', expedienteRouter);
apiRouter.use(empleadosRouter);
apiRouter.use(signupRouter);
apiRouter.use(login);
apiRouter.use(reciboDePagoRoutes);
apiRouter.use(prestacionesRouter);
apiRouter.use(constancideTrabajoRouter);
apiRouter.use(arc);
apiRouter.use(vacacionesRouter);
apiRouter.use(permisosRouter);
apiRouter.use('/admin', adminRouter); // Rutas de administración
apiRouter.use('/estadisticas', estadisticasRouter);
apiRouter.use('/galeria', galeriaRouter);
app.use('/api', apiRouter);
export default app;