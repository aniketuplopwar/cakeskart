import express from 'express';

const routerApi = express.Router;
const router = routerApi();

/**
 * Handling '/search' url to search tweet based on search string
 * URL params-
 *   searchString: string to search tweets
 **/
router.get('/test',(req, res) => {

        res.send('test success');
});

router.get('/addToCart',(req, res) => {

    res.send('test success');
});

export default router;
