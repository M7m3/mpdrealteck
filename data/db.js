/**
 * Global Real Estate & Commercial Asset Database Portfolio
 * Managed according to strict corporate tokens and parameters.
 */

export const PROPERTIES_DB = [
  {
    id: "gangotri-ramtal",
    name: "Gangotri RAMTAL",
    developer: "Gangotri Infrateck",
    legacyEstablished: 1949,
    // Featured media asset path pointer
    image: "/properties/gang.jpg",
    approvalStatus: {
      mvdaApproved: true,
      reraCertified: true,
      reraNumber: "UPRERAPRJ876459/11/2025"
    },
    projectTimeline: {
      launchDate: "October 2025",
      expectedPossession: "February 2030",
      status: "Under Construction"
    },
    geometry: {
      projectSize: "1.37 Acres",
      totalTowers: 1,
      structuralFloors: "G + 15 Floors",
      totalUnits: 210
    },
    location: {
      address: "Khasra No. 522, Sunrakh Road, Opp. Ramtal Kund, Jait-Sunrakh",
      city: "Vrindavan",
      district: "Mathura",
      postalCode: "281121",
      state: "Uttar Pradesh",
      geographicalContext: "Situated on Sunrakh Road, just steps from the sacred Parikrama Marg, directly facing the revered Ramtal Kund."
    },
    pricingAndInventory: {
      currency: "INR",
      priceRange: "₹86.0 Lac - ₹1.33 Cr",
      unitTypes: [
        {
          type: "1 BHK",
          sizes: ["533 sq.ft", "630 sq.ft", "860 sq.ft", "886 sq.ft"],
          startingPrice: "₹86.0 Lac"
        },
        {
          type: "2 BHK",
          sizes: ["821 sq.ft", "1216 sq.ft"],
          startingPrice: "₹1.22 Cr"
        }
      ]
    },
    investmentInsights: {
      growthPotential: "3X Growth Potential based on market analysis",
      tourismProjection: "6+ Crore projected visitors by 2030",
      appreciationTier: "High Appreciation Zone (Prime Location Advantage)",
      yearOverYearTrend: "+1.18% Price appreciation in the past year"
    },
    proximityMetrics: [
      { target: "Ramtal Kund & Parikrama Marg", distance: "0 mins (In front)" },
      { target: "NH-44 / NH-2 Link Road", distance: "5 mins access" },
      { target: "Vrindavan City Center", distance: "5 mins away" },
      { target: "ISKCON Temple", distance: "2.5 km" },
      { target: "Prem Mandir", distance: "3.0 km" },
      { target: "Yamuna River Ghat", distance: "3.5 km" },
      { target: "Banke Bihari Temple", distance: "4.2 km" },
      { target: "Jewar International Airport", distance: "1 Hour drive away" }
    ],
    signatureUSPs: [
      "Complimentary dedicated Golf Cart Service to ISKCON and Bankey Bihari Temple for residents",
      "Beautiful Rooftop Green Space / Landscaped Garden",
      "Nearby fully operational Gaushala for peaceful, spiritually grounded living",
      "Vastu-compliant architectural layout layout engineered to maximize natural light and airflow"
    ],
    amenitiesList: [
      "Gymnasium & Fitness Centre",
      "Yoga & Meditation Studio",
      "Satsang Hall & On-Site Temple",
      "Senior Activity Centre",
      "Swimming Pool",
      "Community Hall & Event Space",
      "Open Amphitheatre & Walking Trail",
      "Kids Play Area & Indoor Games Room",
      "Dedicated EV Charging Stations",
      "4 High-Speed Passenger & Goods Elevators",
      "24/7 Monitored Security with Advanced CCTV",
      "24-Hour Continuous Water Supply & Storage",
      "Full Power Backup for Residences & Common Spaces",
      "Covered Resident Parking & Dedicated Visitor Parking Areas",
      "On-Call Medical & Emergency Facilities",
      "Rainwater Harvesting System",
      "Sewage Treatment Plant & Solid Waste Management",
      "Wheelchair Accessibility across common grounds",
      "In-house Convenience Store"
    ],
    technicalSpecifications: {
      flooring: {
        livingDining: "Large sized high-quality vitrified tiles",
        bedrooms: "Good quality vitrified tiles",
        kitchen: "Vitrified floor tiles",
        toilets: "Combination ceramic floor tiles",
        balconies: "Ceramic / porcelain tile combinations with Glass or MS Railing"
      },
      kitchen: {
        type: "Modular layout type configuration",
        platform: "Premium granite slab platform with integrated stainless steel sink",
        dado: "Ceramic tiles above slab scaling up to 7 feet on main wall"
      },
      toilets: {
        fittings: "Premium CP fittings and institutional-standard sanitary fixtures",
        dado: "Ceramic tile combinations extending up to 7 feet height"
      },
      doors: {
        mainFrame: "Wooden door frames",
        shutters: "Premium wooden flush doors fitted with secure Mortice Locks"
      },
      wallFinishes: {
        interior: "Smooth plastic emulsion paint over POP cornices",
        exterior: "Weather-proof external defensive protective coat paint"
      }
    },
    contactChannels: {
      inquiryPhone: "+91 800-3209-733",
      supportLine: "+91 800-6019-090",
      officeAddress: "A6, Shri Radha Florence, Rukmini Vihar, Vrindavan",
      inquiryEmail: "info@brijvaas.com"
    }
  },
  {
    id: "group108-one-fng",
    name: "One FNG",
    developer: "Group 108 (SS Technopark Private Limited)",
    legacyEstablished: 2023, // Project launch timeline configuration
    // Dynamic asset image path pointer
    image: "/properties/one-fng.jpg", 
    approvalStatus: {
      mvdaApproved: false, // Not applicable for Noida Authority jurisdiction
      noidaAuthorityApproved: true,
      reraCertified: true,
      reraNumber: "UPRERAPRJ279516"
    },
    projectTimeline: {
      launchDate: "September 2023",
      expectedPossession: "August 2028",
      status: "Under Construction"
    },
    geometry: {
      projectSize: "14.46 Acres (Approx. 15 Acres)",
      totalTowers: 2, // Main core office structures alongside 5 Low-Rise Hi-Street Retail blocks
      structuralFloors: {
        towerA: "G + 37 Floors",
        towerB: "G + 15 Floors",
        retailBlocks: "G + 1 to G + 3 Floors"
      },
      totalUnits: 1407,
      floorPlateSize: "Approx. 53,000 sq.ft (One of the largest floor plates in Noida region)"
    },
    location: {
      address: "Plot No. 1, Adjoining FNG Corridor, Sector 142",
      city: "Noida",
      district: "Gautam Buddha Nagar",
      postalCode: "201305",
      state: "Uttar Pradesh",
      geographicalContext: "Strategically balanced with dual frontage along both the Faridabad-Noida-Ghaziabad (FNG) Expressway and the main Noida-Greater Noida Expressway infrastructure corridor."
    },
    pricingAndInventory: {
      currency: "INR",
      priceRange: "₹1.38 Cr - ₹3.87 Cr+",
      unitTypes: [
        {
          type: "Grade-A Bare Shell Office Space",
          sizes: ["914 sq.ft", "975 sq.ft", "1,075 sq.ft", "1,442 sq.ft", "3,200 sq.ft"],
          startingPrice: "₹1.38 Cr"
        },
        {
          type: "Premium High-Street Retail Shops",
          sizes: ["615 sq.ft", "1,130 sq.ft", "1,200 sq.ft and above"],
          startingPrice: "₹1.79 Cr"
        }
      ]
    },
    investmentInsights: {
      structuralEfficiency: "62.5% Premium office space floor layout design efficiency",
      certificationTier: "IGBC Platinum Pre-Certified for environmental design",
      constructionModel: "High-durability Steel Composite Building blueprint to lower carbon emissions",
      marketTrend: "+16.39% Average property price value appreciation recorded within recent operational quarters"
    },
    proximityMetrics: [
      { target: "Sector 142 Noida Metro Station", distance: "Walking Distance (< 1 Km)" },
      { target: "Noida-Greater Noida Expressway Corridor", distance: "500 Metres" },
      { target: "Advant Navis Business Park", distance: "1 Km" },
      { target: "Yamuna Expressway Connection Link", distance: "9 Km" },
      { target: "Kalindi Kunj (Delhi Entry Gateway)", distance: "12 Km" },
      { target: "DND Flyway & South Delhi Corridors", distance: "20 Mins drive" },
      { target: "Upcoming Noida International Airport (Jewar)", distance: "45 Mins drive" }
    ],
    signatureUSPs: [
      "Massive 17.5 feet structural clearance height (5.35m) across Ground Floor and Level 1 retail interfaces",
      "Stately 5,800 sq.ft grand double-height entrance reception lobby with 14.7 feet wide lift lounges",
      "Completely isolated and separate entry access pathways for office professionals and retail footprint traffic",
      "Dedicated corporate business incubation center spanning 7,500 sq.ft equipped with modular pantries and event services"
    ],
    amenitiesList: [
      "21 Advanced Microprocessor-Driven High-Speed Passenger & Freight Elevators",
      "Dedicated multi-level structured car parking facilities",
      "On-site EV Charging pods and smart vehicle service stations",
      "Sports Wellness Center featuring an indoor covered temperature-controlled swimming pool",
      "Professional Gymnasium & Aerobics studio",
      "Dedicated Yoga and spiritual meditation spaces",
      "Dedicated corporate shuttle bus fleet connectivity for occupants",
      "Integrated 7 feet wide corridors and structural pedestrian walking zones",
      "Landscaped layout boundaries featuring architectural pop-up fountains and cycle tracking lanes",
      "Centralized internal air filtering, high-grade security surveillance with 24/7 CCTV parameters",
      "100% Comprehensive automated power backup grid layout"
    ],
    technicalSpecifications: {
      structuralFramework: {
        foundation: "Seismic Zone IV compliant earthquake resistant steel composite architectural structure",
        facade: "High-performance energy-efficient double glazed structural glass unit curtain walls"
      },
      flooring: {
        officeAreas: "Smooth leveled bare-shell concrete floor plates ready for custom raised corporate fit-outs",
        commonAreas: "Premium anti-skid granite or vitrified stone combinations within elevator lobbies",
        retailWalkways: "High-traffic institutional grade polished stone floors"
      },
      clearances: {
        officeFloors: "Expansive 4.35 meters floor-to-floor structural clearance height",
        retailFloors: "Grand 5.35 meters floor-to-floor clearance for retail storefront visibility"
      }
    },
    contactChannels: {
      inquiryPhone: "+91 9070-108-108",
      officeAddress: "Plot No. 1, Sector 142, Noida Expressway, Uttar Pradesh - 201305",
      registeredOffice: "Plot No. 3 & 4, 2nd Floor, A-Block Market, Preet Vihar, Delhi"
    }
  },
  {
    id: "gaur-chrysalis",
    name: "Gaur Chrysalis (Phase 1)",
    developer: "Gaurs Group (Gaufsons Promoters Private Limited)",
    legacyEstablished: 1995, // Representing Gaurs' 25+ years track record in NCR region
    // Local image path pointer matching requested structure
    image: "/properties/gaur.jpg", 
    approvalStatus: {
      mvdaApproved: false, // Under YEIDA/UP-RERA authority jurisdiction
      reraCertified: true,
      reraNumber: "UPRERAPRJ622344/11/2025"
    },
    projectTimeline: {
      launchDate: "November 2025",
      expectedPossession: "December 2030", // Aligned with long-term development phases
      status: "Pre-Launch / Early Stage Construction"
    },
    geometry: {
      projectSize: "11.8 Acres (4.77 Hectares)",
      totalTowers: 7, // 34-Storey Iconic Towers with sweeping sky views
      structuralFloors: "G + 33 Floors",
      totalUnits: 952,
      densityConfiguration: "Highly exclusive 4 apartments per floor with 4 dedicated high-speed elevators per tower"
    },
    location: {
      address: "Sector 22D, Yamuna Expressway, Directly opposite Gaur Yamuna City",
      city: "Greater Noida",
      district: "Gautam Buddha Nagar",
      postalCode: "203209",
      state: "Uttar Pradesh",
      geographicalContext: "Strategically situated along India's fastest-growing macro corridor, offering front-row accessibility to the upcoming Jewar International Airport and the core industrial infrastructure belt."
    },
    pricingAndInventory: {
      currency: "INR",
      priceRange: "₹1.52 Cr - ₹2.49 Cr+",
      unitTypes: [
        {
          type: "3 BHK Landmark Residence (Premium Luxury)",
          sizes: {
            carpetArea: "999 sq.ft (92.83 Sq.Mt)",
            builtUpArea: "1475 sq.ft (137.07 Sq.Mt)",
            totalSuperArea: "1910 sq.ft"
          },
          startingPrice: "₹1.52 Cr"
        },
        {
          type: "4 BHK Landmark Residence (Ultra Luxury Layout)",
          sizes: {
            carpetArea: "1340 sq.ft (124.54 Sq.Mt)",
            builtUpArea: "1922 sq.ft (178.55 Sq.Mt)",
            totalSuperArea: "2495 sq.ft"
          },
          startingPrice: "₹2.10 Cr"
        }
      ]
    },
    investmentInsights: {
      capitalGrowthTrend: "Anticipated 15-20% annualized yield appreciation driven by localized civil mega-projects",
      architecturalAuthority: "Master planned and detailed under the direction of Hafeez Contractor",
      designTheme: "Butterfly-inspired architectural theme balancing structural transition with massive central green spaces",
      infrastructureProximity: "Positioned directly in the epicentre of the upcoming Olympic City, Film City, and tech logistics hubs"
    },
    proximityMetrics: [
      { target: "Yamuna Expressway Core Link", distance: "2 Mins access" },
      { target: "Gaur Yamuna City Mega Township & Mall", distance: "Directly Opposite (3 Km via inner boulevard)" },
      { target: "Gaurs International School", distance: "3.1 Km" },
      { target: "Eastern Peripheral Expressway Interchange", distance: "10 Km" },
      { target: "Upcoming Noida International Airport (Jewar)", distance: "10-12 Km (10 Mins drive)" },
      { target: "Noida-Greater Noida Expressway Junction", distance: "18 Km" },
      { target: "Film City Sector 21 Complex", distance: "15 Mins away" }
    ],
    signatureUSPs: [
      "Massive 75,000 sq.ft ultra-modern glass facade clubhouse, ranking as one of the largest specialized club terrains in the NCR zone",
      "True double-pool layout featuring both a full Olympic-size outdoor lap pool and an indoor temperature-controlled heated pool setup",
      "Vast central landscaped greens featuring designated butterfly sanctuaries, plumeria gardens, and sensory reflexology paths",
      "Triple-height premium entrance reception lounges offering grand drop-off points for individual high-rise clusters"
    ],
    amenitiesList: [
      "State-of-the-art Gym & Outdoor Crossfit Station",
      "Wellness Lounge with integrated Ice/Cold Bath setup and Spa/Jacuzzi",
      "Dedicated Yoga Court & Meditation Pods tucked inside Zen gardens",
      "Indoor Sports Arena: Squash Court, Badminton Court, and Smash Cricket Area",
      "Social Hubs: Fine Dining Restaurant, Banquet Hall, and Private Guest Suites",
      "Entertainment Zones: Mini Theatre Lounge, Arcade Junction, and Private Bowling Alley",
      "Kids Development Area: Day Care/Creche, Kids Pool, and Play Mounds",
      "Special Senior Citizen Sitout and shaded conversation alcoves",
      "Pet Park and Meandering jogging tracks wrapped across the periphery",
      "Advanced Multi-tier CCTV Monitoring and automated Fire Alarm safety infrastructure",
      "100% Full Power Backup for common domains and individual residences"
    ],
    technicalSpecifications: {
      structuralFramework: {
        foundation: "Seismic Zone V compliant earthquake resistant RCC framed structural design layout",
        engineering: "Advanced monolithic aluminum shuttering building technology for high structural precision"
      },
      flooring: {
        livingDining: "Premium imported marble or oversized high-gloss vitrified tile layouts",
        masterBedroom: "Laminated engineered wooden floors or premium vitrified tile selections",
        balconies: "Anti-skid premium ceramic tile arrangements with secure glass/MS structural railings"
      },
      kitchen: {
        type: "Premium semi-modular framework with granite workspace slabs",
        provisions: "Piped gas distribution network links and premium anti-corrosive dual-sink hardware"
      },
      wallFinishes: {
        interior: "Smooth acrylic emulsion finishes over protective POP punning bases",
        exterior: "Weather-proof high-elasticity exterior texture coats for maximum element defense"
      }
    }
  },
  {
    id: "omaxe-eternity",
    name: "Omaxe Eternity",
    developer: "Omaxe Limited",
    legacyEstablished: 1987, // Year of Omaxe's foundational incorporation
    // Local image path pointer matching requested structure
    image: "/properties/omaxe.jpg", 
    approvalStatus: {
      mvdaApproved: true,
      reraCertified: true,
      reraNumber: "UPRERAPRJ2218, UPRERAPRJ3191" // Multi-phase registration metrics
    },
    projectTimeline: {
      launchDate: "July 2017",
      expectedPossession: "Completed / Ready to Move",
      status: "Ready to Move"
    },
    geometry: {
      projectSize: "95.1 Acres (Massive Low-Density Integrated Township Layout)",
      totalTowers: 99, 
      structuralFloors: "Ground + 3 to 4 Floors (Low-rise community structure)",
      totalUnits: 732,
      densityConfiguration: "Spacious layout with sprawling open configurations and green breaks"
    },
    location: {
      address: "Sunrakh Bangar, Chhatikara Road",
      city: "Vrindavan",
      district: "Mathura",
      postalCode: "281121",
      state: "Uttar Pradesh",
      geographicalContext: "Perfectly placed directly on Chhatikara Road within a pollution-free green zone, matching high-end connectivity parameters to key cultural reference points."
    },
    pricingAndInventory: {
      currency: "INR",
      priceRange: "₹35.1 Lac - ₹1.50 Cr+",
      unitTypes: [
        {
          type: "1 RK Studio Apartment",
          sizes: ["300 sq.ft", "351 sq.ft", "455 sq.ft", "968 sq.ft"],
          startingPrice: "₹35.1 Lac"
        },
        {
          type: "1 BHK Apartment / Independent Floor",
          sizes: ["370 sq.ft", "435 sq.ft", "860 sq.ft"],
          startingPrice: "₹38.96 Lac"
        },
        {
          type: "2 BHK Apartment",
          sizes: ["1100 sq.ft", "1126 sq.ft", "1200 sq.ft"],
          startingPrice: "₹1.10 Cr"
        },
        {
          type: "3 BHK Apartment",
          sizes: ["1150 sq.ft"],
          startingPrice: "₹1.35 Cr"
        },
        {
          type: "Residential Plot / Land",
          sizes: ["1323 sq.ft"],
          startingPrice: "₹1.92 Cr"
        }
      ]
    },
    investmentInsights: {
      capitalGrowthTrend: "Significant historical price appreciation exceeding 190% over historical development baselines",
      livabilityMatrix: "Premium sweet-water table verified at 100 feet down from ground level with clear land boundaries",
      designTheme: "Harmonious blending of international modern comforts with spiritual structural aesthetics",
      infrastructureProximity: "Excellent rental yields driven by persistent premium leisure and religious tourism flows"
    },
    proximityMetrics: [
      { target: "Bharati Foods and Restaurant Area", distance: "1.7 Km" },
      { target: "Main Chhatikara Road Connection Link", distance: "0 Mins access" },
      { target: "ISKCON Temple Complex", distance: "4 Km (Approx 8 mins drive)" },
      { target: "Banke Bihari Temple Hub", distance: "6 Km" },
      { target: "Prem Mandir Landmark", distance: "5.5 Km" },
      { target: "NH-44 Delhi-Agra Highway Entry Gateway", distance: "10 Mins drive" }
    ],
    signatureUSPs: [
      "Massive standalone Grand Temple Complex situated right within the heart of the secure township grounds",
      "Dedicated Central Park system incorporating fully animated musical water fountain installations",
      "Large dedicated Pravachan and Satsang Hall designed specifically for spiritual discourses and group events",
      "Comprehensive internal infrastructure featuring a planned school site and multi-tier local shopping arcades"
    ],
    amenitiesList: [
      "Clubhouse & Social Community Center",
      "Fully Equipped Gymnasium & Fitness Arena",
      "Dedicated Yoga, Meditation & Wellness Zone",
      "Swimming Pool with separate Kids Play Pool & Water Slides",
      "Landscaped Jogging, Walking, and Pollution-Free Cycling Tracks",
      "Children's Play Area featuring premium swings, slides, and outdoor multi-games arrays",
      "Multi-purpose Community Banquet Hall for cultural festivals and family celebrations",
      "Indoor Games Pavilion featuring Table Tennis, Billiards, and Snooker setups",
      "Senior Citizen Relaxation Enclaves featuring shaded conversation corners",
      "Integrated Waste Management and localized Sewage Treatment infrastructures",
      "Advanced 24/7 Gated Security checkpoints backed by persistent CCTV tracking",
      "100% Uninterrupted Power Backup framework and dedicated deep water tanks"
    ],
    technicalSpecifications: {
      structuralFramework: {
        foundation: "High-stability earthquake-proof structural engineering models",
        materials: "Eco-friendly high-durability Fly Ash materials integrated for thermal efficiency"
      },
      flooring: {
        livingDining: "Premium vitrified tiles with Udaipur Green Marble highlights across common borders",
        masterBedroom: "Modern high-finish vitrified tile layouts",
        kitchen: "Vitrified tiles matched to heavy usage profiles",
        toilets: "Specialized anti-skid ceramic tile configurations"
      },
      kitchen: {
        type: "Modern layout setup with premium granite platform configurations",
        fittings: "Integrated heavy-gauge stainless steel sink with ceramic tile dado extending 2 feet above counters"
      },
      doorsAndWindows: {
        mainDoor: "Seasoned hardwood frames fitted with dual-side teak finish flush doors",
        windows: "Powder-coated high-grade aluminum sliding window tracks for element shielding"
      },
      wallFinishes: {
        interior: "Smooth wash-resistant acrylic paint coats",
        exterior: "Weather-proof external defensive acrylic coats preventing rain fading"
      }
    }
  },
  {
    id: "shri-yamuna-city",
    name: "Shri Yamuna City",
    developer: "Shri Yamuna Infraestate Private Limited",
    legacyEstablished: 2024, 
    // Local image path pointer matching requested structure
    image: "/properties/shri.png", 
    approvalStatus: {
      mvdaApproved: true,
      reraCertified: true,
      reraNumber: "Pending Verification / Applied" // Standard validation state marker
    },
    projectTimeline: {
      launchDate: "Early 2026",
      expectedPossession: "December 2031",
      status: "Pre-Launch / Expression of Interest (EOI) Phase"
    },
    geometry: {
      projectSize: "8.0 Acres (High-Efficiency Vertical Residential Layout)",
      totalTowers: 2, 
      structuralFloors: "G + 28 Floors (Iconic High-Rise Framework)",
      totalUnits: 450,
      engineeringModel: "100% Monolithic MIVAN Aluminium Shuttering Construction"
    },
    location: {
      address: "Ramtal Chauraha, Near Sunrakh Road Link",
      city: "Vrindavan",
      district: "Mathura",
      postalCode: "281121",
      state: "Uttar Pradesh",
      geographicalContext: "Strategically anchored at Ramtal Chauraha, balancing direct, immediate frontage to the inner Ring Road corridor with close spiritual pathways."
    },
    pricingAndInventory: {
      currency: "INR",
      priceRange: "₹42.50 Lac - ₹97.50 Lac+",
      eoiTokenAmount: "₹51,000 Only",
      unitTypes: [
        {
          type: "Studio Apartment / 1 RK Suite",
          sizes: ["350 sq.ft - 450 sq.ft Layout variants"],
          startingPrice: "Price on Request"
        },
        {
          type: "1 BHK Apartment + 1 Dedicated Balcony",
          sizes: ["500 sq.ft"],
          startingPrice: "₹42.50 Lac"
        },
        {
          type: "1 BHK Premium Apartment + 1 Dedicated Balcony",
          sizes: ["800 sq.ft"],
          startingPrice: "₹68.00 Lac"
        },
        {
          type: "2 BHK Luxury Apartment + 2 Toilets",
          sizes: ["1000 sq.ft"],
          startingPrice: "₹97.50 Lac"
        }
      ]
    },
    investmentInsights: {
      capitalGrowthTrend: "Strong entry-level asset class appreciation projection due to infrastructure expansion",
      paymentPlanEfficiency: "Highly modular 1% recurring flexible payment pipelines available for investors",
      targetAudience: "Highly optimized for spiritual retirement spaces, holiday second homes, or high-occupancy airbnb/rental portfolios"
    },
    proximityMetrics: [
      { target: "Inner Ring Road Axis", distance: "1 Min access (Direct)" },
      { target: "Yamuna Expressway Link Road", distance: "5 Mins drive" },
      { target: "Chhatikara Chowk Connection Junction", distance: "6 Mins away" },
      { target: "Prem Mandir & ISKCON Temple Zone", distance: "8-10 Mins drive" },
      { target: "Banke Bihari Temple Complex", distance: "12 Mins drive" },
      { target: "Delhi-Mumbai Expressway Connectivity Link", distance: "15 Mins access" },
      { target: "Noida International Airport (Jewar)", distance: "45 Mins drive" }
    ],
    signatureUSPs: [
      "Advanced monolithic MIVAN structural casting guaranteeing seismic dampening and seamless finishes",
      "Stately internal Musical Fountain Garden layout acting as a core community focal landscape",
      "High-rise viewing corridors offering unobstructed panoramic sweeps over Vrindavan's sacred landscape topology",
      "Dedicated high-speed elevator banks mapped to high traffic profiles across the 28-storey tower verticals"
    ],
    amenitiesList: [
      "Stately Gated Community Entry Hub with 24/7 Guards & CCTV Intercom infrastructure",
      "Dedicated Central Temple and Spiritual Assembly Grounds",
      "Modern Gymnasium & High-Performance Cardio Center",
      "Swimming Pool with secure non-slip kids splash borders",
      "Dedicated Indoor Meditation Sanctuaries & Peaceful Yoga Rooms",
      "Interactive Kids Play Zone with engineered safety mats",
      "Landscaped Jogging & Fitness Paths laced with Musical Sound System points",
      "High-Volume Deep Water Underground Storage and 24x7 Continuous Supply lines",
      "100% Full Power Automation Backup supporting all high-rise elevators and individual flats",
      "Dedicated Multi-Level Basement Parking and surface visitor parking stalls"
    ],
    technicalSpecifications: {
      structuralFramework: {
        foundation: "High-grade Earthquake-Resistant RCC Foundation layout casting",
        walls: "Monolithic MIVAN concrete structures providing high damp proofing and wall longevity"
      },
      flooring: {
        livingDining: "Premium mirror-finish vitrified tile selections with safe structural tile skirtings",
        bedrooms: "High-grade vitrified tile arrangements matching modern aesthetic tokens",
        balconies: "Anti-skid matte ceramic tile layouts accented with heavy MS safety railings"
      },
      kitchen: {
        type: "Open or semi-modular framework options featuring a highly polished absolute granite slab",
        provisions: "Integrated stainless steel plumbing sinks with a 2-foot decorative ceramic tile dado block overlay"
      },
      toilets: {
        fittings: "Premium single-lever CP control hardware and sanitary ceramic arrays from standard brands",
        dado: "Full-height designer ceramic tiling stretching directly to false ceiling frameworks"
      },
      wallFinishes: {
        interior: "Double coat POP putty bases layered underneath premium washable acrylic emulsion paints",
        exterior: "All-weather anti-fungal exterior textured protective skin paint layers"
      }
    }
  },
  {
    id: "czar-ghi-city-2",
    name: "G.H.I. City -2",
    developer: "Czar Buildcon Private Limited (Gambhir Housing India)",
    legacyEstablished: 2012, // Year of corporate incorporation
    // Local image path pointer matching requested structure
    image: "/properties/ghi.jpg", 
    approvalStatus: {
      mvdaApproved: false, // Regulated via District Jila Panchayat Framework
      jilaPanchayatApproved: true,
      permitNumber: "Original Permit No. 4887 (Zila Panchayat Agra)",
      permitDate: "11-02-2025",
      reraCertified: true,
      reraNumber: "UPRERAPRJ937180/02/2026"
    },
    projectTimeline: {
      launchDate: "May 2025",
      expectedPossession: "September 2028",
      status: "Under Construction (New Launch Phase)"
    },
    geometry: {
      projectSize: "8.93 Acres (36,138.00 Sq. Mts)",
      totalTowers: 0, // Plotted township development layout
      totalUnits: 236, // Total structural plot layouts
      layoutType: "Premium Gated Housing Plots & Land Infrastructure"
    },
    location: {
      address: "A/55 part of Khasra No. 451, 467, 472, Mauza Kundol, Miyapur, near TDI City Phase 1, Fatehabad Road",
      city: "Agra",
      district: "Agra",
      postalCode: "282006",
      state: "Uttar Pradesh",
      geographicalContext: "Strategically located inside the thriving Fatehabad Road macro-corridor, adjacent to TDI City Phase 1 and positioned along State Highway 62 (SH-62) with immediate access to Agra's prime commercial expansion lines."
    },
    pricingAndInventory: {
      currency: "INR",
      priceRange: "Price on Request (Varying Budget Ranges)",
      unitTypes: [
        {
          type: "Residential Plot / Bare Land Parcel",
          sizes: ["Starting from 1076.39 sq.ft and above"],
          startingPrice: "Price on Request"
        }
      ]
    },
    investmentInsights: {
      localityGrowthTrend: "+18.1% Year-over-Year price appreciation recorded across the Fatehabad Road micro-market",
      quarterlyMomentum: "+7.7% Property price value change in the most recent operational quarter",
      targetProfile: "Highly optimized for custom high-end villa construction, premium second homes, or liquid land asset banking"
    },
    proximityMetrics: [
      { target: "Fatehabad Road Commercial Strip (SH-62)", distance: "0 Mins access (Direct Link)" },
      { target: "TDI City Phase 1 Infrastructure Hub", distance: "Adjoining Complex" },
      { target: "Taj East Gate Metro Station", distance: "10.69 Km" },
      { target: "The International School Agra", distance: "Top Tier Proximity" },
      { target: "Jawahar Navodaya Vidyalaya Agra", distance: "Conveniently Accessible" },
      { target: "VS Shopping Mall Hub", distance: "Short driving radius" },
      { target: "Taj Mahal Complex & Tourist Corridor", distance: "15 Mins drive" }
    ],
    signatureUSPs: [
      "Rigorous dual-clearance zoning architecture backed by both Zila Panchayat permits and UP-RERA compliance layers",
      "Comprehensive underground infrastructure design, completely hiding high-voltage lines using concealed electric cabling",
      "Stately landscaped theme park systems integrated directly into the centralized residential master layout",
      "Premium street layout engineering featuring 100% internal street light configurations and pedestrian-friendly walking trails"
    ],
    amenitiesList: [
      "Stately Gated Community Entry with controlled boundary wall check-posts",
      "24/7 Monitored Security Personnel layout frameworks",
      "Landscaped Leisure Gardens & Tree Planting zones across the periphery",
      "Wide, Well-Maintained Internal Bitumen/Concrete Streets",
      "Underground Electrical Distribution Cabling network",
      "Dedicated Power Substation infrastructure setup",
      "Advanced Sewage Treatment Plant (STP) mapped to modern environmental standards",
      "24/7 Continuous Water Supply backed by integrated overhead reservoirs",
      "Modern Water Conservation Systems & Rainwater Harvesting nodes",
      "Dedicated Solid Waste Management & Eco-friendly disposal plans",
      "Dedicated Pedestrian Footpaths and Gated Walkways",
      "Community Activity Buildings for resident localization"
    ],
    technicalSpecifications: {
      civilInfrastructure: {
        roads: "Heavy-duty structural road layout built to handle residential transit load profiles",
        drainage: "Concealed storm water management drains constructed parallel to pedestrian footpaths"
      },
      powerSupply: {
        grid: "Dedicated CBPL power transaction grid layout with customized individual connection terminals per plot"
      },
      boundaries: "Secured masonry perimeter walling tracking the absolute exterior geometry coordinates"
    },
    contactChannels: {
      promoterEmail: "gyanendra@ghi.in",
      corporateOffice: "H-69, UGF, Outer Circle, Above HDFC Bank, Connaught Place, New Delhi - 110001",
      bankingEscrowAccount: "CBPL RERA Transaction AC for GHI City 2 (HDFC Bank, Taj Nagari Phase II, Agra)"
    }
  }
  // Future strategic asset listings inject here cleanly as uniform structures
]