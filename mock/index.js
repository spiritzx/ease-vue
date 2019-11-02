let fs = require("fs");

function mockFetch(app) {
  // 请求数据
  app.get("/mock/api/*", (req, res) => {
    fs.readFile(`.${req._parsedUrl.pathname}.json`, (err, data) => {
      if (err) {
        res.status(404);
        res.send({ status: 404, err: err });
        return;
      }
      res.send(data);
    });
  });
  // 登录请求
  app.post("/mock/login", (req, res) => {
    // node 接收 post 请求
    let body = "";
    req.on("data", chunk => {
      body += chunk;
    });
    req.on("end", () => {
      fs.readFile(`./mock/api/user.json`, (err, data) => {
        if (!err) {
          let user = JSON.parse(data);
          let server_user = JSON.parse(body);
          if (
            user.user == server_user.user &&
            user.pass == server_user.password
          ) {
            res.send({
              code: 1000,
              success: true,
              ...server_user
            });
          } else {
            res.send({
              code: 1001,
              success: false,
              msg: "账户或者密码错误"
            });
          }
        }
      });
    });
  });
}

module.exports = mockFetch;
