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

router.put('/', async (req, res) => {
	if (!req.body) {
		res.status(400).end()
	}
	try {
		const detail = await Detail.update({
			content: req.body.content 
		}, {
			where: {
				id: req.body.detail_id
			},
			include: [{
				model: Event,
				where: {
					id: req.body.event_id
				}
			}]
		});

		res.json({event_id: req.body.event_id, detail_id: req.body.event_id});

	} catch(err) {
		console.log(err)
		res.status(500).json({err: err});
	}
});

router.post('/', async (req, res) => {
	if (!req.body) {
		res.status(400).end()
	}
	try {
		const detail = await Detail.create(req.body)

		console.log(detail)
		res.status(200).end();
	} catch(err) {
		console.log(err)
		res.status(500).end();
	}
})

router.delete('/:id', async (req, res) => {
	if (!req.params.id) {
		res.status(400).end();
	}

	try {
		const detail = await Detail.destroy({
			where: {
				id: req.params.id
			}
		});

		res.status(200).end();
	} catch(err) {
		console.log(err)
		res.status(500).end();
	}
})

module.exports = router;