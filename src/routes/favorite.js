const { Router } = require("express");
const fs = require("fs/promises");
const path = require("path");

const router = Router();

const filePath = path.resolve(__dirname, "favorites_data.json");

router.post("/", async (req, res) => {
  const body = req.body;

  try {
    let data = [];
    try {
      const fileContent = await fs.readFile(filePath, "utf8");
      data = JSON.parse(fileContent);
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw err;
      }
    }

    data.push(body);
    console.log('DATA EN EL FILE =>', data)
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");

    res.status(200).send({
        message: 'Character guardado exitosamente'
    })
  } catch (error) {
    res.status(500).json({ message: "Error al guardar el objeto" });
  }
});

router.get("/", async (req, res) => {  
    try {
      let data = [];
      try {
        const fileContent = await fs.readFile(filePath, "utf8");
        data = JSON.parse(fileContent);
        
      } catch (err) {
        if (err.code !== "ENOENT") {
          throw err;
        }
      }
  
      res.send(data);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los favoritos" });
    }
  });

module.exports = router;