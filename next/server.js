
const express = require('express');
const next = require('next');
const compression = require('compression');
const stencil = require('stencil-components/hydrate');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = true;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(compression());

  // static assets
  server.get('/_next/*', handle);
  server.get('/img/*', handle);
  server.get('/video/*', handle);
  server.get('/__nextjs_original-stack-frame', handle);
  server.all('/api/*', handle);

  // Required to provide stencil loader before NextJS loaded.
  server.use('/scripts/stencil-components', express.static('./node_modules/stencil-components'));

  server.all('*', async (req, res) => {
    const html = await app.renderToHTML(req, res, req.path, req.query);
    const renderedHtml = await stencil.renderToString(html);
    return res.send(renderedHtml.html);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
