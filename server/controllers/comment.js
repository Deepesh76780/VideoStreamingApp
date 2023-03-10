import { createError } from "../error.js";
import Comment from "../models/comments.js";
import Video from "../models/Video.js";

export const addComment = async (req, res, next) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id });
  try {
    const savedComment = await newComment.save();
    res.status(200).send(savedComment);
  } catch (err) {
    next(err);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(res.params.id);
    const video = await Video.findById(res.params.id);

    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json("the comment has been deleted");
    } else {
      return next(createError(403, "you can delete only your comment"));
    }
  } catch (err) {
    next(err);
  }
};
export const getComment = async (req, res, next) => {
  try {
    const comment = await Comment.find({ videoId: req.params.videoId });
    res.status(200).json(comment);
  } catch (err) {
    next(err);
  }
};
