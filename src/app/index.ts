import express from 'express'
import cors from "cors"
import Userrouter from '../modules/user/routes/UserRou'
import { errorMiddleware } from './ErrorMiddleware'

const app = express()
const port = 3000

app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.get("/naoentreaqui", (req, res) => {
    res.send("eu mandei você não entrar aqui");
})
app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})
app.use("/user", Userrouter);

app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`)
})