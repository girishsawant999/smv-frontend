const router = require('express').Router();
router.get('/list', (req, res) => {
	/*		To search based on name as params:    /list?name=kor
            To search based on tags as params:    /list?tags=SUGGESTED
            To search based on multiple tags as params: /list?tags=SUGGESTED&tags=MOST_POPULAR
    */
	const response = {
		success: true,
		data: [
			{
				currency: null,
				currency_symbol: null,
				processing_time_in_days: '5-6 working days',
				image_url: [
					'landing/country_portugal_images/bitmap_2.png',
					'landing/country_portugal_images/bitmap_2@2x.png',
					'landing/country_portugal_images/bitmap_2@3x.png'
				],
				tags: ['MOST_POPULAR', 'SUGGESTED', 'VISIT_NOW'],
				is_deleted: false,
				updated_at: null,
				_id: '604132f7606f917704040434',
				name: 'Portugal',
				symbol: 'Por',
				created_at: '2021-03-04T19:20:23.606Z'
			},
			{
				currency: null,
				currency_symbol: null,
				processing_time_in_days: '7-8 working days',
				image_url: [
					'landing/country_portugal_images/bitmap_2.png',
					'landing/country_portugal_images/bitmap_2@2x.png',
					'landing/country_portugal_images/bitmap_2@3x.png'
				],
				tags: ['MOST_POPULAR', 'SUGGESTED', 'VISIT_NOW'],
				is_deleted: false,
				updated_at: null,
				_id: '604132f7606f917704040434',
				name: 'Sri Lanka',
				symbol: 'Por',
				created_at: '2021-03-04T19:20:23.606Z'
			},
			{
				currency: null,
				currency_symbol: null,
				processing_time_in_days: '7-8 working days',
				image_url: [
					'landing/country_portugal_images/bitmap_2.png',
					'landing/country_portugal_images/bitmap_2@2x.png',
					'landing/country_portugal_images/bitmap_2@3x.png'
				],
				tags: ['MOST_POPULAR', 'SUGGESTED', 'VISIT_NOW'],
				is_deleted: false,
				updated_at: null,
				_id: '604132f7606f917704040434',
				name: 'Greece',
				symbol: 'Por',
				created_at: '2021-03-04T19:20:23.606Z'
			},
			{
				currency: null,
				currency_symbol: null,
				processing_time_in_days: '7-8 working days',
				image_url: [
					'landing/country_portugal_images/bitmap_2.png',
					'landing/country_portugal_images/bitmap_2@2x.png',
					'landing/country_portugal_images/bitmap_2@3x.png'
				],
				tags: ['MOST_POPULAR', 'SUGGESTED', 'VISIT_NOW'],
				is_deleted: false,
				updated_at: null,
				_id: '604132f7606f917704040434',
				name: 'Russia',
				symbol: 'Por',
				created_at: '2021-03-04T19:20:23.606Z'
			},
			{
				currency: null,
				currency_symbol: null,
				processing_time_in_days: '7-8 working days',
				image_url: [
					'landing/country_portugal_images/bitmap_2.png',
					'landing/country_portugal_images/bitmap_2@2x.png',
					'landing/country_portugal_images/bitmap_2@3x.png'
				],
				tags: ['MOST_POPULAR', 'SUGGESTED', 'VISIT_NOW'],
				is_deleted: false,
				updated_at: null,
				_id: '604132f7606f917704040434',
				name: 'Korea',
				symbol: 'Kor',
				created_at: '2021-03-04T19:20:23.606Z'
			},
			{
				currency: null,
				currency_symbol: null,
				processing_time_in_days: '7-8 working days',
				image_url: [
					'landing/country_portugal_images/bitmap_2.png',
					'landing/country_portugal_images/bitmap_2@2x.png',
					'landing/country_portugal_images/bitmap_2@3x.png'
				],
				tags: ['MOST_POPULAR', 'SUGGESTED', 'VISIT_NOW'],
				is_deleted: false,
				updated_at: null,
				_id: '6041ec1cf6b4b55734119d0c',
				name: 'North Korea',
				symbol: 'NKor',
				created_at: '2021-03-05T08:30:20.696Z'
			}
		]
	};
	res.send(response);
});
module.exports = router;
