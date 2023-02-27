import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'

const app = express()

app.use(cors({credentials: true, origin: process.env.CLIENT_URL}))
app.use(cookieParser())

app.get('/', (req, res) => res.send('api is healthy'))
app.get('/github', (req, res) => {
  const {code} = req.query

  const gitHubUser = await getGitHubUser(code as string)
})
app.get('/refresh', (req, res) => {})
app.get('/logout', (req, res) => {})
app.get('/logout-all', (req, res) => {})
app.get('/me', (req, res) => {})

app.listen(3000)
