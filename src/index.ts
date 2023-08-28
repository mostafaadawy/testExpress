import Express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = Express();
const port = process.env.PORT;
//set end point
app.get('/api', (req, res) => {
  res.send('Hello World');
});
// check port ->avoid already for use
app.listen(port, () => console.log(`listening on port ${port}`));
export default app;
