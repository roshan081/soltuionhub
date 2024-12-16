// Productyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyzzzzzzzzzzzzzzzzzzz Data
const products = [
  {
    id: 1,
    name: "T800 Ultra Watch",
    description: "Latest model with amazing features.",
    specs: "Like Star® T800 Ultra Smart Watch with Beautiful Strap, Bluetooth Calling Smart Watch, 1.99Touch Display with Fitness & Outdoor, Health & Medical Tracker, 8 Unique UI Interactions",
    price: "NRS 1150",
    image: "https://m.media-amazon.com/images/I/41ylawO8h1L._SX300_SY300_QL70_FMwebp_.jpg",
    
  },
  {
    id: 2,
    name: "T 10 Smart Watch",
    description: "pTron Newly Launched Reflect Pro Smartwatch, Bluetooth Calling, 1.85 Full Touch Display, 600 NITS, Digital Crown, Metal Frame, 100+ Watch Faces, HR, SpO2, Voice Assist, 5 Days Battery Life (Gold)",
    specs: "Paradise T10 Ultra Pro Edition smart watch with WiFi GPS SIM card 5G S10 Smartwatch",
    price: "NRS 1200",
    image: "https://static-01.daraz.com.np/p/5c466bca3959bad32680d8cd0b3b7726.jpg",
 
  },

   {
    id: 3,
    name: "Shree Ram Watch",
    description: "जय श्री राम भित्ते घडी ",
    specs: "shree Ram wall Watch",
    price: "रु ७०० ",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/name-plate/b/b/a/jai-shree-ram-wall-clock-giftik-original-imagxgptfzzenffq.jpeg?q=90&crop=false",
    
  },
  {
    id: 4,
    name: "aSUS 65 WATT Type C charger",
    description: "Orginal auss 65 wall type c charger",
    specs: "Orginal Asus 65 w charger with power cable",
    price: "रु 4500 ",
    image: "https://dlcdnwebimgs.asus.com/gain/f9b9c3d4-8941-4a1a-950c-7b83ac0b0154/",
    
  },
 {
    id: 5,
    name: "ASUS TUF GAMING A15",
    description: "ASUS TUF GAMING A15 FA507NVR - AMD Ryzen™ 7 7435HS |16 GB DDR5 RAM | 512 GB SSD | RTX 4060 - 8GB | 15.6 FHD | Backpack | Mouse | Windows 11 Home | Backlit Keyboard | 2 Years Warranty",
    specs: "<br>Processor: AMD Ryzen 7 7435HS <br> RAM: 16 GB DDR5<br> Memory 16 GB DDR5 <br> Storage: 512GB M.2 NVMe PCIe 4.0 SSD <br> Display: 15.6-inch Full HD (1920 x 1080) <br> Graphics: NVIDIA GeForce RTX 4060 8GB",
    price: "NRS  185,400 ",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/0/x/a/-original-imah5jc7ehrhzueb.jpeg?q=70",
   
  },

  {
    id: 6,
    name: "Lenovo Charger",
    description: "Lenovo Laptop Charger 65 w .",
    specs: "Lenovo Gx20K78585 65W Laptop Adapter/Charger with Power Cord for Select Models (Round Pin), Black",
    price: "NRS 1250",
    image: "lenovo charger.jpg",
  },

  {
    id: 7,
    name: "Lenovo Charger + power cable",
    description: "Lenovo Laptop Charger 65 w  USB Type.",
    specs: "Lenovo 65W USB Slim Tip Rectangular pin Laptop Adapter/Charger with Power Cord for Select Models of Lenovo Laptops (888015000, Black) 4.3 out of 5 stars 9,116k",
    price: "NRS 1500",
    image: "https://m.media-amazon.com/images/I/61kDhEnt3-L._AC_UF894,1000_QL80_.jpg",
  },


  {
    id: 8,
    name: "Toshiba Adapter + power Cable",
    description:  "Toshiba  65 w Adapter .",
    specs: "Toshiba  65 w Adapter .",
    price: "NRS 1500",
    image: "toshiba 65.jpg",
  },

  {
    id: 9,
    name: "Dell mini pin 45 w Adapter + power Cable",
    description:  " .",
    specs: "Dell Original 45W 19.5V Laptop Charger Adapter with 4.5mm pin for Inspiron - Black WithPower Cord.",
    price: "NRS 1500",
    image: "https://m.media-amazon.com/images/I/61qcbeTmUYL._SX522_.jpg",
  },
  {
    id: 10,
    name: "Dell large pin 65 w Adapter + power Cable",
    description:  " .",
    specs: "Dell Original 65W 19.5V Laptop Charger Adapter with Big pin  - Black WithPower Cord.",
    price: "NRS 1500",
    image: "https://img.drz.lazcdn.com/static/np/p/54ce0fc34e9dcff00e7748ce1fe9907b.jpg_720x720q80.jpg",
  },
  {
    id: 11,
    name: "acer Adapter 65 and 45  w",
    description:  " .",
    specs: "Power Cable & Acer 65W 45W Adapter-Charger for Aspire E5 E5-576 A315 A315-21 N19C3 E5-575 PA-1650-86 E1 E15 N16Q2 N19C1 Aspire 3 5 M5 R3 N17C4",
    price: "NRS 1500",
    image: "https://m.media-amazon.com/images/I/71kuMy7zq7L._SX522_.jpg",
  },
  {
    id: 12,
    name: "hp Adapter 45 w / 65w 90w  ",
    description:  " .",
    specs: "Power Cable & HP Blue Pin Original Laptop Charger 19.5V 3.33A 65W Adapter- Black",
    price: "NRS 1500",
    image: "https://m.media-amazon.com/images/I/41W1UmLrmkL.jpg",
  },
  {
    id: 13,
    name: "Nokia 105   ",
    description:  " Nokia  .",
    specs: "Nokia All-New 105 Single Sim Keypad Phone with  Long-Lasting Battery, Wireless FM Radio | Charcoal",
    price: "NRS 2500",
    image: "https://static-01.daraz.com.np/p/6b31d6ddc43af33c80aae487fe3383eb.png",
  },
  {
    id: 14,
    name: "Canvas  Phone   ",
    description:  " Canvas .",
    specs: "Canvas X110 keypad mobile phone 1.8 TFT Display, Dual sim, Wireless FM ",
    price: "NRS 1550",
    image: "https://dealayo.com/media/catalog/product/c/a/canvas-x110-1-nepal.jpg?width=265&height=265&store=default&image-type=image",
  },
  {
    id: 15,
    name: "Canvas  Phone   ",
    description:  " Canvas .",
    specs: "Canvas X110 keypad mobile phone 1.8 TFT Display, Dual sim, Wireless FM ",
    price: "NRS 1550",
    image: "https://dealayo.com/media/catalog/product/c/a/canvas-x110-1-nepal.jpg?width=265&height=265&store=default&image-type=image",
  },
  
 {
    id: 16,
    name: "UGREEN-2.5'' USB 3.0 to SATA Hard Drive Enclosure.",
    description: "Hardware Interface	USB 3.2 Gen 2 <br>Brand	UGREEN<br> Colour	Black <br>Product Dimensions	12.8L x 1.3W x 8.4H Centimeters <br>Hardware Platform	Laptop, Personal Computer",
    specs: "UGREEN USB C Hard Drive Enclosure USB 3.1 Gen 2 Type C to SATA External Hard Drive Disk Case Adapter Housing for 9.5mm 7mm 2.5 Inch SATA I II III, PS4, HDD, SSD Up to 6TB, UASP Tool Free",
    price: "NRS 1500",
    image: "ugreen hhd case.jpg",
  
  },

  {
    id: 17,
    name: "Docking Station",
    description: "Ugreen Usb 3.0 2.5-3.5 Inch Dual Bay Usb 3.0 Sata Dock Station",
    specs: "Dual Bay USB 3.0 to SATA I, II, III Hard Drive Docking Station Upto 12TB for 2.5 or 3.5in HDD, SSD with Hard Drive Duplicator Offline Clone and Auto Sleep and UASP - Top-Loading Design",
    price: "$120",
    image: "https://www.ugreenindia.com/cdn/shop/files/51nbqcnrv7l-_ac_sl1500.jpg?v=1719800973&width=1125",

  },
  {
    id: 18,
    name: "Carbon External Hardisk case",
    description: "hjh.",
    specs: "Carbon CR-201 5Gbps Premium External Hard Disk Case 2.5inch  SATA USB 3.0 SSD HDD Drive Hi Speed Casing Enclosure",
    price: "NRS 999",
    image: "https://static-01.daraz.com.np/p/1384ef6b461f8a5c088fc8067ba5dced.jpg",
  },

  {
    id: 19,
    name: "Printer Data Cable 1.5 m ",
    description: " 1.5 mtr Data Cable .",
    specs: "Orginal 1.5 Data Cable for Printer ",
    price: " NRS 350",
    image: "https://media.takealot.com/covers_tsins/43969780/43969780-1-pdpxl.jpg",
  },
  {
    id: 20,
    name: "Printer Data Cable 5 m ",
    description: "Printer Data Cable 5 meter",
    specs: "Printer Data Cable 5 meter",
    price: "रु 700",
    image: "https://alcell.co.za/wp-content/uploads/2024/08/za-upc5m-blue-700x525.jpg",
  },
  {
    id: 21,
    name: "Type C to Iphone ",
    description: "High Speed Type C to Iphone Cable ",
    specs: " Type c to Iphone Data Cable 1.5 mtr",
    price: "रु 250",
    image: "https://m.media-amazon.com/images/I/51dK6Od0J2L.jpg",
  },
  {
    id: 22,
    name: "Type C to c Data Cable ",
    description: "Type c to c Data Cable ",
    specs: " Type c to c Data Cable ",
    price: "रु 350",
    image: "https://hocotech.com/wp-content/uploads/2020/09/hoco-x51-high-power-100w-charging-data-cable-type-c-to-type-c-tail.jpg",
  },
  {
    id: 23,
    name: "D01 V8 DATA CABLE ",
    description: "USB to V8 Data cable normal  D011",
    specs: "type USB To V8 D01 data cable D011 ",
    price: "रु 100",
    image: "https://img.drz.lazcdn.com/g/kf/S29fcc035c88b4d5c96f0519103dfb080n.jpg_720x720q80.jpg",
  },
  {
    id: 24,
    name: "USB TO C DATA cable",
    description: "Normal USB to C Data cable  BN V20",
    specs: "",
    price: "रु 200 ",
    image: "https://m.media-amazon.com/images/I/315VXc4vZeL._AC_UF1000,1000_QL80_.jpg",
  },

  {
    id: 25,
    name: "PD max Data Cable",
    description: ".",
    specs: "4 In 1 PD 65W USB Type C Data Cable Multifunction Fast Charging USB Type C To USB C Cable for iPhone Xiaomi Android USB C Cables",
    price: "रु 350",
    image: "https://ae01.alicdn.com/kf/S1f80b02c7fd14a7a9f53c13fd89733b4l/4-In-1-PD-65W-USB-Type-C-Data-Cable-Multifunction-Fast-Charging-USB-Type-C.jpg",
  },
  {
    id: 26,
    name: "Arrow USB To Type C ",
    description: "USB To Type c Data Cable With 6 month warranty",
    specs: "USB To Type C data Dable with 6 month warranty ",
    price: "रु 350",
    image: "https://static-01.daraz.com.np/p/5666ade90f73af8630025502b1fba310.jpg",
  },

  {
    id: 27,
    name: "3 in 1  Charging  cable ",
    description: "V8 port, Lighting port and type C ",
    specs: "Multifunction Fast Charging Cable, 3-in-1 USB Cable Micro USB/Type-C/iOS,Durable & Strong & Tangle-free 1.5m in Length (Black) ",
    price: "रु 500",
    image: "https://5.imimg.com/data5/HY/JP/ZM/SELLER-89435354/cult-3-in-1-charging-cable-500x500-500x500.jpg",
  },
  {
    id: 28,
    name: "USB TO LAN Adapter (100Mbps) ",
    description: "100 mbps USB to LAN adapter",
    specs: "LAN Ethernet Network Adapter Dongle USB 2.0 10/100 Mbps RJ45 - White",
    price: "रु 700 ",
    image: "https://m.media-amazon.com/images/I/51p7Oer4c3L._SX522_.jpg",
  },

  {
    id: 29,
    name: "Ugreen AC650 Dual Band USB Wifi Adapter ",
    description: "1000 mbps USB to LAN adapter",
    specs: "MPN: 20204<br>Model: AC650<br>AP mode convert wired computer into a wifi hotspot.<br>433/200 Mbps high speed<br> 5G/2.4G dual-band, Wi-Fi PIFA Antenna <br>High Performance RTL8811CU Chip",
       price: "रु 2250 ",
    image: "https://itti.com.np/_next/image?url=https%3A%2F%2Fadmin.itti.com.np%2Fstorage%2Fproduct%2Fugreen-wireless-usb-adapter-for-pcac650-11ac-dual-band-wireless-usb-adapter-price-nepal%2Fthumb%2Fc6a9d925-b2f8-43c9-9878-300ecc224cc5.webp&w=256&q=75",
  },

  {
    id: 30,
    name: "Wireless Adapter ",
    description: "Wireless Adapter 150 Mbps",
    specs: "wireless Adapter 150 Mbps",
    price: " NRS 850",
    image: "https://www.fingers.co.in/secure/api/uploads/products/1627024020_150-2.png",
   
  },
  {
    id: 31,
    name: "Realme 85 w superfast Adapter ",
    description: "Wireless Adapter 150 Mbps",
    specs: "wireless Adapter 150 Mbps",
    price: " NRS 900",
    image: "https://5.imimg.com/data5/ECOM/Default/2023/7/324347656/JI/CP/MS/4924047/1689072700071-1688999223569.jpeg",
  },

   {
    id: 32,
    name: "Arrow CH 33",
    description: "Arrow 23 watt Adpater.",
    specs: "Fast Charging ",
    price: "500",
    image: "https://static-01.daraz.com.np/p/8d824442cdea8f6a0d2a5a242d690f58.jpg",
  },
  {
    id: 33,
    name: "Arrow CH ",
    description: "Arrow 30 watt Adpater.",
    specs: "Fast Charging ",
    price: "NR  750",
    image: "https://static-01.daraz.com.np/p/5b372726d295859148e14eae286cd670.jpg",
  },

  {
    id: 34,
    name: "Apple Mobile Charger",
    description: "20 w Apple Mobile Charger.",
    specs: "Fast Charging ",
    price: "1200",
    image: "https://fonehaus.co.uk/cdn/shop/files/61dirMtdhBL._AC_SL1500_300x300.jpg?v=1724578428",
  },

  {
    id: 34,
    name: "Powerking Fast Charger",
    description: "Powerking Fast Charger.",
    specs: "Fast Charging ",
    price: "600",
    image: "https://d20g9rk0b3pszo.cloudfront.net/images/detailed/243/469-b-Electrotech.jpg?t=16504710388",
  },

  {
    id: 35,
    name: "V8 cahrger for kekypad Mobile",
    description: "LIVE Adapter .",
    specs: "KEypad Mobile Adapter ",
    price: "150",
    image: "https://i.ebayimg.com/images/g/OHwAAOSw2gxYr52k/s-l1200.jpg",
  },
  {
    id: 36,
    name: "Nrmal Adapter 5 Volt",
    description: "General Purpase Adapter .",
    specs: "General Purpuse Adapter" ,
    price: "200",
    image: "https://static-01.daraz.com.np/p/27f3b80b2ea205085c8e77431677aabc.jpg",
  },
  {
    id: 38,
    name: "12 volt 1 amp",
    description: "General Purpase Adapter .",
    specs: "General Purpuse Adapter" ,
    price: "200",
    image: "https://static-01.daraz.com.np/p/27f3b80b2ea205085c8e77431677aabc.jpg",
  },

    {
    id: 39,
    name: "12 volt 2 amp",
    description: "General Purpase Adapter 2 A for NVR, Router, Light etc  .",
    specs: "use in Router , NVR, Camera, And many more " ,
    price: "350",
    image: "https://www.easyelectronics.in/image/cache/catalog/Products/12v-2-amp-adaptor-458x458.jpg",
  },
  {
    id: 40,
    name: "9 volt 1 amp",
    description: "General Purpase Adapter .",
    specs: "General Purpuse Adapter for Router , Torch and anything comfortable with that Voltage" ,
    price: "320",
    image: "https://static-01.daraz.com.np/p/27f3b80b2ea205085c8e77431677aabc.jpg",
  },
  {
    id: 41,
    name: "Acer Nitro v15  Gaming Laptop",
    description: "Acer nitro v15 best for gamming and high performance task ",
    specs: " Processor :Ryzen 5 800 H  Processor  <br>RAM : 8 GB of DDR4 system memory upgrageble upto 32 GB  <br>Display : 15.6  display with IPS 144 HZ Refresh Rate<br>Graphics : NVIDIA GeForce RTX 3050 <br> Storage : 512 NVme ",
    price: "NRS 110000",
    image: "nitrov15.png",
    
  },
  {
    id: 42,
    name: "Acer NITRO V 16 AMD Ryzen 7 ",
    description: "Acer nitro v16 best for gamming and high performance task ",
    specs: " Processor :AMD Ryzen 7 8845HS <br>RAM : 16 GB of DDR5   <br>Display : 16  display with IPS with 165 Hz <br>Graphics : NVIDIA GeForce RTX 4050 Graphics (6GB GDDR6) <br> Storage : 512 NVme<br>OS : Windows 11 Home  ",
    price: "NRS 146000",
    image: "acerv16.jpg",
    
  },
  {
    id: 43,
    name: "Lenovo LOQ  15",
    description: "Lenovo LOQ 3 Gaming Laptop 2024 | Intel Core i5 12450HX | 16GB RAM | 512GB SSD | RTX 3050 - 6GB | Windows 11| 15.6 inch  FHD | White Backlit Keyboard | 1 Year warranty |",
    specs: " Processor :Intel® Core™ i5-12450HX 8C (4P + 4E) / 12T P-core up to 4.4GHz E-core up to 3.1GHz&bnsp 12MB <br>RAM :1x 16GB SO-DIMM DDR5   <br>Display : 16  display with IPS with 165 Hz <br>Graphics : NVIDIA® GeForce RTX™ 3050 6GB GDDR6 <br> Storage : 512 NVme<br>OS : Windows 11 Home  ",
    price: "NRS 120000",
    image: "https://laptopmedia.com/wp-content/uploads/2023/06/1-19-e1686084440715.jpg",
  },

   {
    id: 44,
    name: "Lenovo LOQ 3 Gaming Laptop",
    description: "Lenovo LOQ 15 for gamming and high performance task ",
    specs: " Processor :Intel® Core™ i5-13450HX  10C (6P + 4E) / 16T    P-core 2.4 / 4.6GHz   E-core 1.8 / 3.4GHz  20MB <br>RAM :1x 16GB SO-DIMM DDR5   <br>Display : 16  display with IPS with 165 Hz <br>Graphics : NVIDIA® GeForce RTX™ 3050 6GB GDDR6 <br> Storage : 512 NVme<br>OS : Windows 11 Home  ",
    price: "NRS 127000",
    image: "https://nagmani.com.np/media/catalog/product/cache/0e2619cacdf8b7664ab70c5f4c36d5fb/l/o/loq-3050.png",
  },
  {
    id: 45,
    name: "Lenovo Ideapad ",
    description: "Lenovo IdeaPad Slim 1 Intel Core Celeron N4020 14 HD Thin and Light Laptop (8GB/256 SSD/Windows 11 Home/Office 2019/1Yr Warranty/Cloud Grey/1.3Kg) 82V6009LIN",
    specs: " RAM: 8GB <br> Storage : 256 GB New 2024 Models <br> Display : IPS  ",
    price: "NRS 45000",
    image: "https://m.media-amazon.com/images/I/81L40WhmRNL.jpg",
    
  },
 {
    id: 46,
    name: " ASUS Vivobook Go E1504",
    description: "Its light Its compact. Its the ASUS Vivobook Go 15&nbsp and its designed to make you productive and keep you entertained wherever you go! With its 180° lay-flat hinge&nbsp&nbsp physical webcam shield and loads of thoughtful design features&nbsp&nbsp Vivobook Go 15 is the laptop that sets you free!",
    specs: "<br>  Processro : MD Ryzen™ 3 7320U Processor 2.4GHz 6MB Cache<br> RAM :8GB DDR4 <br> OS : Windows 11 Home <br> GPU : AMD Radeon™ Graphics <br> Storage : 256GB PCIe SSD",
    price: "NRS  65000 ",
    image: "https://dlcdnwebimgs.asus.com/gain/78454e21-979c-441d-ab6e-0a6a9631aafe/",
   
  },
  {
    id: 47,
    name: " ASUS Vivobook ",
    description: "Its light Its compact. Its the ASUS Vivobook Go 15&nbsp and its designed to make you productive and keep you entertained wherever you go! With its 180° lay-flat hinge&nbsp&nbsp physical webcam shield and loads of thoughtful design features&nbsp&nbsp Vivobook Go 15 is the laptop that sets you free!",
    specs: "<br>  Processro : AMD Ryzen™ 5 7520U Mobile Processor (4-core/8-thread   4MB cache  up to 4.3 GHz max boost)<br> RAM :8GB DDR5 <br> OS : Windows 11  <br> GPU : AMD Radeon™ Graphics <br> Storage : 512GB PCIe SSD",
    price: "NRS  79000 ",
    image: "https://nagmani.com.np/media/catalog/product/cache/0e2619cacdf8b7664ab70c5f4c36d5fb/e/1/e1504fa-nb.png",
   
  },
  {
    id: 48,
    name: "GMKtec G2",
    description: "GMKtech G2 Mini pc . Portable and best for Office and home use  .",
    specs: "<br>  Processro : Intel® 12th Alder Lake - N100 4 Cores <br> RAM :16GB DDR4 <br> OS : Windows 11 pro <br> GPU :Intel UHD Graphics&nbsp  48EU &nbsp 750 MHz <br> Storage : 512GB PCIe SSD",
    price: "NRS 32999",
    image: "https://img.fantaskycdn.com/819ad3bb5307f26b339cce9ee127c023_750x.jpg",
  },

  {
    id: 49,
    name: "GMKtec NucBox M3",
    description: " GMKtec Mini Desktop Computer, M3 Intel Core i5 12450H (8C/12T&nbsp up to 4.40GHz) Windows 11 Pro Mini PC 16GB DDR4 (8GB*2) 512GB SSD<br> 2X HDMI 4K 4X USB 3.2 USB-C<br> WiFi 6&nbsp BT 5.2&nbsp RJ45 2.5G",
    specs: "<br>  Processro : Intel® Core i5-12450H 8 Cores 12 Threads <br> RAM :12GB DDR5 <br> OS : Windows 11 pro <br> GPU :Intel UHD Graphics &nbsp 750 MHz <br> Storage : 512GB PCIe SSD",
    price: "NRS 53999 ",
    image: "https://img.staticdj.com/9b6acd0064195b8d447d7df7381b8a20_750x.jpg",
  
  },

  {
    id: 50,
    name: "Lenovo ThinkCentre",
    description: "With the latest 12th Gen Intel® Core  processor  with vast memory and storage ThinkCentre neo 50s Gen 3 Intel is a truly responsive  powerful small form factor<br> Engineered to boost productivity its adaptable and expandable. Yet<br> its highly energy-efficient uses recycled materials and has many green credentials. Whats more with built-in device and data safeguards its also secure.",
    specs: "<br>  Model : Lenovo ThinkCentre 50s Gen 3 <br> Processro : 12th Gen Intel® Core™ i5-12400&nbsp 6C (6P + 0E) / 12T&nbsp P-core 2.5 / 4.4GHz&nbsp 18MB <br> RAM :8GB UDIMM DDR4-3200 <br> <br> GPU :Intel UHD Graphics &nbsp  <br> Storage : 512GB PCIe SSD &nbsp Keyboard : USB Traditional Keyboard<br> Mouse <br> Monitor : 19 inch Lenovo Branded  <br> Warranty 3 years",
    price: "रु 90000",
    image: "https://p3-ofp.static.pub/fes/cms/2021/12/27/kpcd0801s7lut935on8coskff0giv3387665.png",
  },
];

