/* ============================================================
   JKKVC mock catalogue data.
   Product names/categories taken from the live jkkrishivikas.com
   catalogue (fetched 28-Sep-2026). Product photos are hot-linked
   from JKKVC's own WordPress media library (i0.wp.com CDN) so the
   mock shows the real catalogue; in production they live in the
   site's own media library. Prices are INDICATIVE market prices
   for the demo only — replace with JKKVC's live price list.
   ============================================================ */
const IMG = 'https://i0.wp.com/jkkrishivikas.com/wp-content/uploads/2023/12/';

const PRODUCTS = [
  /* ---- Brush cutters ---- */
  {id:'sbc904', name:'Brush Cutter SBC-904', brand:'JKKVC', cat:'Brush Cutters', price:24500, mrp:27900, img:IMG+'13-2.jpg?ssl=1', badge:'Best Seller', specs:{'Engine':'2-stroke petrol','Displacement':'42.7 cc','Power':'1.7 kW','Cutting dia.':'400 mm','Weight':'7.8 kg'}},
  {id:'h131r', name:'HUSQVARNA 131R', brand:'Husqvarna', cat:'Brush Cutters', price:32900, mrp:35900, img:IMG+'1-1.jpg?ssl=1', specs:{'Engine':'2-stroke','Displacement':'36 cc','Power':'1.4 kW','Weight':'7.5 kg'}},
  {id:'h131rb', name:'HUSQVARNA 131RB', brand:'Husqvarna', cat:'Brush Cutters', price:34500, mrp:37900, img:IMG+'2-2.jpg?ssl=1', specs:{'Engine':'2-stroke','Displacement':'36 cc','Handle':'Bike handle','Weight':'7.9 kg'}},
  {id:'h143r', name:'HUSQVARNA 143R-II', brand:'Husqvarna', cat:'Brush Cutters', price:42500, mrp:46500, img:IMG+'3-2.jpg?ssl=1', badge:'Pro', specs:{'Engine':'2-stroke','Displacement':'41.5 cc','Power':'1.8 kW','Weight':'8.4 kg'}},
  {id:'h236r', name:'HUSQVARNA 236R', brand:'Husqvarna', cat:'Brush Cutters', price:38900, mrp:42900, img:IMG+'4-2.jpg?ssl=1', specs:{'Engine':'2-stroke','Displacement':'38 cc','Power':'1.6 kW','Weight':'8.1 kg'}},
  {id:'h321r', name:'Husqvarna 321R Petrol Brushcutter', brand:'Husqvarna', cat:'Brush Cutters', price:45500, mrp:49900, img:IMG+'5-2.jpg?ssl=1', specs:{'Engine':'2-stroke','Displacement':'40.9 cc','Power':'1.7 kW','Weight':'8.6 kg'}},
  {id:'h331r', name:'HUSQVARNA 331R', brand:'Husqvarna', cat:'Brush Cutters', price:47900, mrp:52500, img:IMG+'6-2.jpg?ssl=1', specs:{'Engine':'2-stroke','Displacement':'42.2 cc','Power':'2.0 kW','Weight':'8.7 kg'}},
  {id:'h331rb', name:'HUSQVARNA 331RB', brand:'Husqvarna', cat:'Brush Cutters', price:49500, mrp:54000, img:IMG+'7-2.jpg?ssl=1', specs:{'Engine':'2-stroke','Displacement':'42.2 cc','Handle':'Bike handle','Weight':'9.0 kg'}},
  {id:'h531rs', name:'HUSQVARNA 531RS', brand:'Husqvarna', cat:'Brush Cutters', price:56900, mrp:62000, img:IMG+'8-3.jpg?ssl=1', badge:'Pro', specs:{'Engine':'2-stroke X-Torq','Displacement':'50.6 cc','Power':'2.6 kW','Weight':'9.6 kg'}},
  {id:'h532rbs', name:'HUSQVARNA 532RBS', brand:'Husqvarna', cat:'Brush Cutters', price:59900, mrp:65500, img:IMG+'9-2.jpg?ssl=1', specs:{'Engine':'2-stroke X-Torq','Displacement':'50.6 cc','Handle':'Bike handle','Weight':'9.9 kg'}},
  {id:'h541rs', name:'HUSQVARNA 541RS', brand:'Husqvarna', cat:'Brush Cutters', price:62500, mrp:68000, img:IMG+'10-2.jpg?ssl=1', specs:{'Engine':'2-stroke X-Torq','Displacement':'53.4 cc','Power':'2.9 kW','Weight':'10.1 kg'}},
  {id:'h542rbs', name:'HUSQVARNA 542RBS', brand:'Husqvarna', cat:'Brush Cutters', price:65900, mrp:71900, img:IMG+'11-2.jpg?ssl=1', specs:{'Engine':'2-stroke X-Torq','Displacement':'53.4 cc','Handle':'Bike handle','Weight':'10.4 kg'}},
  {id:'texgtz', name:'Texas GTZ 5800 Petrol Brush Cutter', brand:'Texas', cat:'Brush Cutters', price:27500, mrp:31000, img:'img/brushcutter.jpg', specs:{'Engine':'2-stroke','Displacement':'52 cc','Power':'2.1 kW','Weight':'9.2 kg'}},

  /* ---- Chain saws ---- */
  {id:'scs5800', name:'Chain Saw SCS-5800', brand:'JKKVC', cat:'Chain Saws', price:21500, mrp:24500, img:IMG+'13-3.jpg?ssl=1', specs:{'Engine':'2-stroke','Displacement':'58 cc','Bar':'20 in','Weight':'7.4 kg'}},
  {id:'h125', name:'HUSQVARNA 125', brand:'Husqvarna', cat:'Chain Saws', price:26900, mrp:29500, img:IMG+'65-3-1.jpg?ssl=1', badge:'Best Seller', specs:{'Engine':'2-stroke','Displacement':'38.2 cc','Power':'1.5 kW','Bar':'14–16 in','Weight':'4.9 kg'}},
  {id:'h135', name:'HUSQVARNA 135 Mark II', brand:'Husqvarna', cat:'Chain Saws', price:31500, mrp:34900, img:IMG+'2-1.jpg?ssl=1', specs:{'Engine':'2-stroke X-Torq','Displacement':'40.9 cc','Power':'1.6 kW','Bar':'14–16 in','Weight':'4.7 kg'}},
  {id:'h272', name:'HUSQVARNA 272 XP®', brand:'Husqvarna', cat:'Chain Saws', price:78500, mrp:86000, img:IMG+'3-1.jpg?ssl=1', badge:'Pro', specs:{'Engine':'2-stroke X-Torq','Displacement':'72.2 cc','Power':'4.1 kW','Bar':'20–28 in','Weight':'6.6 kg'}},
  {id:'h3120', name:'HUSQVARNA 3120 XP®', brand:'Husqvarna', cat:'Chain Saws', price:165000, mrp:178000, img:IMG+'4-1.jpg?ssl=1', badge:'Pro', specs:{'Engine':'2-stroke X-Torq','Displacement':'118.8 cc','Power':'6.1 kW','Bar':'up to 42 in','Weight':'10.7 kg'}},
  {id:'h353', name:'HUSQVARNA 353', brand:'Husqvarna', cat:'Chain Saws', price:62500, mrp:68500, img:IMG+'5-1.jpg?ssl=1', specs:{'Engine':'2-stroke','Displacement':'56.5 cc','Power':'2.9 kW','Bar':'15–20 in','Weight':'5.9 kg'}},
  {id:'h365', name:'HUSQVARNA 365', brand:'Husqvarna', cat:'Chain Saws', price:74900, mrp:82000, img:IMG+'6-1.jpg?ssl=1', specs:{'Engine':'2-stroke','Displacement':'70.7 cc','Power':'3.7 kW','Bar':'18–28 in','Weight':'6.4 kg'}},
  {id:'h372', name:'HUSQVARNA 372 XP®', brand:'Husqvarna', cat:'Chain Saws', price:88500, mrp:96500, img:IMG+'7-1.jpg?ssl=1', badge:'Pro', specs:{'Engine':'2-stroke X-Torq','Displacement':'70.6 cc','Power':'4.2 kW','Bar':'18–28 in','Weight':'6.6 kg'}},
  {id:'h390', name:'HUSQVARNA 390 XP®', brand:'Husqvarna', cat:'Chain Saws', price:115000, mrp:126000, img:IMG+'8-2.jpg?ssl=1', specs:{'Engine':'2-stroke X-Torq','Displacement':'90.6 cc','Power':'5.4 kW','Bar':'20–36 in','Weight':'7.9 kg'}},
  {id:'h445', name:'HUSQVARNA 445 II e-series', brand:'Husqvarna', cat:'Chain Saws', price:52900, mrp:57900, img:IMG+'9-1.jpg?ssl=1', specs:{'Engine':'2-stroke X-Torq','Displacement':'45.7 cc','Power':'2.1 kW','Bar':'15–18 in','Weight':'4.9 kg'}},
  {id:'h455', name:'HUSQVARNA 455 Rancher', brand:'Husqvarna', cat:'Chain Saws', price:68500, mrp:74900, img:IMG+'10-1.jpg?ssl=1', specs:{'Engine':'2-stroke X-Torq','Displacement':'55.5 cc','Power':'2.6 kW','Bar':'15–20 in','Weight':'6.0 kg'}},
  {id:'h61', name:'HUSQVARNA 61', brand:'Husqvarna', cat:'Chain Saws', price:72900, mrp:79500, img:IMG+'11-1.jpg?ssl=1', specs:{'Engine':'2-stroke','Displacement':'61.5 cc','Power':'3.2 kW','Bar':'15–24 in','Weight':'6.1 kg'}},
  {id:'ht435', name:'HUSQVARNA T435', brand:'Husqvarna', cat:'Chain Saws', price:42500, mrp:46500, img:IMG+'12-1.jpg?ssl=1', specs:{'Engine':'2-stroke X-Torq','Displacement':'40.9 cc','Power':'1.6 kW','Bar':'13–16 in','Weight':'4.4 kg','Type':'Top-handle'}},

  /* ---- Cultivators & tillers ---- */
  {id:'tf120', name:'HUSQVARNA TF 120', brand:'Husqvarna', cat:'Cultivators & Tillers', price:48500, mrp:53500, img:IMG+'1-2.jpg?ssl=1', specs:{'Engine':'Petrol 4-stroke','Working width':'37 cm','Tines':'4 + 1','Weight':'34 kg'}},
  {id:'tf230', name:'HUSQVARNA TF 230', brand:'Husqvarna', cat:'Cultivators & Tillers', price:62500, mrp:68500, img:IMG+'2-3.jpg?ssl=1', specs:{'Engine':'Petrol 4-stroke','Working width':'75 cm','Tines':'6','Weight':'52 kg'}},
  {id:'tf544', name:'HUSQVARNA TF 544+', brand:'Husqvarna', cat:'Cultivators & Tillers', price:84900, mrp:92500, img:IMG+'3-3.jpg?ssl=1', badge:'Pro', specs:{'Engine':'Honda-series 4-stroke','Working width':'110 cm','Tines':'6 + 2','Gears':'2F + 1R','Weight':'103 kg'}},
  {id:'tf545d', name:'HUSQVARNA TF 545D+', brand:'Husqvarna', cat:'Cultivators & Tillers', price:92500, mrp:99900, img:IMG+'4-3.jpg?ssl=1', specs:{'Engine':'Diesel 4-stroke','Working width':'110 cm','Tines':'6 + 2','Gears':'2F + 1R','Weight':'122 kg'}},
  {id:'tf545de', name:'HUSQVARNA TF 545DE+', brand:'Husqvarna', cat:'Cultivators & Tillers', price:98900, mrp:107000, img:IMG+'5-3.jpg?ssl=1', badge:'Electric start', specs:{'Engine':'Diesel, electric + recoil start','Working width':'110 cm','Gears':'2F + 1R','Weight':'126 kg'}},
  {id:'tf545p', name:'HUSQVARNA TF 545P', brand:'Husqvarna', cat:'Cultivators & Tillers', price:89500, mrp:97500, img:IMG+'6-3.jpg?ssl=1', specs:{'Engine':'Petrol 4-stroke','Working width':'110 cm','Gears':'2F + 1R','Weight':'108 kg'}},
  {id:'tiller212', name:'Power Tiller 212cc 7HP (EDPT01)', brand:'JKKVC', cat:'Cultivators & Tillers', price:38900, mrp:44900, img:'img/tiller.jpg', badge:'Value Pick', specs:{'Engine':'212 cc 4-stroke, 7 HP','Tines':'16 adjustable steel tines','Working width':'up to 60 cm','Weight':'48 kg'}},

  /* ---- Lawn mowers ---- */
  {id:'lc118', name:'HUSQVARNA LC 118', brand:'Husqvarna', cat:'Lawn Mowers', price:36500, mrp:39900, img:IMG+'1-5.jpg?ssl=1', specs:{'Engine':'Petrol','Cutting width':'46 cm','Collector':'50 L','Drive':'Push'}},
  {id:'lc141c', name:'HUSQVARNA LC 141C', brand:'Husqvarna', cat:'Lawn Mowers', price:48900, mrp:53500, img:IMG+'2-5.jpg?ssl=1', specs:{'Engine':'Petrol','Cutting width':'41 cm','Collector':'50 L','Drive':'Push'}},
  {id:'lc419sp', name:'HUSQVARNA LC 419SP', brand:'Husqvarna', cat:'Lawn Mowers', price:62500, mrp:68500, img:IMG+'3-4.jpg?ssl=1', badge:'Self-propelled', specs:{'Engine':'Honda GCV 170','Cutting width':'47 cm','Collector':'55 L','Drive':'Self-propelled'}},

  /* ---- Sprayers & garden ---- */
  {id:'sp321', name:'Husqvarna 321S25 Power Sprayer / Brushcutter combo', brand:'Husqvarna', cat:'Sprayers', price:24900, mrp:27900, img:'img/sprayer.jpg', specs:{'Engine':'2-stroke','Displacement':'21 cc','Tank':'knapsack','Use':'Orchard & vine spraying'}},
  {id:'felco2', name:'Felco 2 Hand Pruning Secateur (Swiss)', brand:'Felco', cat:'Garden Tools', price:4850, mrp:5600, img:'', badge:'Original', specs:{'Origin':'Switzerland','Cut capacity':'25 mm','Spare parts':'Fully serviceable','Use':'Apple & orchard pruning'}},

  /* ---- Fertilizer ---- */
  {id:'yaramila', name:'YaraMila Complex NPK 12-8-16 + TE (50 kg)', brand:'Yara', cat:'Fertilizers', price:3150, mrp:3400, img:'', specs:{'NPK':'12-8-16 + TE','Pack':'50 kg','Form':'Granular','Use':'Orchards, vegetables'}},
  {id:'yaratropicote', name:'YaraLiva Tropicote Calcium Nitrate (25 kg)', brand:'Yara', cat:'Fertilizers', price:2450, mrp:2700, img:'', specs:{'N':'15.5% + Ca 19%','Pack':'25 kg','Form':'Water-soluble'}},
  {id:'sagarika', name:'IFFCO Sagarika Seaweed Extract (1 L)', brand:'IFFCO', cat:'Fertilizers', price:1250, mrp:1450, img:'', badge:'Organic', specs:{'Type':'Seaweed biostimulant','Pack':'1 L','Dose':'2–3 ml / L foliar'}},
  {id:'iplmop', name:'IPL MOP Potash Fertilizer (50 kg)', brand:'IPL', cat:'Fertilizers', price:1950, mrp:2200, img:'', specs:{'K2O':'60%','Pack':'50 kg HDPE bag','Form':'Powder'}},
  {id:'yaravita', name:'YaraVita Stop-It Ca Foliar (1 L)', brand:'Yara', cat:'Fertilizers', price:2450, mrp:2750, img:'', specs:{'Type':'Foliar calcium','Pack':'1 L','Use':'Apple bitter-pit control'}},

  /* ---- Seeds ---- */
  {id:'seedtomato', name:'Hybrid Tomato Seed — Kashmir Grade (10 g)', brand:'JKKVC Seeds', cat:'Seeds', price:650, mrp:800, img:'', specs:{'Pack':'10 g (~3,000 seeds)','Season':'Rabi / Kharif','Germination':'≥ 90%'}},
  {id:'seedcarrot', name:'Carrot Seed — Nantes Type (100 g)', brand:'JKKVC Seeds', cat:'Seeds', price:480, mrp:600, img:'', specs:{'Pack':'100 g','Season':'Kharif','Germination':'≥ 85%'}},
  {id:'seedspinach', name:'Palak / Spinach Seed — Local Selection (250 g)', brand:'JKKVC Seeds', cat:'Seeds', price:350, mrp:450, img:'', specs:{'Pack':'250 g','Season':'Year-round','Germination':'≥ 80%'}}
];

