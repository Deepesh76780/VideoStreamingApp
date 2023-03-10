import { createError } from "../error.js";
import User from "../models/User.js";
import Video from "../models/Video.js";

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        }
        // { new: true }
      );
      res.status(200).json(updateUser);
    } catch (err) {}
  } else {
    return next(createError(403, "You can update your account only"));
  }
};
export const Delete = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User Has been deleted");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can delete your account only"));
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
export const subscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedPeoples: req.params.id },
    });

    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json("Subscription successfull");
  } catch (err) {
    next(err);
  }
};
export const unSubscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscribedPeoples: req.params.id },
    });

    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });
    res.status(200).json("UnSubscription successfull");
  } catch (err) {
    next(err);
  }
};
//left
export const like = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { likes: id },
      $pull: { dislikes: id },
    });
    res.status(200).json("the video has been liked");
  } catch (err) {
    next(err);
  }
};
export const disLike = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { dislikes: id },
      $pull: { likes: id },
    });
    res.status(200).json("the video has been disliked");
  } catch (err) {
    next(err);
  }
};
