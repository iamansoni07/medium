import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/user/signup', (c) => {
  return c.text('signup')
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('singin')
})

app.post('/api/v1/blog', (c) => {
  return c.text('createblog')
})

app.put('/api/v1/blog', (c) => {
  return c.text('updateblog')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('readblog')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('blogs')
})


export default app
