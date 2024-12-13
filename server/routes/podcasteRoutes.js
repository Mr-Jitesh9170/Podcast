const { Router } = require("express");
const { createPodcasteControllers, yourUploadPodcastLists } = require("../controllers/podcasteControllers");
const { podcastUploads } = require("../middleware/multer");

const router = Router();

router.post("/podcast/create", podcastUploads.array('imgAndVideo', 2), createPodcasteControllers);
router.post("/podcast/lists", yourUploadPodcastLists);


module.exports = router;  