import express from "express";

const router = express.Router();
const controller = require("../controllers/PokemonController.ts");

router.get("/pokemon", controller.index);
router.get("/pokemon/:id", controller.getById);
router.post("/pokemon", controller.store);
router.put("/pokemon/:id", controller.updateById);
router.patch("/pokemon/:id", controller.updateById);
router.delete("/pokemon/:id", controller.deleteById);

module.exports = router;
