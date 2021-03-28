const router = require('express').Router();
router.get('/:id', (req, res) => {
	const id = req.params.id;
	let response;
	if (id === '1') {
		response = {
			country: 'Australia',
			city: 'Victoria',
			srcSet: [
				'country/country.png',
				'country/country@2x.png 2x',
				'country/country@3x.png 3x'
			],
			visaType: '90 days tourist visa',
			dates: '15-16 May 2021',
			status: 'inProgress',
			documents: [
				{
					name: 'Atul Khola',
					status: 'notStarted',
					relation: 'Me',
					numOfCompletedDocs: 10,
					totalNumOfDocs: 15
				},
				{
					name: 'Ayaan Khola',
					status: 'notStarted',
					relation: 'Son',
					numOfCompletedDocs: 3,
					totalNumOfDocs: 15
				}
			],
			amount: 10000
		};
		res.send(response);
		return;
	}
	if (id === '2') {
		response = {
			country: 'Australia',
			city: 'Victoria',
			srcSet: [
				'country/country.png',
				'country/country@2x.png 2x',
				'country/country@3x.png 3x'
			],
			visaType: '90 days tourist visa',
			dates: '15-16 May 2021',
			status: 'rejected',
			response: {
				text:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
				date: '25 Mar, 2021'
			},
			documents: [
				{
					name: 'Atul Khola',
					status: 'completed',
					relation: 'Me',
					numOfCompletedDocs: 15,
					totalNumOfDocs: 15
				},
				{
					name: 'Ayaan Khola',
					status: 'completed',
					relation: 'Son',
					numOfCompletedDocs: 15,
					totalNumOfDocs: 15
				}
			],
			date_of_document_submission: '1st May 2021',
			amount: 10000
		};
		res.send(response);
		return;
	}
	if (id === '3') {
		response = {
			country: 'Australia',
			city: 'Victoria',
			srcSet: [
				'country/country.png',
				'country/country@2x.png 2x',
				'country/country@3x.png 3x'
			],
			visaType: '90 days tourist visa',
			dates: '15-16 May 2021',
			status: 'accepted',
			response: {
				text:
					'We were able to get you your visa within 10 days. All thanks to your prompt responses.',
				date: '25 Mar, 2021'
			},
			documents: [
				{
					name: 'Atul Khola',
					status: 'completed',
					relation: 'Me',
					numOfCompletedDocs: 15,
					totalNumOfDocs: 15
				},
				{
					name: 'Ayaan Khola',
					status: 'completed',
					relation: 'Son',
					numOfCompletedDocs: 15,
					totalNumOfDocs: 15
				}
			],
			date_of_document_submission: '1st May 2021',
			amount: 10000
		};
		res.send(response);
		return;
	}
	res.status(404).send();
});
module.exports = router;