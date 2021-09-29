import express from 'express';
import routes from './routes/index' // importação das rotas

const app = express();

routes(app) // utilizacao das rotas

app.listen(process.env.PORT || 3030);
