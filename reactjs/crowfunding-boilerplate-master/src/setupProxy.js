const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(proxy("/me", { target: "http://localhost:5000/" })),
  app.use(proxy("/auth/login", { target: "http://localhost:5000/" })),
  app.use(proxy("/token", { target: "http://localhost:5000/" })),
  app.use(proxy("/auth/register", { target: "http://localhost:5000/" })),
  app.use(proxy("/logout", { target: "http://localhost:5000/" })),

  app.use(proxy("/api/campaigns", { target: "http://localhost:4001/" })),
}
