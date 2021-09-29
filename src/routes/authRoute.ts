import authController from '../app/controllers/authController';

export default (app: any) => {
    app.get('/teste', authController.auth)
}


