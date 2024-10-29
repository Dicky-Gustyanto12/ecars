const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
const upload = require("../middleware/multer");

module.exports = function (app) {
  // Middleware untuk CORS
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // Ganti dengan domain Anda jika perlu
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  // User
  app.get("/api/users", [authJwt.verifyToken, authJwt.isAdmin], controller.getUser);

  // Car
  app.post("/api/car", [authJwt.verifyToken, authJwt.isAdmin], upload.single("car_img"), controller.addCar); // Create car

  app.put("/api/car/:id", [authJwt.verifyToken, authJwt.isAdmin], upload.single("car_img"), controller.updateCar); // Update car

  app.get("/api/car", controller.getCar); // Get car

  app.delete("/api/car/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.deleteCar); // Delete car

  // Cart
  app.post("/api/cart", [authJwt.verifyToken], controller.addCart); // Create cart

  app.get("/api/cart/:user_id", [authJwt.verifyToken], controller.readCart); // Get cart for user

  app.put("/api/cart/:carts_id", [authJwt.verifyToken], controller.updateCart); // Update cart

  app.delete("/api/cart/:carts_id", [authJwt.verifyToken], controller.deleteCart); // Delete cart

  // Log-out
  app.post("/api/auth/logout", controller.logOut); // Pastikan endpoint ini memiliki '/'
};
