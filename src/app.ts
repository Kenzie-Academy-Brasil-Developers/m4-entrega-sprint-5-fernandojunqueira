import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { categoriesRoutes, propertiesRoutes, sessionRouter, usersRouter } from "./routers"
import { handleError } from "./errors"
import schedulesRoutes from "./routers/schedules.routes"

const app = express()

app.use(express.json())

app.use("/users",usersRouter)
app.use("/login",sessionRouter)
app.use("/categories",categoriesRoutes)
app.use("/properties",propertiesRoutes)
app.use("/schedules",schedulesRoutes)

app.use(handleError)

export default app