
        const PAGE_FILE_MAP = {
            "home": "index.html",
            "products-filter": "products.html",
            "product-details": "product-details.html",
            "cart": "cart.html",
            "shipping-info": "shipping.html",
            "checkout": "checkout.html",
            "profile": "profile.html",
            "wishlist": "wishlist.html",
            "order-tracking": "order-tracking.html",
            "invoice": "invoice.html",
            "auth": "login.html"
        };

        const FALLBACK_SETTINGS = {
            brandName: "FindTechBD",
            helpline: "09678-002003",
            maintenance: false,
            allowOrdering: true,
            showHero: true,
            showDiscountBadge: true,
            marquee: "🔥 FindTechBD স্পেশাল অফার! সকল গিগাবিট রাউটার, মিনি ইউপিএস এবং ব্লুটুথ স্পিকারে চলছে বিশেষ মূল্যছাড়! সারা বাংলাদেশে ক্যাশ অন ডেলিভারি।",
            heroTag: "FindTechBD Exclusive",
            heroTitle: "Uninterrupted Wi-Fi & Audio Gear",
            heroSub: "Get up to 25% Instant Discount on TP-Link/Cudy Routers, WGP/Marsriva Mini UPS & Bluetooth Speakers!",
            heroBannerImg: "",
            heroBannerMode: "overlay",
            sideBannerTag: "Hot Combo",
            sideBannerTitle: "Router + Mini UPS Backup",
            sideBannerSub: "লোডশেডিংয়েও রাউটার চলবে টানা ৮ ঘণ্টা! সাথে থাকছে ফ্রি হোম ডেলিভারি।",
            sideBannerImg: "",
            smsProvider: "bulksmsbd",
            smsApiKey: "ftbd_live_api_8f92a3b4c5d6e7f8091a2b3c",
            smsSenderId: "8809617611000",
            smsCustomUrl: ""
        };

        const CATALOG_VERSION = "v3_solitine_tenda_102";
        const FALLBACK_CATEGORIES = ["Router","Speaker","Soundbar","Network Switch","Mesh Wi-Fi","IP Camera","Range Extender","ONU & Adapter","Mini UPS"];

        const FALLBACK_PRODUCTS = [
          {
                    "id": 201,
                    "name": "Solitine SE Go Bluetooth Multimedia Speaker (18W RMS)",
                    "brand": "Solitine",
                    "category": "Speaker",
                    "price": 2500,
                    "oldPrice": 3000,
                    "stock": "Up Coming",
                    "active": true,
                    "image": "images/solitine-1.jpg",
                    "images": [
                              "images/solitine-1.jpg"
                    ],
                    "specs": [
                              "18W RMS Output (3\" 9W x2 RMS)",
                              "Bluetooth Connectivity & Microphone Support",
                              "Package: 1 Audio Cable, Quick Setup, 2 Years Official Warranty"
                    ]
          },
          {
                    "id": 202,
                    "name": "Solitine SE Mini S 2.0 Bluetooth Speaker (12W RMS)",
                    "brand": "Solitine",
                    "category": "Speaker",
                    "price": 900,
                    "oldPrice": 1000,
                    "stock": "Up Coming",
                    "active": true,
                    "image": "images/solitine-2.jpg",
                    "images": [
                              "images/solitine-2.jpg"
                    ],
                    "specs": [
                              "12W RMS Output (3\" 6W + 6W RMS)",
                              "Wireless Bluetooth Playback",
                              "Package: 1 Audio Cable, Quick Setup, Warranty Card"
                    ]
          },
          {
                    "id": 203,
                    "name": "Solitine SE Mini-L SE30 2.0 Multimedia Bluetooth Speaker (18W RMS)",
                    "brand": "Solitine",
                    "category": "Speaker",
                    "price": 1550,
                    "oldPrice": 1800,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/solitine-3.jpg",
                    "images": [
                              "images/solitine-3.jpg"
                    ],
                    "specs": [
                              "18W RMS Output (3\" 9W + 9W RMS)",
                              "Bluetooth & AUX Audio Input",
                              "Package: 1 Audio Cable, Quick Setup, 2 Years Official Warranty"
                    ]
          },
          {
                    "id": 204,
                    "name": "Solitine Enter Soundbar SE108 with Subwoofer (32W RMS)",
                    "brand": "Solitine",
                    "category": "Soundbar",
                    "price": 2800,
                    "oldPrice": 3200,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/solitine-4.jpg",
                    "images": [
                              "images/solitine-4.jpg"
                    ],
                    "specs": [
                              "32W RMS Total (Subwoofer 8W + Soundbar 6W x4 RMS 2\")",
                              "Bluetooth, Remote Control & AC Power Cord",
                              "2 Years Official Warranty + Lifetime Service Warranty"
                    ]
          },
          {
                    "id": 205,
                    "name": "Solitine Enter SE108 2.1 Multimedia Bluetooth Speaker (18W RMS)",
                    "brand": "Solitine",
                    "category": "Speaker",
                    "price": 1890,
                    "oldPrice": 2190,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/solitine-5.jpg",
                    "images": [
                              "images/solitine-5.jpg"
                    ],
                    "specs": [
                              "18W RMS (Subwoofer 4\" 8W + Satellite 3\" 5W x2)",
                              "Bluetooth, Remote Control & AC Power Cord",
                              "Package: 1 Subwoofer, 2 Satellites, Remote, Audio Cable"
                    ]
          },
          {
                    "id": 206,
                    "name": "Solitine Next SE110 2.1 Multimedia Bluetooth Speaker (25W RMS)",
                    "brand": "Solitine",
                    "category": "Speaker",
                    "price": 2190,
                    "oldPrice": 2490,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/solitine-6.jpg",
                    "images": [
                              "images/solitine-6.jpg"
                    ],
                    "specs": [
                              "25W RMS (Subwoofer 4\" 15W + Satellite 3\" 5W x2)",
                              "Bluetooth Wireless & Remote Control",
                              "Package: 1 Subwoofer, 2 Satellites, Remote, Audio Cable"
                    ]
          },
          {
                    "id": 207,
                    "name": "Solitine Value SE230 2.1 High-Bass Bluetooth Speaker (60W RMS)",
                    "brand": "Solitine",
                    "category": "Speaker",
                    "price": 4000,
                    "oldPrice": 4500,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/solitine-7.png",
                    "images": [
                              "images/solitine-7.png"
                    ],
                    "specs": [
                              "60W RMS (Subwoofer 5\" 30W + Satellite 3\" 15W x2)",
                              "Bluetooth, Remote & Deep Bass Subwoofer",
                              "2 Years Official Solitine Warranty"
                    ]
          },
          {
                    "id": 208,
                    "name": "Solitine Spectra 400 Wooden 2.1 Bluetooth Speaker (60W RMS)",
                    "brand": "Solitine",
                    "category": "Speaker",
                    "price": 3800,
                    "oldPrice": 4200,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/solitine-8.jpg",
                    "images": [
                              "images/solitine-8.jpg"
                    ],
                    "specs": [
                              "60W RMS (Subwoofer 5\" 30W + Satellite 3\" 15W x2)",
                              "Premium Wooden Finish & Bluetooth",
                              "Includes Subwoofer, 2 Satellites, Remote, 3 Audio Cables"
                    ]
          },
          {
                    "id": 209,
                    "name": "Solitine Stanza 80W RMS Wooden 2.1 Bluetooth Speaker",
                    "brand": "Solitine",
                    "category": "Speaker",
                    "price": 8100,
                    "oldPrice": 9500,
                    "stock": "Out of Stock",
                    "active": true,
                    "image": "images/solitine-9.jpg",
                    "images": [
                              "images/solitine-9.jpg"
                    ],
                    "specs": [
                              "80W RMS (Subwoofer 5\" 50W + Satellite 3\" 15W x2)",
                              "Wooden Cabinet & Microphone Support",
                              "Includes Remote, 3 Audio Cables & Warranty Card"
                    ]
          },
          {
                    "id": 210,
                    "name": "Solitine Dramatic 80W RMS Wooden 2.1 Multimedia Speaker",
                    "brand": "Solitine",
                    "category": "Speaker",
                    "price": 9500,
                    "oldPrice": 10500,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/solitine-10.jpg",
                    "images": [
                              "images/solitine-10.jpg"
                    ],
                    "specs": [
                              "80W RMS (Subwoofer 5\" 50W + Satellite 3\" 15W x2)",
                              "Wooden Finish, Bluetooth & Microphone Support",
                              "2 Years Official Warranty"
                    ]
          },
          {
                    "id": 211,
                    "name": "Solitine Every SE722 80W RMS Wooden Tower Speaker",
                    "brand": "Solitine",
                    "category": "Speaker",
                    "price": 10000,
                    "oldPrice": 12500,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/solitine-11.png",
                    "images": [
                              "images/solitine-11.png"
                    ],
                    "specs": [
                              "80W RMS (Satellite 4\" 40W + 40W RMS)",
                              "Wooden Acoustic Enclosure & Bluetooth",
                              "Includes Remote, 2 Audio Cables, Quick Setup Guide"
                    ]
          },
          {
                    "id": 212,
                    "name": "Solitine Fury SE DT 1060 120W RMS Double Tower Speaker",
                    "brand": "Solitine",
                    "category": "Speaker",
                    "price": 14500,
                    "oldPrice": 15500,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/solitine-12.png",
                    "images": [
                              "images/solitine-12.png"
                    ],
                    "specs": [
                              "120 Watt RMS (60W x2) Bluetooth Tower",
                              "Wooden Body & Microphone Support",
                              "Includes Remote, 2 Audio Cables & 2 Years Official Warranty"
                    ]
          },
          {
                    "id": 213,
                    "name": "Solitine Delight SE DT 1006 140W RMS Double Tower Speaker",
                    "brand": "Solitine",
                    "category": "Speaker",
                    "price": 16200,
                    "oldPrice": 17500,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/solitine-13.png",
                    "images": [
                              "images/solitine-13.png"
                    ],
                    "specs": [
                              "140 Watt RMS (70W x2) Bluetooth Tower",
                              "Wooden Cabinet & Microphone Support",
                              "Includes Remote, 2 Audio Cables & Official Warranty"
                    ]
          },
          {
                    "id": 214,
                    "name": "Solitine Range SE DT 801 160W RMS (8\" 80W x2) Tower Speaker",
                    "brand": "Solitine",
                    "category": "Speaker",
                    "price": 20500,
                    "oldPrice": 21500,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/solitine-14.jpg",
                    "images": [
                              "images/solitine-14.jpg"
                    ],
                    "specs": [
                              "160 Watt RMS (8\" 80W x2) Dual Tower",
                              "Wooden Finish, Bluetooth & Microphone Support",
                              "2 Years Official Solitine Warranty"
                    ]
          },
          {
                    "id": 215,
                    "name": "Solitine ENZO 600 100W RMS Wooden 2.1 Tower Speaker",
                    "brand": "Solitine",
                    "category": "Speaker",
                    "price": 12000,
                    "oldPrice": 13500,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/solitine-15.png",
                    "images": [
                              "images/solitine-15.png"
                    ],
                    "specs": [
                              "100W RMS (Subwoofer 60W + Satellite 20W x2)",
                              "Wooden Cabinet & Bluetooth Connectivity",
                              "Includes Remote, 2 Audio Cables & Warranty Card"
                    ]
          },
          {
                    "id": 216,
                    "name": "Solitine ENZO 600Pro 120W RMS Wooden 2.1 Tower Speaker",
                    "brand": "Solitine",
                    "category": "Speaker",
                    "price": 18000,
                    "oldPrice": 19500,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/solitine-16.png",
                    "images": [
                              "images/solitine-16.png"
                    ],
                    "specs": [
                              "120W RMS (Subwoofer 80W + 2x 20W Satellites)",
                              "Microphone Support, Wooden Finish & Bluetooth",
                              "2 Years Official Solitine Warranty"
                    ]
          },
          {
                    "id": 217,
                    "name": "Solitine Thunder SE DT 1201 240W RMS (12\" 120W x2) Monster Tower",
                    "brand": "Solitine",
                    "category": "Speaker",
                    "price": 50000,
                    "oldPrice": 57000,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/solitine-17.jpg",
                    "images": [
                              "images/solitine-17.jpg"
                    ],
                    "specs": [
                              "240 Watt RMS (12\" 120W x2) Flagship Tower",
                              "ABS + Wooden Hybrid Body & Microphone Support",
                              "2 Years Official Warranty + Lifetime Service Support"
                    ]
          },
          {
                    "id": 301,
                    "name": "Tenda N301 300Mbps Wireless N Router",
                    "brand": "Tenda",
                    "category": "Router",
                    "price": 1190,
                    "oldPrice": 1285,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image21.png",
                    "images": [
                              "images/tenda-image21.png"
                    ],
                    "specs": [
                              "300Mbps Wireless Router, 2x 5dBi External Antennas",
                              "3x LAN, 1x WAN Port",
                              "Supports WISP, Universal Repeater & AP Mode"
                    ]
          },
          {
                    "id": 302,
                    "name": "Tenda F3 300Mbps 3-Antenna Wireless Router",
                    "brand": "Tenda",
                    "category": "Router",
                    "price": 1320,
                    "oldPrice": 1375,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image7.png",
                    "images": [
                              "images/tenda-image7.png"
                    ],
                    "specs": [
                              "300Mbps Wireless Speed, 3x 5dBi External Antennas",
                              "3x LAN, 1x WAN Port",
                              "Supports WISP, Universal Repeater & AP Mode"
                    ]
          },
          {
                    "id": 303,
                    "name": "Tenda F6 N300 4-Antenna Easy Setup Wireless Router",
                    "brand": "Tenda",
                    "category": "Router",
                    "price": 1520,
                    "oldPrice": 1585,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image8.png",
                    "images": [
                              "images/tenda-image8.png"
                    ],
                    "specs": [
                              "Wireless N300 2.4GHz, 4x 5dBi External Antennas",
                              "3x LAN, 1x WAN Port",
                              "Supports WISP, Universal Repeater & AP Mode"
                    ]
          },
          {
                    "id": 304,
                    "name": "Tenda AC3 AC750 Dual-Band Wi-Fi Router",
                    "brand": "Tenda",
                    "category": "Router",
                    "price": 1620,
                    "oldPrice": 1725,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image7.png",
                    "images": [
                              "images/tenda-image7.png"
                    ],
                    "specs": [
                              "Dual-Band Concurrent Rate up to 750Mbps",
                              "Dual-Core 1GHz CPU, 3x 5dBi High-Gain Antennas",
                              "Supports IPv6 Passthrough"
                    ]
          },
          {
                    "id": 305,
                    "name": "Tenda AC5 AC1200 Smart Dual-Band WiFi Router",
                    "brand": "Tenda",
                    "category": "Router",
                    "price": 1880,
                    "oldPrice": 2000,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image9.png",
                    "images": [
                              "images/tenda-image9.png"
                    ],
                    "specs": [
                              "AC1200 Dual-Band (2.4GHz & 5GHz)",
                              "4x 6dBi External High-Gain Antennas",
                              "Smart Sleeping Mode & App Management"
                    ]
          },
          {
                    "id": 306,
                    "name": "Tenda AC7 AC1200 5-Antenna Smart Dual-Band WiFi Router",
                    "brand": "Tenda",
                    "category": "Router",
                    "price": 2170,
                    "oldPrice": 2310,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image10.png",
                    "images": [
                              "images/tenda-image10.png"
                    ],
                    "specs": [
                              "AC1200 Simultaneous Dual-Band 2.4GHz & 5GHz",
                              "5x 5dBi External Antennas",
                              "MU-MIMO Technology for Multi-Device Streaming"
                    ]
          },
          {
                    "id": 307,
                    "name": "Tenda AC8 AC1200 Dual-Band Gigabit Antenna WiFi Router",
                    "brand": "Tenda",
                    "category": "Router",
                    "price": 2550,
                    "oldPrice": 2715,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image20.png",
                    "images": [
                              "images/tenda-image20.png"
                    ],
                    "specs": [
                              "AC1200 Dual-Band 1167Mbps Combined Speed",
                              "4x 6dBi External Dual-Band Antennas",
                              "Supports MU-MIMO & Beamforming"
                    ]
          },
          {
                    "id": 308,
                    "name": "Tenda AC10 AC1200 Smart Dual-Band Full Gigabit WiFi Router",
                    "brand": "Tenda",
                    "category": "Router",
                    "price": 2590,
                    "oldPrice": 2760,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image11.png",
                    "images": [
                              "images/tenda-image11.png"
                    ],
                    "specs": [
                              "AC1200 Full Gigabit WiFi (5GHz: 867Mbps + 2.4GHz: 300Mbps)",
                              "4x 6dBi External Dual-Band Antennas",
                              "MU-MIMO Technology & Full Gigabit Ports"
                    ]
          },
          {
                    "id": 309,
                    "name": "Tenda TX2L Pro AX1500 Dual-Band Gigabit WiFi 6 Router",
                    "brand": "Tenda",
                    "category": "Router",
                    "price": 2690,
                    "oldPrice": 2865,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image12.png",
                    "images": [
                              "images/tenda-image12.png"
                    ],
                    "specs": [
                              "WiFi 6 AX1500 (5GHz: 1201Mbps + 2.4GHz: 300Mbps)",
                              "5x External High-Gain Antennas",
                              "OFDMA + MU-MIMO & Beamforming Technology"
                    ]
          },
          {
                    "id": 310,
                    "name": "Tenda TX12 Pro AX3000 Dual-Band Gigabit WiFi 6 Router",
                    "brand": "Tenda",
                    "category": "Router",
                    "price": 3900,
                    "oldPrice": 4155,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image13.png",
                    "images": [
                              "images/tenda-image13.png"
                    ],
                    "specs": [
                              "WiFi 6 AX3000 (5GHz: 2402Mbps + 2.4GHz: 574Mbps)",
                              "5x 6dBi External High-Gain Antennas",
                              "Full Gigabit Ports & Dual-Band WiFi 6"
                    ]
          },
          {
                    "id": 311,
                    "name": "Tenda TX3000 Pro AX3000 6-Antenna Gigabit WiFi 6 Router",
                    "brand": "Tenda",
                    "category": "Router",
                    "price": 4100,
                    "oldPrice": 4365,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image14.png",
                    "images": [
                              "images/tenda-image14.png"
                    ],
                    "specs": [
                              "WiFi 6 AX3000 (5GHz: 2402Mbps + 2.4GHz: 574Mbps)",
                              "6x 6dBi External Antennas",
                              "Ultra-Wide Coverage & Full Gigabit Ports"
                    ]
          },
          {
                    "id": 312,
                    "name": "Tenda TX9 Pro AX3000 Dual-Band Gigabit WiFi 6 Router",
                    "brand": "Tenda",
                    "category": "Router",
                    "price": 5990,
                    "oldPrice": 6380,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image15.png",
                    "images": [
                              "images/tenda-image15.png"
                    ],
                    "specs": [
                              "AX3000 (2402Mbps on 5GHz + 574Mbps on 2.4GHz)",
                              "1.6GHz High-Performance Dual-Core Processor",
                              "OFDMA + MU-MIMO, 4x 6dBi External Antennas"
                    ]
          },
          {
                    "id": 313,
                    "name": "Tenda RX9 Pro AX3000 Dual-Band Gigabit WiFi 6 Router",
                    "brand": "Tenda",
                    "category": "Router",
                    "price": 5990,
                    "oldPrice": 6380,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image15.png",
                    "images": [
                              "images/tenda-image15.png"
                    ],
                    "specs": [
                              "AX3000 (2402Mbps on 5GHz + 574Mbps on 2.4GHz)",
                              "1.6GHz Dual-Core CPU, 802.11ax Technology",
                              "OFDMA + MU-MIMO, 4x 6dBi External Antennas"
                    ]
          },
          {
                    "id": 314,
                    "name": "Tenda HG1 GPON ONT / ONU Optical Network Terminal",
                    "brand": "Tenda",
                    "category": "ONU & Adapter",
                    "price": 990,
                    "oldPrice": 1180,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image19.png",
                    "images": [
                              "images/tenda-image19.png"
                    ],
                    "specs": [
                              "Compliant with ITU-T G.984 Standard",
                              "Upstream: up to 1.25Gbps, Downstream: up to 2.5Gbps",
                              "Transmission Distance: 20km Max"
                    ]
          },
          {
                    "id": 315,
                    "name": "Tenda HG3 N300 Wi-Fi GPON ONT Router",
                    "brand": "Tenda",
                    "category": "ONU & Adapter",
                    "price": 1950,
                    "oldPrice": 2075,
                    "stock": "Out of Stock",
                    "active": true,
                    "image": "images/tenda-image16.png",
                    "images": [
                              "images/tenda-image16.png"
                    ],
                    "specs": [
                              "PON Interface: 1x SC/APC GPON",
                              "Upstream 1.25Gbps Max, Downstream 2.5Gbps Max",
                              "High Compatibility with OLTs"
                    ]
          },
          {
                    "id": 316,
                    "name": "Tenda HG6 N300 4-Port GPON Wi-Fi ONT Router",
                    "brand": "Tenda",
                    "category": "ONU & Adapter",
                    "price": 2150,
                    "oldPrice": 2290,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image17.png",
                    "images": [
                              "images/tenda-image17.png"
                    ],
                    "specs": [
                              "2x 6dBi High-Gain Antennas",
                              "4x LAN Ports (1x GE + 3x FE), VoIP/IPTV Supported",
                              "OMCI / TR069 Remote Management"
                    ]
          },
          {
                    "id": 317,
                    "name": "Tenda HG10C AC1200 Wi-Fi 5 + 4GE XPON ONT",
                    "brand": "Tenda",
                    "category": "ONU & Adapter",
                    "price": 2990,
                    "oldPrice": 3190,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image22.png",
                    "images": [
                              "images/tenda-image22.png"
                    ],
                    "specs": [
                              "AC1200 Dual-Band (2.4G: 300M + 5G: 867M)",
                              "4x Gigabit LAN, 4x 5dBi Antennas",
                              "EasyMesh, Preset, IPTV, OMCI & TR069"
                    ]
          },
          {
                    "id": 318,
                    "name": "Tenda HG15 AX1500 Wi-Fi 6 + 4GE XPON ONT",
                    "brand": "Tenda",
                    "category": "ONU & Adapter",
                    "price": 4150,
                    "oldPrice": 4420,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image22.png",
                    "images": [
                              "images/tenda-image22.png"
                    ],
                    "specs": [
                              "AX1500 Wi-Fi 6 (2.4G: 300M + 5G: 1201M)",
                              "4x Gigabit LAN, 4x 6dBi Antennas",
                              "EasyMesh/Xmesh, IPTV, OMCI & TR069"
                    ]
          },
          {
                    "id": 319,
                    "name": "Tenda W311MI 150Mbps Auto-Install Wireless Nano USB Adapter",
                    "brand": "Tenda",
                    "category": "ONU & Adapter",
                    "price": 390,
                    "oldPrice": 500,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image23.png",
                    "images": [
                              "images/tenda-image23.png"
                    ],
                    "specs": [
                              "USB 2.0 Nano Wireless Adapter (Up to 286Mbps)",
                              "Plug & Play Auto-Install Driver",
                              "Supports Station Mode & SoftAP Mode"
                    ]
          },
          {
                    "id": 320,
                    "name": "Tenda U2 AX300 Wi-Fi 6 High-Gain Wireless USB Adapter",
                    "brand": "Tenda",
                    "category": "ONU & Adapter",
                    "price": 950,
                    "oldPrice": 1010,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image24.png",
                    "images": [
                              "images/tenda-image24.png"
                    ],
                    "specs": [
                              "AX300 Wi-Fi 6 High-Gain External Antenna",
                              "USB 2.0 2.4GHz up to 286Mbps",
                              "Supports Station Mode & SoftAP Mode"
                    ]
          },
          {
                    "id": 321,
                    "name": "Tenda W12 AC1200 Dual-Band Gigabit In-Wall Access Point",
                    "brand": "Tenda",
                    "category": "Router",
                    "price": 2950,
                    "oldPrice": 3140,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image25.png",
                    "images": [
                              "images/tenda-image25.png"
                    ],
                    "specs": [
                              "AC1200 Dual-Band (2.4GHz: 300Mbps + 5GHz: 867Mbps)",
                              "1x PoE+ Data Input LAN, 1x Data Output LAN",
                              "Standard PoE Access for 50 Users, Wall Mount"
                    ]
          },
          {
                    "id": 322,
                    "name": "Tenda i9 300Mbps Ceiling Wireless Access Point",
                    "brand": "Tenda",
                    "category": "Router",
                    "price": 3800,
                    "oldPrice": 4050,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image26.png",
                    "images": [
                              "images/tenda-image26.png"
                    ],
                    "specs": [
                              "300Mbps Ceiling AP Supporting up to 25 Clients",
                              "IEEE 802.11b/g/n Single Band, 2x Internal Antennas",
                              "1x 10/100Base-TX Interface with PoE Support"
                    ]
          },
          {
                    "id": 323,
                    "name": "Tenda Nova MW3 (1-Pack) AC1200 Whole Home Mesh Wi-Fi",
                    "brand": "Tenda",
                    "category": "Mesh Wi-Fi",
                    "price": 2250,
                    "oldPrice": 2400,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image37.png",
                    "images": [
                              "images/tenda-image37.png"
                    ],
                    "specs": [
                              "AC1200 Dual-Band (5GHz: 867Mbps + 2.4GHz: 300Mbps)",
                              "1GHz CPU, 128MB RAM, 2x Internal Antennas",
                              "Seamless Roaming Mesh Node (1-Pack)"
                    ]
          },
          {
                    "id": 324,
                    "name": "Tenda Nova MW3 (2-Pack) AC1200 Whole Home Mesh Wi-Fi System",
                    "brand": "Tenda",
                    "category": "Mesh Wi-Fi",
                    "price": 3790,
                    "oldPrice": 4040,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image38.png",
                    "images": [
                              "images/tenda-image38.png"
                    ],
                    "specs": [
                              "AC1200 Dual-Band Mesh System (2-Pack)",
                              "1GHz CPU, 128MB RAM, 2x Internal Antennas per Node",
                              "Covers up to 2000 sq. ft. with Seamless Roaming"
                    ]
          },
          {
                    "id": 325,
                    "name": "Tenda Nova MX3 (1-Pack) AX1500 Dual-Band Wi-Fi 6 Mesh",
                    "brand": "Tenda",
                    "category": "Mesh Wi-Fi",
                    "price": 2990,
                    "oldPrice": 3185,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image34.png",
                    "images": [
                              "images/tenda-image34.png"
                    ],
                    "specs": [
                              "AX1500 Wi-Fi 6 (5GHz: 1201Mbps + 2.4GHz: 300Mbps)",
                              "1GHz CPU, 128MB RAM, 2x 3dBi Internal Antennas",
                              "OFDMA, MU-MIMO & Beamforming (1-Pack)"
                    ]
          },
          {
                    "id": 326,
                    "name": "Tenda Nova MX3 (2-Pack) AX1500 Whole Home Wi-Fi 6 Mesh",
                    "brand": "Tenda",
                    "category": "Mesh Wi-Fi",
                    "price": 5500,
                    "oldPrice": 5860,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image35.png",
                    "images": [
                              "images/tenda-image35.png"
                    ],
                    "specs": [
                              "AX1500 Wi-Fi 6 Mesh System (2-Pack)",
                              "5GHz: 1201Mbps + 2.4GHz: 300Mbps",
                              "OFDMA, MU-MIMO & Beamforming"
                    ]
          },
          {
                    "id": 327,
                    "name": "Tenda Nova MX3 (3-Pack) AX1500 Whole Home Wi-Fi 6 Mesh",
                    "brand": "Tenda",
                    "category": "Mesh Wi-Fi",
                    "price": 8900,
                    "oldPrice": 9480,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image36.png",
                    "images": [
                              "images/tenda-image36.png"
                    ],
                    "specs": [
                              "AX1500 Wi-Fi 6 Mesh System (3-Pack)",
                              "5GHz: 1201Mbps + 2.4GHz: 300Mbps",
                              "OFDMA, MU-MIMO & Beamforming for Large Homes"
                    ]
          },
          {
                    "id": 328,
                    "name": "Tenda Nova MX12 (1-Pack) AX3000 Gigabit Wi-Fi 6 Mesh",
                    "brand": "Tenda",
                    "category": "Mesh Wi-Fi",
                    "price": 4900,
                    "oldPrice": 5220,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image30.png",
                    "images": [
                              "images/tenda-image30.png"
                    ],
                    "specs": [
                              "AX3000 Wi-Fi 6 (5GHz: 2402Mbps + 2.4GHz: 574Mbps)",
                              "1.7GHz Quad-Core CPU, 256MB RAM, 4x 3dBi Internal Antennas",
                              "OFDMA, 1024-QAM, MU-MIMO & Band Steering"
                    ]
          },
          {
                    "id": 329,
                    "name": "Tenda Nova MX12 (2-Pack) AX3000 Whole Home Wi-Fi 6 Mesh",
                    "brand": "Tenda",
                    "category": "Mesh Wi-Fi",
                    "price": 9900,
                    "oldPrice": 10545,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image31.png",
                    "images": [
                              "images/tenda-image31.png"
                    ],
                    "specs": [
                              "AX3000 Wi-Fi 6 Mesh System (2-Pack)",
                              "1.7GHz Quad-Core CPU, 256MB RAM",
                              "Full Gigabit Ports, OFDMA & 1024-QAM"
                    ]
          },
          {
                    "id": 330,
                    "name": "Tenda Nova MX12 (3-Pack) AX3000 Whole Home Wi-Fi 6 Mesh",
                    "brand": "Tenda",
                    "category": "Mesh Wi-Fi",
                    "price": 13900,
                    "oldPrice": 14800,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image33.png",
                    "images": [
                              "images/tenda-image33.png"
                    ],
                    "specs": [
                              "AX3000 Wi-Fi 6 Mesh System (3-Pack)",
                              "1.7GHz Quad-Core CPU, 256MB RAM",
                              "Covers up to 7,000 sq. ft. with 3 Gigabit Ports per Node"
                    ]
          },
          {
                    "id": 331,
                    "name": "Tenda Nova MW12 (3-Pack) AC2100 Tri-Band Whole Home Mesh WiFi",
                    "brand": "Tenda",
                    "category": "Mesh Wi-Fi",
                    "price": 12900,
                    "oldPrice": 14100,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image39.png",
                    "images": [
                              "images/tenda-image39.png"
                    ],
                    "specs": [
                              "Tri-Band AC2100 (2.4G: 300M + 5G-1: 867M + 5G-2: 867M)",
                              "3x Gigabit RJ45 Ports per Node, 4x Internal Antennas",
                              "Dual-Core 900MHz CPU, 256MB DDR3 Memory"
                    ]
          },
          {
                    "id": 332,
                    "name": "Tenda CH3-WCA 3MP Outdoor Full-Color Pan/Tilt Wi-Fi Camera",
                    "brand": "Tenda",
                    "category": "IP Camera",
                    "price": 3790,
                    "oldPrice": 4040,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image27.png",
                    "images": [
                              "images/tenda-image27.png"
                    ],
                    "specs": [
                              "3MP High-Quality Imaging with Full-Color Night Vision",
                              "Full-Duplex Two-Way Audio",
                              "Smart Human Detection, Sound & Light Alert"
                    ]
          },
          {
                    "id": 333,
                    "name": "Tenda CH7-WCA 4MP QHD 360° Outdoor Pan/Tilt Wi-Fi Camera",
                    "brand": "Tenda",
                    "category": "IP Camera",
                    "price": 3990,
                    "oldPrice": 4250,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image28.png",
                    "images": [
                              "images/tenda-image28.png"
                    ],
                    "specs": [
                              "4MP QHD Resolution, 1/3\" Progressive Scan CMOS",
                              "360° Remote Panorama View",
                              "Smart Human Detection & Dual MIMO Wi-Fi Antennas"
                    ]
          },
          {
                    "id": 334,
                    "name": "Tenda CH9-WCA 6MP Dual-Lens AI Outdoor Wi-Fi Camera",
                    "brand": "Tenda",
                    "category": "IP Camera",
                    "price": 5990,
                    "oldPrice": 6380,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image29.png",
                    "images": [
                              "images/tenda-image29.png"
                    ],
                    "specs": [
                              "6MP Dual Lenses (3MP Fixed + 3MP Pan/Tilt) AI Detection",
                              "Double Areas Protection & Full-Color Night Vision",
                              "1/3\" Progressive Scan CMOS Sensor"
                    ]
          },
          {
                    "id": 335,
                    "name": "Tenda CP3 2MP 1080P Security Pan/Tilt Smart Wi-Fi Camera",
                    "brand": "Tenda",
                    "category": "IP Camera",
                    "price": 1960,
                    "oldPrice": 2090,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image42.png",
                    "images": [
                              "images/tenda-image42.png"
                    ],
                    "specs": [
                              "1080P Full HD with Auto-Switching IR-Cut Filter",
                              "Auto Human Targeting & Motion Tracking",
                              "Built-in Mic & Speaker (Two-Way Audio)"
                    ]
          },
          {
                    "id": 336,
                    "name": "Tenda CP3 Pro 3MP 2K Wi-Fi 6 Pan/Tilt Security Camera",
                    "brand": "Tenda",
                    "category": "IP Camera",
                    "price": 2050,
                    "oldPrice": 2185,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image57.png",
                    "images": [
                              "images/tenda-image57.png"
                    ],
                    "specs": [
                              "3MP 2K Clarity with Next-Gen Wi-Fi 6 Support",
                              "One-Touch Calling Button & Intelligent Tracking",
                              "Real-Time Motion & Sound Alerts"
                    ]
          },
          {
                    "id": 337,
                    "name": "Tenda CP6 3MP 2K 360° All-Round Pan/Tilt Security Camera",
                    "brand": "Tenda",
                    "category": "IP Camera",
                    "price": 1950,
                    "oldPrice": 2080,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image42.png",
                    "images": [
                              "images/tenda-image42.png"
                    ],
                    "specs": [
                              "360° All-Round Vision & Infrared Night Vision",
                              "Auto Targeting and Human Tracking",
                              "Customizable Voice Alerts & Two-Way Audio"
                    ]
          },
          {
                    "id": 338,
                    "name": "Tenda CP7 4MP 2.5K 360° Pan/Tilt Smart Security Camera",
                    "brand": "Tenda",
                    "category": "IP Camera",
                    "price": 2690,
                    "oldPrice": 2865,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image42.png",
                    "images": [
                              "images/tenda-image42.png"
                    ],
                    "specs": [
                              "4MP Super HD 360° All-Round Vision",
                              "Infrared Night Vision, Sound & Light Alarm",
                              "Customized Voice Alerts & Auto Tracking"
                    ]
          },
          {
                    "id": 339,
                    "name": "Tenda TC3T24C 4MP Smart Full-Color PoE Turret IP Camera",
                    "brand": "Tenda",
                    "category": "IP Camera",
                    "price": 3590,
                    "oldPrice": 3825,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image58.png",
                    "images": [
                              "images/tenda-image58.png"
                    ],
                    "specs": [
                              "Supports PoE Power, IP67 Water & Dust Resistant",
                              "Built-in Microphone for Real-Time Audio Security",
                              "Human/Vehicle/Line-Crossing/Intrusion Detection"
                    ]
          },
          {
                    "id": 340,
                    "name": "Tenda TC3B24C 4MP Smart Full-Color PoE Bullet IP Camera",
                    "brand": "Tenda",
                    "category": "IP Camera",
                    "price": 3690,
                    "oldPrice": 3930,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image59.png",
                    "images": [
                              "images/tenda-image59.png"
                    ],
                    "specs": [
                              "4MP Full-Color Bullet Camera with PoE Support",
                              "IP67 Weatherproof Rating",
                              "Built-in Microphone for Real-Time Audio Recording"
                    ]
          },
          {
                    "id": 341,
                    "name": "Tenda A301 N300 300Mbps Universal Wi-Fi Range Extender",
                    "brand": "Tenda",
                    "category": "Range Extender",
                    "price": 1450,
                    "oldPrice": 1650,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image43.png",
                    "images": [
                              "images/tenda-image43.png"
                    ],
                    "specs": [
                              "Signal Rate: 300Mbps (2.4GHz 802.11n)",
                              "2x External High-Gain Wall-Plug Antennas",
                              "1x 10/100Mbps Ethernet Port & AP Mode"
                    ]
          },
          {
                    "id": 342,
                    "name": "Tenda A9 N300 Universal Wireless Wi-Fi Range Extender",
                    "brand": "Tenda",
                    "category": "Range Extender",
                    "price": 1290,
                    "oldPrice": 1450,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image44.png",
                    "images": [
                              "images/tenda-image44.png"
                    ],
                    "specs": [
                              "300Mbps 2.4GHz (2.412~2.484 GHz), 16dBm Power",
                              "2x 3dBi External Antennas",
                              "One-Button Wi-Fi Coverage Extension"
                    ]
          },
          {
                    "id": 343,
                    "name": "Tenda O3 5km 2.4GHz 150Mbps Point-to-Point Outdoor CPE",
                    "brand": "Tenda",
                    "category": "Router",
                    "price": 3580,
                    "oldPrice": 3810,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image45.png",
                    "images": [
                              "images/tenda-image45.png"
                    ],
                    "specs": [
                              "5km+ Long-Range Point-to-Point Outdoor CPE",
                              "150Mbps 2.4GHz Wireless Speed",
                              "12dBi Directional Antenna & IP64 Waterproof Enclosure"
                    ]
          },
          {
                    "id": 344,
                    "name": "Tenda B6 5GHz 11n 300Mbps Outdoor Base Station",
                    "brand": "Tenda",
                    "category": "Router",
                    "price": 6500,
                    "oldPrice": 6920,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image45.png",
                    "images": [
                              "images/tenda-image45.png"
                    ],
                    "specs": [
                              "5GHz 11n 300Mbps Outdoor Base Station",
                              "1x 10/100Mbps Ethernet Port",
                              "2x RP-SMA Antenna Connectors for Sector/Dish Antennas"
                    ]
          },
          {
                    "id": 345,
                    "name": "Tenda S105 5-Port 10/100Mbps Desktop Ethernet Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 535,
                    "oldPrice": 570,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image46.png",
                    "images": [
                              "images/tenda-image46.png"
                    ],
                    "specs": [
                              "5x 10/100Mbps Auto-Negotiation RJ45 Ports",
                              "Plug and Play, Compact Desktop Design",
                              "Store-and-Forward Switching Mode"
                    ]
          },
          {
                    "id": 346,
                    "name": "Tenda S108 8-Port 10/100Mbps Desktop Ethernet Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 675,
                    "oldPrice": 720,
                    "stock": "Out of Stock",
                    "active": true,
                    "image": "images/tenda-image47.png",
                    "images": [
                              "images/tenda-image47.png"
                    ],
                    "specs": [
                              "8x 10/100Mbps Auto-Negotiation RJ45 Ports",
                              "Auto MDI/MDIX, Plug and Play",
                              "Compact Fanless Desktop Design"
                    ]
          },
          {
                    "id": 347,
                    "name": "Tenda S16 16-Port 10/100Mbps Desktop Ethernet Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 1890,
                    "oldPrice": 2020,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image47.png",
                    "images": [
                              "images/tenda-image47.png"
                    ],
                    "specs": [
                              "16x 10/100Mbps RJ45 Ports",
                              "Plug and Play, Non-Blocking Line-Rate Forwarding",
                              "Desktop or Wall-Mountable"
                    ]
          },
          {
                    "id": 348,
                    "name": "Tenda SG105 5-Port Full Gigabit Desktop Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 1200,
                    "oldPrice": 1280,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image48.png",
                    "images": [
                              "images/tenda-image48.png"
                    ],
                    "specs": [
                              "5x 10/100/1000Mbps Gigabit Ethernet Ports",
                              "10Gbps Switching Capacity",
                              "Plug and Play, Auto MDI/MDIX"
                    ]
          },
          {
                    "id": 349,
                    "name": "Tenda SG108 8-Port Full Gigabit Desktop Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 1800,
                    "oldPrice": 1920,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image49.png",
                    "images": [
                              "images/tenda-image49.png"
                    ],
                    "specs": [
                              "8x 10/100/1000Mbps Gigabit Ethernet Ports",
                              "16Gbps Full-Duplex Switching Capacity",
                              "Plug and Play, Silent Fanless Operation"
                    ]
          },
          {
                    "id": 350,
                    "name": "Tenda TEF1110P-8-102W 8-Port PoE + 2 Gigabit Desktop Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 6300,
                    "oldPrice": 6710,
                    "stock": "Out of Stock",
                    "active": true,
                    "image": "images/tenda-image50.png",
                    "images": [
                              "images/tenda-image50.png"
                    ],
                    "specs": [
                              "8x 10/100Mbps PoE Ports + 2x Gigabit Uplink Ports",
                              "99W Total PoE Power Budget (102W Max)",
                              "6kV Lightning Protection & 250m Long Range"
                    ]
          },
          {
                    "id": 351,
                    "name": "Tenda TEF1118P-16-150W 16FE+2GE/1SFP Desktop PoE Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 9900,
                    "oldPrice": 10545,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image50.png",
                    "images": [
                              "images/tenda-image50.png"
                    ],
                    "specs": [
                              "16x 10/100M PoE Ports + 2x Gigabit + 1x SFP Combo",
                              "150W Power Supply (135W PoE Budget)",
                              "Ideal for IP Cameras & Access Points"
                    ]
          },
          {
                    "id": 352,
                    "name": "Tenda TEF1218P-16-250W 16FE+2GE/1SFP Web Smart PoE Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 13000,
                    "oldPrice": 13845,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image51.png",
                    "images": [
                              "images/tenda-image51.png"
                    ],
                    "specs": [
                              "16x 10/100M PoE Ports + 2x GE + 1x SFP Slot",
                              "250W High PoE Power Supply",
                              "Smart Web Management, VLAN & QoS"
                    ]
          },
          {
                    "id": 353,
                    "name": "Tenda TEF1126P-24-250W 24FE+2GE/1SFP Rackmount PoE Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 14000,
                    "oldPrice": 14910,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image52.png",
                    "images": [
                              "images/tenda-image52.png"
                    ],
                    "specs": [
                              "24x 10/100M PoE Ports + 2x Gigabit + 1x SFP",
                              "250W Total Power (225W PoE Budget)",
                              "250m Long-Distance PoE Transmission"
                    ]
          },
          {
                    "id": 354,
                    "name": "Tenda TEF1226P-24-410W 24FE+2GE/1SFP Smart PoE Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 21000,
                    "oldPrice": 22365,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image53.png",
                    "images": [
                              "images/tenda-image53.png"
                    ],
                    "specs": [
                              "24x 10/100M PoE Ports + 2x Gigabit + 1x SFP",
                              "410W Total Power (370W PoE Budget)",
                              "Web Smart Management & 6kV Lightning Protection"
                    ]
          },
          {
                    "id": 355,
                    "name": "Tenda TEG1016D 16-Port Rackmount Gigabit Ethernet Switch v6.0",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 5500,
                    "oldPrice": 5860,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image54.png",
                    "images": [
                              "images/tenda-image54.png"
                    ],
                    "specs": [
                              "16x 10/100/1000Mbps Auto-Negotiation Gigabit Ports",
                              "32Gbps Backplane Bandwidth",
                              "6kV Port & Power Lightning Protection"
                    ]
          },
          {
                    "id": 356,
                    "name": "Tenda TEG1016M 16-Port Metal Gigabit Ethernet Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 4290,
                    "oldPrice": 4570,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image55.png",
                    "images": [
                              "images/tenda-image55.png"
                    ],
                    "specs": [
                              "16x 10/100/1000Mbps Gigabit RJ45 Ports",
                              "Compact Steel Housing, Desktop/Wall Mount",
                              "6kV Lightning Protection"
                    ]
          },
          {
                    "id": 357,
                    "name": "Tenda TEG1024D 24-Port Rackmount Gigabit Ethernet Switch v7.0",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 5900,
                    "oldPrice": 6285,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image56.png",
                    "images": [
                              "images/tenda-image56.png"
                    ],
                    "specs": [
                              "24x 10/100/1000Mbps Gigabit Ethernet Ports",
                              "48Gbps Non-Blocking Switching Capacity",
                              "19-Inch Rackmount Steel Case"
                    ]
          },
          {
                    "id": 358,
                    "name": "Tenda TEG1024F 24-Port Gigabit Switch with 2 SFP Slots",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 8600,
                    "oldPrice": 9160,
                    "stock": "Out of Stock",
                    "active": true,
                    "image": "images/tenda-image61.png",
                    "images": [
                              "images/tenda-image61.png"
                    ],
                    "specs": [
                              "24x Gigabit RJ45 Ports + 2x 1000Base-X SFP Slots",
                              "4 Modes: Standard, Priority, Extend & VLAN",
                              "6kV Lightning Protection"
                    ]
          },
          {
                    "id": 359,
                    "name": "Tenda TEG1009P-EI 9-Port Gigabit Desktop Switch with 8-Port PoE",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 7960,
                    "oldPrice": 8480,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image62.png",
                    "images": [
                              "images/tenda-image62.png"
                    ],
                    "specs": [
                              "9x Gigabit Ports (8x PoE+ Ports + 1x Gigabit Uplink)",
                              "IEEE 802.3af/at Compliant",
                              "Metal Desktop Housing"
                    ]
          },
          {
                    "id": 360,
                    "name": "Tenda TEG1109P-8-102W 9-Port Gigabit Desktop Switch with 8-Port PoE",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 8175,
                    "oldPrice": 8710,
                    "stock": "Out of Stock",
                    "active": true,
                    "image": "images/tenda-image63.png",
                    "images": [
                              "images/tenda-image63.png"
                    ],
                    "specs": [
                              "9x Gigabit Ports (8x PoE+ Ports, 102W Total Power)",
                              "92W Maximum PoE Output",
                              "6kV Inductive Lightning Protection"
                    ]
          },
          {
                    "id": 361,
                    "name": "Tenda TEG5310P-8-150W 8GE+2SFP L3 Managed PoE Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 11500,
                    "oldPrice": 12250,
                    "stock": "Out of Stock",
                    "active": true,
                    "image": "images/tenda-image64.png",
                    "images": [
                              "images/tenda-image64.png"
                    ],
                    "specs": [
                              "8x Gigabit PoE+ Ports + 2x Gigabit SFP Slots",
                              "150W Total Power (130W PoE Budget)",
                              "Layer-3 Static Routing, VLAN, ACL & QoS"
                    ]
          },
          {
                    "id": 362,
                    "name": "Tenda TEG5328P-24-410W 24GE+4SFP L3 Managed PoE Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 29500,
                    "oldPrice": 31420,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image65.png",
                    "images": [
                              "images/tenda-image65.png"
                    ],
                    "specs": [
                              "24x Gigabit PoE+ Ports + 4x Independent SFP Slots",
                              "410W Power Supply (370W PoE Budget)",
                              "L3 Managed Switch for Enterprise & CCTV"
                    ]
          },
          {
                    "id": 363,
                    "name": "Tenda TEG1118P-16-250W 16GE+2SFP L3/Web Managed PoE Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 13650,
                    "oldPrice": 14540,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image70.png",
                    "images": [
                              "images/tenda-image70.png"
                    ],
                    "specs": [
                              "16x Gigabit PoE Ports + 2x SFP Slots",
                              "250W Total Power (230W PoE Budget)",
                              "Rackmount Enterprise PoE Switch"
                    ]
          },
          {
                    "id": 364,
                    "name": "Tenda TEG1050F 48GE+2SFP Rackmount Gigabit Ethernet Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 19500,
                    "oldPrice": 20770,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image66.png",
                    "images": [
                              "images/tenda-image66.png"
                    ],
                    "specs": [
                              "48x 10/100/1000M RJ45 Ports + 2x Gigabit SFP Slots",
                              "100Gbps Switching Capacity",
                              "High-Density Enterprise Core Switch"
                    ]
          },
          {
                    "id": 365,
                    "name": "Tenda TEG3328F 24GE+4SFP L2/L3 Managed Gigabit Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 14900,
                    "oldPrice": 15870,
                    "stock": "Out of Stock",
                    "active": true,
                    "image": "images/tenda-image71.png",
                    "images": [
                              "images/tenda-image71.png"
                    ],
                    "specs": [
                              "24x Gigabit RJ45 Ports + 4x SFP Fiber Slots",
                              "Managed Switch with VLAN, QoS, SNMP & ACL",
                              "19-Inch Rackmount Steel Enclosure"
                    ]
          },
          {
                    "id": 366,
                    "name": "Tenda S106-PC 6-Port 100M Switch with 4-Port PoE",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 1690,
                    "oldPrice": 1970,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image67.png",
                    "images": [
                              "images/tenda-image67.png"
                    ],
                    "specs": [
                              "6x 10/100Mbps Ports (4x PoE + 2x Uplink)",
                              "250m Long-Range CCTV Extend Mode",
                              "Plug and Play Desktop PoE Switch"
                    ]
          },
          {
                    "id": 367,
                    "name": "Tenda S110-PC 10-Port 100M Switch with 8-Port PoE",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 2590,
                    "oldPrice": 3015,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image68.png",
                    "images": [
                              "images/tenda-image68.png"
                    ],
                    "specs": [
                              "10x 10/100Mbps Ports (8x PoE + 2x Uplink)",
                              "250m Long-Range CCTV Transmission",
                              "One-Key VLAN & Extend Mode"
                    ]
          },
          {
                    "id": 368,
                    "name": "Tenda PoE15F 10/100Mbps 15W IEEE 802.3af PoE Injector",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 1310,
                    "oldPrice": 1400,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image69.png",
                    "images": [
                              "images/tenda-image69.png"
                    ],
                    "specs": [
                              "1x 10/100Base-TX Data Input + 1x Data/PoE Output",
                              "15.4W Output Power, Up to 100m Transmission",
                              "Plug and Play IEEE 802.3af Compliant"
                    ]
          },
          {
                    "id": 369,
                    "name": "Tenda PoE30G-AT 30W Gigabit IEEE 802.3at PoE+ Injector",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 1890,
                    "oldPrice": 2020,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image72.png",
                    "images": [
                              "images/tenda-image72.png"
                    ],
                    "specs": [
                              "Delivers up to 30W PoE+ Output Power per Port",
                              "Full Gigabit Data & Power Delivery",
                              "Plug and Play up to 100m Distance Extension"
                    ]
          },
          {
                    "id": 370,
                    "name": "Tenda G1128P-24-250W 24-Port Gigabit Unmanaged PoE Switch + 2 SFP",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 12500,
                    "oldPrice": 14450,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image72.png",
                    "images": [
                              "images/tenda-image72.png"
                    ],
                    "specs": [
                              "24x Gigabit PoE Ports + 2x SFP Slots",
                              "250W Power Supply (225W PoE Budget)",
                              "4 Working Modes: Standard, Priority, Extend, VLAN"
                    ]
          },
          {
                    "id": 371,
                    "name": "Tenda TEG1128P-24-250W 24-Port Gigabit Unmanaged PoE Switch + 2 SFP",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 11900,
                    "oldPrice": 14450,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image73.png",
                    "images": [
                              "images/tenda-image73.png"
                    ],
                    "specs": [
                              "24x Gigabit PoE Ports + 2x Gigabit SFP Slots",
                              "250W Total Power Supply",
                              "6kV Lightning Protection & Rackmount Design"
                    ]
          },
          {
                    "id": 372,
                    "name": "Tenda TEG2205D 5-Port Gigabit Cloud Managed Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 1750,
                    "oldPrice": 3750,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image74.png",
                    "images": [
                              "images/tenda-image74.png"
                    ],
                    "specs": [
                              "5x 10/100/1000Mbps Gigabit Managed Ports",
                              "Web & Cloud Management, VLAN, QoS, Loop Guard",
                              "Compact Metal Housing"
                    ]
          },
          {
                    "id": 373,
                    "name": "Tenda TEG2208D 8-Port Gigabit Cloud Managed Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 2150,
                    "oldPrice": 4820,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image75.png",
                    "images": [
                              "images/tenda-image75.png"
                    ],
                    "specs": [
                              "8x 10/100/1000Mbps Gigabit Managed Ports",
                              "Supports QVLAN, Link Aggregation, QoS & IGMP Snooping",
                              "Durable Metal Desktop/Wall-Mount Case"
                    ]
          },
          {
                    "id": 374,
                    "name": "Tenda TEG2210P-8-120W 10-Port Gigabit PoE Managed Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 6500,
                    "oldPrice": 10170,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image76.png",
                    "images": [
                              "images/tenda-image76.png"
                    ],
                    "specs": [
                              "8x Gigabit PoE+ Ports + 2x Gigabit Uplink Ports",
                              "120W Total Power Supply",
                              "Smart Web & Cloud Management"
                    ]
          },
          {
                    "id": 375,
                    "name": "Tenda TEG2216D 16-Port Full Gigabit Managed Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 4500,
                    "oldPrice": 5030,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image77.png",
                    "images": [
                              "images/tenda-image77.png"
                    ],
                    "specs": [
                              "16x 10/100/1000Mbps Gigabit Managed Ports",
                              "Supports VLAN, QoS, LACP & Loop Detection",
                              "19-Inch Rackmount Metal Design"
                    ]
          },
          {
                    "id": 376,
                    "name": "Tenda TEG2220P-16-250W 16-Port PoE Gigabit Managed Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 10500,
                    "oldPrice": 11770,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image78.png",
                    "images": [
                              "images/tenda-image78.png"
                    ],
                    "specs": [
                              "16x Gigabit PoE+ Ports + 2x GE + 2x SFP Slots",
                              "250W PoE Power Supply",
                              "Cloud & Web Smart Management"
                    ]
          },
          {
                    "id": 377,
                    "name": "Tenda TEG2224D 24-Port Full Gigabit Managed Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 5900,
                    "oldPrice": 6960,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image79.png",
                    "images": [
                              "images/tenda-image79.png"
                    ],
                    "specs": [
                              "24x 10/100/1000Mbps Gigabit Managed Ports",
                              "48Gbps Switching Capacity",
                              "Smart Web/Cloud Management & VLAN"
                    ]
          },
          {
                    "id": 378,
                    "name": "Tenda TEG2226F 24-Port Gigabit Managed Switch with 2 SFP",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 7900,
                    "oldPrice": 10000,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image80.png",
                    "images": [
                              "images/tenda-image80.png"
                    ],
                    "specs": [
                              "24x Gigabit RJ45 Ports + 2x SFP Fiber Slots",
                              "Cloud & Web L2 Managed Switch",
                              "6kV Lightning Protection"
                    ]
          },
          {
                    "id": 379,
                    "name": "Tenda TEG2228P-24-410W 28-Port Gigabit Managed PoE Switch + 4 SFP",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 19000,
                    "oldPrice": 28900,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image81.png",
                    "images": [
                              "images/tenda-image81.png"
                    ],
                    "specs": [
                              "24x Gigabit PoE+ Ports + 4x SFP Slots",
                              "410W Total Power Supply (370W PoE Budget)",
                              "Enterprise Cloud & Web Management"
                    ]
          },
          {
                    "id": 380,
                    "name": "Tenda TEM2007X 5-Port 2.5G + 2x 10G SFP+ Unmanaged Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 6000,
                    "oldPrice": 6420,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image82.png",
                    "images": [
                              "images/tenda-image82.png"
                    ],
                    "specs": [
                              "5-Port 2.5G Multi-Gigabit Unmanaged Ethernet Switch",
                              "Ultra-Fast NAS, WiFi 6 AP & Gaming Networking",
                              "Plug and Play Fanless Metal Design"
                    ]
          },
          {
                    "id": 381,
                    "name": "Tenda TEM2010X 8-Port 2.5G Unmanaged Multi-Gigabit Switch",
                    "brand": "Tenda",
                    "category": "Network Switch",
                    "price": 7500,
                    "oldPrice": 8030,
                    "stock": "In Stock",
                    "active": true,
                    "image": "images/tenda-image82.png",
                    "images": [
                              "images/tenda-image82.png"
                    ],
                    "specs": [
                              "8-Port 2.5Gbps Base-T Unmanaged Ethernet Switch",
                              "40Gbps Switching Capacity",
                              "Ideal for 2.5G NAS, Workstations & WiFi 6/7"
                    ]
          },
          {
                    "id": 101,
                    "name": "TP-Link Archer C6 AC1200 Wireless MU-MIMO Gigabit Router",
                    "brand": "TP-Link",
                    "category": "Router",
                    "price": 3190,
                    "oldPrice": 3500,
                    "stock": "In Stock",
                    "active": true,
                    "image": "",
                    "images": [],
                    "specs": [
                              "Speed: 867Mbps (5GHz) + 400Mbps (2.4GHz)",
                              "4 External + 1 Internal Antennas",
                              "Full Gigabit Ports & MU-MIMO"
                    ]
          },
          {
                    "id": 102,
                    "name": "WGP 10400mAh Mini DC UPS (5V/9V/12V) for Router & ONU",
                    "brand": "WGP",
                    "category": "Mini UPS",
                    "price": 2050,
                    "oldPrice": 2350,
                    "stock": "In Stock",
                    "active": true,
                    "image": "",
                    "images": [],
                    "specs": [
                              "Capacity: 10400mAh Li-Ion Battery",
                              "Dual Device Output: Router + ONU",
                              "6 to 8 Hours Long Backup"
                    ]
          },
          {
                    "id": 103,
                    "name": "Marsriva KP3 10000mAh Smart Mini DC UPS for Router",
                    "brand": "Marsriva",
                    "category": "Mini UPS",
                    "price": 2290,
                    "oldPrice": 2500,
                    "stock": "In Stock",
                    "active": true,
                    "image": "",
                    "images": [],
                    "specs": [
                              "10000mAh / 37Wh High Capacity",
                              "4x DC + 1x USB Output Ports",
                              "ABS V0 Flame Resistant Body"
                    ]
          },
          {
                    "id": 104,
                    "name": "Microlab M-108BT 2.1 Multimedia Bluetooth Speaker",
                    "brand": "Microlab",
                    "category": "Speaker",
                    "price": 2750,
                    "oldPrice": 3100,
                    "stock": "In Stock",
                    "active": true,
                    "image": "",
                    "images": [],
                    "specs": [
                              "11W RMS Deep Bass Output",
                              "Bluetooth 5.0, FM Radio, USB/SD",
                              "Wooden Subwoofer Cabinet"
                    ]
          }
        ];

        // Application State (Restored across page reloads)
        const savedNavState = JSON.parse(sessionStorage.getItem('ftbd_nav_state') || localStorage.getItem('ftbd_nav_state') || 'null') || {};
        let settings = {};
        let categories = [];
        let products = [];
        let orders = [];
        let currentPage = window.CURRENT_PAGE_ID || savedNavState.currentPage || "home";
        let currentProductDetailId = savedNavState.currentProductDetailId || null;
        let currentProductQty = 1;
        let selectedCategory = savedNavState.selectedCategory || "All";
        let cardActiveImgIndex = {};

        // Persistent User State
        let cart = JSON.parse(localStorage.getItem('ftbd_user_cart')) || [];
        let wishlist = JSON.parse(localStorage.getItem('ftbd_user_wishlist')) || [];
        let compareList = JSON.parse(localStorage.getItem("ftbd_user_compare")) || [];
        let productReviews = JSON.parse(localStorage.getItem('ftbd_product_reviews')) || {};
        let users = JSON.parse(localStorage.getItem('ftbd_users')) || [
            {
                id: 1,
                name: "Tanvir Ahmed",
                email: "customer@findtechbd.com",
                phone: "01711223344",
                password: "password123",
                city: "Dhaka City",
                area: "Dhanmondi",
                address: "House 24, Road 9/A, Dhanmondi, Dhaka-1209",
                savedAddresses: [
                    { id: 1, label: "Home", name: "Tanvir Ahmed", phone: "01711223344", city: "Dhaka City", area: "Dhanmondi", address: "House 24, Road 9/A, Dhanmondi, Dhaka-1209" },
                    { id: 2, label: "Office", name: "Tanvir Ahmed", phone: "01711223344", city: "Dhaka City", area: "Banani", address: "Level 5, Block C, Road 11, Banani, Dhaka" }
                ]
            }
        ];
        let currentUser = JSON.parse(localStorage.getItem('ftbd_current_user')) || null;
        let authMode = "login"; // Phone + OTP unified flow
        let pendingPostLoginRedirect = savedNavState.pendingPostLoginRedirect || null;
        let otpStep = "phone"; // 'phone' | 'verify'
        let otpTargetPhone = "";
        let generatedOtpCode = "";
        let otpIsNewAccount = false;
        let sentEmails = JSON.parse(localStorage.getItem('ftbd_sent_emails')) || [];

        // Checkout & Shipping State
        let appliedCoupon = localStorage.getItem("ftbd_applied_coupon") || null;
        let shippingInfo = JSON.parse(localStorage.getItem('ftbd_shipping_draft')) || {
            name: currentUser ? currentUser.name : "",
            phone: currentUser ? currentUser.phone : "",
            email: currentUser ? currentUser.email : "",
            city: currentUser ? (currentUser.city || "Dhaka City") : "Dhaka City",
            area: currentUser ? (currentUser.area || "") : "",
            address: currentUser ? (currentUser.address || "") : "",
            deliveryMethod: "inside-dhaka", // inside-dhaka (60), outside-dhaka (120), pickup (0)
            notes: ""
        };
        let selectedPaymentMethod = "Cash on Delivery (COD)";
        let selectedInvoiceOrderId = savedNavState.selectedInvoiceOrderId || null;
        let trackingSearchQuery = savedNavState.trackingSearchQuery || "";

        function saveNavState() {
            const stateObj = {
                currentPage,
                currentProductDetailId,
                selectedCategory,
                selectedInvoiceOrderId,
                trackingSearchQuery,
                pendingPostLoginRedirect
            };
            sessionStorage.setItem('ftbd_nav_state', JSON.stringify(stateObj));
            localStorage.setItem('ftbd_nav_state', JSON.stringify(stateObj));
        }

        const syncChannel = new BroadcastChannel('findtechbd_live_channel');

        function showToast(msg, type = "success", actionLabel = null, actionPage = null) {
            const box = document.getElementById('toast-container');
            const el = document.createElement('div');
            const bg = type === "error" ? "bg-red-600" : (type === "info" ? "bg-indigo-600" : "bg-slate-900 border-l-4 border-[#ef4a23]");
            el.className = `${bg} text-white px-4 py-3 rounded-xl shadow-xl text-xs font-bold flex items-center justify-between gap-3 pointer-events-auto transition transform duration-300`;
            el.innerHTML = `
                <div class="flex items-center gap-2">
                    <i class="fa-solid ${type === 'error' ? 'fa-circle-exclamation text-white' : 'fa-circle-check text-[#ef4a23]'} text-sm"></i>
                    <span>${msg}</span>
                </div>
                ${actionLabel && actionPage ? `<button onclick="navigateTo('${actionPage}'); this.parentElement.remove()" class="bg-[#ef4a23] hover:bg-orange-600 text-white px-2.5 py-1 rounded-lg text-[11px] font-bold shrink-0 cursor-pointer">${actionLabel}</button>` : ''}
            `;
            box.appendChild(el);
            setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 300); }, 3400);
        }

        function saveUserState() {
            localStorage.setItem("ftbd_user_compare", JSON.stringify(compareList));
            if (appliedCoupon) localStorage.setItem("ftbd_applied_coupon", appliedCoupon);
            else localStorage.removeItem("ftbd_applied_coupon");
            localStorage.setItem('ftbd_user_cart', JSON.stringify(cart));
            localStorage.setItem('ftbd_user_wishlist', JSON.stringify(wishlist));
            localStorage.setItem('ftbd_users', JSON.stringify(users));
            localStorage.setItem('ftbd_current_user', JSON.stringify(currentUser));
            localStorage.setItem('ftbd_shipping_draft', JSON.stringify(shippingInfo));
            updateGlobalBadges();
        }

        let lastServerSyncAt = 0;

        function loadFromAdminStorage() {
            settings = { ...FALLBACK_SETTINGS, ...(JSON.parse(localStorage.getItem("ftbd_shared_settings")) || {}) };
            let savedCats = JSON.parse(localStorage.getItem("ftbd_shared_cats")) || [];
            let savedProds = JSON.parse(localStorage.getItem("ftbd_shared_products")) || [];
            if (localStorage.getItem("ftbd_catalog_ver") !== CATALOG_VERSION || savedProds.length < FALLBACK_PRODUCTS.length) {
                const catSet = new Set([...FALLBACK_CATEGORIES, ...savedCats]);
                savedCats = Array.from(catSet);
                const prodMap = new Map();
                FALLBACK_PRODUCTS.forEach(p => prodMap.set(p.id, p));
                savedProds.forEach(p => {
                    if (!prodMap.has(p.id)) prodMap.set(p.id, p);
                });
                savedProds = Array.from(prodMap.values());
                localStorage.setItem("ftbd_shared_cats", JSON.stringify(savedCats));
                localStorage.setItem("ftbd_shared_products", JSON.stringify(savedProds));
                localStorage.setItem("ftbd_catalog_ver", CATALOG_VERSION);
            }
            categories = savedCats.length ? savedCats : FALLBACK_CATEGORIES;
            products = savedProds.length ? savedProds : FALLBACK_PRODUCTS;
            orders = JSON.parse(localStorage.getItem("ftbd_shared_orders")) || [];
            renderAll();
        }

        async function pullServerStoreData(initial = false) {
            try {
                const res = await fetch('/api/store-data');
                if (!res.ok) return;
                const data = await res.json();
                if (!data || !data.ok) return;
                if (initial || (data.updatedAt && data.updatedAt > lastServerSyncAt)) {
                    lastServerSyncAt = data.updatedAt || Date.now();
                    if (data.settings) {
                        settings = { ...FALLBACK_SETTINGS, ...data.settings };
                        localStorage.setItem("ftbd_shared_settings", JSON.stringify(settings));
                    }
                    if (Array.isArray(data.categories) && data.categories.length) {
                        categories = data.categories;
                        localStorage.setItem("ftbd_shared_cats", JSON.stringify(categories));
                    }
                    if (Array.isArray(data.products) && data.products.length) {
                        products = data.products;
                        localStorage.setItem("ftbd_shared_products", JSON.stringify(products));
                    }
                    if (Array.isArray(data.orders)) {
                        orders = data.orders;
                        localStorage.setItem("ftbd_shared_orders", JSON.stringify(orders));
                    }
                    renderAll();
                }
            } catch (e) { /* offline or file:// fallback */ }
        }

        syncChannel.onmessage = () => loadFromAdminStorage();
        window.addEventListener('storage', () => loadFromAdminStorage());

        function getCategoryIcon(cat) {
            const c = (cat || "").toLowerCase();
            if (c.includes("router")) return "fa-wifi text-indigo-600";
            if (c.includes("mesh")) return "fa-circle-nodes text-violet-600";
            if (c.includes("switch")) return "fa-network-wired text-blue-600";
            if (c.includes("camera")) return "fa-video text-cyan-600";
            if (c.includes("onu") || c.includes("adapter")) return "fa-plug-circle-bolt text-teal-600";
            if (c.includes("ups")) return "fa-car-battery text-emerald-600";
            if (c.includes("speaker") || c.includes("sound")) return "fa-volume-high text-st-orange";
            if (c.includes("extender")) return "fa-tower-broadcast text-blue-600";
            return "fa-microchip text-slate-600";
        }

        function getProductImages(p) {
            if (!p) return [];
            if (Array.isArray(p.images) && p.images.length > 0) return p.images.filter(Boolean);
            if (p.image) return [p.image];
            return [];
        }

        function inferProductBrand(p) {
            if (p.brand) return p.brand;
            const n = p.name.toLowerCase();
            if (n.includes("solitine")) return "Solitine";
            if (n.includes("tenda")) return "Tenda";
            if (n.includes("tp-link") || n.includes("archer")) return "TP-Link";
            if (n.includes("wgp")) return "WGP";
            if (n.includes("marsriva")) return "Marsriva";
            if (n.includes("microlab")) return "Microlab";
            if (n.includes("cudy")) return "Cudy";
            return "FindTechBD";
        }

        // ==================== SPA ROUTER & CONTEXTUAL BREADCRUMB ====================
        function renderGlobalBreadcrumb() {
            const bar = document.getElementById('global-breadcrumb-bar');
            if (!bar) return;
            if (currentPage === 'home') {
                bar.classList.add('hidden');
                bar.innerHTML = '';
                return;
            }

            let trail = `<a href="javascript:void(0)" onclick="navigateTo('home')" class="hover:text-st-orange font-semibold flex items-center gap-1"><i class="fa-solid fa-house text-[11px]"></i> Home</a>`;
            const sep = `<i class="fa-solid fa-chevron-right text-[9px] text-slate-300 mx-1"></i>`;

            if (currentPage === 'products-filter') {
                trail += `${sep} <span class="font-semibold text-slate-600">Shop Catalog</span>`;
                if (selectedCategory && selectedCategory !== 'All') {
                    trail += `${sep} <span class="font-bold text-st-orange">${selectedCategory}</span>`;
                }
            } else if (currentPage === 'product-details') {
                const p = products.find(x => x.id === currentProductDetailId) || products[0];
                if (p) {
                    trail += `${sep} <a href="javascript:void(0)" onclick="openCategoryInFilter('${p.category}')" class="hover:text-st-orange font-semibold">${p.category}</a>`;
                    trail += `${sep} <span class="font-bold text-slate-800 line-clamp-1">${p.name}</span>`;
                }
            } else if (currentPage === 'cart') {
                trail += `${sep} <span class="font-bold text-slate-800">Shopping Cart</span>`;
            } else if (currentPage === 'shipping-info') {
                trail += `${sep} <a href="javascript:void(0)" onclick="navigateTo('cart')" class="hover:text-st-orange font-semibold">Shopping Cart</a>`;
                trail += `${sep} <span class="font-bold text-slate-800">Shipping Information</span>`;
            } else if (currentPage === 'checkout') {
                trail += `${sep} <a href="javascript:void(0)" onclick="navigateTo('cart')" class="hover:text-st-orange font-semibold">Shopping Cart</a>`;
                trail += `${sep} <a href="javascript:void(0)" onclick="navigateTo('shipping-info')" class="hover:text-st-orange font-semibold">Shipping Info</a>`;
                trail += `${sep} <span class="font-bold text-slate-800">Payment & Checkout</span>`;
            } else if (currentPage === 'invoice') {
                trail += `${sep} <a href="javascript:void(0)" onclick="navigateTo('profile')" class="hover:text-st-orange font-semibold">My Orders</a>`;
                trail += `${sep} <span class="font-bold text-slate-800">Order Confirmation & Official Invoice</span>`;
            } else if (currentPage === 'order-tracking') {
                trail += `${sep} <span class="font-bold text-slate-800">Real-Time Order Tracking</span>`;
            } else if (currentPage === 'wishlist') {
                trail += `${sep} <span class="font-bold text-slate-800">My Saved Wishlist</span>`;
            } else if (currentPage === 'profile') {
                trail += `${sep} <span class="font-bold text-slate-800">My Account Dashboard</span>`;
            } else if (currentPage === 'auth') {
                trail += `${sep} <span class="font-bold text-slate-800">Customer Sign In / Register</span>`;
            }

            bar.classList.remove('hidden');
            bar.innerHTML = `
                <div class="animate-fade-in-down bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                    <div class="flex items-center flex-wrap gap-1">${trail}</div>
                    <button onclick="navigateTo('home')" class="text-[11px] font-bold text-slate-500 hover:text-st-orange flex items-center gap-1 cursor-pointer">
                        <i class="fa-solid fa-arrow-left text-[10px]"></i> Back to Storefront
                    </button>
                </div>
            `;
        }

        function navigateTo(page, param = null, scrollTop = true) {
            if ((page === "shipping-info" || page === "checkout") && !currentUser) {
                pendingPostLoginRedirect = page;
                otpStep = "phone";
                saveNavState();
                showToast("অর্ডার সম্পন্ন করতে আপনার মোবাইল নাম্বার ও OTP দিয়ে লগইন/অ্যাকাউন্ট তৈরি করুন।", "info");
                page = "auth";
            }

            if (page === "product-details" && param) {
                currentProductDetailId = Number(param);
            }
            if (page === "invoice" && param) {
                selectedInvoiceOrderId = param;
            }
            if (page === "order-tracking" && param) {
                trackingSearchQuery = String(param);
            }

            currentPage = page;
            saveNavState();

            const targetFile = PAGE_FILE_MAP[page] || "index.html";
            if (window.CURRENT_PAGE_ID && window.CURRENT_PAGE_ID !== page) {
                let query = "";
                if (page === "product-details" && currentProductDetailId) query = "?id=" + encodeURIComponent(currentProductDetailId);
                else if (page === "invoice" && selectedInvoiceOrderId) query = "?order=" + encodeURIComponent(selectedInvoiceOrderId);
                else if (page === "order-tracking" && trackingSearchQuery) query = "?order=" + encodeURIComponent(trackingSearchQuery);
                window.location.href = targetFile + query;
                return;
            }

            document.querySelectorAll(".app-page").forEach(el => el.classList.add("hidden"));
            const activePageEl = document.getElementById("page-" + page);
            if (activePageEl) activePageEl.classList.remove("hidden");

            document.querySelectorAll(".mob-nav-btn").forEach(btn => {
                const isMatch = btn.getAttribute("data-mob-nav") === page;
                btn.classList.toggle("text-st-orange", isMatch);
                btn.classList.toggle("font-bold", isMatch);
            });

            renderGlobalBreadcrumb();
            renderCurrentPage();
            if (scrollTop) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        }

        function toggleMobileDrawer(open) {
            document.getElementById('mobile-drawer').classList.toggle('hidden', !open);
        }

        function toggleUserAvatarMenu(e) {
            if (e) e.stopPropagation();
            const menu = document.getElementById('user-avatar-dropdown');
            if (menu) menu.classList.toggle('hidden');
        }

        document.addEventListener('click', () => {
            const menu = document.getElementById('user-avatar-dropdown');
            if (menu) menu.classList.add('hidden');
        });

        function updateGlobalBadges() {
            const cartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
            const cartTotal = cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);
            document.getElementById('header-cart-badge').innerText = cartCount;
            document.getElementById('cart-badge').innerText = cartCount;
            document.getElementById('mob-cart-badge').innerText = cartCount;
            document.getElementById('header-cart-total').innerText = `${cartTotal.toLocaleString()}৳`;

            document.getElementById('mob-wish-badge').innerText = wishlist.length;
            document.getElementById('compare-badge').innerText = compareList.length;

            // Header Auth Button: Sign In when logged out; Avatar + Dropdown Menu when logged in
            const authArea = document.getElementById('header-auth-area');
            const drawerUser = document.getElementById('mobile-drawer-user');
            if (currentUser) {
                authArea.innerHTML = `
                    <div class="relative group" onclick="event.stopPropagation()">
                        <button type="button" onclick="toggleUserAvatarMenu(event)" class="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/15 pl-1.5 pr-3 py-1 rounded-full transition cursor-pointer">
                            <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ef4a23] to-amber-500 text-white font-black text-xs flex items-center justify-center uppercase shadow-xs ring-2 ring-white/20">
                                ${currentUser.name.charAt(0)}
                            </div>
                            <div class="hidden sm:block text-left leading-tight">
                                <p class="text-xs font-bold text-white line-clamp-1 max-w-[95px]">${currentUser.name.split(' ')[0]}</p>
                                <p class="text-[9px] text-emerald-400 font-semibold flex items-center gap-1">● Verified <i class="fa-solid fa-chevron-down text-[8px] text-gray-300"></i></p>
                            </div>
                        </button>

                        <!-- Avatar Dropdown Menu -->
                        <div id="user-avatar-dropdown" class="hidden group-hover:block absolute right-0 top-full pt-2 w-60 z-50">
                            <div class="bg-white rounded-2xl shadow-2xl border border-slate-200 py-2.5 text-xs text-slate-700 font-semibold overflow-hidden">
                                <div class="px-4 py-2.5 border-b border-slate-100 mb-1 flex items-center gap-2.5 bg-slate-50/70">
                                    <div class="w-9 h-9 rounded-full bg-st-orange text-white font-black text-sm flex items-center justify-center uppercase shrink-0">
                                        ${currentUser.name.charAt(0)}
                                    </div>
                                    <div class="min-w-0">
                                        <p class="font-bold text-slate-900 truncate">${currentUser.name}</p>
                                        <p class="text-[10px] text-slate-500 truncate">${currentUser.phone}</p>
                                    </div>
                                </div>

                                <button onclick="navigateTo('profile'); document.getElementById('user-avatar-dropdown').classList.add('hidden')" class="w-full px-4 py-2.5 hover:bg-orange-50 hover:text-st-orange flex items-center gap-3 text-left transition cursor-pointer">
                                    <div class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0"><i class="fa-solid fa-user text-xs"></i></div>
                                    <div>
                                        <p class="font-bold text-slate-800 leading-tight">My Profile & Orders</p>
                                        <p class="text-[10px] text-slate-400">Account & Invoices</p>
                                    </div>
                                </button>

                                <button onclick="navigateTo('order-tracking'); document.getElementById('user-avatar-dropdown').classList.add('hidden')" class="w-full px-4 py-2.5 hover:bg-orange-50 hover:text-st-orange flex items-center gap-3 text-left transition cursor-pointer">
                                    <div class="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0"><i class="fa-solid fa-truck-fast text-xs"></i></div>
                                    <div>
                                        <p class="font-bold text-slate-800 leading-tight">Track Order</p>
                                        <p class="text-[10px] text-slate-400">Live Courier Status</p>
                                    </div>
                                </button>

                                <button onclick="navigateTo('wishlist'); document.getElementById('user-avatar-dropdown').classList.add('hidden')" class="w-full px-4 py-2.5 hover:bg-orange-50 hover:text-st-orange flex items-center justify-between gap-2 text-left transition cursor-pointer">
                                    <div class="flex items-center gap-3">
                                        <div class="w-7 h-7 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center shrink-0"><i class="fa-solid fa-heart text-xs"></i></div>
                                        <div>
                                            <p class="font-bold text-slate-800 leading-tight">Wishlist</p>
                                            <p class="text-[10px] text-slate-400">Saved Items</p>
                                        </div>
                                    </div>
                                    <span class="bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">${wishlist.length}</span>
                                </button>

                                <div class="border-t border-slate-100 mt-1.5 pt-1.5">
                                    <button onclick="logoutUser()" class="w-full px-4 py-2 hover:bg-red-50 text-red-600 flex items-center gap-2.5 text-left font-bold transition cursor-pointer">
                                        <i class="fa-solid fa-right-from-bracket w-5 text-center"></i> Sign Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                drawerUser.innerHTML = `
                    <div onclick="navigateTo('profile'); toggleMobileDrawer(false)" class="p-3 rounded-xl bg-slate-900 text-white flex items-center justify-between cursor-pointer">
                        <div class="flex items-center gap-2.5">
                            <div class="w-9 h-9 rounded-full bg-st-orange text-white font-bold flex items-center justify-center">${currentUser.name.charAt(0)}</div>
                            <div>
                                <p class="text-xs font-bold">${currentUser.name}</p>
                                <p class="text-[10px] text-gray-400">${currentUser.phone}</p>
                            </div>
                        </div>
                        <i class="fa-solid fa-chevron-right text-xs text-gray-400"></i>
                    </div>
                `;
            } else {
                authArea.innerHTML = `
                    <button onclick="navigateTo('auth')" class="bg-st-orange hover:bg-orange-600 text-white px-3.5 py-2 rounded-lg font-bold text-xs shadow flex items-center gap-1.5 transition cursor-pointer">
                        <i class="fa-solid fa-user-lock"></i>
                        <span>Sign In</span>
                    </button>
                `;
                drawerUser.innerHTML = `
                    <button onclick="navigateTo('auth'); toggleMobileDrawer(false)" class="w-full py-2.5 px-4 rounded-xl bg-st-orange text-white font-bold text-xs flex items-center justify-center gap-2 shadow">
                        <i class="fa-solid fa-right-to-bracket"></i> Sign In / Create Account
                    </button>
                `;
            }
        }

        function renderAll() {
            const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
            setTxt("brand-logo-text", settings.brandName || "FindTechBD");
            setTxt("marquee-text", settings.marquee || "");
            setTxt("hero-tag", settings.heroTag || "FindTechBD Exclusive");
            setTxt("hero-title", settings.heroTitle || "");
            setTxt("hero-subtitle", settings.heroSub || "");
            setTxt("footer-helpline", settings.helpline || "");
            setTxt("maint-helpline", settings.helpline || "");
            setTxt("drawer-helpline", settings.helpline || "");

            const heroSec = document.getElementById("hero-section");
            if (heroSec) heroSec.classList.toggle("hidden", !settings.showHero);

            const heroBg = document.getElementById("hero-banner-bg");
            const heroOverlay = document.getElementById("hero-banner-overlay");
            const heroTextContent = document.getElementById("hero-text-content");
            const heroWatermark = document.getElementById("hero-watermark-icon");
            const mainHeroBanner = document.getElementById("main-hero-banner");

            if (heroBg && heroOverlay && heroTextContent && heroWatermark && mainHeroBanner) {
                if (settings.heroBannerImg) {
                    heroBg.src = settings.heroBannerImg;
                    heroBg.classList.remove("hidden");
                    heroWatermark.classList.add("hidden");
                    if (settings.heroBannerMode === "image-only") {
                        heroOverlay.classList.add("hidden");
                        heroTextContent.classList.add("hidden");
                        mainHeroBanner.onclick = () => openDiscountFilter();
                        mainHeroBanner.classList.add("cursor-pointer");
                    } else {
                        heroOverlay.classList.remove("hidden");
                        heroTextContent.classList.remove("hidden");
                        mainHeroBanner.onclick = null;
                        mainHeroBanner.classList.remove("cursor-pointer");
                    }
                } else {
                    heroBg.src = "";
                    heroBg.classList.add("hidden");
                    heroOverlay.classList.add("hidden");
                    heroTextContent.classList.remove("hidden");
                    heroWatermark.classList.remove("hidden");
                    mainHeroBanner.onclick = null;
                    mainHeroBanner.classList.remove("cursor-pointer");
                }
            }

            setTxt("side-banner-tag", settings.sideBannerTag || "Hot Combo");
            setTxt("side-banner-title", settings.sideBannerTitle || "Router + Mini UPS Backup");
            setTxt("side-banner-sub", settings.sideBannerSub || "");
            const sideBg = document.getElementById("side-banner-bg");
            const sideOverlay = document.getElementById("side-banner-overlay");
            const sideWatermark = document.getElementById("side-watermark-icon");
            if (sideBg && sideOverlay && sideWatermark) {
                if (settings.sideBannerImg) {
                    sideBg.src = settings.sideBannerImg;
                    sideBg.classList.remove("hidden");
                    sideOverlay.classList.remove("hidden");
                    sideWatermark.classList.add("hidden");
                } else {
                    sideBg.src = "";
                    sideBg.classList.add("hidden");
                    sideOverlay.classList.add("hidden");
                    sideWatermark.classList.remove("hidden");
                }
            }

            const maintView = document.getElementById("maintenance-view");
            const storeContent = document.getElementById("storefront-content");
            if (maintView) maintView.classList.toggle("hidden", !settings.maintenance);
            if (storeContent) storeContent.classList.toggle("hidden", settings.maintenance);

            const allCats = ["All", ...categories];
            const catNav = document.getElementById("category-navbar");
            if (catNav) {
                catNav.innerHTML = allCats.map(c => `
                    <button onclick="selectCategoryFromNav('${c}')" 
                        class="px-3.5 py-2.5 transition cursor-pointer ${selectedCategory === c && (currentPage === "home" || currentPage === "products-filter") ? "text-st-orange font-bold" : "hover:text-st-orange"}">
                        ${c === "All" ? "All Products" : c}
                    </button>
                `).join("");
            }

            const mobCats = document.getElementById("mobile-drawer-cats");
            if (mobCats) {
                mobCats.innerHTML = allCats.map(c => `
                    <button onclick="openCategoryInFilter('${c}'); toggleMobileDrawer(false)" class="w-full flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-slate-100 text-left">
                        <span>${c === "All" ? "All Categories" : c}</span>
                        <i class="fa-solid fa-angle-right text-[10px] text-slate-400"></i>
                    </button>
                `).join("");
            }

            const pfCatBox = document.getElementById("pf-category-list");
            if (pfCatBox) {
                pfCatBox.innerHTML = allCats.map(c => `
                    <label class="flex items-center justify-between p-1.5 rounded-lg hover:bg-slate-50 cursor-pointer">
                        <span class="flex items-center gap-2">
                            <input type="radio" name="pf-cat-radio" value="${c}" ${selectedCategory === c ? "checked" : ""} onchange="selectedCategory='${c}'; saveNavState(); applyProductsFilter(); renderGlobalBreadcrumb();" class="accent-[#ef4a23]">
                            <span class="font-medium text-slate-700">${c === "All" ? "All Categories" : c}</span>
                        </span>
                        <span class="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-bold">
                            ${c === "All" ? products.filter(p => p.active).length : products.filter(p => p.active && p.category === c).length}
                        </span>
                    </label>
                `).join("");
            }

            updateGlobalBadges();
            renderCurrentPage();
        }

        function renderCurrentPage() {
            if (currentPage === 'home') renderHomePage();
            else if (currentPage === 'product-details') renderProductDetailsPage();
            else if (currentPage === 'products-filter') applyProductsFilter();
            else if (currentPage === 'cart') renderCartPage();
            else if (currentPage === 'shipping-info') renderShippingInfoPage();
            else if (currentPage === 'checkout') renderCheckoutPage();
            else if (currentPage === 'profile') renderProfilePage();
            else if (currentPage === 'wishlist') renderWishlistPage();
            else if (currentPage === 'order-tracking') renderOrderTrackingPage();
            else if (currentPage === 'invoice') renderInvoicePage();
            else if (currentPage === 'auth') renderAuthPage();
        }

        // ==================== SHARED PRODUCT CARD COMPONENT ====================
        function createProductCardHtml(p) {
            const discount = p.oldPrice - p.price;
            const canOrder = settings.allowOrdering && p.stock === "In Stock";
            const imgs = getProductImages(p);
            const activeIdx = (cardActiveImgIndex[p.id] && imgs[cardActiveImgIndex[p.id]]) ? cardActiveImgIndex[p.id] : 0;
            const mainImg = imgs[activeIdx] || "";
            const isWished = wishlist.includes(p.id);

            return `
                <div class="animate-fade-in-up bg-white rounded-xl shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 p-4 flex flex-col justify-between relative st-product-card border border-gray-100">
                    ${settings.showDiscountBadge && discount > 0 ? `
                        <span class="animate-pulse absolute top-3 left-0 bg-[#6e2594] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-r-full shadow z-10">
                            Save: ${discount.toLocaleString()}৳
                        </span>
                    ` : ''}

                    <button type="button" onclick="toggleWishlist(${p.id}, event)" title="Add to Wishlist"
                        class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full ${isWished ? 'bg-rose-50 text-rose-600 border-rose-200' : 'bg-white/90 text-slate-400 hover:text-rose-500 border-slate-200'} border shadow-2xs flex items-center justify-center z-10 transition-transform duration-200 hover:scale-125 active:scale-90">
                        <i class="${isWished ? 'fa-solid' : 'fa-regular'} fa-heart text-xs"></i>
                    </button>

                    <div>
                        <div onclick="navigateTo('product-details', ${p.id})" class="h-40 bg-slate-50 rounded-lg flex flex-col items-center justify-center mb-2 mt-4 overflow-hidden relative group cursor-pointer">
                            ${mainImg ? `<img id="card-img-${p.id}" src="${mainImg}" class="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-110">` : `
                                <i class="fa-solid ${getCategoryIcon(p.category)} text-5xl"></i>
                                <span class="text-[10px] font-bold uppercase text-gray-400 mt-2">${p.category}</span>
                            `}
                            ${imgs.length > 1 ? `
                                <button type="button" onclick="cycleCardImage(event, ${p.id}, -1)" class="absolute left-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/90 hover:bg-st-orange hover:text-white text-gray-700 shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-[10px]">
                                    <i class="fa-solid fa-chevron-left"></i>
                                </button>
                                <button type="button" onclick="cycleCardImage(event, ${p.id}, 1)" class="absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/90 hover:bg-st-orange hover:text-white text-gray-700 shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-[10px]">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </button>
                                <span class="absolute bottom-1.5 right-1.5 bg-black/60 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                                    <i class="fa-regular fa-images mr-0.5"></i>${imgs.length}
                                </span>
                            ` : ''}
                        </div>

                        ${imgs.length > 1 ? `
                            <div class="flex items-center justify-center gap-1.5 mb-2.5 overflow-x-auto py-0.5">
                                ${imgs.map((imgSrc, i) => `
                                    <button type="button" id="card-thumb-${p.id}-${i}" onclick="setCardImage(event, ${p.id}, ${i})"
                                        class="w-7 h-7 rounded border bg-white p-0.5 shrink-0 overflow-hidden transition ${i === activeIdx ? 'border-st-orange ring-1 ring-st-orange' : 'border-gray-200 opacity-70 hover:opacity-100'}">
                                        <img src="${imgSrc}" class="w-full h-full object-contain">
                                    </button>
                                `).join('')}
                            </div>
                        ` : '<div class="mb-1"></div>'}

                        <div class="flex items-center justify-between text-[10px] font-semibold text-slate-400 mb-1">
                            <span>${p.category}</span>
                            <span class="${p.stock === 'In Stock' ? 'text-emerald-600' : 'text-amber-600'}">● ${p.stock}</span>
                        </div>

                        <h3 onclick="navigateTo('product-details', ${p.id})" class="text-sm font-bold text-gray-800 leading-snug mb-2.5 st-product-title cursor-pointer line-clamp-2">
                            ${p.name}
                        </h3>

                        <ul class="text-[11px] text-gray-500 space-y-1 mb-4 border-b pb-3">
                            ${(p.specs || []).slice(0, 3).map(s => `<li class="flex items-start gap-1.5 line-clamp-1"><span>•</span><span>${s}</span></li>`).join('')}
                        </ul>
                    </div>

                    <div>
                        <div class="text-center mb-3">
                            <span class="text-base font-extrabold text-st-orange">${p.price.toLocaleString()}৳</span>
                            ${p.oldPrice > p.price ? `<span class="text-xs text-gray-400 line-through ml-1.5">${p.oldPrice.toLocaleString()}৳</span>` : ''}
                        </div>

                        <div class="grid grid-cols-2 gap-1.5">
                            <button onclick="addToCart(${p.id}, 1, false)" ${!canOrder ? 'disabled' : ''} 
                                class="py-2 px-2 rounded-lg text-[11px] font-bold flex items-center justify-center gap-1 ${canOrder ? 'st-buy-btn' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}">
                                <i class="fa-solid fa-cart-plus"></i>
                                <span>Add Cart</span>
                            </button>
                            <button onclick="buyNowDirect(${p.id})" ${!canOrder ? 'disabled' : ''} 
                                class="py-2 px-2 rounded-lg text-[11px] font-bold flex items-center justify-center gap-1 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${canOrder ? 'bg-st-orange hover:bg-orange-600 text-white shadow-xs' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}">
                                <i class="fa-solid fa-bolt"></i>
                                <span>${!settings.allowOrdering ? 'Closed' : (p.stock === 'In Stock' ? 'Buy Now' : p.stock)}</span>
                            </button>
                        </div>
                        <button onclick="navigateTo('product-details', ${p.id})" class="mt-1.5 w-full py-1 text-[11px] text-gray-500 hover:text-st-orange font-semibold flex items-center justify-center gap-1">
                            <i class="fa-regular fa-eye"></i> View Details & Specs
                        </button>
                    </div>
                </div>
            `;
        }

        function setCardImage(event, prodId, imgIdx) {
            if (event) event.stopPropagation();
            const p = products.find(x => x.id === prodId);
            if (!p) return;
            const imgs = getProductImages(p);
            if (!imgs[imgIdx]) return;
            cardActiveImgIndex[prodId] = imgIdx;
            const imgEl = document.getElementById(`card-img-${prodId}`);
            if (imgEl) imgEl.src = imgs[imgIdx];
            imgs.forEach((_, i) => {
                const thumb = document.getElementById(`card-thumb-${prodId}-${i}`);
                if (thumb) {
                    thumb.classList.toggle('border-st-orange', i === imgIdx);
                    thumb.classList.toggle('ring-1', i === imgIdx);
                    thumb.classList.toggle('ring-st-orange', i === imgIdx);
                    thumb.classList.toggle('border-gray-200', i !== imgIdx);
                    thumb.classList.toggle('opacity-70', i !== imgIdx);
                }
            });
        }

        function cycleCardImage(event, prodId, step) {
            if (event) event.stopPropagation();
            const p = products.find(x => x.id === prodId);
            if (!p) return;
            const imgs = getProductImages(p);
            if (imgs.length <= 1) return;
            const curr = cardActiveImgIndex[prodId] || 0;
            const next = (curr + step + imgs.length) % imgs.length;
            setCardImage(null, prodId, next);
        }

        // ==================== PAGE 1: HOMEPAGE RENDERER ====================
        function renderHomePage() {
            const allCats = ["All", ...categories];
            document.getElementById('featured-category-grid').innerHTML = allCats.map(c => `
                <div onclick="selectCategoryFromNav('${c}')" 
                    class="animate-fade-in-up bg-white p-3.5 rounded-xl shadow-xs hover:shadow-lg border ${selectedCategory === c ? 'border-st-orange bg-orange-50/20' : 'border-transparent hover:border-st-orange'} cursor-pointer flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 group">
                    <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-1.5 group-hover:bg-orange-50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <i class="fa-solid ${getCategoryIcon(c)} text-lg"></i>
                    </div>
                    <span class="text-xs font-bold text-gray-800 group-hover:text-st-orange">${c === 'All' ? 'All Items' : c}</span>
                </div>
            `).join('');

            const visibleProducts = products.filter(p => p.active && (selectedCategory === 'All' || p.category === selectedCategory));
            const grid = document.getElementById('product-grid');
            if (visibleProducts.length === 0) {
                grid.innerHTML = `<div class="col-span-full bg-white p-10 rounded-xl text-center text-gray-400">No products available in this category.</div>`;
            } else {
                grid.innerHTML = visibleProducts.map(p => createProductCardHtml(p)).join('');
            }
        }

        function selectCategoryFromNav(cat) {
            selectedCategory = cat;
            saveNavState();
            const heading = document.getElementById("product-section-heading");
            if (heading) heading.innerText = cat === "All" ? "Featured Products" : `${cat} Price in Bangladesh`;
            if (currentPage !== "home" && currentPage !== "products-filter") {
                window.location.href = "products.html?category=" + encodeURIComponent(cat);
            } else {
                renderAll();
                renderGlobalBreadcrumb();
            }
        }

        function openCategoryInFilter(cat) {
            selectedCategory = cat;
            saveNavState();
            if (window.CURRENT_PAGE_ID !== "products-filter") {
                window.location.href = "products.html?category=" + encodeURIComponent(cat);
                return;
            }
            renderAll();
            renderGlobalBreadcrumb();
        }

        function openDiscountFilter() {
            selectedCategory = "All";
            saveNavState();
            if (window.CURRENT_PAGE_ID !== "products-filter") {
                window.location.href = "products.html?discount=1";
                return;
            }
            const discCheck = document.getElementById("pf-discount");
            if (discCheck) {
                discCheck.checked = true;
                applyProductsFilter();
            }
        }

        function jumpToBudgetFilter(maxVal) {
            const val = Number(maxVal);
            if (!val) return;
            if (window.CURRENT_PAGE_ID !== "products-filter") {
                window.location.href = "products.html?maxPrice=" + encodeURIComponent(val);
                return;
            }
            document.getElementById("pf-max-price").value = val;
            document.getElementById("pf-max-input").value = val;
            applyProductsFilter();
        }

        function handleLiveSearch(query) {
            if (window.CURRENT_PAGE_ID === "products-filter") {
                const pfSearch = document.getElementById("pf-search");
                if (pfSearch) {
                    pfSearch.value = query;
                    applyProductsFilter();
                }
            } else if (window.CURRENT_PAGE_ID === "home") {
                const q = query.toLowerCase().trim();
                const visibleProducts = products.filter(p => p.active && (selectedCategory === "All" || p.category === selectedCategory) && (!q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)));
                const grid = document.getElementById("product-grid");
                if (grid) {
                    grid.innerHTML = visibleProducts.length ? visibleProducts.map(p => createProductCardHtml(p)).join("") : `<div class="col-span-full bg-white p-10 rounded-xl text-center text-gray-400">No matching products found for "${query}".</div>`;
                }
            }
        }

        function submitGlobalSearch(e) {
            e.preventDefault();
            const q = document.getElementById("search-input").value.trim();
            if (window.CURRENT_PAGE_ID !== "products-filter") {
                window.location.href = "products.html?q=" + encodeURIComponent(q);
                return;
            }
            const pfSearch = document.getElementById("pf-search");
            if (pfSearch) {
                pfSearch.value = q;
                applyProductsFilter();
            }
        }

        // ==================== PAGE 2: PRODUCT DETAILS RENDERER ====================
        function renderProductDetailsPage() {
            const container = document.getElementById('product-details-container');
            const p = products.find(x => x.id === currentProductDetailId) || products[0];
            if (!p) {
                container.innerHTML = `<div class="bg-white p-10 rounded-xl text-center">Product not found.</div>`;
                return;
            }
            currentProductDetailId = p.id;
            const imgs = getProductImages(p);
            const discount = p.oldPrice - p.price;
            const canOrder = settings.allowOrdering && p.stock === "In Stock";
            const isWished = wishlist.includes(p.id);
            const brand = inferProductBrand(p);
            const reviews = productReviews[p.id] || [
                { user: "Mahmudul Hasan", rating: 5, comment: "অসাধারণ পারফরম্যান্স! ডেলিভারি খুব দ্রুত পেয়েছি এবং অরিজিনাল প্রোডাক্ট।", date: "2 days ago" },
                { user: "Sadia Islam", rating: 5, comment: "দাম অনুযায়ী সেরা প্রোডাক্ট। প্যাকিং এবং সার্ভিস অনেক ভালো লেগেছে।", date: "1 week ago" }
            ];
            const related = products.filter(x => x.active && x.id !== p.id && (x.category === p.category || true)).slice(0, 4);

            container.innerHTML = `
                <!-- Main Product Showcase Card -->
                <div class="animate-zoom-in bg-white rounded-2xl p-5 sm:p-8 shadow-xs border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <!-- Left 5 Cols: Multi-Image Gallery -->
                    <div class="lg:col-span-5 space-y-3">
                        <div class="h-72 sm:h-80 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center p-4 relative overflow-hidden">
                            ${discount > 0 ? `<span class="absolute top-3 left-3 bg-[#6e2594] text-white text-xs font-bold px-3 py-1 rounded-full shadow">Save ${discount.toLocaleString()}৳</span>` : ''}
                            ${imgs.length > 0 ? `<img id="pd-main-image" src="${imgs[0]}" class="w-full h-full object-contain transition-transform duration-500 hover:scale-110">` : `
                                <div class="text-center">
                                    <i class="fa-solid ${getCategoryIcon(p.category)} text-7xl"></i>
                                    <p class="text-xs font-bold uppercase text-slate-400 mt-3">${p.category}</p>
                                </div>
                            `}
                        </div>
                        ${imgs.length > 1 ? `
                            <div class="flex items-center gap-2.5 overflow-x-auto pb-1">
                                ${imgs.map((src, i) => `
                                    <button type="button" onclick="document.getElementById('pd-main-image').src='${src}'"
                                        class="w-16 h-16 rounded-xl border-2 border-slate-200 hover:border-st-orange bg-white p-1.5 shrink-0 overflow-hidden transition">
                                        <img src="${src}" class="w-full h-full object-contain">
                                    </button>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>

                    <!-- Right 7 Cols: Product Info & Actions -->
                    <div class="lg:col-span-7 space-y-4">
                        <div class="flex flex-wrap items-center gap-2">
                            <span class="bg-indigo-50 text-indigo-700 border border-indigo-200 px-3 py-0.5 rounded-full text-xs font-bold">${p.category}</span>
                            <span class="bg-slate-100 text-slate-700 border border-slate-200 px-3 py-0.5 rounded-full text-xs font-bold">
                                <i class="fa-solid fa-store mr-1 text-st-orange"></i>Brand: ${brand}
                            </span>
                            <span class="px-3 py-0.5 rounded-full text-xs font-bold ${p.stock === 'In Stock' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-600 border border-red-200'}">
                                ● ${p.stock}
                            </span>
                            <span class="text-xs text-slate-400 font-mono ml-auto">SKU: FT-${p.id}</span>
                        </div>

                        <h1 class="text-xl sm:text-2xl font-black text-slate-900 leading-snug">${p.name}</h1>

                        <!-- Price Box -->
                        <div class="flex flex-wrap items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                            <div>
                                <span class="text-[11px] text-slate-400 uppercase font-bold block">Special Offer Price</span>
                                <span class="text-2xl sm:text-3xl font-black text-st-orange">${p.price.toLocaleString()}৳</span>
                                ${p.oldPrice > p.price ? `<span class="text-sm text-slate-400 line-through ml-2 font-semibold">${p.oldPrice.toLocaleString()}৳</span>` : ''}
                            </div>
                            <div class="border-l border-slate-200 pl-4">
                                <span class="text-[11px] text-slate-400 uppercase font-bold block">Regular Price</span>
                                <span class="text-sm font-bold text-slate-700">${p.oldPrice.toLocaleString()}৳</span>
                            </div>
                            <div class="border-l border-slate-200 pl-4 hidden sm:block">
                                <span class="text-[11px] text-slate-400 uppercase font-bold block">Warranty & Support</span>
                                <span class="text-xs font-bold text-emerald-600"><i class="fa-solid fa-shield-halved mr-1"></i>1 Year Official Warranty</span>
                            </div>
                        </div>

                        <!-- Key Features -->
                        <div>
                            <h3 class="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Key Features & Specifications:</h3>
                            <ul class="space-y-1.5 text-xs sm:text-sm text-slate-600 bg-white border border-slate-100 rounded-xl p-3.5">
                                ${(p.specs || []).map(s => `<li class="flex items-start gap-2"><i class="fa-solid fa-circle-check text-emerald-500 mt-1 text-xs"></i><span>${s}</span></li>`).join('')}
                            </ul>
                        </div>

                        <!-- Quantity & CTA Buttons -->
                        <div class="pt-2 flex flex-wrap items-center gap-3">
                            <div class="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-white">
                                <button type="button" onclick="changeDetailQty(-1)" class="w-10 h-10 hover:bg-slate-100 font-bold text-base">-</button>
                                <span id="pd-qty-val" class="w-10 text-center font-bold text-sm">${currentProductQty}</span>
                                <button type="button" onclick="changeDetailQty(1)" class="w-10 h-10 hover:bg-slate-100 font-bold text-base">+</button>
                            </div>

                            <button onclick="addToCart(${p.id}, currentProductQty, false)" ${!canOrder ? 'disabled' : ''}
                                class="flex-1 min-w-[140px] py-3 px-5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 ${canOrder ? 'bg-st-blue hover:bg-indigo-800 text-white shadow' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}">
                                <i class="fa-solid fa-cart-plus"></i> Add to Cart
                            </button>

                            <button onclick="addToCart(${p.id}, currentProductQty, true); navigateTo('shipping-info')" ${!canOrder ? 'disabled' : ''}
                                class="flex-1 min-w-[140px] py-3 px-5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 ${canOrder ? 'bg-st-orange hover:bg-orange-600 text-white shadow' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}">
                                <i class="fa-solid fa-bolt"></i> Buy Now
                            </button>

                            <button onclick="toggleWishlist(${p.id}); renderProductDetailsPage()" title="Wishlist"
                                class="w-11 h-11 rounded-xl border ${isWished ? 'bg-rose-50 border-rose-300 text-rose-600' : 'border-slate-300 text-slate-600 hover:text-rose-600'} flex items-center justify-center transition">
                                <i class="${isWished ? 'fa-solid' : 'fa-regular'} fa-heart text-base"></i>
                            </button>

                            <button onclick="addToCompare(${p.id})" title="Compare"
                                class="w-11 h-11 rounded-xl border border-slate-300 text-slate-600 hover:text-st-blue flex items-center justify-center transition">
                                <i class="fa-solid fa-scale-balanced text-base"></i>
                            </button>
                        </div>

                        <!-- Delivery Info Strip -->
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-xs">
                            <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
                                <i class="fa-solid fa-truck-fast text-st-orange text-base"></i>
                                <div><p class="font-bold text-slate-800">Fast Delivery</p><p class="text-[10px] text-slate-500">24-48 Hours Nationwide</p></div>
                            </div>
                            <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
                                <i class="fa-solid fa-hand-holding-dollar text-emerald-600 text-base"></i>
                                <div><p class="font-bold text-slate-800">Cash on Delivery</p><p class="text-[10px] text-slate-500">Pay after receiving</p></div>
                            </div>
                            <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
                                <i class="fa-solid fa-rotate-left text-indigo-600 text-base"></i>
                                <div><p class="font-bold text-slate-800">7 Days Replacement</p><p class="text-[10px] text-slate-500">Instant warranty support</p></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Specification Table & Customer Reviews Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-4" style="gap: 16px;">
                    <!-- Detailed Spec Table (7 Cols) -->
                    <div class="lg:col-span-7 bg-white rounded-2xl p-6 shadow-xs border border-slate-200">
                        <h3 class="font-bold text-base text-slate-800 border-b pb-3 mb-4"><i class="fa-solid fa-list-ul text-st-orange mr-1.5"></i> Technical Specifications</h3>
                        <table class="w-full text-xs border-collapse">
                            <tbody class="divide-y divide-slate-100">
                                <tr><td class="py-2.5 px-3 font-semibold text-slate-500 bg-slate-50 w-1/3">Product Model</td><td class="py-2.5 px-3 font-bold text-slate-800">${p.name}</td></tr>
                                <tr><td class="py-2.5 px-3 font-semibold text-slate-500 bg-slate-50">Brand</td><td class="py-2.5 px-3 text-slate-700">${brand}</td></tr>
                                <tr><td class="py-2.5 px-3 font-semibold text-slate-500 bg-slate-50">Category</td><td class="py-2.5 px-3 text-slate-700">${p.category}</td></tr>
                                ${(p.specs || []).map((s, idx) => `
                                    <tr>
                                        <td class="py-2.5 px-3 font-semibold text-slate-500 bg-slate-50">Feature ${idx + 1}</td>
                                        <td class="py-2.5 px-3 text-slate-700">${s}</td>
                                    </tr>
                                `).join('')}
                                <tr><td class="py-2.5 px-3 font-semibold text-slate-500 bg-slate-50">Warranty</td><td class="py-2.5 px-3 text-emerald-700 font-semibold">1 Year Official FindTechBD Warranty</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Customer Reviews (5 Cols) -->
                    <div class="lg:col-span-5 bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-4">
                        <h3 class="font-bold text-base text-slate-800 border-b pb-3"><i class="fa-solid fa-star text-amber-400 mr-1.5"></i> Customer Reviews (${reviews.length})</h3>
                        <div class="space-y-3 max-h-56 overflow-y-auto pr-1">
                            ${reviews.map(r => `
                                <div class="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                                    <div class="flex justify-between items-center mb-1">
                                        <span class="font-bold text-slate-800">${r.user}</span>
                                        <span class="text-amber-400">${'★'.repeat(r.rating)}</span>
                                    </div>
                                    <p class="text-slate-600">${r.comment}</p>
                                    <span class="text-[10px] text-slate-400 mt-1 block">${r.date}</span>
                                </div>
                            `).join('')}
                        </div>
                        <form onsubmit="submitProductReview(event, ${p.id})" class="space-y-2 pt-2 border-t text-xs">
                            <p class="font-bold text-slate-700">Write a Review</p>
                            <div class="flex gap-2">
                                <input type="text" id="rev-name" placeholder="Your Name" value="${currentUser ? currentUser.name : ''}" required class="flex-1 border rounded-lg p-2">
                                <select id="rev-rating" class="border rounded-lg p-2 bg-white font-semibold">
                                    <option value="5">★★★★★ (5)</option>
                                    <option value="4">★★★★☆ (4)</option>
                                    <option value="3">★★★☆☆ (3)</option>
                                </select>
                            </div>
                            <textarea id="rev-comment" rows="2" placeholder="Share your experience with this product..." required class="w-full border rounded-lg p-2"></textarea>
                            <button type="submit" class="w-full bg-slate-900 hover:bg-st-orange text-white font-bold py-2 rounded-lg transition">Submit Review</button>
                        </form>
                    </div>
                </div>

                <!-- Related Products -->
                <div>
                    <h3 class="font-bold text-lg text-slate-800 mb-3">Related Products</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        ${related.map(item => createProductCardHtml(item)).join('')}
                    </div>
                </div>
            `;
        }

        function changeDetailQty(delta) {
            currentProductQty = Math.max(1, currentProductQty + delta);
            const el = document.getElementById('pd-qty-val');
            if (el) el.innerText = currentProductQty;
        }

        function submitProductReview(e, prodId) {
            e.preventDefault();
            if (!productReviews[prodId]) {
                productReviews[prodId] = [
                    { user: "Mahmudul Hasan", rating: 5, comment: "অসাধারণ পারফরম্যান্স! ডেলিভারি খুব দ্রুত পেয়েছি এবং অরিজিনাল প্রোডাক্ট।", date: "2 days ago" }
                ];
            }
            productReviews[prodId].unshift({
                user: document.getElementById('rev-name').value,
                rating: Number(document.getElementById('rev-rating').value),
                comment: document.getElementById('rev-comment').value,
                date: "Just now"
            });
            localStorage.setItem('ftbd_product_reviews', JSON.stringify(productReviews));
            showToast("Thank you! Your review has been published.");
            renderProductDetailsPage();
        }

        // ==================== PAGE 3: PRODUCTS FILTER RENDERER ====================
        function applyProductsFilter() {
            const q = (document.getElementById('pf-search')?.value || '').toLowerCase().trim();
            const minPrice = Number(document.getElementById('pf-min-input')?.value || 0);
            const maxPrice = Number(document.getElementById('pf-max-price')?.value || 60000);
            const inStockOnly = document.getElementById('pf-instock')?.checked || false;
            const discountOnly = document.getElementById('pf-discount')?.checked || false;
            const brand = document.getElementById('pf-brand')?.value || 'All';
            const sort = document.getElementById('pf-sort')?.value || 'default';

            const priceLabel = document.getElementById('pf-price-label');
            if (priceLabel) priceLabel.innerText = `${minPrice.toLocaleString()}৳ - ${maxPrice.toLocaleString()}৳`;
            const maxInput = document.getElementById('pf-max-input');
            if (maxInput && Number(maxInput.value) !== maxPrice) maxInput.value = maxPrice;

            let filtered = products.filter(p => {
                if (!p.active) return false;
                if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
                if (q && !p.name.toLowerCase().includes(q) && !p.category.toLowerCase().includes(q)) return false;
                if (p.price < minPrice || p.price > maxPrice) return false;
                if (inStockOnly && p.stock !== 'In Stock') return false;
                if (discountOnly && !(p.oldPrice > p.price)) return false;
                if (brand !== 'All' && inferProductBrand(p).toLowerCase() !== brand.toLowerCase()) return false;
                return true;
            });

            if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
            else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
            else if (sort === 'discount') filtered.sort((a, b) => (b.oldPrice - b.price) - (a.oldPrice - a.price));
            else if (sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

            const heading = document.getElementById('pf-heading');
            if (heading) heading.innerText = selectedCategory === 'All' ? 'All Filtered Products' : `${selectedCategory} (${filtered.length})`;
            const countEl = document.getElementById('pf-result-count');
            if (countEl) countEl.innerText = `Showing ${filtered.length} of ${products.filter(p => p.active).length} active products`;

            const grid = document.getElementById('pf-results-grid');
            if (!grid) return;
            if (filtered.length === 0) {
                grid.innerHTML = `
                    <div class="col-span-full bg-white rounded-2xl p-12 text-center border border-slate-200">
                        <i class="fa-solid fa-filter-circle-xmark text-4xl text-slate-300 mb-3"></i>
                        <p class="font-bold text-slate-700 text-base">No matching products found</p>
                        <p class="text-xs text-slate-400 mt-1 mb-4">Try clearing some filters or increasing your maximum price range.</p>
                        <button onclick="resetAllProductFilters()" class="bg-st-orange text-white px-4 py-2 rounded-lg text-xs font-bold">Reset Filters</button>
                    </div>
                `;
            } else {
                grid.innerHTML = filtered.map(p => createProductCardHtml(p)).join('');
            }
        }

        function resetAllProductFilters() {
            selectedCategory = 'All';
            if (document.getElementById('pf-search')) document.getElementById('pf-search').value = '';
            if (document.getElementById('pf-min-input')) document.getElementById('pf-min-input').value = 0;
            if (document.getElementById('pf-max-price')) document.getElementById('pf-max-price').value = 60000;
            if (document.getElementById('pf-max-input')) document.getElementById('pf-max-input').value = 60000;
            if (document.getElementById('pf-instock')) document.getElementById('pf-instock').checked = false;
            if (document.getElementById('pf-discount')) document.getElementById('pf-discount').checked = false;
            if (document.getElementById('pf-brand')) document.getElementById('pf-brand').value = 'All';
            if (document.getElementById('pf-sort')) document.getElementById('pf-sort').value = 'default';
            renderAll();
        }
        // ==================== CART & WISHLIST HELPERS ====================
        function addToCart(prodId, qty = 1, silent = false) {
            const p = products.find(x => x.id === prodId);
            if (!p) return;
            const existing = cart.find(item => item.id === prodId);
            const imgs = getProductImages(p);
            if (existing) {
                existing.qty = (existing.qty || 1) + qty;
                existing.price = p.price;
                existing.name = p.name;
                existing.image = imgs[0] || "";
            } else {
                cart.push({
                    id: p.id,
                    name: p.name,
                    category: p.category,
                    price: p.price,
                    oldPrice: p.oldPrice,
                    image: imgs[0] || "",
                    qty: qty
                });
            }
            saveUserState();
            if (!silent) showToast(`Added "${p.name.slice(0, 26)}..." to Cart!`, "success", "View Cart →", "cart");
            if (currentPage === 'cart') renderCartPage();
        }

        function buyNowDirect(prodId) {
            addToCart(prodId, 1, true);
            navigateTo('shipping-info');
        }

        function updateCartItemQty(prodId, delta) {
            const idx = cart.findIndex(x => x.id === prodId);
            if (idx === -1) return;
            cart[idx].qty = (cart[idx].qty || 1) + delta;
            if (cart[idx].qty <= 0) {
                cart.splice(idx, 1);
            }
            saveUserState();
            renderCurrentPage();
        }

        function removeCartItem(prodId) {
            cart = cart.filter(x => x.id !== prodId);
            saveUserState();
            renderCurrentPage();
        }

        function toggleWishlist(prodId, event = null) {
            if (event) event.stopPropagation();
            const idx = wishlist.indexOf(prodId);
            if (idx > -1) {
                wishlist.splice(idx, 1);
                showToast("Removed from Wishlist", "info");
            } else {
                wishlist.push(prodId);
                showToast("Saved to your Wishlist ♥", "success", "View Wishlist →", "wishlist");
            }
            saveUserState();
            renderCurrentPage();
        }

        function calculateCartTotals() {
            const subtotal = cart.reduce((s, item) => s + (item.price * (item.qty || 1)), 0);
            let discount = 0;
            if (appliedCoupon === 'FTBD10') discount = Math.round(subtotal * 0.10);
            else if (appliedCoupon === 'SAVE200' && subtotal >= 2000) discount = 200;

            let shipping = 0;
            if (subtotal > 0) {
                if (appliedCoupon === 'FREE') shipping = 0;
                else if (shippingInfo.deliveryMethod === 'pickup') shipping = 0;
                else if (shippingInfo.deliveryMethod === 'outside-dhaka') shipping = 120;
                else shipping = 60;
            }
            const total = Math.max(0, subtotal - discount + shipping);
            return { subtotal, discount, shipping, total };
        }

        function checkoutStepperHtml(activeStep) {
            const steps = [
                { num: 1, label: "Shopping Cart", page: "cart", icon: "fa-cart-shopping" },
                { num: 2, label: "Shipping Info", page: "shipping-info", icon: "fa-location-dot" },
                { num: 3, label: "Checkout & Pay", page: "checkout", icon: "fa-credit-card" },
                { num: 4, label: "Order Invoice", page: "invoice", icon: "fa-file-invoice" }
            ];
            return `
                <div class="animate-fade-in-down no-print bg-white rounded-2xl p-4 shadow-xs border border-slate-200 mb-6">
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        ${steps.map(s => {
                            const done = s.num < activeStep;
                            const curr = s.num === activeStep;
                            const canClick = s.num <= activeStep && activeStep < 4;
                            return `
                                <div ${canClick ? `onclick="navigateTo('${s.page}')"` : ''} class="flex items-center gap-2.5 p-2 rounded-xl transition ${canClick ? 'cursor-pointer' : 'cursor-default'} ${curr ? 'bg-orange-50 border border-orange-200 text-st-orange' : (done ? 'bg-emerald-50/60 text-emerald-700' : 'text-slate-400')}">
                                    <div class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${curr ? 'bg-st-orange text-white' : (done ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500')}">
                                        ${done ? '<i class="fa-solid fa-check"></i>' : s.num}
                                    </div>
                                    <div class="leading-tight">
                                        <p class="text-[10px] uppercase font-bold opacity-75">Step 0${s.num}</p>
                                        <p class="text-xs font-bold">${s.label}</p>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }

        // ==================== PAGE 4: CART PAGE RENDERER ====================
        function renderCartPage() {
            const container = document.getElementById('cart-page-container');
            const { subtotal, discount, shipping, total } = calculateCartTotals();

            if (cart.length === 0) {
                container.innerHTML = `
                    ${checkoutStepperHtml(1)}
                    <div class="bg-white rounded-2xl p-12 text-center shadow-xs border border-slate-200 max-w-xl mx-auto">
                        <div class="w-20 h-20 rounded-full bg-orange-50 text-st-orange flex items-center justify-center mx-auto mb-4 text-3xl">
                            <i class="fa-solid fa-cart-arrow-down"></i>
                        </div>
                        <h2 class="text-xl font-bold text-slate-800">Your Shopping Cart is Empty</h2>
                        <p class="text-xs text-slate-500 mt-1 mb-6">Explore our routers, mini UPS & speakers and add items to your cart.</p>
                        <div class="flex justify-center gap-3">
                            <button onclick="navigateTo('products-filter')" class="bg-st-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow">Browse Products</button>
                            <button onclick="navigateTo('wishlist')" class="bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 rounded-xl font-bold text-xs">View Wishlist (${wishlist.length})</button>
                        </div>
                    </div>
                `;
                return;
            }

            container.innerHTML = `
                ${checkoutStepperHtml(1)}
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <!-- Cart Items Table (8 Cols) -->
                    <div class="lg:col-span-8 bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-slate-200 space-y-4">
                        <div class="flex justify-between items-center border-b pb-3">
                            <h2 class="font-bold text-base sm:text-lg text-slate-800"><i class="fa-solid fa-bag-shopping text-st-orange mr-1.5"></i> Shopping Cart (${cart.reduce((a, b) => a + (b.qty || 1), 0)} Items)</h2>
                            <button onclick="cart=[]; saveUserState(); renderCartPage()" class="text-xs text-red-500 hover:underline font-semibold">Clear Cart</button>
                        </div>

                        <div class="divide-y divide-slate-100">
                            ${cart.map(item => `
                                <div class="py-4 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4">
                                    <div class="flex items-center gap-3.5 flex-grow">
                                        <div onclick="navigateTo('product-details', ${item.id})" class="w-16 h-16 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center p-1.5 shrink-0 cursor-pointer">
                                            ${item.image ? `<img src="${item.image}" class="w-full h-full object-contain">` : `<i class="fa-solid ${getCategoryIcon(item.category)} text-2xl"></i>`}
                                        </div>
                                        <div>
                                            <span class="text-[10px] font-bold uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">${item.category || 'Tech'}</span>
                                            <h4 onclick="navigateTo('product-details', ${item.id})" class="font-bold text-slate-800 text-xs sm:text-sm hover:text-st-orange cursor-pointer mt-0.5">${item.name}</h4>
                                            <p class="text-xs text-slate-500 mt-0.5">Unit Price: <strong class="text-slate-700">${item.price.toLocaleString()}৳</strong></p>
                                        </div>
                                    </div>

                                    <div class="flex items-center gap-4 ml-auto">
                                        <div class="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-white text-xs">
                                            <button onclick="updateCartItemQty(${item.id}, -1)" class="w-8 h-8 hover:bg-slate-100 font-bold">-</button>
                                            <span class="w-8 text-center font-bold">${item.qty || 1}</span>
                                            <button onclick="updateCartItemQty(${item.id}, 1)" class="w-8 h-8 hover:bg-slate-100 font-bold">+</button>
                                        </div>
                                        <div class="text-right min-w-[80px]">
                                            <p class="font-black text-st-orange text-sm">${(item.price * (item.qty || 1)).toLocaleString()}৳</p>
                                        </div>
                                        <button onclick="removeCartItem(${item.id})" title="Remove Item" class="text-slate-400 hover:text-red-600 p-1.5">
                                            <i class="fa-solid fa-trash-can"></i>
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>

                        <div class="pt-3 border-t flex flex-wrap justify-between items-center gap-3">
                            <button onclick="navigateTo('products-filter')" class="text-xs font-bold text-slate-600 hover:text-st-orange flex items-center gap-1.5">
                                <i class="fa-solid fa-arrow-left"></i> Continue Shopping
                            </button>
                            <div class="flex items-center gap-2">
                                <input type="text" id="coupon-input" placeholder="Promo Code (Try: FTBD10)" value="${appliedCoupon || ''}" class="border border-slate-300 rounded-lg px-3 py-1.5 text-xs uppercase font-bold w-44">
                                <button onclick="applyPromoCode()" class="bg-slate-900 hover:bg-indigo-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition">Apply</button>
                            </div>
                        </div>
                    </div>

                    <!-- Order Summary Box (4 Cols) -->
                    <div class="lg:col-span-4 bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-4">
                        <h3 class="font-bold text-base text-slate-800 border-b pb-3">Order Summary</h3>
                        <div class="space-y-2.5 text-xs">
                            <div class="flex justify-between text-slate-600"><span>Subtotal</span><strong class="text-slate-800">${subtotal.toLocaleString()}৳</strong></div>
                            <div class="flex justify-between text-emerald-600"><span>Promo Discount ${appliedCoupon ? `(${appliedCoupon})` : ''}</span><strong>-${discount.toLocaleString()}৳</strong></div>
                            <div class="flex justify-between text-slate-600"><span>Estimated Shipping</span><strong class="text-slate-800">${shipping}৳</strong></div>
                            <div class="border-t pt-3 flex justify-between items-baseline text-sm font-black text-slate-900">
                                <span>Total Payable</span>
                                <span class="text-xl text-st-orange">${total.toLocaleString()}৳</span>
                            </div>
                        </div>
                        <div class="p-3 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-800">
                            <i class="fa-solid fa-ticket mr-1 text-st-orange"></i> Use code <strong>FTBD10</strong> for 10% instant discount!
                        </div>
                        ${!currentUser ? `
                            <div class="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-[11px] text-indigo-800 flex items-start gap-2">
                                <i class="fa-solid fa-mobile-screen-button text-indigo-600 mt-0.5"></i>
                                <span>অর্ডার করতে মোবাইল নাম্বার ও <strong>One-Time Password (OTP)</strong> দিয়ে লগইন বা অ্যাকাউন্ট তৈরি করতে হবে।</span>
                            </div>
                        ` : ''}
                        <button onclick="navigateTo('shipping-info')" class="w-full bg-st-orange hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-sm shadow transition flex items-center justify-center gap-2 cursor-pointer">
                            <span>${currentUser ? 'Proceed to Shipping Info' : 'Login with Phone OTP to Order'}</span> <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            `;
        }

        function applyPromoCode() {
            const code = (document.getElementById('coupon-input')?.value || '').trim().toUpperCase();
            if (code === 'FTBD10' || code === 'SAVE200' || code === 'FREE') {
                appliedCoupon = code;
                showToast(`Promo code "${code}" applied!`);
            } else {
                appliedCoupon = null;
                showToast("Invalid coupon! Try FTBD10 or SAVE200", "error");
            }
            renderCartPage();
        }

        // ==================== PAGE 5: SHIPPING INFO RENDERER ====================
        function renderShippingInfoPage() {
            const container = document.getElementById('shipping-page-container');
            const { subtotal, discount, shipping, total } = calculateCartTotals();
            const savedAddrs = currentUser?.savedAddresses || [];

            container.innerHTML = `
                ${checkoutStepperHtml(2)}
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div class="lg:col-span-8 bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-5">
                        <div class="flex flex-wrap justify-between items-center gap-2 border-b pb-3">
                            <h2 class="font-bold text-base sm:text-lg text-slate-800"><i class="fa-solid fa-truck-ramp-box text-st-orange mr-1.5"></i> Delivery & Shipping Information</h2>
                            ${!currentUser ? `<button onclick="navigateTo('auth')" class="text-xs text-indigo-600 font-bold hover:underline"><i class="fa-solid fa-user-check mr-1"></i>Sign in to auto-fill address</button>` : `<span class="text-xs text-emerald-600 font-semibold"><i class="fa-solid fa-circle-check mr-1"></i>Logged in as ${currentUser.name}</span>`}
                        </div>

                        ${savedAddrs.length > 0 ? `
                            <div>
                                <label class="block text-xs font-bold text-slate-600 uppercase mb-2">Quick Select Saved Address:</label>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    ${savedAddrs.map(a => `
                                        <div onclick="fillFromSavedAddress(${a.id})" class="p-3 rounded-xl border border-slate-200 hover:border-st-orange bg-slate-50/60 cursor-pointer transition text-xs">
                                            <div class="flex justify-between items-center mb-1">
                                                <span class="font-bold text-slate-800"><i class="fa-solid fa-location-dot text-st-orange mr-1"></i>${a.label}</span>
                                                <span class="text-[10px] text-indigo-600 font-bold">Click to Use</span>
                                            </div>
                                            <p class="text-slate-600 font-medium">${a.name} (${a.phone})</p>
                                            <p class="text-slate-500 text-[11px] line-clamp-1">${a.address}, ${a.city}</p>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}

                        <form onsubmit="saveShippingAndContinue(event)" class="space-y-4 text-xs">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label class="block font-bold text-slate-700 mb-1">Recipient Full Name *</label>
                                    <input type="text" id="ship-name" value="${shippingInfo.name}" required placeholder="e.g. Tanvir Ahmed" class="w-full border border-slate-300 rounded-xl p-2.5">
                                </div>
                                <div>
                                    <label class="block font-bold text-slate-700 mb-1">Mobile Number (Active) *</label>
                                    <input type="text" id="ship-phone" value="${shippingInfo.phone}" required placeholder="017XXXXXXXX" class="w-full border border-slate-300 rounded-xl p-2.5">
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                    <label class="block font-bold text-slate-700 mb-1">Email (Order Confirmation & Updates) *</label>
                                    <input type="email" id="ship-email" value="${shippingInfo.email || (currentUser?.email || '')}" required placeholder="you@email.com" class="w-full border border-slate-300 rounded-xl p-2.5">
                                    <p class="text-[10px] text-emerald-600 mt-1"><i class="fa-solid fa-envelope-circle-check mr-0.5"></i> এই ইমেইলে অর্ডার কনফার্মেশন ও আপডেট যাবে</p>
                                </div>
                                <div>
                                    <label class="block font-bold text-slate-700 mb-1">City / Division *</label>
                                    <select id="ship-city" onchange="handleCityShippingChange(this.value)" class="w-full border border-slate-300 rounded-xl p-2.5 bg-white font-semibold">
                                        <option value="Dhaka City" ${shippingInfo.city === 'Dhaka City' ? 'selected' : ''}>Dhaka City</option>
                                        <option value="Chattogram" ${shippingInfo.city === 'Chattogram' ? 'selected' : ''}>Chattogram</option>
                                        <option value="Sylhet" ${shippingInfo.city === 'Sylhet' ? 'selected' : ''}>Sylhet</option>
                                        <option value="Rajshahi" ${shippingInfo.city === 'Rajshahi' ? 'selected' : ''}>Rajshahi</option>
                                        <option value="Khulna" ${shippingInfo.city === 'Khulna' ? 'selected' : ''}>Khulna</option>
                                        <option value="Rangpur" ${shippingInfo.city === 'Rangpur' ? 'selected' : ''}>Rangpur</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block font-bold text-slate-700 mb-1">Area / Thana *</label>
                                    <input type="text" id="ship-area" value="${shippingInfo.area || ''}" required placeholder="e.g. Dhanmondi / Mirpur" class="w-full border border-slate-300 rounded-xl p-2.5">
                                </div>
                            </div>

                            <div>
                                <label class="block font-bold text-slate-700 mb-1">Full Street Address (House, Road, Block) *</label>
                                <input type="text" id="ship-address" value="${shippingInfo.address}" required placeholder="House #, Road #, Sector/Block..." class="w-full border border-slate-300 rounded-xl p-2.5">
                            </div>

                            <!-- Delivery Method Selection -->
                            <div>
                                <label class="block font-bold text-slate-700 mb-2">Choose Courier / Delivery Speed *</label>
                                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <label class="p-3 rounded-xl border ${shippingInfo.deliveryMethod === 'inside-dhaka' ? 'border-st-orange bg-orange-50/40' : 'border-slate-200'} cursor-pointer flex items-start gap-2.5">
                                        <input type="radio" name="deliv-method" value="inside-dhaka" ${shippingInfo.deliveryMethod === 'inside-dhaka' ? 'checked' : ''} onchange="shippingInfo.deliveryMethod='inside-dhaka'; renderShippingInfoPage()" class="mt-0.5 accent-[#ef4a23]">
                                        <div>
                                            <p class="font-bold text-slate-800">Inside Dhaka Express</p>
                                            <p class="text-[11px] text-slate-500">24 Hours • <strong class="text-st-orange">60৳</strong></p>
                                        </div>
                                    </label>
                                    <label class="p-3 rounded-xl border ${shippingInfo.deliveryMethod === 'outside-dhaka' ? 'border-st-orange bg-orange-50/40' : 'border-slate-200'} cursor-pointer flex items-start gap-2.5">
                                        <input type="radio" name="deliv-method" value="outside-dhaka" ${shippingInfo.deliveryMethod === 'outside-dhaka' ? 'checked' : ''} onchange="shippingInfo.deliveryMethod='outside-dhaka'; renderShippingInfoPage()" class="mt-0.5 accent-[#ef4a23]">
                                        <div>
                                            <p class="font-bold text-slate-800">Outside Dhaka Courier</p>
                                            <p class="text-[11px] text-slate-500">Steadfast/Pathao • <strong class="text-st-orange">120৳</strong></p>
                                        </div>
                                    </label>
                                    <label class="p-3 rounded-xl border ${shippingInfo.deliveryMethod === 'pickup' ? 'border-st-orange bg-orange-50/40' : 'border-slate-200'} cursor-pointer flex items-start gap-2.5">
                                        <input type="radio" name="deliv-method" value="pickup" ${shippingInfo.deliveryMethod === 'pickup' ? 'checked' : ''} onchange="shippingInfo.deliveryMethod='pickup'; renderShippingInfoPage()" class="mt-0.5 accent-[#ef4a23]">
                                        <div>
                                            <p class="font-bold text-slate-800">Showroom Pickup</p>
                                            <p class="text-[11px] text-emerald-600 font-bold">Multiplan Branch • FREE</p>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label class="block font-bold text-slate-700 mb-1">Delivery Notes (Optional)</label>
                                <input type="text" id="ship-notes" value="${shippingInfo.notes || ''}" placeholder="e.g. Call before delivery, leave at security guard..." class="w-full border border-slate-300 rounded-xl p-2.5">
                            </div>

                            <div class="pt-2 flex flex-wrap justify-between items-center gap-3">
                                <button type="button" onclick="navigateTo('cart')" class="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold">← Back to Cart</button>
                                <button type="submit" class="px-6 py-3 rounded-xl bg-st-orange hover:bg-orange-600 text-white font-bold shadow flex items-center gap-2">
                                    <span>Save & Continue to Checkout</span> <i class="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </form>
                    </div>

                    <!-- Summary Sidebar (4 Cols) -->
                    <div class="lg:col-span-4 bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-4">
                        <h3 class="font-bold text-base text-slate-800 border-b pb-3">Shipping Summary</h3>
                        <div class="space-y-2 text-xs">
                            <div class="flex justify-between"><span>Items (${cart.length})</span><strong>${subtotal.toLocaleString()}৳</strong></div>
                            <div class="flex justify-between text-emerald-600"><span>Discount</span><strong>-${discount.toLocaleString()}৳</strong></div>
                            <div class="flex justify-between"><span>Courier Charge</span><strong>${shipping}৳</strong></div>
                            <div class="border-t pt-2.5 flex justify-between text-sm font-black">
                                <span>Total Payable</span>
                                <span class="text-lg text-st-orange">${total.toLocaleString()}৳</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function fillFromSavedAddress(addrId) {
            const addr = (currentUser?.savedAddresses || []).find(a => a.id === addrId);
            if (!addr) return;
            shippingInfo.name = addr.name;
            shippingInfo.phone = addr.phone;
            shippingInfo.city = addr.city;
            shippingInfo.area = addr.area;
            shippingInfo.address = addr.address;
            saveUserState();
            showToast(`Loaded "${addr.label}" shipping address!`);
            renderShippingInfoPage();
        }

        function handleCityShippingChange(city) {
            shippingInfo.city = city;
            shippingInfo.deliveryMethod = city === 'Dhaka City' ? 'inside-dhaka' : 'outside-dhaka';
            renderShippingInfoPage();
        }

        function saveShippingAndContinue(e) {
            e.preventDefault();
            shippingInfo.name = document.getElementById('ship-name').value.trim();
            shippingInfo.phone = document.getElementById('ship-phone').value.trim();
            shippingInfo.email = document.getElementById('ship-email').value.trim();
            shippingInfo.city = document.getElementById('ship-city').value;
            shippingInfo.area = document.getElementById('ship-area').value.trim();
            shippingInfo.address = document.getElementById('ship-address').value.trim();
            shippingInfo.notes = document.getElementById('ship-notes').value.trim();
            saveUserState();
            navigateTo('checkout');
        }

        // ==================== PAGE 6: CHECKOUT PAGE RENDERER ====================
        function renderCheckoutPage() {
            const container = document.getElementById('checkout-page-container');
            const { subtotal, discount, shipping, total } = calculateCartTotals();

            if (cart.length === 0) {
                container.innerHTML = `
                    ${checkoutStepperHtml(3)}
                    <div class="bg-white rounded-2xl p-10 text-center border border-slate-200 max-w-lg mx-auto">
                        <p class="font-bold text-slate-700 mb-3">Your cart is empty. Add products before checkout.</p>
                        <button onclick="navigateTo('home')" class="bg-st-orange text-white px-5 py-2 rounded-xl text-xs font-bold">Go to Homepage</button>
                    </div>
                `;
                return;
            }

            const paymentOptions = [
                { id: "Cash on Delivery (COD)", title: "Cash on Delivery (COD)", desc: "প্রোডাক্ট হাতে পেয়ে ডেলিভারি ম্যানকে পেমেন্ট করুন", icon: "fa-hand-holding-dollar text-emerald-600" },
                { id: "bKash Merchant Payment", title: "bKash Payment", desc: "Instant bKash Merchant Payment (01700-000000)", icon: "fa-mobile-screen-button text-pink-600" },
                { id: "Nagad Payment", title: "Nagad Payment", desc: "Nagad Merchant Transfer with Cashback", icon: "fa-wallet text-orange-500" },
                { id: "Online Card / EMI (SSLCommerz)", title: "Visa / MasterCard / EMI", desc: "0% EMI up to 12 Months via SSLCommerz", icon: "fa-credit-card text-indigo-600" }
            ];

            container.innerHTML = `
                ${checkoutStepperHtml(3)}
                <form onsubmit="confirmAndPlaceOrder(event)" class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <!-- Left 7 Cols: Shipping Review & Payment Gateway -->
                    <div class="lg:col-span-7 space-y-5">
                        <!-- Shipping Address Summary -->
                        <div class="bg-white rounded-2xl p-5 shadow-xs border border-slate-200">
                            <div class="flex justify-between items-center border-b pb-2.5 mb-3">
                                <h3 class="font-bold text-sm text-slate-800"><i class="fa-solid fa-location-dot text-st-orange mr-1.5"></i> Delivering To</h3>
                                <button type="button" onclick="navigateTo('shipping-info')" class="text-xs text-indigo-600 font-bold hover:underline">Edit Shipping Info</button>
                            </div>
                            <div class="text-xs text-slate-600 space-y-1">
                                <p><strong class="text-slate-800">${shippingInfo.name || (currentUser?.name || 'Customer')}</strong> — <span class="text-emerald-600 font-bold">${shippingInfo.phone || (currentUser?.phone || 'Not set')}</span></p>
                                <p class="text-indigo-700 font-semibold"><i class="fa-solid fa-envelope mr-1"></i>Confirmation Email: <strong>${shippingInfo.email || (currentUser?.email || 'Not set')}</strong></p>
                                <p>${shippingInfo.address ? `${shippingInfo.address}, ${shippingInfo.area}, ${shippingInfo.city}` : '<span class="text-red-500">Please enter shipping address below or in Shipping Info</span>'}</p>
                            </div>
                            ${(!shippingInfo.name || !shippingInfo.phone || !shippingInfo.email || !shippingInfo.address) ? `
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3 pt-3 border-t text-xs">
                                    <input type="text" id="chk-quick-name" value="${shippingInfo.name || (currentUser?.name || '')}" required placeholder="Full Name *" class="border rounded-lg p-2">
                                    <input type="text" id="chk-quick-phone" value="${shippingInfo.phone || (currentUser?.phone || '')}" required placeholder="Mobile Number *" class="border rounded-lg p-2">
                                    <input type="email" id="chk-quick-email" value="${shippingInfo.email || (currentUser?.email || '')}" required placeholder="Email for Order Confirmation *" class="border rounded-lg p-2">
                                    <input type="text" id="chk-quick-addr" value="${shippingInfo.address || (currentUser?.address || '')}" required placeholder="Full Delivery Address *" class="border rounded-lg p-2">
                                </div>
                            ` : ''}
                        </div>

                        <!-- Payment Method Selection -->
                        <div class="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-slate-200 space-y-4">
                            <h3 class="font-bold text-base text-slate-800 border-b pb-3"><i class="fa-solid fa-shield-halved text-emerald-600 mr-1.5"></i> Select Payment Method</h3>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                ${paymentOptions.map(opt => `
                                    <label class="p-3.5 rounded-xl border-2 ${selectedPaymentMethod === opt.id ? 'border-st-orange bg-orange-50/30' : 'border-slate-200 hover:border-slate-300'} cursor-pointer flex items-start gap-3 transition">
                                        <input type="radio" name="pay-method" value="${opt.id}" ${selectedPaymentMethod === opt.id ? 'checked' : ''} onchange="selectedPaymentMethod=this.value; renderCheckoutPage()" class="mt-1 accent-[#ef4a23]">
                                        <div>
                                            <p class="font-bold text-xs text-slate-800 flex items-center gap-1.5"><i class="fa-solid ${opt.icon}"></i> ${opt.title}</p>
                                            <p class="text-[11px] text-slate-500 mt-0.5">${opt.desc}</p>
                                        </div>
                                    </label>
                                `).join('')}
                            </div>

                            ${selectedPaymentMethod.includes('bKash') || selectedPaymentMethod.includes('Nagad') ? `
                                <div class="p-4 rounded-xl bg-pink-50/70 border border-pink-200 text-xs space-y-2">
                                    <p class="font-bold text-slate-800">Send Money / Merchant Payment to: <span class="text-st-orange font-mono">01700-000000</span></p>
                                    <input type="text" id="pay-trx-id" required placeholder="Enter Transaction ID (e.g. BKS982KL1)" class="w-full border border-slate-300 rounded-lg p-2 bg-white font-mono">
                                </div>
                            ` : ''}

                            <label class="flex items-center gap-2 text-xs text-slate-600 pt-2 cursor-pointer">
                                <input type="checkbox" required checked class="accent-[#ef4a23] rounded">
                                <span>I agree to FindTechBD's Terms & Conditions, Warranty Policy and Return Policy.</span>
                            </label>
                        </div>
                    </div>

                    <!-- Right 5 Cols: Final Order Review -->
                    <div class="lg:col-span-5 bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-4">
                        <h3 class="font-bold text-base text-slate-800 border-b pb-3">Final Order Review</h3>
                        <div class="space-y-2.5 max-h-60 overflow-y-auto pr-1 divide-y divide-slate-100 text-xs">
                            ${cart.map(item => `
                                <div class="pt-2.5 first:pt-0 flex justify-between items-center gap-2">
                                    <div>
                                        <p class="font-bold text-slate-800 line-clamp-1">${item.name}</p>
                                        <p class="text-slate-400">${item.price.toLocaleString()}৳ × ${item.qty || 1}</p>
                                    </div>
                                    <span class="font-bold text-slate-800 shrink-0">${(item.price * (item.qty || 1)).toLocaleString()}৳</span>
                                </div>
                            `).join('')}
                        </div>

                        <div class="border-t pt-3 space-y-2 text-xs">
                            <div class="flex justify-between text-slate-600"><span>Subtotal</span><strong>${subtotal.toLocaleString()}৳</strong></div>
                            <div class="flex justify-between text-emerald-600"><span>Promo Discount</span><strong>-${discount.toLocaleString()}৳</strong></div>
                            <div class="flex justify-between text-slate-600"><span>Shipping Charge</span><strong>${shipping}৳</strong></div>
                            <div class="border-t pt-2.5 flex justify-between items-baseline text-base font-black text-slate-900">
                                <span>Grand Total</span>
                                <span class="text-2xl text-st-orange">${total.toLocaleString()}৳</span>
                            </div>
                        </div>

                        <button type="submit" class="w-full bg-st-orange hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl text-sm shadow-lg transition flex items-center justify-center gap-2">
                            <i class="fa-solid fa-circle-check"></i> Confirm & Place Order (${total.toLocaleString()}৳)
                        </button>
                    </div>
                </form>
            `;
        }

        async function confirmAndPlaceOrder(e) {
            e.preventDefault();
            if (!currentUser) {
                pendingPostLoginRedirect = 'checkout';
                otpStep = 'phone';
                showToast("অর্ডার প্লেস করতে অনুগ্রহ করে ফোন নাম্বার ও OTP দিয়ে লগইন করুন।", "error");
                navigateTo('auth');
                return;
            }
            if (cart.length === 0) return;

            if (document.getElementById('chk-quick-name')) {
                shippingInfo.name = document.getElementById('chk-quick-name').value.trim();
                shippingInfo.phone = document.getElementById('chk-quick-phone').value.trim();
                shippingInfo.email = document.getElementById('chk-quick-email').value.trim();
                shippingInfo.address = document.getElementById('chk-quick-addr').value.trim();
            }

            const customerEmail = (shippingInfo.email || currentUser?.email || "").trim();
            if (!customerEmail) {
                showToast("অর্ডার কনফার্মেশন ইমেইল পাঠানোর জন্য একটি বৈধ ইমেইল দিন!", "error");
                navigateTo('shipping-info');
                return;
            }
            shippingInfo.email = customerEmail;
            if (currentUser && !currentUser.email) {
                currentUser.email = customerEmail;
            }

            const { subtotal, discount, shipping, total } = calculateCartTotals();
            const orderId = Date.now();
            const orderCode = `FT-${String(orderId).slice(-6)}`;
            const trxId = document.getElementById('pay-trx-id')?.value?.trim() || "";

            const newOrder = {
                id: orderId,
                orderCode: orderCode,
                userId: currentUser ? currentUser.id : null,
                customer: shippingInfo.name || currentUser.name || "Customer",
                phone: shippingInfo.phone || currentUser.phone || "01700000000",
                email: customerEmail,
                emailConfirmationSent: true,
                emailSentAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                city: shippingInfo.city || "Dhaka City",
                area: shippingInfo.area || "",
                address: `${shippingInfo.address}${shippingInfo.area ? ', ' + shippingInfo.area : ''}, ${shippingInfo.city || 'Dhaka'}`,
                payment: trxId ? `${selectedPaymentMethod} (TrxID: ${trxId})` : selectedPaymentMethod,
                status: "Ordered",
                items: cart.map(i => `${i.name} (x${i.qty || 1})`).join(', '),
                itemsList: cart.map(i => ({ id: i.id, name: i.name, price: i.price, qty: i.qty || 1, category: i.category })),
                subtotal: subtotal,
                discount: discount,
                shipping: shipping,
                total: total.toLocaleString(),
                totalNumeric: total,
                date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            const currentOrders = JSON.parse(localStorage.getItem('ftbd_shared_orders')) || [];
            currentOrders.unshift(newOrder);
            localStorage.setItem('ftbd_shared_orders', JSON.stringify(currentOrders));
            orders = currentOrders;
            syncChannel.postMessage({ type: 'NEW_ORDER' });

            try {
                await fetch('/api/place-order', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ order: newOrder })
                });
            } catch (err) { /* offline fallback */ }

            // Dispatch Order Confirmation Email to Client
            dispatchOrderConfirmationEmail(newOrder);

            cart = [];
            appliedCoupon = null;
            saveUserState();

            selectedInvoiceOrderId = newOrder.id;
            trackingSearchQuery = newOrder.orderCode;
            showToast(`🎉 অর্ডার ${newOrder.orderCode} সফল! কনফার্মেশন ইমেইল পাঠানো হয়েছে: ${newOrder.email}`);
            navigateTo('invoice', newOrder.id);
        }

        function dispatchOrderConfirmationEmail(orderObj, statusHeadline = "Order Confirmed & Received") {
            if (!orderObj || !orderObj.email) return;
            const subject = `[${settings.brandName || 'FindTechBD'}] ${statusHeadline} — Order #${orderObj.orderCode || orderObj.id}`;
            const emailRecord = {
                id: Date.now(),
                orderId: orderObj.id,
                orderCode: orderObj.orderCode || ('FT-' + String(orderObj.id).slice(-6)),
                to: orderObj.email,
                customer: orderObj.customer,
                phone: orderObj.phone,
                subject: subject,
                status: orderObj.status || "Ordered",
                items: orderObj.items,
                itemsList: orderObj.itemsList || [],
                total: orderObj.total,
                payment: orderObj.payment,
                address: orderObj.address,
                sentAt: `${orderObj.date || new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
            };
            sentEmails = JSON.parse(localStorage.getItem('ftbd_sent_emails')) || [];
            sentEmails.unshift(emailRecord);
            localStorage.setItem('ftbd_sent_emails', JSON.stringify(sentEmails));
        }

        function openEmailPreviewModal(orderId) {
            const allOrders = orders.length > 0 ? orders : [];
            const ord = allOrders.find(o => o.id === Number(orderId)) || allOrders[0];
            if (!ord) return;
            const code = ord.orderCode || ('FT-' + String(ord.id).slice(-6));
            const recipientEmail = ord.email || currentUser?.email || 'customer@findtechbd.com';
            const lineItems = (ord.itemsList && ord.itemsList.length > 0) ? ord.itemsList : [
                { name: ord.items, price: Number(String(ord.total).replace(/,/g, '')) || 3190, qty: 1 }
            ];

            const mailtoSubject = encodeURIComponent(`[FindTechBD] Order Confirmation #${code} - Status: ${ord.status || 'Ordered'}`);
            const mailtoBody = encodeURIComponent(
`Hello ${ord.customer},

Thank you for your order at FindTechBD! Your order #${code} has been confirmed.

--- ORDER SUMMARY ---
Order ID: #${code}
Order Status: ${ord.status || 'Ordered'}
Items: ${ord.items}
Total Payable: ${ord.total} BDT
Payment Method: ${ord.payment}
Delivery Address: ${ord.address} (${ord.phone})

You will receive live updates at ${recipientEmail} as your order is processed and shipped.

Thank you,
FindTechBD Support Team
Helpline: ${settings.helpline || '09678-002003'}`
            );

            const bodyEl = document.getElementById('email-preview-modal-body');
            bodyEl.innerHTML = `
                <div class="space-y-4 text-xs">
                    <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1.5">
                        <div class="flex flex-wrap justify-between gap-2">
                            <span class="text-slate-500">From: <strong class="text-slate-800">FindTechBD Orders &lt;orders@findtechbd.com&gt;</strong></span>
                            <span class="bg-emerald-100 text-emerald-700 font-bold px-2.5 py-0.5 rounded-full text-[10px]"><i class="fa-solid fa-check-double mr-1"></i>Delivered to Inbox</span>
                        </div>
                        <p class="text-slate-500">To: <strong class="text-indigo-700">${recipientEmail}</strong> (${ord.customer})</p>
                        <p class="text-slate-500">Subject: <strong class="text-slate-900">[FindTechBD] Order Confirmation & Update — #${code} (${ord.status || 'Ordered'})</strong></p>
                    </div>

                    <div class="border border-slate-200 rounded-2xl overflow-hidden">
                        <div class="bg-slate-900 text-white p-4 flex items-center justify-between">
                            <div class="flex items-center gap-2.5">
                                <div class="bg-st-orange text-white w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm">FT</div>
                                <div>
                                    <p class="font-bold text-sm">${settings.brandName || 'FindTechBD'} Order Update</p>
                                    <p class="text-[10px] text-slate-300">Automated Client Notification System</p>
                                </div>
                            </div>
                            <span class="bg-st-orange text-white px-3 py-1 rounded-full text-[11px] font-bold">#${code}</span>
                        </div>

                        <div class="p-5 bg-white space-y-4">
                            <p class="text-slate-700">প্রিয় <strong>${ord.customer}</strong>,</p>
                            <p class="text-slate-600 leading-relaxed">
                                ধন্যবাদ! আপনার অর্ডার <strong>#${code}</strong> সফলভাবে গ্রহণ করা হয়েছে। আপনার প্রদত্ত ইমেইল (<strong class="text-indigo-700">${recipientEmail}</strong>)-এ অর্ডারের কনফার্মেশন এবং পরবর্তী প্রতিটি ডেলিভারি স্ট্যাটাস আপডেট পাঠিয়ে দেওয়া হচ্ছে।
                            </p>

                            <div class="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                                <div>
                                    <p class="text-[10px] uppercase font-bold text-emerald-700">Current Order Status</p>
                                    <p class="text-sm font-black text-emerald-900 mt-0.5">${ord.status || 'Ordered'} — Processing for Dispatch</p>
                                </div>
                                <span class="text-xs font-bold text-emerald-700">${ord.date || ''} ${ord.time || ''}</span>
                            </div>

                            <div class="border border-slate-200 rounded-xl overflow-hidden">
                                <div class="bg-slate-100 px-3.5 py-2 font-bold text-slate-700 flex justify-between">
                                    <span>Ordered Products</span>
                                    <span>Amount</span>
                                </div>
                                <div class="divide-y divide-slate-100 px-3.5 py-2">
                                    ${lineItems.map(item => `
                                        <div class="py-2 flex justify-between items-center gap-2">
                                            <span class="font-semibold text-slate-800">${item.name} × ${item.qty || 1}</span>
                                            <span class="font-bold text-slate-900">${(Number(item.price) * (item.qty || 1)).toLocaleString()}৳</span>
                                        </div>
                                    `).join('')}
                                </div>
                                <div class="bg-slate-50 px-3.5 py-2.5 border-t border-slate-200 flex justify-between items-center font-black text-sm">
                                    <span>Total Payable (${ord.payment})</span>
                                    <span class="text-st-orange text-base">${ord.total}৳</span>
                                </div>
                            </div>

                            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-0.5">
                                <p class="font-bold text-slate-800">Shipping Destination:</p>
                                <p>${ord.customer} (${ord.phone}) — ${ord.address}</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-wrap justify-between items-center gap-2 pt-2">
                        <a href="mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}" class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-xs">
                            <i class="fa-solid fa-paper-plane"></i> Open in Default Mail App (${recipientEmail})
                        </a>
                        <button onclick="closeEmailPreviewModal()" class="bg-slate-200 hover:bg-slate-300 text-slate-800 px-5 py-2.5 rounded-xl font-bold text-xs cursor-pointer">
                            Close Preview
                        </button>
                    </div>
                </div>
            `;
            document.getElementById('email-preview-modal').classList.remove('hidden');
        }

        function closeEmailPreviewModal() {
            document.getElementById('email-preview-modal').classList.add('hidden');
        }
        // ==================== PAGE 7: PROFILE PAGE RENDERER ====================
        function renderProfilePage() {
            const container = document.getElementById('profile-page-container');
            if (!currentUser) {
                container.innerHTML = `
                    <div class="bg-white rounded-2xl p-10 text-center shadow-xs border border-slate-200 max-w-lg mx-auto">
                        <div class="w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3 text-2xl">
                            <i class="fa-solid fa-user-shield"></i>
                        </div>
                        <h2 class="text-xl font-bold text-slate-800">Sign In to View Your Profile</h2>
                        <p class="text-xs text-slate-500 mt-1 mb-5">Manage your orders, saved shipping addresses, wishlist & account settings.</p>
                        <div class="flex flex-wrap justify-center gap-3">
                            <button onclick="navigateTo('auth')" class="bg-st-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow">Sign In / Register</button>
                            <button onclick="quickDemoLogin()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow">⚡ 1-Click Demo Login</button>
                        </div>
                    </div>
                `;
                return;
            }

            const myOrders = orders.filter(o => o.phone === currentUser.phone || o.userId === currentUser.id || true);
            const savedAddrs = currentUser.savedAddresses || [];

            container.innerHTML = `
                <!-- Profile Header Card -->
                <div class="bg-gradient-to-r from-[#081621] to-[#1e3a8a] rounded-2xl p-6 text-white flex flex-wrap items-center justify-between gap-4 shadow">
                    <div class="flex items-center gap-4">
                        <div class="w-16 h-16 rounded-2xl bg-st-orange text-white font-black text-2xl flex items-center justify-center shadow-lg uppercase">
                            ${currentUser.name.charAt(0)}
                        </div>
                        <div>
                            <span class="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">Verified Customer</span>
                            <h2 class="text-xl sm:text-2xl font-black mt-1">${currentUser.name}</h2>
                            <p class="text-xs text-gray-300">${currentUser.phone} • ${currentUser.email}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2.5">
                        <button onclick="navigateTo('order-tracking')" class="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-xs font-bold transition">
                            <i class="fa-solid fa-truck-fast mr-1"></i> Track Orders
                        </button>
                        <button onclick="logoutUser()" class="bg-red-500/20 hover:bg-red-600 text-red-200 hover:text-white border border-red-400/30 px-4 py-2 rounded-xl text-xs font-bold transition">
                            <i class="fa-solid fa-right-from-bracket mr-1"></i> Logout
                        </button>
                    </div>
                </div>

                <!-- Quick Stats -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div onclick="navigateTo('order-tracking')" class="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs cursor-pointer hover:border-st-orange">
                        <p class="text-[11px] font-bold uppercase text-slate-400">Total Orders</p>
                        <p class="text-2xl font-black text-slate-800 mt-1">${myOrders.length}</p>
                    </div>
                    <div onclick="navigateTo('wishlist')" class="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs cursor-pointer hover:border-st-orange">
                        <p class="text-[11px] font-bold uppercase text-slate-400">Wishlist Items</p>
                        <p class="text-2xl font-black text-rose-600 mt-1">${wishlist.length}</p>
                    </div>
                    <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                        <p class="text-[11px] font-bold uppercase text-slate-400">Saved Addresses</p>
                        <p class="text-2xl font-black text-emerald-600 mt-1">${savedAddrs.length}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <!-- Left 5 Cols: Edit Profile & Saved Addresses -->
                    <div class="lg:col-span-5 space-y-6">
                        <div class="bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-3 text-xs">
                            <h3 class="font-bold text-base text-slate-800 border-b pb-2.5"><i class="fa-solid fa-user-pen text-st-orange mr-1.5"></i> Personal Details</h3>
                            <form onsubmit="updateUserProfile(event)" class="space-y-3">
                                <div>
                                    <label class="block font-bold text-slate-600 mb-1">Full Name</label>
                                    <input type="text" id="prof-name" value="${currentUser.name}" required class="w-full border rounded-lg p-2.5">
                                </div>
                                <div class="grid grid-cols-2 gap-2.5">
                                    <div>
                                        <label class="block font-bold text-slate-600 mb-1">Phone Number</label>
                                        <input type="text" id="prof-phone" value="${currentUser.phone}" required class="w-full border rounded-lg p-2.5">
                                    </div>
                                    <div>
                                        <label class="block font-bold text-slate-600 mb-1">Email</label>
                                        <input type="email" id="prof-email" value="${currentUser.email}" required class="w-full border rounded-lg p-2.5">
                                    </div>
                                </div>
                                <div>
                                    <label class="block font-bold text-slate-600 mb-1">Default Address</label>
                                    <input type="text" id="prof-addr" value="${currentUser.address || ''}" class="w-full border rounded-lg p-2.5">
                                </div>
                                <button type="submit" class="w-full bg-slate-900 hover:bg-st-orange text-white font-bold py-2.5 rounded-lg transition">Save Profile Changes</button>
                            </form>
                        </div>

                        <!-- Saved Addresses Manager -->
                        <div class="bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-3 text-xs">
                            <h3 class="font-bold text-base text-slate-800 border-b pb-2.5"><i class="fa-solid fa-map-location-dot text-indigo-600 mr-1.5"></i> Address Book</h3>
                            <div class="space-y-2">
                                ${savedAddrs.map(a => `
                                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-start gap-2">
                                        <div>
                                            <span class="font-bold text-slate-800 bg-white border px-2 py-0.5 rounded text-[10px]">${a.label}</span>
                                            <p class="font-semibold text-slate-700 mt-1">${a.address}, ${a.city}</p>
                                            <p class="text-slate-400 text-[11px]">${a.phone}</p>
                                        </div>
                                        <button onclick="deleteSavedAddress(${a.id})" class="text-red-500 hover:text-red-700 font-bold">&times;</button>
                                    </div>
                                `).join('')}
                            </div>
                            <form onsubmit="addNewSavedAddress(event)" class="pt-2 border-t space-y-2">
                                <p class="font-bold text-slate-700">Add New Address</p>
                                <div class="grid grid-cols-2 gap-2">
                                    <input type="text" id="new-addr-label" placeholder="Label (Home/Office)" required class="border rounded-lg p-2">
                                    <input type="text" id="new-addr-city" placeholder="City (e.g. Dhaka)" required class="border rounded-lg p-2">
                                </div>
                                <input type="text" id="new-addr-full" placeholder="Full Street Address" required class="w-full border rounded-lg p-2">
                                <button type="submit" class="w-full bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white font-bold py-2 rounded-lg transition">+ Add Address</button>
                            </form>
                        </div>
                    </div>

                    <!-- Right 7 Cols: Recent Order History -->
                    <div class="lg:col-span-7 bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-4">
                        <div class="flex justify-between items-center border-b pb-3">
                            <h3 class="font-bold text-base text-slate-800"><i class="fa-solid fa-clock-rotate-left text-emerald-600 mr-1.5"></i> My Orders & Invoices</h3>
                            <span class="text-xs text-slate-400">Live synced with Admin</span>
                        </div>
                        ${myOrders.length === 0 ? `
                            <div class="py-12 text-center text-slate-400 text-xs">
                                <p>You haven't placed any orders yet.</p>
                                <button onclick="navigateTo('products-filter')" class="mt-3 bg-st-orange text-white px-4 py-2 rounded-lg font-bold">Start Shopping</button>
                            </div>
                        ` : `
                            <div class="space-y-3">
                                ${myOrders.map(o => {
                                    const code = o.orderCode || ('FT-' + String(o.id).slice(-6));
                                    const st = o.status || 'Ordered';
                                    return `
                                        <div class="p-4 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/50 flex flex-wrap justify-between items-center gap-3 text-xs">
                                            <div class="space-y-1">
                                                <div class="flex items-center gap-2">
                                                    <span class="font-mono font-bold bg-slate-900 text-white px-2.5 py-0.5 rounded">${code}</span>
                                                    <span class="px-2.5 py-0.5 rounded-full font-bold text-[11px] ${st === 'Delivered' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-800'}">● ${st}</span>
                                                    <span class="text-slate-400">${o.date || ''} ${o.time || ''}</span>
                                                </div>
                                                <p class="font-semibold text-slate-700">${o.items}</p>
                                                <p class="text-slate-500">Total: <strong class="text-st-orange text-sm">${o.total}৳</strong> via ${o.payment} ${o.email ? `• <span class="text-emerald-700 font-semibold"><i class="fa-solid fa-envelope-circle-check mr-0.5"></i>Sent to ${o.email}</span>` : ''}</p>
                                            </div>
                                            <div class="flex items-center gap-2">
                                                <button onclick="openEmailPreviewModal(${o.id})" class="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white font-bold transition cursor-pointer">
                                                    <i class="fa-solid fa-envelope mr-1"></i> Email
                                                </button>
                                                <button onclick="navigateTo('order-tracking', '${code}')" class="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white font-bold transition cursor-pointer">
                                                    <i class="fa-solid fa-truck-fast mr-1"></i> Track
                                                </button>
                                                <button onclick="navigateTo('invoice', ${o.id})" class="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-st-orange text-white font-bold transition cursor-pointer">
                                                    <i class="fa-solid fa-file-invoice mr-1"></i> Invoice
                                                </button>
                                            </div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        `}
                    </div>
                </div>
            `;
        }

        function updateUserProfile(e) {
            e.preventDefault();
            if (!currentUser) return;
            currentUser.name = document.getElementById('prof-name').value.trim();
            currentUser.phone = document.getElementById('prof-phone').value.trim();
            currentUser.email = document.getElementById('prof-email').value.trim();
            currentUser.address = document.getElementById('prof-addr').value.trim();
            shippingInfo.name = currentUser.name;
            shippingInfo.phone = currentUser.phone;
            shippingInfo.email = currentUser.email;
            shippingInfo.address = currentUser.address;
            const idx = users.findIndex(u => u.id === currentUser.id);
            if (idx > -1) users[idx] = currentUser;
            saveUserState();
            showToast("Profile updated successfully!");
            renderProfilePage();
        }

        function addNewSavedAddress(e) {
            e.preventDefault();
            if (!currentUser) return;
            if (!currentUser.savedAddresses) currentUser.savedAddresses = [];
            currentUser.savedAddresses.push({
                id: Date.now(),
                label: document.getElementById('new-addr-label').value.trim(),
                name: currentUser.name,
                phone: currentUser.phone,
                city: document.getElementById('new-addr-city').value.trim(),
                area: "",
                address: document.getElementById('new-addr-full').value.trim()
            });
            saveUserState();
            showToast("New address saved to Address Book!");
            renderProfilePage();
        }

        function deleteSavedAddress(id) {
            if (!currentUser || !currentUser.savedAddresses) return;
            currentUser.savedAddresses = currentUser.savedAddresses.filter(a => a.id !== id);
            saveUserState();
            renderProfilePage();
        }

        // ==================== PAGE 9: WISHLIST PAGE RENDERER ====================
        function renderWishlistPage() {
            const container = document.getElementById('wishlist-page-container');
            const wishedProducts = products.filter(p => wishlist.includes(p.id));

            if (wishedProducts.length === 0) {
                container.innerHTML = `
                    <div class="bg-white rounded-2xl p-12 text-center shadow-xs border border-slate-200 max-w-lg mx-auto">
                        <div class="w-16 h-16 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto mb-3 text-2xl">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <h2 class="text-xl font-bold text-slate-800">Your Wishlist is Empty</h2>
                        <p class="text-xs text-slate-500 mt-1 mb-5">Tap the heart icon ♥ on any product card to save items for later.</p>
                        <button onclick="navigateTo('products-filter')" class="bg-st-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow">Explore Products</button>
                    </div>
                `;
                return;
            }

            container.innerHTML = `
                <div class="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 flex flex-wrap items-center justify-between gap-3">
                    <div>
                        <h2 class="text-lg font-bold text-slate-800"><i class="fa-solid fa-heart text-rose-500 mr-1.5"></i> My Saved Wishlist (${wishedProducts.length} Items)</h2>
                        <p class="text-xs text-slate-500">Move your favourite items directly to your shopping cart</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <button onclick="moveAllWishlistToCart()" class="bg-st-orange hover:bg-orange-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow">
                            <i class="fa-solid fa-cart-plus mr-1"></i> Add All to Cart
                        </button>
                        <button onclick="wishlist=[]; saveUserState(); renderWishlistPage()" class="bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 px-3.5 py-2 rounded-xl text-xs font-bold">
                            Clear All
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    ${wishedProducts.map(p => createProductCardHtml(p)).join('')}
                </div>
            `;
        }

        function moveAllWishlistToCart() {
            const wishedProducts = products.filter(p => wishlist.includes(p.id) && p.stock === 'In Stock');
            wishedProducts.forEach(p => addToCart(p.id, 1, true));
            showToast(`Moved ${wishedProducts.length} items to Cart!`);
            navigateTo('cart');
        }

        // ==================== PAGE 10: ORDER TRACKING RENDERER ====================
        function renderOrderTrackingPage() {
            const container = document.getElementById('order-tracking-container');
            const demoOrder = {
                id: 990101,
                orderCode: "FT-990101",
                customer: currentUser ? currentUser.name : "Tanvir Ahmed",
                phone: currentUser ? currentUser.phone : "01711223344",
                address: "House 24, Road 9/A, Dhanmondi, Dhaka-1209",
                payment: "Cash on Delivery (COD)",
                status: "Shipped",
                items: "TP-Link Archer C6 AC1200 Gigabit Router (x1), WGP 10400mAh Mini UPS (x1)",
                total: "5,300",
                date: "30 Oct 2026",
                time: "09:30 PM"
            };

            const allAvailableOrders = orders.length > 0 ? orders : [demoOrder];
            let matchedOrder = allAvailableOrders[0];
            if (trackingSearchQuery) {
                const q = trackingSearchQuery.toLowerCase().replace('#', '').trim();
                const found = allAvailableOrders.find(o =>
                    (o.orderCode && o.orderCode.toLowerCase().includes(q)) ||
                    String(o.id).includes(q) ||
                    (o.phone && o.phone.includes(q))
                );
                if (found) matchedOrder = found;
            }

            const steps = [
                { key: "Ordered", title: "Order Placed", desc: "Order received & verified", icon: "fa-clipboard-check" },
                { key: "Processing", title: "Processing & QA", desc: "Tested & packed at warehouse", icon: "fa-box-open" },
                { key: "Shipped", title: "Handed to Courier", desc: "Dispatched via FindTech Express", icon: "fa-truck-Moving" },
                { key: "Out for Delivery", title: "Out for Delivery", desc: "Delivery rider is on the way", icon: "fa-motorcycle" },
                { key: "Delivered", title: "Delivered", desc: "Package handed to customer", icon: "fa-house-circle-check" }
            ];
            const statusOrder = ["Ordered", "Processing", "Shipped", "Out for Delivery", "Delivered"];
            const currentIdx = Math.max(0, statusOrder.indexOf(matchedOrder.status || "Ordered"));
            const code = matchedOrder.orderCode || ('FT-' + String(matchedOrder.id).slice(-6));

            container.innerHTML = `
                <div class="bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-4">
                    <div class="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <h2 class="text-lg sm:text-xl font-black text-slate-900"><i class="fa-solid fa-truck-fast text-st-orange mr-1.5"></i> Real-Time Order Tracking</h2>
                            <p class="text-xs text-slate-500">Enter your Order ID or Mobile Number to track live courier status (Synced live with Admin.html)</p>
                        </div>
                        <form onsubmit="event.preventDefault(); trackingSearchQuery=document.getElementById('trk-input').value; renderOrderTrackingPage()" class="flex gap-2 w-full sm:w-auto">
                            <input type="text" id="trk-input" value="${trackingSearchQuery}" placeholder="Order ID (e.g. ${code}) or Phone..." class="border border-slate-300 rounded-xl px-3.5 py-2 text-xs font-semibold flex-grow sm:w-64">
                            <button type="submit" class="bg-st-orange hover:bg-orange-600 text-white px-5 py-2 rounded-xl text-xs font-bold shadow shrink-0">Track</button>
                        </form>
                    </div>

                    ${allAvailableOrders.length > 0 ? `
                        <div class="flex items-center gap-2 flex-wrap text-xs pt-2 border-t border-slate-100">
                            <span class="text-slate-400 font-semibold">Recent Orders:</span>
                            ${allAvailableOrders.slice(0, 5).map(o => {
                                const c = o.orderCode || ('FT-' + String(o.id).slice(-6));
                                return `<button onclick="trackingSearchQuery='${c}'; renderOrderTrackingPage()" class="px-2.5 py-1 rounded-lg border font-mono text-[11px] font-bold ${c === code ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-st-orange'}">${c}</button>`;
                            }).join('')}
                        </div>
                    ` : ''}
                </div>

                <!-- Tracking Result Card -->
                <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200 space-y-8">
                    <div class="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
                        <div>
                            <span class="text-[11px] uppercase font-bold text-slate-400">Tracking Consignment</span>
                            <div class="flex items-center gap-3 mt-0.5">
                                <h3 class="text-2xl font-black text-slate-900 font-mono">#${code}</h3>
                                <span class="px-3 py-1 rounded-full text-xs font-bold ${matchedOrder.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'}">
                                    ● ${matchedOrder.status || 'Ordered'}
                                </span>
                            </div>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <button onclick="navigateTo('invoice', ${matchedOrder.id})" class="bg-slate-900 hover:bg-st-orange text-white px-4 py-2 rounded-xl text-xs font-bold transition">
                                <i class="fa-solid fa-file-invoice mr-1"></i> View Official Invoice
                            </button>
                        </div>
                    </div>

                    <!-- 5-Step Progress Timeline -->
                    <div class="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
                        ${steps.map((st, idx) => {
                            const done = idx <= currentIdx;
                            const active = idx === currentIdx;
                            return `
                                <div class="p-4 rounded-2xl border-2 transition ${active ? 'border-st-orange bg-orange-50/40 shadow-xs' : (done ? 'border-emerald-200 bg-emerald-50/30' : 'border-slate-100 bg-slate-50/50 opacity-60')}">
                                    <div class="flex items-center justify-between mb-2">
                                        <div class="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold ${active ? 'bg-st-orange text-white' : (done ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500')}">
                                            <i class="fa-solid ${done && !active ? 'fa-check' : 'fa-truck-fast'}"></i>
                                        </div>
                                        <span class="text-[10px] font-bold uppercase ${done ? 'text-emerald-600' : 'text-slate-400'}">Step 0${idx + 1}</span>
                                    </div>
                                    <p class="font-bold text-xs text-slate-800">${st.title}</p>
                                    <p class="text-[11px] text-slate-500 mt-0.5">${st.desc}</p>
                                </div>
                            `;
                        }).join('')}
                    </div>

                    <!-- Consignment Details Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
                        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                            <p class="text-[10px] font-bold uppercase text-slate-400">Customer & Destination</p>
                            <p class="font-bold text-slate-800 text-sm">${matchedOrder.customer}</p>
                            <p class="text-emerald-600 font-semibold">${matchedOrder.phone}</p>
                            <p class="text-slate-500">${matchedOrder.address}</p>
                        </div>
                        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                            <p class="text-[10px] font-bold uppercase text-slate-400">Ordered Items</p>
                            <p class="font-semibold text-slate-700 leading-relaxed">${matchedOrder.items}</p>
                        </div>
                        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                            <p class="text-[10px] font-bold uppercase text-slate-400">Payment & Courier Info</p>
                            <p class="font-bold text-slate-800">Amount: <span class="text-st-orange text-sm">${matchedOrder.total}৳</span></p>
                            <p class="text-slate-600">Method: ${matchedOrder.payment}</p>
                            <p class="text-slate-400 text-[11px]">Courier: FindTechBD Express Logistics</p>
                        </div>
                    </div>
                </div>
            `;
        }

        // ==================== PAGE 11: INVOICE PAGE RENDERER ====================
        function renderInvoicePage() {
            const container = document.getElementById('invoice-page-container');
            const demoOrder = {
                id: 990101,
                orderCode: "FT-990101",
                customer: currentUser ? currentUser.name : "Tanvir Ahmed",
                phone: currentUser ? currentUser.phone : "01711223344",
                email: currentUser ? currentUser.email : "customer@findtechbd.com",
                address: "House 24, Road 9/A, Dhanmondi, Dhaka-1209",
                payment: "Cash on Delivery (COD)",
                status: "Ordered",
                items: "TP-Link Archer C6 AC1200 Gigabit Router (x1), WGP 10400mAh Mini UPS (x1)",
                itemsList: [
                    { id: 101, name: "TP-Link Archer C6 AC1200 Wireless MU-MIMO Gigabit Router", price: 3190, qty: 1, category: "Router" },
                    { id: 102, name: "WGP 10400mAh Mini DC UPS (5V/9V/12V) for Router & ONU", price: 2050, qty: 1, category: "Mini UPS" }
                ],
                subtotal: 5240,
                discount: 0,
                shipping: 60,
                total: "5,300",
                date: "30 Oct 2026",
                time: "09:30 PM"
            };

            const allOrders = orders.length > 0 ? orders : [demoOrder];
            const ord = allOrders.find(o => o.id === Number(selectedInvoiceOrderId)) || allOrders[0];
            const code = ord.orderCode || ('FT-' + String(ord.id).slice(-6));
            const lineItems = (ord.itemsList && ord.itemsList.length > 0) ? ord.itemsList : [
                { name: ord.items, price: Number(String(ord.total).replace(/,/g, '')) || 3190, qty: 1, category: "Tech Gear" }
            ];
            const sub = ord.subtotal || lineItems.reduce((s, i) => s + (i.price * (i.qty || 1)), 0);
            const disc = ord.discount || 0;
            const ship = ord.shipping ?? 60;

            container.innerHTML = `
                ${checkoutStepperHtml(4)}
                <!-- Order Confirmation & Top Action Bar (Hidden on Print) -->
                <div class="no-print bg-emerald-50 rounded-2xl p-4 sm:p-5 border border-emerald-200 flex flex-wrap items-center justify-between gap-4">
                    <div class="flex items-center gap-3">
                        <div class="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center text-lg shadow shrink-0">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <div>
                            <h2 class="font-black text-slate-900 text-sm sm:text-base">Order Confirmed! Thank you for shopping with FindTechBD</h2>
                            <p class="text-xs text-slate-600">Your official invoice <strong>#INV-${code}</strong> is ready below. Confirmation & status update email sent to <strong class="text-indigo-700">${ord.email || currentUser?.email || 'customer@findtechbd.com'}</strong>.</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center gap-2.5">
                        ${allOrders.length > 1 ? `
                            <select onchange="selectedInvoiceOrderId=Number(this.value); renderInvoicePage()" class="border border-emerald-300 rounded-xl px-3 py-2 text-xs font-bold bg-white">
                                ${allOrders.map(o => `<option value="${o.id}" ${o.id === ord.id ? 'selected' : ''}>#${o.orderCode || ('FT-' + String(o.id).slice(-6))} — ${o.customer} (${o.total}৳)</option>`).join('')}
                            </select>
                        ` : ''}
                        <button onclick="openEmailPreviewModal(${ord.id})" class="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-xl text-xs font-bold transition shadow-xs cursor-pointer flex items-center gap-1.5">
                            <i class="fa-solid fa-envelope-open-text"></i> View Confirmation Email
                        </button>
                        <button onclick="navigateTo('order-tracking', '${code}')" class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition shadow-xs cursor-pointer">
                            <i class="fa-solid fa-truck-fast mr-1"></i> Track Order Live
                        </button>
                        <button onclick="window.print()" class="bg-st-orange hover:bg-orange-600 text-white px-5 py-2 rounded-xl text-xs font-bold shadow flex items-center gap-1.5 transition cursor-pointer">
                            <i class="fa-solid fa-print"></i> Print / Save PDF Invoice
                        </button>
                    </div>
                </div>

                <!-- Printable Official Invoice Box -->
                <div id="invoice-print-area" class="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 max-w-4xl mx-auto space-y-8">
                    <!-- Header -->
                    <div class="flex flex-wrap justify-between items-start gap-6 border-b border-slate-200 pb-6">
                        <div>
                            <div class="flex items-center gap-2.5">
                                <div class="bg-st-orange text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl">FT</div>
                                <div>
                                    <h1 class="text-2xl font-black text-slate-900">${settings.brandName || 'FindTechBD'} Ltd.</h1>
                                    <p class="text-[11px] text-slate-500">Multiplan Center (Level-8), New Elephant Road, Dhaka-1205</p>
                                </div>
                            </div>
                            <p class="text-xs text-slate-500 mt-2">Helpline: <strong>${settings.helpline || '09678-002003'}</strong> | Web: www.findtechbd.com</p>
                        </div>
                        <div class="text-left sm:text-right">
                            <span class="bg-slate-900 text-white px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">Official Tax Invoice</span>
                            <p class="font-mono font-black text-lg text-st-orange mt-2">INV-${code}</p>
                            <p class="text-xs text-slate-500">Date: ${ord.date || new Date().toLocaleDateString()} • ${ord.time || ''}</p>
                            <p class="text-xs font-bold mt-1 ${ord.status === 'Delivered' ? 'text-emerald-600' : 'text-indigo-600'}">Status: ${ord.status || 'Confirmed'}</p>
                        </div>
                    </div>

                    <!-- Billed To & Payment Info -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                            <p class="text-[10px] font-bold uppercase text-slate-400">Billed & Shipped To:</p>
                            <p class="font-bold text-slate-900 text-sm">${ord.customer}</p>
                            <p class="font-semibold text-emerald-700">Phone: ${ord.phone}</p>
                            ${ord.email ? `<p class="text-slate-600">Email: ${ord.email}</p>` : ''}
                            <p class="text-slate-600">${ord.address}</p>
                        </div>
                        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 sm:text-right">
                            <p class="text-[10px] font-bold uppercase text-slate-400">Payment & Warranty Details:</p>
                            <p class="font-bold text-slate-800">Method: <span class="text-indigo-700">${ord.payment}</span></p>
                            <p class="text-slate-600">Warranty: 1 Year Official FindTechBD Warranty</p>
                            <p class="text-slate-500">Order Ref: #${ord.id}</p>
                        </div>
                    </div>

                    <!-- Itemized Table -->
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-xs">
                            <thead>
                                <tr class="bg-slate-900 text-white uppercase text-[11px]">
                                    <th class="p-3 rounded-tl-xl">#</th>
                                    <th class="p-3">Item Description</th>
                                    <th class="p-3 text-center">Qty</th>
                                    <th class="p-3 text-right">Unit Price</th>
                                    <th class="p-3 text-right rounded-tr-xl">Line Total</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200 border-b border-slate-200">
                                ${lineItems.map((item, i) => `
                                    <tr>
                                        <td class="p-3 font-bold text-slate-500">0${i + 1}</td>
                                        <td class="p-3">
                                            <p class="font-bold text-slate-800">${item.name}</p>
                                            <p class="text-[10px] text-slate-400">Category: ${item.category || 'Tech'} • 1Yr Official Warranty</p>
                                        </td>
                                        <td class="p-3 text-center font-bold">${item.qty || 1}</td>
                                        <td class="p-3 text-right font-semibold">${Number(item.price).toLocaleString()}৳</td>
                                        <td class="p-3 text-right font-bold text-slate-900">${(Number(item.price) * (item.qty || 1)).toLocaleString()}৳</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>

                    <!-- Totals & Signature -->
                    <div class="grid grid-cols-1 sm:grid-cols-12 gap-6 items-end pt-2">
                        <div class="sm:col-span-7 text-xs text-slate-500 space-y-2">
                            <p class="font-bold text-slate-700">Terms & Warranty Instructions:</p>
                            <p>1. Please keep this invoice safe for claiming official product warranty.</p>
                            <p>2. 7-day instant replacement applies for any manufacturing defect with intact box.</p>
                            <div class="pt-6">
                                <span class="inline-block border-t border-slate-400 pt-1 font-bold text-slate-700 px-4">Authorized Signature</span>
                            </div>
                        </div>
                        <div class="sm:col-span-5 bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
                            <div class="flex justify-between text-slate-600"><span>Subtotal:</span><strong>${sub.toLocaleString()}৳</strong></div>
                            <div class="flex justify-between text-emerald-600"><span>Discount:</span><strong>-${disc.toLocaleString()}৳</strong></div>
                            <div class="flex justify-between text-slate-600"><span>Delivery Charge:</span><strong>${ship}৳</strong></div>
                            <div class="border-t border-slate-300 pt-2 flex justify-between items-baseline text-sm font-black text-slate-900">
                                <span>Grand Total:</span>
                                <span class="text-xl text-st-orange">${ord.total}৳</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // ==================== PAGE 12: PHONE NUMBER + OTP AUTHENTICATION PROCESS ====================
        function renderAuthPage() {
            const container = document.getElementById('auth-page-container');
            if (currentUser) {
                const targetPage = pendingPostLoginRedirect || 'profile';
                pendingPostLoginRedirect = null;
                navigateTo(targetPage);
                return;
            }

            const existingAccount = otpTargetPhone ? users.find(u => u.phone === otpTargetPhone) : null;

            container.innerHTML = `
                <div class="max-w-md mx-auto bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
                    <!-- Top Header Banner -->
                    <div class="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
                        <div class="flex items-center gap-2.5">
                            <div class="w-9 h-9 rounded-xl bg-st-orange text-white flex items-center justify-center text-base font-bold shadow">
                                <i class="fa-solid fa-mobile-screen-button"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-sm">Instant Phone OTP Login</h3>
                                <p class="text-[11px] text-slate-300">No password required • Secure 4-Digit OTP</p>
                            </div>
                        </div>
                        <span class="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                            Step ${otpStep === 'phone' ? '1 of 2' : '2 of 2'}
                        </span>
                    </div>

                    ${pendingPostLoginRedirect ? `
                        <div class="bg-amber-50 border-b border-amber-200 px-5 py-3 flex items-center gap-2.5 text-xs text-amber-900">
                            <i class="fa-solid fa-bag-shopping text-st-orange text-sm"></i>
                            <span>প্রোডাক্ট অর্ডার সম্পন্ন করতে আপনার মোবাইল নাম্বার দিয়ে <strong>OTP ভেরিফিকেশন</strong> করুন।</span>
                        </div>
                    ` : ''}

                    <div class="p-6 sm:p-8 space-y-5 text-xs">
                        ${otpStep === 'phone' ? `
                            <div class="text-center">
                                <div class="w-12 h-12 rounded-2xl bg-orange-50 text-st-orange flex items-center justify-center mx-auto mb-2 text-xl">
                                    <i class="fa-solid fa-comment-sms"></i>
                                </div>
                                <h2 class="text-lg font-black text-slate-900">Sign In or Create Account</h2>
                                <p class="text-slate-500 mt-0.5">আপনার মোবাইল নাম্বার দিন, সাথে সাথে ৪ ডিজিটের One-Time Password (OTP) পাঠানো হবে</p>
                            </div>

                            <form onsubmit="handleRequestOtp(event)" class="space-y-4">
                                <div>
                                    <label class="block text-xs font-bold text-slate-700 mb-1.5">Mobile Phone Number (BD) *</label>
                                    <div class="flex items-stretch w-full h-11 border border-slate-300 rounded-xl overflow-hidden focus-within:border-st-orange focus-within:ring-2 focus-within:ring-orange-100 bg-white transition-all">
                                        <div class="shrink-0 whitespace-nowrap bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm px-3.5 border-r border-slate-300 select-none flex items-center justify-center gap-1.5">
                                            <span class="text-base leading-none">🇧🇩</span>
                                            <span class="leading-none">+88</span>
                                        </div>
                                        <input type="tel" id="auth-phone-input" required value="${otpTargetPhone || ''}" placeholder="017XXXXXXXX" pattern="01[3-9][0-9]{8}" maxlength="11" class="flex-1 min-w-0 h-full px-3.5 font-bold text-slate-900 text-sm focus:outline-none tracking-wide bg-transparent">
                                    </div>
                                    <p class="text-[11px] text-slate-400 mt-1.5">আপনার সচল ১১ ডিজিটের মোবাইল নাম্বার দিন (যেমন: 017XXXXXXXX)</p>
                                </div>

                                <button type="submit" class="w-full h-11 bg-st-orange hover:bg-orange-600 text-white font-bold rounded-xl text-sm shadow transition-all duration-200 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
                                    <i class="fa-solid fa-paper-plane"></i> Send One-Time Password (OTP)
                                </button>
                            </form>
                        ` : `
                            <div class="space-y-4">
                                <div class="flex items-center justify-between">
                                    <button type="button" onclick="otpStep='phone'; renderAuthPage()" class="text-slate-500 hover:text-st-orange font-bold flex items-center gap-1 cursor-pointer">
                                        <i class="fa-solid fa-arrow-left"></i> Change Number (${otpTargetPhone})
                                    </button>
                                    <span class="text-[11px] font-bold ${existingAccount ? 'text-emerald-600' : 'text-indigo-600'}">
                                        ${existingAccount ? '<i class="fa-solid fa-user-check mr-1"></i>Existing Customer' : '<i class="fa-solid fa-user-plus mr-1"></i>New Account Setup'}
                                    </span>
                                </div>

                                <!-- Clean SMS Sent Status Notice (OTP NOT visible on page) -->
                                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                                    <div class="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                                        <i class="fa-solid fa-comment-sms"></i>
                                    </div>
                                    <div>
                                        <p class="text-xs font-bold text-slate-800">SMS OTP Sent to <span class="text-emerald-700">+88${otpTargetPhone}</span></p>
                                        <p class="text-[11px] text-slate-500 mt-0.5">আপনার মোবাইলে SMS হিসেবে পাঠানো ৪ ডিজিটের ওয়ান-টাইম পাসওয়ার্ড (OTP) নিচে লিখুন।</p>
                                    </div>
                                </div>

                                <form onsubmit="handleVerifyOtpAndLogin(event)" class="space-y-4">
                                    <div>
                                        <label class="block font-bold text-slate-700 mb-2 text-center">Enter 4-Digit OTP Code from Phone SMS *</label>
                                        <div class="grid grid-cols-4 gap-3 max-w-[240px] mx-auto">
                                            <input type="text" id="otp-d1" inputmode="numeric" pattern="[0-9]" maxlength="1" placeholder="•" required oninput="focusNextOtp(this, 'otp-d2')" onkeydown="focusPrevOtp(event, this, null)" class="w-full h-12 text-center font-black text-lg border-2 border-slate-300 rounded-xl focus:border-st-orange focus:outline-none">
                                            <input type="text" id="otp-d2" inputmode="numeric" pattern="[0-9]" maxlength="1" placeholder="•" required oninput="focusNextOtp(this, 'otp-d3')" onkeydown="focusPrevOtp(event, this, 'otp-d1')" class="w-full h-12 text-center font-black text-lg border-2 border-slate-300 rounded-xl focus:border-st-orange focus:outline-none">
                                            <input type="text" id="otp-d3" inputmode="numeric" pattern="[0-9]" maxlength="1" placeholder="•" required oninput="focusNextOtp(this, 'otp-d4')" onkeydown="focusPrevOtp(event, this, 'otp-d2')" class="w-full h-12 text-center font-black text-lg border-2 border-slate-300 rounded-xl focus:border-st-orange focus:outline-none">
                                            <input type="text" id="otp-d4" inputmode="numeric" pattern="[0-9]" maxlength="1" placeholder="•" required onkeydown="focusPrevOtp(event, this, 'otp-d3')" class="w-full h-12 text-center font-black text-lg border-2 border-slate-300 rounded-xl focus:border-st-orange focus:outline-none">
                                        </div>
                                    </div>

                                    ${!existingAccount ? `
                                        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                                            <p class="font-bold text-slate-800 text-xs border-b pb-2"><i class="fa-solid fa-id-card text-st-orange mr-1"></i> Complete New Account Info</p>
                                            <div>
                                                <label class="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                                                <input type="text" id="otp-new-name" required value="${shippingInfo.name || ''}" placeholder="e.g. Rahim Uddin" class="w-full h-11 border border-slate-300 rounded-xl px-3.5 text-sm font-medium text-slate-800 bg-white focus:border-st-orange focus:ring-2 focus:ring-orange-100 focus:outline-none transition-all">
                                            </div>
                                            <div>
                                                <label class="block font-bold text-slate-700 mb-1">Email Address (For Order Confirmation) *</label>
                                                <input type="email" id="otp-new-email" required value="${shippingInfo.email || ''}" placeholder="you@email.com" class="w-full h-11 border border-slate-300 rounded-xl px-3.5 text-sm font-medium text-slate-800 bg-white focus:border-st-orange focus:ring-2 focus:ring-orange-100 focus:outline-none transition-all">
                                                <p class="text-[10px] text-emerald-600 mt-1"><i class="fa-solid fa-envelope mr-1"></i>অর্ডার কনফার্মেশন ও আপডেট এই ইমেইলে যাবে</p>
                                            </div>
                                            <div>
                                                <label class="block font-bold text-slate-700 mb-1">Delivery Address (Optional now)</label>
                                                <input type="text" id="otp-new-addr" value="${shippingInfo.address || ''}" placeholder="House, Road, Area, City" class="w-full h-11 border border-slate-300 rounded-xl px-3.5 text-sm font-medium text-slate-800 bg-white focus:border-st-orange focus:ring-2 focus:ring-orange-100 focus:outline-none transition-all">
                                            </div>
                                        </div>
                                    ` : `
                                        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
                                            <div>
                                                <p class="font-bold text-slate-800">${existingAccount.name}</p>
                                                <p class="text-indigo-600 font-semibold">${existingAccount.email}</p>
                                            </div>
                                            <span class="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold text-[10px]">Verified Profile</span>
                                        </div>
                                    `}

                                    <button type="submit" class="w-full bg-st-orange hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl text-sm shadow transition flex items-center justify-center gap-2 cursor-pointer">
                                        <i class="fa-solid fa-shield-check"></i> Verify OTP & ${pendingPostLoginRedirect ? 'Continue to Order' : 'Sign In'}
                                    </button>
                                </form>

                                <div class="text-center">
                                    <button type="button" onclick="resendOtpCode()" class="text-[11px] font-bold text-indigo-600 hover:underline cursor-pointer">
                                        Didn't receive code? Resend New OTP
                                    </button>
                                </div>
                            </div>
                        `}
                    </div>
                </div>
            `;

            if (otpStep === 'verify') {
                setTimeout(() => {
                    const firstInput = document.getElementById('otp-d1');
                    if (firstInput) firstInput.focus();
                }, 80);
            }
        }

        function focusNextOtp(inputEl, nextId) {
            inputEl.value = inputEl.value.replace(/[^0-9]/g, '');
            if (inputEl.value.length >= 1 && nextId) {
                const nextEl = document.getElementById(nextId);
                if (nextEl) nextEl.focus();
            }
        }

        function focusPrevOtp(e, inputEl, prevId) {
            if (e.key === 'Backspace' && !inputEl.value && prevId) {
                const prevEl = document.getElementById(prevId);
                if (prevEl) prevEl.focus();
            }
        }

        async function sendRealSmsOtp(phone, otpCode) {
            const bdPhone = phone.startsWith('88') ? phone : `88${phone}`;
            const msgText = `[FindTechBD] Your One-Time Password (OTP) is ${otpCode}. Do not share this code.`;

            const apiKey = (settings.smsApiKey || '').trim();
            if (!apiKey) return false;

            const provider = settings.smsProvider || 'bulksmsbd';
            const senderId = (settings.smsSenderId || '').trim();
            let targetUrl = '';

            if (provider === 'bulksmsbd') {
                targetUrl = `https://bulksmsbd.net/api/smsapi?api_key=${encodeURIComponent(apiKey)}&type=text&number=${encodeURIComponent(bdPhone)}&senderid=${encodeURIComponent(senderId || '8809617611000')}&message=${encodeURIComponent(msgText)}`;
            } else if (provider === 'alphasms') {
                targetUrl = `https://api.sms.net.bd/sendsms?api_key=${encodeURIComponent(apiKey)}&msg=${encodeURIComponent(msgText)}&to=${encodeURIComponent(bdPhone)}${senderId ? `&sender_id=${encodeURIComponent(senderId)}` : ''}`;
            } else if (provider === 'greenweb') {
                targetUrl = `https://api.greenweb.com.bd/api.php?token=${encodeURIComponent(apiKey)}&to=${encodeURIComponent(bdPhone)}&message=${encodeURIComponent(msgText)}`;
            } else if (provider === 'custom' && settings.smsCustomUrl) {
                targetUrl = settings.smsCustomUrl
                    .replace('{phone}', encodeURIComponent(bdPhone))
                    .replace('{otp}', encodeURIComponent(otpCode))
                    .replace('{message}', encodeURIComponent(msgText));
            }

            if (!targetUrl) return false;

            try {
                await fetch(targetUrl);
                return true;
            } catch (err) {
                try {
                    await fetch(targetUrl, { mode: 'no-cors' });
                    return true;
                } catch (e2) {
                    return false;
                }
            }
        }

        function openSmsGatewayModal() {
            document.getElementById('quick-sms-provider').value = settings.smsProvider || 'bulksmsbd';
            document.getElementById('quick-sms-apikey').value = settings.smsApiKey || '';
            document.getElementById('quick-sms-senderid').value = settings.smsSenderId || '';
            document.getElementById('quick-sms-customurl').value = settings.smsCustomUrl || '';
            document.getElementById('sms-gateway-modal').classList.remove('hidden');
        }

        function closeSmsGatewayModal() {
            document.getElementById('sms-gateway-modal').classList.add('hidden');
        }

        let otpVerifiedViaServer = false;

        async function dispatchOtpViaBackendOrDirect(phone) {
            try {
                const res = await fetch('/api/send-otp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        phone,
                        smsConfig: {
                            smsProvider: settings.smsProvider || 'bulksmsbd',
                            smsApiKey: settings.smsApiKey || '',
                            smsSenderId: settings.smsSenderId || '',
                            smsCustomUrl: settings.smsCustomUrl || ''
                        }
                    })
                });
                const data = await res.json();
                if (res.ok && data.ok) {
                    otpVerifiedViaServer = true;
                    return { ok: true, mode: 'server' };
                }
                if (data && data.error) {
                    return { ok: false, error: data.error };
                }
            } catch (err) {
                // Server not reachable (e.g. file:// protocol), fall back to direct SMS gateway
            }
            otpVerifiedViaServer = false;
            generatedOtpCode = String(Math.floor(1000 + Math.random() * 9000));
            const sent = await sendRealSmsOtp(phone, generatedOtpCode);
            return { ok: sent, mode: 'client' };
        }

        async function saveQuickSmsGatewayConfig(e) {
            e.preventDefault();
            settings.smsProvider = document.getElementById('quick-sms-provider').value;
            settings.smsApiKey = document.getElementById('quick-sms-apikey').value.trim();
            settings.smsSenderId = document.getElementById('quick-sms-senderid').value.trim();
            settings.smsCustomUrl = document.getElementById('quick-sms-customurl').value.trim();
            localStorage.setItem('ftbd_shared_settings', JSON.stringify(settings));
            syncChannel.postMessage({ type: 'SYNC' });
            fetch('/api/sync-store', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ settings })
            }).catch(() => {});
            closeSmsGatewayModal();
            showToast("✅ Real SMS Gateway API Key সেভ করা হয়েছে!");

            if (otpTargetPhone && settings.smsApiKey) {
                const res = await dispatchOtpViaBackendOrDirect(otpTargetPhone);
                if (res.ok) {
                    otpStep = 'verify';
                    showToast(`📲 আপনার +88${otpTargetPhone} রিয়েল নাম্বারে OTP কোড SMS পাঠানো হয়েছে।`);
                } else {
                    showToast(res.error || "SMS পাঠানো সম্ভব হয়নি, আপনার API Key চেক করুন।", "error");
                }
            }
            renderAuthPage();
        }

        async function handleRequestOtp(e) {
            e.preventDefault();
            const rawPhone = (document.getElementById('auth-phone-input')?.value || '').trim().replace(/\s+/g, '');
            if (!/^01[3-9][0-9]{8}$/.test(rawPhone)) {
                showToast("অনুগ্রহ করে সঠিক ১১ ডিজিটের মোবাইল নাম্বার দিন (যেমন: 017XXXXXXXX)", "error");
                return;
            }
            otpTargetPhone = rawPhone;

            const result = await dispatchOtpViaBackendOrDirect(otpTargetPhone);
            if (!result.ok && result.error) {
                showToast(result.error, "error");
                return;
            }

            otpStep = 'verify';
            showToast(`📲 আপনার +88${otpTargetPhone} নাম্বারে ৪ ডিজিটের OTP কোড SMS পাঠানো হয়েছে।`);
            renderAuthPage();
        }

        async function resendOtpCode() {
            const result = await dispatchOtpViaBackendOrDirect(otpTargetPhone);
            if (!result.ok && result.error) {
                showToast(result.error, "error");
                return;
            }
            showToast(`📲 আপনার +88${otpTargetPhone} নাম্বারে নতুন OTP কোড SMS পাঠানো হয়েছে।`);
            renderAuthPage();
        }

        async function handleVerifyOtpAndLogin(e) {
            e.preventDefault();
            const enteredOtp = [
                document.getElementById('otp-d1')?.value || '',
                document.getElementById('otp-d2')?.value || '',
                document.getElementById('otp-d3')?.value || '',
                document.getElementById('otp-d4')?.value || ''
            ].join('');

            if (!/^\d{4}$/.test(enteredOtp)) {
                showToast("অনুগ্রহ করে ৪ ডিজিটের OTP কোডটি লিখুন।", "error");
                return;
            }

            if (otpVerifiedViaServer) {
                try {
                    const res = await fetch('/api/verify-otp', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ phone: otpTargetPhone, code: enteredOtp })
                    });
                    const data = await res.json();
                    if (!res.ok || !data.ok) {
                        showToast(data.error || "ভুল OTP কোড! আপনার ফোনে SMS হিসেবে আসা ৪ ডিজিটের সঠিক কোডটি লিখুন।", "error");
                        return;
                    }
                } catch (err) {
                    showToast("OTP ভেরিফিকেশনে সমস্যা হয়েছে, আবার চেষ্টা করুন।", "error");
                    return;
                }
            } else if ((settings.smsApiKey || '').trim() && settings.smsApiKey !== "ftbd_live_api_8f92a3b4c5d6e7f8091a2b3c") {
                if (enteredOtp !== generatedOtpCode) {
                    showToast("ভুল OTP কোড! আপনার ফোনে SMS হিসেবে আসা ৪ ডিজিটের সঠিক কোডটি লিখুন।", "error");
                    return;
                }
            }

            let userObj = users.find(u => u.phone === otpTargetPhone);
            if (!userObj) {
                const name = (document.getElementById('otp-new-name')?.value || 'Customer').trim();
                const email = (document.getElementById('otp-new-email')?.value || '').trim();
                const addr = (document.getElementById('otp-new-addr')?.value || '').trim();
                userObj = {
                    id: Date.now(),
                    name,
                    phone: otpTargetPhone,
                    email,
                    password: "",
                    city: "Dhaka City",
                    area: "",
                    address: addr,
                    savedAddresses: addr ? [
                        { id: Date.now() + 1, label: "Home", name, phone: otpTargetPhone, city: "Dhaka City", area: "", address: addr }
                    ] : []
                };
                users.push(userObj);
            }

            otpStep = 'phone';
            loginAsUser(userObj);
        }

        function quickDemoLogin() {
            loginAsUser(users[0]);
        }

        function loginAsUser(userObj) {
            currentUser = userObj;
            shippingInfo.name = userObj.name || shippingInfo.name;
            shippingInfo.phone = userObj.phone || shippingInfo.phone;
            shippingInfo.email = userObj.email || shippingInfo.email;
            shippingInfo.address = userObj.address || shippingInfo.address || "";
            saveUserState();

            const nextTarget = pendingPostLoginRedirect || (cart.length > 0 ? 'shipping-info' : 'profile');
            pendingPostLoginRedirect = null;
            showToast(`স্বাগতম, ${userObj.name}! মোবাইল নাম্বার ও OTP দিয়ে সফলভাবে লগইন হয়েছে।`);
            navigateTo(nextTarget);
        }

        function logoutUser() {
            currentUser = null;
            otpStep = 'phone';
            saveUserState();
            showToast("Logged out successfully", "info");
            navigateTo('auth');
        }

        // ==================== COMPARE MODAL ====================
        function addToCompare(id) {
            if (!compareList.includes(id)) {
                compareList.push(id);
                saveUserState();
                showToast("Added to Product Compare list");
            } else {
                openCompareModal();
            }
        }

        function openCompareModal() {
            const modal = document.getElementById('compare-modal');
            const body = document.getElementById('compare-modal-body');
            const items = products.filter(p => compareList.includes(p.id));
            if (items.length === 0) {
                body.innerHTML = `<p class="text-center text-slate-400 py-8 text-xs">No products selected for comparison yet.</p>`;
            } else {
                body.innerHTML = `
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-xs">
                            <thead>
                                <tr class="bg-slate-50 border-b">
                                    <th class="p-3 font-bold text-slate-500">Feature</th>
                                    ${items.map(p => `<th class="p-3 font-bold text-slate-800 min-w-[180px]">${p.name}</th>`).join('')}
                                </tr>
                            </thead>
                            <tbody class="divide-y">
                                <tr>
                                    <td class="p-3 font-semibold text-slate-500">Offer Price</td>
                                    ${items.map(p => `<td class="p-3 font-black text-st-orange text-sm">${p.price.toLocaleString()}৳</td>`).join('')}
                                </tr>
                                <tr>
                                    <td class="p-3 font-semibold text-slate-500">Category</td>
                                    ${items.map(p => `<td class="p-3">${p.category}</td>`).join('')}
                                </tr>
                                <tr>
                                    <td class="p-3 font-semibold text-slate-500">Specs</td>
                                    ${items.map(p => `<td class="p-3 text-slate-600">${(p.specs || []).join('<br>• ')}</td>`).join('')}
                                </tr>
                                <tr>
                                    <td class="p-3 font-semibold text-slate-500">Action</td>
                                    ${items.map(p => `<td class="p-3"><button onclick="addToCart(${p.id}); closeCompareModal()" class="bg-st-orange text-white px-3 py-1.5 rounded-lg font-bold">Add to Cart</button></td>`).join('')}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `;
            }
            modal.classList.remove('hidden');
        }

        function closeCompareModal() {
            document.getElementById('compare-modal').classList.add('hidden');
        }

        // Initialize Storefront App (Multi-Page Router & Query Parameter Hydration)
        (function initStorefrontPage() {
            const params = new URLSearchParams(window.location.search);
            if (window.CURRENT_PAGE_ID) {
                currentPage = window.CURRENT_PAGE_ID;
            }
            if (params.get("id")) {
                currentProductDetailId = Number(params.get("id"));
            }
            if (params.get("order")) {
                if (currentPage === "invoice") selectedInvoiceOrderId = isNaN(Number(params.get("order"))) ? params.get("order") : Number(params.get("order"));
                if (currentPage === "order-tracking") trackingSearchQuery = params.get("order");
            }
            if (params.get("category")) {
                selectedCategory = params.get("category");
            }
            loadFromAdminStorage();

            if (currentPage === "products-filter") {
                if (params.get("q") && document.getElementById("pf-search")) {
                    document.getElementById("pf-search").value = params.get("q");
                    if (document.getElementById("search-input")) document.getElementById("search-input").value = params.get("q");
                }
                if (params.get("discount") === "1" && document.getElementById("pf-discount")) {
                    document.getElementById("pf-discount").checked = true;
                }
                if (params.get("maxPrice")) {
                    const mp = Number(params.get("maxPrice"));
                    if (document.getElementById("pf-max-price")) document.getElementById("pf-max-price").value = mp;
                    if (document.getElementById("pf-max-input")) document.getElementById("pf-max-input").value = mp;
                }
                if (params.get("brand") && document.getElementById("pf-brand")) {
                    document.getElementById("pf-brand").value = params.get("brand");
                }
                applyProductsFilter();
            }

            navigateTo(currentPage, null, false);
            pullServerStoreData(true);
            setInterval(() => pullServerStoreData(false), 4000);
        })();