import express from 'express';
import path from 'path';
const routerApi = express.Router;

const router = routerApi();


router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/javascripts/dist/', 'index.html'));
});

module.exports = router;
