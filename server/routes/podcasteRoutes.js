const { Router } = require("express");
const { createPodcasteControllers, yourUploadPodcastLists, addOrRemoveFavouritePod, userFavouritesPodcastLists, categoryWisePodlists, podcastViewCount } = require("../controllers/podcasteControllers");
const { podcastUploads } = require("../middleware/multer");

const router = Router();

router.post("/podcast/category-podcast-lists", categoryWisePodlists);
router.post("/podcast/favourite-podcast-lists", userFavouritesPodcastLists);
router.post("/podcast/add-or-remove-favourite-podcasts", addOrRemoveFavouritePod);
router.post("/podcast/create", podcastUploads.array('imgAndVideo', 2), createPodcasteControllers);
router.post("/podcast/lists", yourUploadPodcastLists);
router.post("/podcast/view-count", podcastViewCount)

module.exports = router;  