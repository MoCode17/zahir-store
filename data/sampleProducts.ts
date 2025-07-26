// data/sampleProducts.ts
export const sampleProducts = [
  {
    id: 'rolex-submariner-gold',
    name: 'Rolex Submariner Gold Edition',
    price: 2899.99,
    originalPrice: 3299.99,
    images: [
      '/products/rolex-submariner-1.jpg',
      '/products/rolex-submariner-2.jpg',
      '/products/rolex-submariner-3.jpg',
      '/products/rolex-submariner-4.jpg'
    ],
    rating: 4.9,
    reviewCount: 127,
    category: 'luxury',
    description: 'The iconic Rolex Submariner represents the pinnacle of diving watch excellence. Crafted with 18-karat gold and featuring a ceramic bezel, this timepiece combines luxury with unmatched functionality. Water-resistant to 300 meters, it features the legendary Swiss automatic movement that has made Rolex the gold standard in luxury watchmaking.',
    features: [
      'Swiss automatic movement with 48-hour power reserve',
      '18-karat gold case and bracelet',
      'Unidirectional rotating ceramic bezel',
      'Scratch-resistant sapphire crystal',
      'Waterproof to 300 meters (1000 feet)',
      'Self-winding perpetual movement',
      'Oystersteel and yellow gold construction'
    ],
    variants: [
      {
        id: 'gold-black',
        name: 'Gold Case - Black Dial',
        value: 'Gold with Black Dial',
        price: 2899.99,
        inStock: true
      },
      {
        id: 'gold-blue',
        name: 'Gold Case - Blue Dial',
        value: 'Gold with Blue Dial',
        price: 2999.99,
        inStock: true
      },
      {
        id: 'gold-green',
        name: 'Gold Case - Green Dial',
        value: 'Gold with Green Dial',
        price: 3099.99,
        inStock: false
      }
    ],
    specifications: {
      'Case Diameter': '40mm',
      'Case Material': '18k Yellow Gold',
      'Movement': 'Automatic',
      'Water Resistance': '300m',
      'Power Reserve': '48 hours',
      'Crystal': 'Sapphire',
      'Bracelet': 'Oyster Gold'
    },
    inStock: true,
    isNew: false,
    isSale: true,
    metaTitle: 'Rolex Submariner Gold Edition - Luxury Men\'s Watch | Zahir Store',
    metaDescription: 'Buy authentic Rolex Submariner Gold Edition luxury men\'s watch. Premium Swiss automatic timepiece with 18k gold case. Free shipping and authenticity guaranteed.',
    keywords: [
      'rolex submariner',
      'luxury men\'s watches',
      'gold watches',
      'swiss watches',
      'diving watches',
      'rolex gold',
      'luxury timepieces',
      'automatic watches',
      'premium watches',
      'men\'s luxury accessories'
    ]
  },
  {
    id: 'omega-speedmaster-moonwatch',
    name: 'Omega Speedmaster Moonwatch Professional',
    price: 1899.99,
    originalPrice: 2199.99,
    images: [
      '/products/omega-speedmaster-1.jpg',
      '/products/omega-speedmaster-2.jpg',
      '/products/omega-speedmaster-3.jpg'
    ],
    rating: 4.8,
    reviewCount: 89,
    category: 'sport',
    description: 'The legendary Omega Speedmaster Moonwatch is the first and only watch worn on the moon. This iconic chronograph features the famous manual-winding caliber 1861 movement, the same that powered the watches worn during the Apollo missions. With its distinctive black dial, white indices, and steel case, it remains unchanged from the original moon landing watches.',
    features: [
      'Manual-winding chronograph movement',
      'Hesalite crystal front and sapphire crystal caseback',
      'Stainless steel case and bracelet',
      'NASA flight qualified since 1965',
      'Tachymeter scale on fixed bezel',
      '42mm case diameter',
      'Water resistant to 50 meters'
    ],
    variants: [
      {
        id: 'steel-hesalite',
        name: 'Steel Case - Hesalite Crystal',
        value: 'Steel with Hesalite Crystal',
        price: 1899.99,
        inStock: true
      },
      {
        id: 'steel-sapphire',
        name: 'Steel Case - Sapphire Crystal',
        value: 'Steel with Sapphire Crystal',
        price: 2099.99,
        inStock: true
      }
    ],
    specifications: {
      'Case Diameter': '42mm',
      'Case Material': 'Stainless Steel',
      'Movement': 'Manual Wind',
      'Water Resistance': '50m',
      'Power Reserve': '48 hours',
      'Crystal': 'Hesalite/Sapphire',
      'Bracelet': 'Steel Bracelet'
    },
    inStock: true,
    isNew: false,
    isSale: true,
    metaTitle: 'Omega Speedmaster Moonwatch Professional - The Moon Watch | Zahir Store',
    metaDescription: 'Own the legendary Omega Speedmaster Moonwatch Professional. The first watch on the moon. Authentic chronograph with manual movement. Free shipping.',
    keywords: [
      'omega speedmaster',
      'moonwatch',
      'chronograph watches',
      'sports watches',
      'nasa watches',
      'moon landing watch',
      'manual wind',
      'professional watches',
      'vintage inspired',
      'space watches'
    ]
  },
  {
    id: 'cartier-santos-arabic-dial',
    name: 'Cartier Santos Large Arabic Dial',
    price: 3799.99,
    images: [
      '/products/cartier-santos-arabic-1.jpg',
      '/products/cartier-santos-arabic-2.jpg',
      '/products/cartier-santos-arabic-3.jpg'
    ],
    rating: 4.9,
    reviewCount: 156,
    category: 'arabic-dial',
    description: 'The Cartier Santos represents the birth of modern watchmaking and luxury. This special edition features elegant Arabic numerals on a pristine white dial, combining French elegance with traditional Middle Eastern aesthetics. Crafted in 18-karat gold with a matching bracelet, this watch embodies sophisticated style and Swiss precision.',
    features: [
      '18-karat yellow gold case and bracelet',
      'Beautiful Arabic numeral dial',
      'Automatic movement with date display',
      'Sapphire crystal with anti-reflective coating',
      'Water resistant to 100 meters',
      'QuickSwitch interchangeable strap system',
      'SmartLink adjustable bracelet system',
      'Cartier caliber 1847 MC movement'
    ],
    variants: [
      {
        id: 'gold-white-arabic',
        name: 'Gold Case - White Arabic Dial',
        value: 'Gold with White Arabic Dial',
        price: 3799.99,
        inStock: true
      },
      {
        id: 'gold-black-arabic',
        name: 'Gold Case - Black Arabic Dial',
        value: 'Gold with Black Arabic Dial',
        price: 3899.99,
        inStock: true
      }
    ],
    specifications: {
      'Case Diameter': '39.8mm',
      'Case Material': '18k Yellow Gold',
      'Movement': 'Automatic',
      'Water Resistance': '100m',
      'Power Reserve': '42 hours',
      'Crystal': 'Sapphire',
      'Dial': 'Arabic Numerals'
    },
    inStock: true,
    isNew: true,
    isSale: false,
    metaTitle: 'Cartier Santos Large Arabic Dial - Luxury Arabic Numeral Watch | Zahir Store',
    metaDescription: 'Exquisite Cartier Santos with Arabic dial numerals. 18k gold luxury men\'s watch featuring traditional Arabic numerals. Authentic Cartier timepiece.',
    keywords: [
      'cartier santos arabic dial',
      'arabic numeral watches',
      'arabic dial timepieces',
      'luxury arabic watches',
      'cartier arabic numerals',
      'traditional arabic dial',
      'middle eastern watches',
      'arabic script watches',
      'gold arabic dial',
      'cartier arabic collection'
    ]
  },
  {
    id: 'jaeger-lecoultre-reverso-arabic',
    name: 'Jaeger-LeCoultre Reverso Classic Arabic',
    price: 4299.99,
    images: [
      '/products/jlc-reverso-arabic-1.jpg',
      '/products/jlc-reverso-arabic-2.jpg',
      '/products/jlc-reverso-arabic-3.jpg'
    ],
    rating: 4.8,
    reviewCount: 73,
    category: 'arabic-dial',
    description: 'The iconic Jaeger-LeCoultre Reverso with traditional Arabic numerals represents the perfect marriage of Art Deco design and Eastern elegance. This reversible timepiece features a stunning Arabic numeral dial on one side and a clean caseback on the other. The manual-winding movement showcases the finest Swiss watchmaking traditions.',
    features: [
      'Reversible case with Arabic numeral dial',
      'Manual-winding mechanical movement',
      'Stainless steel case with polished finish',
      'Genuine leather strap with deployant clasp',
      'Water resistant to 30 meters',
      'Art Deco inspired design',
      'Traditional Arabic numerals',
      'Swiss made caliber 822/2 movement'
    ],
    variants: [
      {
        id: 'steel-silver-arabic',
        name: 'Steel Case - Silver Arabic Dial',
        value: 'Steel with Silver Arabic Dial',
        price: 4299.99,
        inStock: true
      },
      {
        id: 'steel-black-arabic',
        name: 'Steel Case - Black Arabic Dial',
        value: 'Steel with Black Arabic Dial',
        price: 4399.99,
        inStock: false
      }
    ],
    specifications: {
      'Case Dimensions': '45.6mm x 27.4mm',
      'Case Material': 'Stainless Steel',
      'Movement': 'Manual Wind',
      'Water Resistance': '30m',
      'Power Reserve': '45 hours',
      'Crystal': 'Sapphire',
      'Dial': 'Arabic Numerals'
    },
    inStock: true,
    isNew: true,
    isSale: false,
    metaTitle: 'Jaeger-LeCoultre Reverso Classic Arabic Dial - Art Deco Arabic Watch | Zahir Store',
    metaDescription: 'Iconic JLC Reverso with Arabic numerals. Reversible luxury watch featuring traditional Arabic dial. Swiss made Art Deco masterpiece.',
    keywords: [
      'jaeger lecoultre reverso arabic',
      'reverso arabic dial',
      'arabic numeral reverso',
      'art deco arabic watch',
      'reversible arabic dial',
      'traditional arabic numerals',
      'jlc arabic collection',
      'luxury arabic timepiece',
      'manual wind arabic',
      'swiss arabic dial'
    ]
  },
  {
    id: 'apple-watch-ultra-titanium',
    name: 'Apple Watch Ultra 2 Titanium',
    price: 899.99,
    images: [
      '/products/apple-watch-ultra-1.jpg',
      '/products/apple-watch-ultra-2.jpg',
      '/products/apple-watch-ultra-3.jpg'
    ],
    rating: 4.7,
    reviewCount: 342,
    category: 'smart',
    description: 'The most advanced Apple Watch yet, built for adventure and precision. The Ultra 2 features a rugged titanium case, the brightest display ever in an Apple Watch, and advanced health monitoring capabilities. With up to 36 hours of battery life and water resistance to 100 meters, it\'s designed for the most demanding activities.',
    features: [
      'Rugged titanium case with sapphire crystal',
      'Brightest Apple Watch display - 3000 nits',
      'Advanced health and fitness tracking',
      'Built-in GPS, cellular connectivity',
      'Up to 36-hour battery life',
      'Water resistant to 100 meters',
      'Customizable Action Button',
      'Precision dual-frequency GPS'
    ],
    variants: [
      {
        id: 'titanium-alpine',
        name: 'Titanium - Alpine Loop',
        value: 'Titanium with Alpine Loop',
        price: 899.99,
        inStock: true
      },
      {
        id: 'titanium-ocean',
        name: 'Titanium - Ocean Band',
        value: 'Titanium with Ocean Band',
        price: 949.99,
        inStock: true
      },
      {
        id: 'titanium-trail',
        name: 'Titanium - Trail Loop',
        value: 'Titanium with Trail Loop',
        price: 899.99,
        inStock: false
      }
    ],
    specifications: {
      'Case Size': '49mm',
      'Case Material': 'Titanium',
      'Display': 'Always-On Retina',
      'Water Resistance': '100m',
      'Battery Life': 'Up to 36 hours',
      'Connectivity': 'GPS + Cellular',
      'Storage': '64GB'
    },
    inStock: true,
    isNew: true,
    isSale: false,
    metaTitle: 'Apple Watch Ultra 2 Titanium - Premium Smart Watch | Zahir Store',
    metaDescription: 'Apple Watch Ultra 2 with rugged titanium case and advanced features. Latest smartwatch technology for sports and adventure. Free shipping.',
    keywords: [
      'apple watch ultra',
      'smart watches',
      'titanium watch',
      'fitness tracker',
      'adventure watch',
      'gps watch',
      'cellular watch',
      'health monitoring',
      'sports watch',
      'wearable technology'
    ]
  }
];

