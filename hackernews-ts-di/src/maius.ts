import Maius from 'maius';

const app = new Maius({
  rootDir: __dirname,
});

app.listen(8001).then(() => {
  console.log('http://localhost:8001');
});