// Display Products
const productList = document.getElementById("productList");

function displayProducts(filteredProducts) {
  productList.innerHTML = "";
  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button onclick="viewDetails(${product.id})">View Details</button>
      <button onclick="shareProduct(${product.id})">Share</button>
      <button onclick="placeOrder('${product.name}')">Place Order</button>
    `;
    productList.appendChild(productCard);
  });
}

// Modal for Product Details
const modal = document.getElementById("productModal");
const productDetails = document.getElementById("productDetails");

function viewDetails(productId) {
  const product = products.find((p) => p.id === productId);
  productDetails.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p><strong>Specs:</strong> ${product.specs}</p>
    <p>${product.description}</p>
    <p><strong>Price:</strong> ${product.price}</p>
  `;
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

// Share Product
function shareProduct(productId) {
  const product = products.find((p) => p.id === productId);
  const shareUrl = `${window.location.href}?product=${productId}`;
  const message = `Check out this product: ${product.name} - ${product.price}\n${shareUrl}`;

  // Copy the link to the clipboard
  navigator.clipboard.writeText(message).then(() => {
    alert("Product link copied to clipboard! Share it anywhere.");
  });
}

// Place Order
function placeOrder(productName) {
  const whatsappUrl = `https://wa.me/9779769726479?text=I want to order: ${encodeURIComponent(productName)}`;
  window.open(whatsappUrl, "_blank");
}

// Search Functionality
function filterProducts() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(searchInput)
  );
  displayProducts(filtered);
}

// Initial Load
displayProducts(products);
