const router = require('express').Router();

router.get('/landing', (req, res) => {
  const response = {
    success: true,
    data: {
      CountryVisaDetailSlow: [
        {
          imageLink: {
            imageLink_1x: '/assets/landing/country_portugal_images/bitmap_2.png',
            imageLink_2x: '/assets/landing/country_portugal_images/bitmap_2@2x.png',
            imageLink_3x: '/assets/landing/country_portugal_images/bitmap_2@3x.png'
          },
          country: 'Portugal',
          time: '5-6 working days'
        },
        {
          imageLink: {
            imageLink_1x: '/assets/landing/country_russia_images/bitmap-copy-3.png',
            imageLink_2x: '/assets/landing/country_russia_images/bitmap-copy-3@2x.png',
            imageLink_3x: '/assets/landing/country_russia_images/bitmap-copy-3@3x.png'
          },
          country: 'Russia',
          time: '7-8 working days'
        },
        {
          imageLink: {
            imageLink_1x: '/assets/landing/country_srilanka_images/bitmap-copy.png',
            imageLink_2x: '/assets/landing/country_srilanka_images/bitmap-copy@2x.png',
            imageLink_3x: '/assets/landing/country_srilanka_images/bitmap-copy@3x.png'
          },
          country: 'Srilanka',
          time: '5-6 working days'
        },
        {
          imageLink: {
            imageLink_1x: '/assets/landing/country_greece_images/bitmap.png',
            imageLink_2x: '/assets/landing/country_greece_images/bitmap@2x.png',
            imageLink_3x: '/assets/landing/country_greece_images/bitmap@3x.png'
          },
          country: 'Greece',
          time: '4-7 working days'
        }
      ],
      CountryVisaDetailFast: [
        {
          imageLink: {
            imageLink_1x: '/assets/landing/country_greece_images/bitmap.png',
            imageLink_2x: '/assets/landing/country_greece_images/bitmap@2x.png',
            imageLink_3x: '/assets/landing/country_greece_images/bitmap@3x.png'
          },
          country: 'Greece',
          time: '4-7 working days'
        },
        {
          imageLink: {
            imageLink_1x: '/assets/landing/country_russia_images/bitmap-copy-3.png',
            imageLink_2x: '/assets/landing/country_russia_images/bitmap-copy-3@2x.png',
            imageLink_3x: '/assets/landing/country_russia_images/bitmap-copy-3@3x.png'
          },
          country: 'Russia',
          time: '7-8 working days'
        },
        {
          imageLink: {
            imageLink_1x: '/assets/landing/country_portugal_images/bitmap_2.png',
            imageLink_2x: '/assets/landing/country_portugal_images/bitmap_2@2x.png',
            imageLink_3x: '/assets/landing/country_portugal_images/bitmap_2@3x.png'
          },
          country: 'Portugal',
          time: '5-6 working days'
        },
        {
          imageLink: {
            imageLink_1x: '/assets/landing/country_srilanka_images/bitmap-copy.png',
            imageLink_2x: '/assets/landing/country_srilanka_images/bitmap-copy@2x.png',
            imageLink_3x: '/assets/landing/country_srilanka_images/bitmap-copy@3x.png'
          },
          country: 'Srilanka',
          time: '5-6 working days'
        }
      ],
      BlogArray: [
        {
          imageLink: {
            imageLink_1x: '/assets/landing/blog_1_images/kristian-egelund-ua-qv-r-xa-8-izg-unsplash.png',
            imageLink_2x: '/assets/landing/blog_1_images/kristian-egelund-ua-qv-r-xa-8-izg-unsplash@2x.png',
            imageLink_3x: '/assets/landing/blog_1_images/kristian-egelund-ua-qv-r-xa-8-izg-unsplash@3x.png'
          },
          statement: 'How to extend your visa if you are stranded due to COVID-19',
          date: 'Jan 1,2021'
        },
        {
          imageLink: {
            imageLink_1x: '/assets/landing/blog_2_images/kristian-egelund-uaQvRXa8izg-unsplash-3.png',
            imageLink_2x: '/assets/landing/blog_2_images/kristian-egelund-uaQvRXa8izg-unsplash@2x-3.png',
            imageLink_3x: '/assets/landing/blog_2_images/kristian-egelund-uaQvRXa8izg-unsplash@3x-3.png'
          },
          statement: 'How to extend your visa if you are stranded due to COVID-19',
          date: 'Jan 1,2021'
        }
      ],
      Customer_review: [
        {
          comment:
            " service, after trying and failing numerous time at the official site, i thought i'll have to go another way.",
          gender: 'male',
          country: 'travelled to USA',
          name: 'RICHARD LORYCH'
        },
        {
          comment:
            "Impressive service, after trying and failing numerous time at the official site, i thought i'll have to go another way.",
          gender: 'female',
          country: 'travelled to USA',
          name: 'RICHARD LORYCH'
        },
        {
          comment:
            "pressive service, after trying and failing numerous time at the official site, i thought i'll have to go another way.",
          gender: 'female',
          country: 'travelled to USA',
          name: 'RICHARD LORYCH'
        },
        {
          comment:
            "pressive service, after trying and failing numerous time at the official site, i thought i'll have to go another way.",
          gender: 'male',
          country: 'travelled to USA',
          name: 'RICHARD LORYCH'
        }
      ]
    }
  };
  res.send(response);
});

module.exports = router;
