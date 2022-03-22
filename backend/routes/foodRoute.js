const express = require("express");
const { getAllItems, createItem, updateItem, deleteitem, getItemDetails } = require("../controllers/foodController");

const router = express.Router();

router.route("/fooditems").get(getAllItems);
router.route("/fooditem/new").post(createItem);
router.route("/fooditem/:id").put(updateItem).delete(deleteitem).get(getItemDetails);

module.exports = router;