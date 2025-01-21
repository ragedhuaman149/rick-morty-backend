const {Router} = require("express");

const router = Router();
const fetch = require("node-fetch");

router.get("/", async (req, res)=>{
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    res.json(data);
})

module.exports = router;