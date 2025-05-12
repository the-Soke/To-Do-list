// home page routes// home page routes
import express from 'express';
const router = express.Router();
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// router.get('/', (reg,res) => {
//     res.render('login', {title: 'To-Do App'});
// })
// router.get("/", (req, res) => {
//     res.render("login");
// });
// router.get("/", (req, res) => {
//     res.redirect("/login.html");
// });
// router.get("/", (req, res) => {
//     res.sendFile(__dirname + "../public/login.html");
// });
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
});



export default router;