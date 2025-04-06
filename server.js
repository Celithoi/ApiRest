import app from './app.js';  // Inclua a extensão .js


const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Escutando da porta ${port}`);
  console.log(`CRTL + Clique em http://localhost:${port}`);

});
