import express from "express"
import cors from "cors"
import routes from "./src/routes";
import timeout from "connect-timeout"

const server = express();

server.use(cors({
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  origin: "*"
}))

server.use(timeout('5s'))

server.use(express.json())

server.use(routes)

server.listen(3005);