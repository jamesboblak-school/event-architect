const router = require('express').Router();
const {Event, Detail} = require('../../models');


router.get('/', async (req, res) => {

	try {
		const detail = await Detail.findAll();
		res.json({detail});
	} catch(err) {
		console.log(err)
		res.status(500).end()
	}

});

router.put('/:id', async (req, res) => {
	if (!req.params.id || !req.body) {
		res.status(400).end()
	}
	try {
		const detail = await Detail.update({
			content: req.body.content 
		}, {
			where: {
				id: req.params.id
			},
			include: [{
				model: Event,
				where: {
					id: req.body.event_id
				}
			}]
		});

		res.json({detail})
	} catch(err) {
		console.log(err)
		res.status(500).json({err: err});
	}
});

module.exports = router;