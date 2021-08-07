const { Member } = require('../../models');

const router = require('express').Router();

router.post('/', async (req, res) => {
    console.log("hit route")
try{
    const searchData = await Member.findAll(
        { where: { username: req.body.username } }
    )
    console.log(req.body)
    res.status(200).json(searchData)
}
catch (err) {
    console.log(err);
    res.status(500).json(err);
}
})

module.exports = router;