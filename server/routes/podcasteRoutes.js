const { Router } = require("express");
const { createPodcasteControllers } = require("../controllers/podcasteControllers");
const { podcastUploads } = require("../middleware/multer");

const router = Router();

router.post("/podcast/create", podcastUploads.array('imgAndVideo', 2), createPodcasteControllers);

module.exports = router; 