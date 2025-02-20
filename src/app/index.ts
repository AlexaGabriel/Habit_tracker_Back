import express from 'express'
import cors from "cors"
import Userrouter from '../modules/user/routes/UserRou'
import Catrouter from '../modules/category/routes/CatRou'
import HabRouter from '../modules/habit/routes/HabRou'
import { errorMiddleware } from './ErrorMiddleware'

const app = express()
const port = 3000

app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.get("/", (req, res) => {
    res.send("eu mandei você não entrar aqui");
})
app.use("/user", Userrouter);
app.use("/category", Catrouter)
app.use("/Habit", HabRouter)
app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`)
})