const CATEGORIES = [
  {name:'Brush Cutters', icon:'scythe', desc:'Orchard & pasture clearing'},
  {name:'Chain Saws', icon:'saw', desc:'Pruning to professional felling'},
  {name:'Cultivators & Tillers', icon:'tiller', desc:'Seedbed prep for valley farms'},
  {name:'Lawn Mowers', icon:'mower', desc:'Crisp lawns & boulevards'},
  {name:'Sprayers', icon:'spray', desc:'Orchard pest & disease control'},
  {name:'Garden Tools', icon:'shear', desc:'Felco & premium hand tools'},
  {name:'Fertilizers', icon:'bag', desc:'Yara, IFFCO, IPL — genuine stock'},
  {name:'Seeds', icon:'seed', desc:'Tested vegetable & fodder seed'}
];

/* Representative network — JKKVC states 35+ company-owned showrooms
   and 100+ dealers across the Kashmir Valley (jkkrishivikas.com). */
const BRANCHES = [
  {district:'Srinagar', count:5, towns:['Lalmandi — Head Office & Showroom','Bemina Showroom','Nowgam Showroom','Rainawari Showroom','Zakura Showroom']},
  {district:'Budgam', count:4, towns:['Budgam Town Showroom','Chadoora Showroom','Charar-e-Sharif Showroom','Khan Sahib Showroom']},
  {district:'Baramulla', count:5, towns:['Baramulla Town Showroom','Sopore Showroom','Uri Showroom','Pattan Showroom','Tangmarg Showroom']},
  {district:'Kupwara', count:3, towns:['Kupwara Town Showroom','Handwara Showroom','Kralpora Showroom']},
  {district:'Bandipora', count:2, towns:['Bandipora Town Showroom','Sumbal Showroom']},
  {district:'Ganderbal', count:3, towns:['Ganderbal Town Showroom','Kangan Showroom','Gund Showroom']},
  {district:'Anantnag', count:5, towns:['Anantnag Town Showroom','Bijbehara Showroom','Kokernag Showroom','Dooru Showroom','Qazigund Showroom']},
  {district:'Pulwama', count:4, towns:['Pulwama Town Showroom','Pampore Showroom','Awantipora Showroom','Tral Showroom']},
  {district:'Shopian', count:2, towns:['Shopian Town Showroom','Veeri Showroom']},
  {district:'Kulgam', count:3, towns:['Kulgam Town Showroom','Devsar Showroom','Yarwani Showroom']}
];

const TESTIMONIALS = [ /* sample voices for the mock — replace with real collected reviews */
  {q:'Bought the Husqvarna 135 Mark II for my poplar plantation. Genuine machine, proper first service and the Sopore staff explained the mix ratio patiently.', n:'Abdul Majeed Bhat', w:'Poplar grower, Sopore'},
  {q:'We lift YaraMila and calcium for our apple orchard every season. Billing is quick and stock is always genuine — that is why our whole village deals with JKKVC.', n:'Mohammad Yousuf Dar', w:'Apple orchardist, Shopian'},
  {q:'The power tiller changed my vegetable nursery work completely. They even arranged a demo in my field before purchase.', n:'Shabana Akhtar', w:'Vegetable farmer, Budgam'}
];

const BRANDS = ['Husqvarna','Texas','Felco','Yara','IFFCO','IPL','JKKVC','JKKVC Seeds'];
