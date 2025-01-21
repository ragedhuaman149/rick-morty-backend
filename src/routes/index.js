const {Router} = require("express"); // ese metodo me permite definir nuevas rutas para mi servidor
const router = Router();

// Nuevas routes
router.get("/test", (req, res) => {
  res.json({ nombre: "Elva" });
});


module.exports = router;