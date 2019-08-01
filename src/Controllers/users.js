import HttpStatus from "http-status-codes";
import * as userServices from "../Services/userServices";

export const fetchAllSongs = (req, res, next) => {
  userServices
    .getSongsList()
    .then(data => res.json({ data }))
    .catch(err => next(err));
};

export const fetchSongById = (req, res, next) => {
  userServices
    .getSong(req.params.id)
    .then(data => res.json({ data }))
    .catch(err => next(err));
};

export const addSong = (req, res, next) => {
  userServices
    .addSong(req.body)
    .then(data => res.status(HttpStatus.CREATED).json({ data }))
    .catch(err => next(err));
};

export const updateSong = (req, res, next) => {
  userServices
    .updateSongsList(req.params.id, req.body)
    .then(data => res.json({ data }))
    .catch(err => next(err));
};

export const deleteSong = (req, res, next) => {
  userServices
    .deleteSong(req.params.id)
    .then(data => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch(err => next(err));
};
