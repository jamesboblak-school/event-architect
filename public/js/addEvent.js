function addEvent() {
	console.log('submit')
	const eventForm = document.getElementById('create-event-form');
	const createEventTitle = document.getElementById('create-event');

	eventForm.addEventListener('submit', async (e) => {
		e.preventDefault();
		console.log(eventForm.elements)

		const newEvent = {
			title: eventForm.elements['event-title'].value,
			description: eventForm.elements['event-descr'].value,
			isPrivate: eventForm.elements['isPrivate'].checked,
			author_id: createEventTitle.dataset.userid
		};

		const response = await fetch('/api/event', {
			method: 'POST',
			body: JSON.stringify(newEvent),
			headers: {'Content-Type': 'application/json'}
		});

		if (response.ok) {
			const data = await response.json();
			console.log(data)
			document.location.replace(`/event/${data.id}`)
		}
	});
}

addEvent();