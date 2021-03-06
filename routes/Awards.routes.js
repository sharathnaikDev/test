const express = require("express");
const {
  getAward,
  getAwards,
  createAward,
  UpdateAward,
  deleteAward,
} = require("../controller/award.controller");

const router = express.Router();

const {protect, authorize} = require('../middleware/auth.middleware')


router.route("/").get(getAwards).post(protect, authorize('admin'), createAward);

router.route('/:id').get(getAward).delete(deleteAward).put(UpdateAward); 

module.exports = router;
