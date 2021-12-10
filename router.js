const express = require("express");
const router = new express.Router();
const logger = require("./logger/logger").Logger;
router.use(express.json());

router.get("/", (req, res) => {
  res.send('Logger System')
});

router.post("/logInfo", (req, res) => {
    const message = req?.body?.message;
    if (message) logger.info(message)
    res.end()
})

router.post("/logError", (req, res) => {
  const message = req?.body?.message;
  if (message) logger.error(message)
  res.end()
})

router.post("/logDebug", (req, res) => {
  const message = req?.body?.message;
  if (message) logger.debug(message)
  res.end()
})

module.exports = router;