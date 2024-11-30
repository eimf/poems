export const files = [
  {
    name: 'index.html',
    content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Project</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`,
    language: 'HTML'
  },
  {
    name: 'styles.css',
    content: `body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}`,
    language: 'CSS'
  },
  {
    name: 'app.js',
    content: `function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}`,
    language: 'JavaScript'
  }
];