const express = require("express");
const mongoose = require("mongoose");

const Equipment = mongoose.model("Equipment");

const router = express.Router();

router.get("/equipments", async (req, res) => {
  const equipments = await Equipment.find();
  res.send(equipments);
});

router.put("/equipments/:id", async (req, res) => {
  const equipment = await Equipment.findOne({ _id: req.params.id });

  for (prop in req.body) {
    equipment[prop] = req.body[prop];
  }

  try {
    await equipment.save();
    res.send("Nice update bro 8)");
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
})

router.post("/equipments", async (req, res) => {
  const {
    image,
    name,
    process,
    voltage,
    polarity,
    wire_diameter,
  } = req.body;

  if (
    !image ||
    !name ||
    !process ||
    !voltage ||
    !polarity ||
    !wire_diameter
  ) {
    return res
      .status(422)
      .send({
        error:
          "Hey, don't forget to provide image, name, process, voltage, polarity and wire diameter! ;)",
      });
  }

  try {
    const equipment = new Equipment({
      image,
      name,
      process,
      voltage,
      polarity,
      wire_diameter,
    });
    await equipment.save();
    res.send(equipment);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;