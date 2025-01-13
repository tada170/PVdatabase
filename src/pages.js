const path = require("path");
const projectPath = path.join(__dirname, "..");

function defineHTMLEndpoints(aplication){
  
    aplication.get("/product-add", (req, res) => {
      res.sendFile(path.join(projectPath, "html", "product_add.html"));
    });
  
    aplication.get("/user-add", (req, res) => {
      res.sendFile(path.join(projectPath, "html", "user_add.html"));
    });
  
    aplication.get("/products-list", (req, res) => {
      res.sendFile(path.join(projectPath, "html", "products_list.html"));
    });
  
    aplication.get("/", (req, res) => {
      res.sendFile(path.join(projectPath, "html", "index.html"));
    });
  
    aplication.get("/login", (req, res) => {
      res.sendFile(path.join(projectPath, "html", "login.html"));
    });

    aplication.get("/category-add", (req, res) => {
      res.sendFile(path.join(projectPath, "html", "category_add.html"));
    });

    aplication.get("/category-list", (req, res) => {
      res.sendFile(path.join(projectPath, "html", "category_list.html"));
    });

    aplication.get("/user-list", (req, res) => {
      res.sendFile(path.join(projectPath, "html", "user_list.html"));
    });
    aplication.get("/order-add", (req, res) => {
        res.sendFile(path.join(projectPath, "html", "order_add.html"));
    });
}
module.exports = {defineHTMLEndpoints}