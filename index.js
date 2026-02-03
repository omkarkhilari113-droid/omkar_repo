
const port = 3000;
const server=require('./server');

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
