const express =  require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('Your Profile!');
})

module.exports = router;