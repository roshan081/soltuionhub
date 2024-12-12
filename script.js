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
    name: "Acer Nitro V 15 ",
    description: "Gamming Laptop.",
    specs: "Processor : Intel Core i5 13420H Processor<br> RAM : 16GB DDR5 RAM <br> Graphics :NVIDIA GeForce RTX 3050 6GB GDDR6 <br>Storage :512GB SSD Storage Display :15.6-inch FHD (1920 x 1080) 144Hz IPS " ,
    price: "रु 120000",
    image: "nitrov15.jpg",
  },

  {
    id: 42,
    name: "GMktec Nuck Box G2",
    description: "  1 year warranty  monitor mount best for office and home use small and comfortable design ",
    specs: "CPU	: Intel Alder Lake N100 (4C/4T, 6M Cache, 0.8GHz to 3.4GHz) <br>Graphics	: Intel UHD Graphics 750MHz <br>OS	: Pre-installed Win 11 Pro (Compatible with Win10, Ubuntu, Linux) <br>RAM	:12GB*1 DDR5 4800MHz (On-Board) <br>ROM	128GB M.2 2242 SSD <br>Wireless LAN	WiFi 6(802.11ax), Bluetooth 5.2, 2*Ethernet 1000Mbps Giga LAN RJ45 <br>Video output	3 Display Output, Dual HDMI 2.0 (4K@60Hz) + Type-C DP 1.4*1 <br>lnterface	1 x DC Port; 3 x USB 3.2 Ports; 2 x HDMI Ports; 1 x DP v1.4 Port; 1 x Type-C (PD Charging); 2 x RJ45 Ethernet LAN Port 1000Mbps; 1 x Audio Jack (HP&MIC); 1 x DC IN Power Port <br>Power Adapter	19V-3.42A 57W Certification Input: 100-240V AC, 50/60Hz , Output: 19V 3.42A" ,
    price: "3200",
    image: "g2.jpg",
  },
  
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
