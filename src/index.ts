import app from "./server"

const PORT = process.env.PORT! || 8000

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