// Sample collections data focused on English categories with Arabic Dial as specialty
export const sampleCollections = {
  luxury: {
    id: 'luxury',
    name: 'Luxury Collection',
    description: 'Exquisite timepieces crafted with precious metals and exceptional craftsmanship',
    products: ['rolex-submariner-gold']
  },
  sport: {
    id: 'sport',
    name: 'Sport Collection', 
    description: 'High-performance watches built for active lifestyles and precision timing',
    products: ['omega-speedmaster-moonwatch']
  },
  classic: {
    id: 'classic',
    name: 'Classic Collection',
    description: 'Timeless designs that transcend trends and define elegance',
    products: []
  },
  'arabic-dial': {
    id: 'arabic-dial',
    name: 'Arabic Dial Collection',
    description: 'Elegant timepieces featuring beautiful Arabic numerals and traditional Eastern aesthetics',
    products: ['cartier-santos-arabic-dial', 'jaeger-lecoultre-reverso-arabic'],
    featured: true, // Special featured collection
    seoDescription: 'Discover our exclusive Arabic dial watch collection featuring luxury timepieces with traditional Arabic numerals. From Cartier Santos to Jaeger-LeCoultre Reverso, experience the perfect blend of Eastern elegance and Swiss precision.'
  },
  smart: {
    id: 'smart',
    name: 'Smart Watches',
    description: 'Cutting-edge technology meets traditional watchmaking in our smart collection',
    products: ['apple-watch-ultra-titanium']
  }
};

