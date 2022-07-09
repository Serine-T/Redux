const cardsItems = [
  {
    'id': 1,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097102956.jpg',
    'name': 'LINA',
    'description': 'Store Front Page, Necklaces, Silver necklaces',
    'price': '200.00',
    'type': 'necklaces'
  },
  {
    'id': 2,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097106552.jpg',
    'name': 'SILVER PENDANT',
    'description': 'Necklaces, Silver necklaces',
    'price': '190.00',
    'type': 'necklaces'
  },
  {
    'id': 3,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097112083.jpg',
    'name': 'Chic yellow gold toggle necklace',
    'description': 'Store Front Page, Necklaces, Gold necklaces',
    'price': '200.00',
    'type': 'necklaces'
  },
  {
    'id': 4,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097115724.jpg',
    'name': '18ct gold dream 0.10cttw diamond',
    'description': 'Store Front Page, Necklaces, Gold necklaces, Diamond limited collection',
    'price': '330.00',
    'type': 'necklaces'
  },
  {
    'id': 5,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097116960.jpg',
    'name': '9ct yellow gold square pendant necklace',
    'description': 'Necklaces, Gold necklaces',
    'price': '120.00',
    'type': 'necklaces'
  },
  {
    'id': 6,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097117969.jpg',
    'name': '9ct white gold 0.0ct diamond square cluster pendant',
    'description': 'Necklaces, Silver necklaces, Diamond limited collection',
    'price': '330.00',
    'type': 'necklaces'
  },
  {
    'id': 7,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097119193.jpg',
    'name': 'Love silver and 0.15cttw diamond ring',
    'description': 'Store Front Page, Rings, Silver rings, Diamond limited collection',
    'price': '400.00',
    'type': 'ring'
  },
  {
    'id': 8,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097127438.jpg',
    'name': '18ct white gold1.00CT diamond multi stone ring',
    'description': 'Rings, Silver rings, Diamond limited collection',
    'price': '640.00',
    'type': 'ring'
  },
  {
    'id': 9,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097133186.jpg',
    'name': '18ct yellow gold square plain signet ring',
    'description': 'Rings, Gold rings',
    'price': '200.00',
    'type': 'ring'
  },
  {
    'id': 10,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097132200.jpg',
    'name': 'chic bold gold yellow gold link ring',
    'description': 'Rings, Gold rings',
    'price': '180.00',
    'type': 'ring'
  },
  {
    'id': 11,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097134537.jpg',
    'name': '18ct yellow gold and 0.09cttw ring',
    'description': 'Rings, Gold rings',
    'price': '320.00',
    'type': 'ring'
  },
  {
    'id': 12,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097092504.jpg',
    'name': '18ct yellow gold and 0.09cttw ring',
    'description': 'Earrings, Gold earrings',
    'price': '320.00',
    'type': 'ring'
  },
  {
    'id': 13,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097120260.jpg',
    'name': '18ct white gold 0.64cttw ring',
    'description': 'Rings, Silver rings',
    'price': '200.00',
    'type': 'ring'
  },
  {
    'id': 14,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097037535.jpg',
    'name': 'Birks bee chic medium silver hexagon hoop earring',
    'description': 'Bracelets, Silver bracelets',
    'price': '40.00',
    'type': 'bracelets'
  },
  {
    'id': 15,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097087864.jpg',
    'name': '9ct white gold diamond drop earrings',
    'description': 'Store Front Page, Earrings, Silver earrings',
    'price': '60.00',
    'type': 'earrings'
  },
  {
    'id': 16,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097095146.jpg',
    'name': '18ct yellow gold0.41cttw diamond drop earrings',
    'description': 'Earrings, Silver earrings',
    'price': '240.00',
    'type': 'earrings'
  },
  {
    'id': 17,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097100383.jpg',
    'name': 'icona silver morgnite and garnet drop earrings',
    'description': 'Earrings, Silver earrings',
    'price': '120.00',
    'type': 'earrings'
  },
  {
    'id': 18,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097098167.jpg',
    'name': 'Sterling silver heart tag t-bar belcher bracelet',
    'description': 'Earrings, Gold earrings, Diamond limited collection',
    'price': '180.00',
    'type': 'earrings'
  },
  {
    'id': 19,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097035063.jpg',
    'name': 'Sterling silver heart tag t-bar belcher bracelet',
    'description': 'Bracelets, Silver bracelets',
    'price': '180.00',
    'type': 'bracelets'
  },
  {
    'id': 20,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097033322.jpg',
    'name': 'Sterling silver heart tag t-bar belcher bracelet',
    'description': 'Gold bracelets, Bracelets',
    'price': '220.00',
    'type': 'bracelets'
  },
  {
    'id': 21,
    'img': 'https://d2j6dbq0eux0bg.cloudfront.net/images/17443975/1097026622.jpg',
    'name': '9CT YELLOW GOLD TWIST BANGLE',
    'description': 'Gold bracelets',
    'price': '200.00',
    'type': 'bracelets'
  }
];

export default cardsItems;
