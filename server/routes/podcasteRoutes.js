
const { Router } = require("express");
const { uploadPodcasteContrl } = require("../controllers/podcasteControllers");
const { podcastUploads } = require("../middleware/multer");

const router = Router();

router.post("/podcast/user", podcastUploads.single('video'), uploadPodcasteContrl);

module.exports = router; 