// SEO-optimized category descriptions for Arabic dial watches
export const arabicDialSEOContent = {
  pageTitle: 'Arabic Dial Watches - Traditional Numeral Timepieces | Zahir Store',
  metaDescription: 'Shop luxury Arabic dial watches featuring traditional Arabic numerals. Premium timepieces from Cartier, Jaeger-LeCoultre and more. Authentic watches with Arabic script and numerals.',
  h1: 'Arabic Dial Watch Collection',
  introText: 'Discover the elegant beauty of Arabic dial watches, where traditional Eastern numerals meet Swiss precision. Our curated collection features luxury timepieces with authentic Arabic numerals, combining cultural heritage with exceptional craftsmanship.',
  keywords: [
    'arabic dial watches',
    'arabic numeral watches',
    'traditional arabic timepieces',
    'arabic script watches',
    'middle eastern watches',
    'luxury arabic dial',
    'arabic numbers watch',
    'eastern numeral watches',
    'arabic dial collection',
    'traditional numerals timepiece'
  ],
  benefits: [
    'Authentic Arabic numerals crafted by master artisans',
    'Premium Swiss movements with Eastern aesthetics', 
    'Cultural heritage meets luxury watchmaking',
    'Distinctive designs that celebrate tradition',
    'Perfect for collectors of unique timepieces'
  ]
};