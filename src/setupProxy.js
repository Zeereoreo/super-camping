module.exports = function (app) {
    app.use( 
      createProxyMiddleware("/basedList", {
        target: "endpoint", 
        changeOrigin: true, 
        pathRewrite: {
          
          "^/api": "", 
        },
      })
    );
   };