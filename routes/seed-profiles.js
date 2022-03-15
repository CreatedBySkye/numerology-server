const express = require("express");
const router = express.Router();
const profileModel = require("../models/ProfileSchema");

router.post("/", async (_, res) => {
  const profiles = [
    
  ];

  for await (const profile of profiles) profile.save();
  res.json({ status: "ok" });
  // profiles.forEach(profile => await profile.save());

  // await profileModel.create(profiles, (err, results) => {
  //   err ? res.send(err) : res.send(results);
  // });
});

module.exports = router;
