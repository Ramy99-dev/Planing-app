const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://mvvvip1.defas-fgi.de/mvv/XML_STOPFINDER_REQUEST?%20language=de&outputFormat=RapidJSON&type_sf=any',
      changeOrigin: true,
    })
  );
};