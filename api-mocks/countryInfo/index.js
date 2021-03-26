const router = require('express').Router();

router.get('/info', (req, res) => {
	const response = {
		success: true,
		data: {
			countryInfo: {
				name: 'Australia, Victoria',
				processingTime: '5-6 days processing',
				description:
					'Planning a holiday to Australia with you friends and family? Be at ease, and get your Australia Visa with stamp my visa. The process is extremely simple and hassle-free'
			},
			moreOptions: ['Vacation', '15-23 Jan', 'Employed', 'More Options'],
			packsInfo: [
				{
					id: 1,
					days: '60 days  tourist visa',
					price: 'Rs 6300',
					oldPrice: 'Rs 7310',
					description: 'Insurance available'
				},
				{
					id: 2,
					days: '90 days  tourist visa',
					price: 'Rs 7300',
					oldPrice: 'Rs 8310',
					description: 'Insurance available'
				}
			],
			addonService: [
				{
					id: 1,
					info: 'Flight bookings for two',
					detail:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
					price: 'Rs 6300',
					oldPrice: 'Rs 7310',
					description: 'Insurance available'
				},
				{
					id: 2,
					info: 'Hotel bookings for V',
					detail:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
					price: 'Rs 8300',
					oldPrice: 'Rs 9310',
					description: 'One-way & return available, unlimited iterations'
				}
			],
			importantInfo: [
				'Medical insurance is compulsory for travel to the Australia',
				'Effective January 31, 2020, PCR test has to be done 72 hours prior to arrival in Dubai',
				'All the optional Dubai visa related services would be available at an additional cost. Get in touch with our travel experts who will assist you with your booking'
			],
			documentList: [
				'Original passport and old passports, if any',
				'Copy of the first, last page, observation page (if any) and all used and unused pages of current passport should be notarized and submitted along with the documents. If an old passport is being submitted, then copies of all used pages have to be submitted as well.',
				'Your passport should be valid for at least 6 months from the date of submission of the visa, with a minimum of three blank pages',
				'Confirmed return air tickets'
			],
			additionalDocList: [
				{
					condition: 'If the applicant is employed',
					list: [
						'Original passport and old passports, if any',
						'Your passport should be valid for at least 6 months from the date of submission of the visa, with a minimum of three blank pages'
					]
				},
				{
					condition:
						'If the applicant is a company owner or self-employed',
					list: [
						'Original passport and old passports, if any',
						'Your passport should be valid for at least 6 months from the date of submission of the visa, with a minimum of three blank pages'
					]
				},
				{
					condition: 'If the applicant has a family in Australia',
					list: [
						'Original passport and old passports, if any',
						'Your passport should be valid for at least 6 months from the date of submission of the visa, with a minimum of three blank pages'
					]
				},
				{
					condition: 'If the applicant is Student',
					list: [
						'Original passport and old passports, if any',
						'Your passport should be valid for at least 6 months from the date of submission of the visa, with a minimum of three blank pages'
					]
				},
				{
					condition:
						'If the applicant is intending to stay more than 3 months',
					list: [
						'Original passport and old passports, if any',
						'Your passport should be valid for at least 6 months from the date of submission of the visa, with a minimum of three blank pages'
					]
				},
				{
					condition: 'If the applicant age is more than 75',
					list: [
						'Original passport and old passports, if any',
						'Your passport should be valid for at least 6 months from the date of submission of the visa, with a minimum of three blank pages'
					]
				}
			],
			faq: [
				{
					question: 'Once I apply, when I will receive my visa?',
					answer:
						'An e-Visa is an official document permitting entry into and travel within a certain country. The e-Visa is an alternative to visas issued at the ports of entry or visiting an embassy/consulate to obtain traditional paper visas'
				},
				{
					question: 'What is an eVisa?',
					answer:
						'An e-Visa is an official document permitting entry into and travel within a certain country. The e-Visa is an alternative to visas issued at the ports of entry or visiting an embassy/consulate to obtain traditional paper visas'
				},
				{
					question:
						'How long is my visa valid for and how much does it cost how much does it cost?',
					answer:
						'An e-Visa is an official document permitting entry into and travel within a certain country. The e-Visa is an alternative to visas issued at the ports of entry or visiting an embassy/consulate to obtain traditional paper visas'
				}
			]
		}
	};
	res.send(response);
});

module.exports = router;
