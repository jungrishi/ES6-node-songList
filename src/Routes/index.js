import { Router } from "express";
import * as userController from "../Controllers/users";

const router = Router();

router.get("/", userController.getSongList);

router.get("/:id", userController.fetchSongById);

router.post("/", userValidator, userController.addSong);

router.put("/:id", findSong, userValidator, userController.updateSong);

router.delete("/:id", findSong, userValidator, userController.deleteSong);

export default router;
