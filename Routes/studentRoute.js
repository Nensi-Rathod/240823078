// const express=require("express");
// const Router=express.Router();
// const studentController=require("../controllers/studentController");

// Router.get("/index",studentController.index);
// Router.get("/show/:id",studentController.show);
// Router.post("/store",studentController.store);
// Router.put("/update/:id",studentController.store);
// Router.delete("/delete/:id",studentController.delete);

// module.exports=Router;

const express = require("express");
const Router = express.Router();
const studentController = require("../controllers/studentController");
const {
  createValidator,
  updateValidator,
  validate,
} = require("../validators/studentValidatator");

Router.get("/index", studentController.index);
Router.get("/show/:id", studentController.show);
Router.post("/store", (req, res, next) => {
  const result = validate(createValidator, req.body);

  if (!result.success) {
    return res.status(400).json({ status: "error", errors: result.errors });
  }

  studentController.store(req, res, next);
});
// Router.put("/update/:id", updateValidator, studentController.update);
Router.delete("/delete/:id", studentController.delete);

module.exports = Router;
