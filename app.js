// EMY BAKES App Logic

// 1. Data Store: Complete Menu Catalog
const MENU_DATA = [
    // --- Category: Cookiescoop (كوكي سكوب) ---
    {
        id: "scoop-nutella",
        nameAr: "كوكي سكوب نوتيلا",
        nameEn: "Nutella Cookie Scoop",
        category: "cookiescoop",
        price: 345,
        desc: "يأتي الكوكي في بوكس به نوتيلا إكسترا وتشوكلت كوينز طبيعي وفيوتين كرانشي (وزن الكوكي ٦٠٠جم)",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
        badge: "الأكثر مبيعاً 🔥",
        customizable: false
    },
    {
        id: "scoop-lotus",
        nameAr: "كوكي سكوب لوتس",
        nameEn: "Lotus Cookie Scoop",
        category: "cookiescoop",
        price: 355,
        desc: "يأتي الكوكي في بوكس به صوص لوتس غني وتشوكلت كوينز وفيوتين كرانشي (وزن الكوكي ٦٠٠جم)",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "scoop-kinder",
        nameAr: "كوكي سكوب كيندر",
        nameEn: "Kinder Cookie Scoop",
        category: "cookiescoop",
        price: 365,
        desc: "ياتي في بوكس به شوكولاتة كيندر إكسترا وتشوكلت كوينز طبيعي وفيوتين كرانشي (وزن الكوكي ٦٠٠جم)",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "scoop-mix-kinder-nutella",
        nameAr: "ميكس كيندر نوتيلا سكوب",
        nameEn: "Mix Kinder Nutella Scoop",
        category: "cookiescoop",
        price: 355,
        desc: "مزيج رائع من كيندر شوكليت ونوتيلا مع تشوكلت كوينز وفيوتين كرانشي (وزن الكوكي ٦٠٠جم)",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "scoop-mix-kinder-lotus",
        nameAr: "ميكس كيندر لوتس سكوب",
        nameEn: "Mix Kinder Lotus Scoop",
        category: "cookiescoop",
        price: 350,
        desc: "مزيج رائع من كيندر شوكليت وصوص لوتس فاخر مع الإضافات المقرمشة (وزن الكوكي ٦٠٠جم)",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "scoop-pistachio",
        nameAr: "كوكي سكوب بستشيو (فستق)",
        nameEn: "Pistachio Cookie Scoop",
        category: "cookiescoop",
        price: 380,
        desc: "كوكي سكوب غرقان بصوص الفستق الفاخر الكرانشي مع تشوكلت كوينز (وزن الكوكي ٦٠٠جم)",
        image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "scoop-red-velvet",
        nameAr: "ريد فلفيت بلو بيري سكوب",
        nameEn: "Red Velvet Blueberry Scoop",
        category: "cookiescoop",
        price: 390,
        desc: "ياتي مع الريد فلفيت كريم تشيز وفيوتين كرانشي وبلوبيري توبينج فاخر",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80",
        badge: "مميز جداً ✨",
        customizable: false
    },

    // --- Category: Cookies (كوكيز) ---
    {
        id: "cookie-original",
        nameAr: "كوكيز اوريجينال",
        nameEn: "Original Cookie",
        category: "cookies",
        price: 65,
        desc: "كوكيز كلاسيكية بقطع الشوكولاتة الغنية، مقرمشة من الأطراف وطرية من المنتصف",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cookie-double-choco",
        nameAr: "كوكيز دبل تشوكلت",
        nameEn: "Double Chocolate Cookie",
        category: "cookies",
        price: 65,
        desc: "عشاق الشوكولاتة! عجينة كاكاو غنية محشية بقطع الشوكولاتة البلجيكية",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cookie-red-velvet",
        nameAr: "كوكيز ريد فيلفيت",
        nameEn: "Red Velvet Cookie",
        category: "cookies",
        price: 65,
        desc: "مخبوزة بلون الريد فيلفيت الجذاب ومحشوة بقطع الشوكولاتة البيضاء اللذيذة",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cookie-pistachio",
        nameAr: "كوكيز بستشيو (فستق)",
        nameEn: "Pistachio Cookie",
        category: "cookies",
        price: 95,
        desc: "كوكيز فاخرة بنكهة وحشوة زبدة الفستق الطبيعية وحبات الفستق الحلبي",
        image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cookie-monster",
        nameAr: "كوكيز مونستر",
        nameEn: "Monster Cookie",
        category: "cookies",
        price: 70,
        desc: "كوكيز ملونة ومبهجة محشوة بقطع شوكولاتة كاندي M&Ms الذائبة",
        image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cookie-kinder",
        nameAr: "كوكيز كيندر",
        nameEn: "Kinder Cookie",
        category: "cookies",
        price: 80,
        desc: "كوكيز بقطع شوكولاتة كيندر اللذيذة وحشوة الحليب الغنية",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cookie-lotus",
        nameAr: "كوكيز لوتس",
        nameEn: "Lotus Cookie",
        category: "cookies",
        price: 80,
        desc: "كوكيز بنكهة بسكويت اللوتس ومحشوة بزبدة اللوتس اللذيذة",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cookie-tiramisu",
        nameAr: "كوكيز تيراميسو",
        nameEn: "Tiramisu Cookie",
        category: "cookies",
        price: 85,
        desc: "كوكيز مميزة بنكهة القهوة الفاخرة مع حشوة الكريمة الغنية",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cookie-pistachio-kunafa",
        nameAr: "كوكيز فستق بالكنافة تريند",
        nameEn: "Pistachio Kunafa Cookie",
        category: "cookies",
        price: 110,
        desc: "التريند الجديد! كوكيز محشية فستق غني مع الكنافة المقرمشة واللذيذة",
        image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=400&q=80",
        badge: "تريند 💥",
        customizable: false
    },
    {
        id: "cookie-icecream",
        nameAr: "كوكي آيس كريم دبل",
        nameEn: "Ice Cream Cookie",
        category: "cookies",
        price: 135,
        desc: "قطعتين كوكيز وبينهما طبقة غنية من آيس كريم الفانيليا الفاخرة",
        image: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },

    // --- Category: Cheesecake Cookies (تشيز كيك كوكي) ---
    {
        id: "cc-cookie-nutella",
        nameAr: "تشيز كيك كوكي نوتيلا",
        nameEn: "Nutella Cheesecake Cookie",
        category: "cheesecake_cookie",
        price: 95,
        desc: "مزيج رائع من طعم التشيز كيك الغني مع الكوكيز ومغطاة بصوص النوتيلا",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-cookie-lotus",
        nameAr: "تشيز كيك كوكي لوتس",
        nameEn: "Lotus Cheesecake Cookie",
        category: "cheesecake_cookie",
        price: 100,
        desc: "مزيج رائع من التشيز كيك وبسكويت لوتس المقرمش مع زبدة اللوتس الفاخرة",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-cookie-kinder",
        nameAr: "تشيز كيك كوكي كيندر",
        nameEn: "Kinder Cheesecake Cookie",
        category: "cheesecake_cookie",
        price: 105,
        desc: "تشيز كيك كوكي غنية بشوكولاتة كيندر الذائبة وحشوتها اللذيذة",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-cookie-blueberry",
        nameAr: "تشيز كيك كوكي بلوبيري",
        nameEn: "Blueberry Cheesecake Cookie",
        category: "cheesecake_cookie",
        price: 110,
        desc: "تشيز كيك كوكي كلاسيكية مغطاة بصوص البلو بيري (التوت الأزرق) الفاخر",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-cookie-pistachio",
        nameAr: "تشيز كيك كوكي فستق",
        nameEn: "Pistachio Cheesecake Cookie",
        category: "cheesecake_cookie",
        price: 130,
        desc: "تشيز كيك كوكي غنية بصوص الفستق والفسدق الحلبي المجروش",
        image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-cookie-caramel",
        nameAr: "تشيز كيك كوكي كراميل",
        nameEn: "Caramel Cheesecake Cookie",
        category: "cheesecake_cookie",
        price: 95,
        desc: "تشيز كيك كوكي لذيذة مغطاة بصوص الكراميل الذهبي السلس",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },

    // --- Category: Cinnamon Rolls (سينامون رولز) ---
    {
        id: "roll-caramel",
        nameAr: "سينامون رولز كراميل",
        nameEn: "Caramel Cinnamon Roll",
        category: "cinnamon",
        price: 85,
        desc: "رول سينامون طازج ودافئ مغطى بصوص كراميل غني ومكسرات لذيذة",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "roll-nutella",
        nameAr: "سينامون رولز نوتيلا",
        nameEn: "Nutella Cinnamon Roll",
        category: "cinnamon",
        price: 85,
        desc: "رول القرفة الكلاسيكي المميز مغطى بالكامل بشوكولاتة نوتيلا الذائبة",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "roll-lotus",
        nameAr: "سينامون رولز لوتس",
        nameEn: "Lotus Cinnamon Roll",
        category: "cinnamon",
        price: 85,
        desc: "رول قرفة رائع مغطى بزبدة لوتس وبسكويت لوتس المطحون",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "roll-kinder",
        nameAr: "سينامون رولز كيندر",
        nameEn: "Kinder Cinnamon Roll",
        category: "cinnamon",
        price: 90,
        desc: "رول سينامون مميز مغطى بالكامل بصوص شوكولاتة كيندر الفاخرة",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "roll-cookies-cream",
        nameAr: "سينامون رولز كوكيز أند كريم",
        nameEn: "Cookies & Cream Cinnamon Roll",
        category: "cinnamon",
        price: 90,
        desc: "رول القرفة بالكريمة البيضاء وبسكويت أوريو المطحون اللذيذ",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "roll-raffaello",
        nameAr: "سينامون رولز رفايللو",
        nameEn: "Raffaello Cinnamon Roll",
        category: "cinnamon",
        price: 90,
        desc: "رول سينامون بالكريمة البيضاء الفاخرة، جوز الهند، وحبيبات اللوز المقرمش",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "roll-blueberry",
        nameAr: "سينامون رولز بلوبيري",
        nameEn: "Blueberry Cinnamon Roll",
        category: "cinnamon",
        price: 105,
        desc: "رول قرفة بالكريمة وصوص التوت الأزرق (البلو بيري) المنعش",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "roll-pistachio",
        nameAr: "سينامون رولز فستق",
        nameEn: "Pistachio Cinnamon Roll",
        category: "cinnamon",
        price: 110,
        desc: "رول سينامون طازج مغطى بزبدة الفستق الطبيعية وحبيبات الفستق",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    // --- Special Boxes Cinnamon Rolls ---
    {
        id: "box-banana-pudding",
        nameAr: "علبة بنانا بودينج (٤ قطع)",
        nameEn: "Special Box Banana Pudding (4 Pcs)",
        category: "cinnamon",
        price: 360,
        desc: "علب خاصة بـ Emy Bakes السعر لأربع قطع رولز مع حشوة البنانا بودينج المذهلة",
        image: "https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "box-apple-pie",
        nameAr: "علبة ابل باي كراميل مكسرات (٤ قطع)",
        nameEn: "Special Box Apple Pie (4 Pcs)",
        category: "cinnamon",
        price: 440,
        desc: "علب خاصة السعر لأربع قطع رولز غنية بتفاح مكرمل وقرفة ومكسرات مقرمشة",
        image: "https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "box-red-velvet-bb",
        nameAr: "علبة ريد فلفيت بلو بيري (٤ قطع)",
        nameEn: "Special Box Red Velvet BB (4 Pcs)",
        category: "cinnamon",
        price: 380,
        desc: "علب خاصة السعر لأربع قطع رولز بنكهة الريد فيلفيت والتوت البري الكرانشي",
        image: "https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "box-tiramisu",
        nameAr: "علبة تيراميسو سينامون (٤ قطع)",
        nameEn: "Special Box Tiramisu (4 Pcs)",
        category: "cinnamon",
        price: 355,
        desc: "علب خاصة السعر لأربع قطع رولز بنكهة التيراميسو والقهوة الغنية مع الكريمة",
        image: "https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "box-double-choco",
        nameAr: "علبة دبل تشوكلت سينامون (٤ قطع)",
        nameEn: "Special Box Double Choco (4 Pcs)",
        category: "cinnamon",
        price: 345,
        desc: "علب خاصة السعر لأربع قطع رولز غرقانة بصوص الشوكولاتة المزدوج البلجيكي",
        image: "https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    // --- Cinnamon rolls medium and mini (customizable) ---
    {
        id: "roll-mid-3pcs",
        nameAr: "سينامون رولز وسط (٣ قطع)",
        nameEn: "Medium Cinnamon Rolls (3 Pcs)",
        category: "cinnamon",
        price: 195,
        desc: "٣ قطع رولز حجم وسط مع توبينج من اختيارك (كراميل، نوتيلا، لوتس، كوكيز أند كريم، كيندر، رفايللو)",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: true,
        toppings: ["كراميل", "نوتيلا", "لوتس", "كوكيز اند كريم", "كيندر", "رفايللو"]
    },
    {
        id: "roll-mid-4pcs",
        nameAr: "سينامون رولز وسط (٤ قطع)",
        nameEn: "Medium Cinnamon Rolls (4 Pcs)",
        category: "cinnamon",
        price: 260,
        desc: "٤ قطع رولز حجم وسط مع توبينج من اختيارك (كراميل، نوتيلا، لوتس، كوكيز أند كريم، كيندر، رفايللو)",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: true,
        toppings: ["كراميل", "نوتيلا", "لوتس", "كوكيز اند كريم", "كيندر", "رفايللو"]
    },
    {
        id: "roll-mid-6pcs",
        nameAr: "سينامون رولز وسط (٦ قطع)",
        nameEn: "Medium Cinnamon Rolls (6 Pcs)",
        category: "cinnamon",
        price: 350,
        desc: "٦ قطع رولز حجم وسط مع توبينج من اختيارك (كراميل، نوتيلا، لوتس، كوكيز أند كريم، كيندر، رفايللو)",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: true,
        toppings: ["كراميل", "نوتيلا", "لوتس", "كوكيز اند كريم", "كيندر", "رفايللو"]
    },
    {
        id: "roll-mini-12pcs",
        nameAr: "بوكس ميني سينامون (١٢ قطعة)",
        nameEn: "Mini Cinnamon Box (12 Pcs)",
        category: "cinnamon",
        price: 380,
        desc: "بوكس يحتوي على ١٢ قطعة ميني سينامون رولز طازجة ومنوعة ولذيذة جداً",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "roll-mini-20pcs",
        nameAr: "بوكس ميني سينامون (٢٠ قطعة)",
        nameEn: "Mini Cinnamon Box (20 Pcs)",
        category: "cinnamon",
        price: 590,
        desc: "بوكس الحفلات والجمعات! ٢٠ قطعة ميني سينامون رولز بنكهات ميكس غنية",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },

    // --- Category: Cheesecake (تشيز كيك) ---
    {
        id: "cc-caramel",
        nameAr: "أمريكان تشيز كيك كراميل",
        nameEn: "Caramel Cheesecake",
        category: "cheesecake",
        price: 105,
        desc: "تشيز كيك مخبوزة على الطريقة الأمريكية مغطاة بصوص كراميل لذيذ",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-nutella",
        nameAr: "أمريكان تشيز كيك نوتيلا",
        nameEn: "Nutella Cheesecake",
        category: "cheesecake",
        price: 105,
        desc: "تشيز كيك غنية وناعمة مغطاة بطبقة وافرة من شوكولاتة نوتيلا اللذيذة",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-mango",
        nameAr: "أمريكان تشيز كيك مانجو",
        nameEn: "Mango Cheesecake",
        category: "cheesecake",
        price: 110,
        desc: "تشيز كيك صيفية ومنعشة مغطاة بقطع وبوريه المانجو الطبيعي",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-strawberry",
        nameAr: "أمريكان تشيز كيك فراولة",
        nameEn: "Strawberry Cheesecake",
        category: "cheesecake",
        price: 110,
        desc: "الطعم الكلاسيكي المفضل! تشيز كيك مغطاة بقطع وصوص الفراولة الطازجة",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-lotus",
        nameAr: "أمريكان تشيز كيك لوتس",
        nameEn: "Lotus Cheesecake",
        category: "cheesecake",
        price: 110,
        desc: "تشيز كيك مميزة بقاعدة بسكويت لوتس ومغطاة بزبدة اللوتس الرائعة",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-kinder",
        nameAr: "أمريكان تشيز كيك كيندر",
        nameEn: "Kinder Cheesecake",
        category: "cheesecake",
        price: 115,
        desc: "تشيز كيك فاخرة مغطاة بصوص شوكولاتة كيندر الغنية",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-blueberry",
        nameAr: "أمريكان تشيز كيك بلوبيري",
        nameEn: "Blueberry Cheesecake",
        category: "cheesecake",
        price: 120,
        desc: "تشيز كيك أمريكية مخبوزة ومزينة بصوص التوت الأزرق الفاخر",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "cc-pistachio",
        nameAr: "أمريكان تشيز كيك فستق",
        nameEn: "Pistachio Cheesecake",
        category: "cheesecake",
        price: 125,
        desc: "تشيز كيك غنية وزبدية مغطاة بصوص الفستق كرانشي الفاخر",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    // --- Cheesecake Tart ---
    {
        id: "cc-tart",
        nameAr: "تارت تشيز كيك كبير (١٠ أفراد)",
        nameEn: "Cheesecake Tart (10 Persons)",
        category: "cheesecake",
        price: 695,
        desc: "تارت تشيز كيك يكفي لـ ١٠ أفراد، متاح إضافة توبينج من اختيارك (كراميل، نوتيلا، كيندر، لوتس، فراولة، مانجو)",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: true,
        toppings: ["كراميل", "نوتيلا", "كيندر", "لوتس", "فراولة", "مانجو"]
    },
    // --- Cheesecake boxes (customizable) ---
    {
        id: "cc-box-3pcs",
        nameAr: "علبة تشيز كيك (٣ قطع)",
        nameEn: "Cheesecake Box (3 Pcs)",
        category: "cheesecake",
        price: 295,
        desc: "بوكس ٣ قطع تشيز كيك، متاح إضافة توبينج من اختيارك (كراميل، نوتيلا، لوتس، مانجو، فراولة، كيندر)",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: true,
        toppings: ["كراميل", "نوتيلا", "لوتس", "مانجو", "فراولة", "كيندر"]
    },
    {
        id: "cc-box-4pcs",
        nameAr: "علبة تشيز كيك (٤ قطع)",
        nameEn: "Cheesecake Box (4 Pcs)",
        category: "cheesecake",
        price: 385,
        desc: "بوكس ٤ قطع تشيز كيك، متاح إضافة توبينج من اختيارك (كراميل، نوتيلا، لوتس، مانجو، فراولة، كيندر)",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: true,
        toppings: ["كراميل", "نوتيلا", "لوتس", "مانجو", "فراولة", "كيندر"]
    },
    {
        id: "cc-box-6pcs",
        nameAr: "علبة تشيز كيك (٦ قطع)",
        nameEn: "Cheesecake Box (6 Pcs)",
        category: "cheesecake",
        price: 480,
        desc: "بوكس ٦ قطع تشيز كيك، متاح إضافة توبينج من اختيارك (كراميل، نوتيلا، لوتس، مانجو، فراولة، كيندر)",
        image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=400&q=80",
        customizable: true,
        toppings: ["كراميل", "نوتيلا", "لوتس", "مانجو", "فراولة", "كيندر"]
    },

    // --- Category: Donuts (دوناتس) ---
    {
        id: "donut-glazed",
        nameAr: "دوناتس سكر كلاسيك",
        nameEn: "Classic Glazed Donut",
        category: "donuts",
        price: 50,
        desc: "دوناتس كلاسيكية هشة وخفيفة مغطاة بطبقة رقيقة وذكية من جليز السكر الذائب",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "donut-chocolate",
        nameAr: "دوناتس شوكولاتة",
        nameEn: "Chocolate Glaze Donut",
        category: "donuts",
        price: 55,
        desc: "دوناتس هشة مغطاة بشوكولاتة الحليب الفاخرة ورشة من السبرنكلز الملونة",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "donut-lotus",
        nameAr: "دوناتس لوتس دريم",
        nameEn: "Lotus Dream Donut",
        category: "donuts",
        price: 65,
        desc: "دوناتس غنية بحشوة كريمة اللوتس ومغطاة بزبدة لوتس وبسكويت مقرمش",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "donut-pistachio",
        nameAr: "دوناتس بستشيو بومب",
        nameEn: "Pistachio Bomb Donut",
        category: "donuts",
        price: 75,
        desc: "دوناتس مخبوزة هشة محشوة بكريمة الفستق الطبيعي ومزينة بقطع الفستق",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
        customizable: false
    },
    {
        id: "donut-kinder",
        nameAr: "دوناتس كيندر كريم",
        nameEn: "Kinder Cream Donut",
        category: "donuts",
        price: 70,
        desc: "دوناتس لذيذة محشوة بكريمة الحليب والشوكولاتة ومزينة بقطع شوكولاتة كيندر",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
        customizable: false
    }
];

const IMAGE_MAPPING = {
    // Cookie Scoops (Skillet cookies / Deep dish cookies)
    "scoop-nutella": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
    "scoop-lotus": "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80",
    "scoop-kinder": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80&sig=kinder",
    "scoop-mix-kinder-nutella": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80&sig=mix1",
    "scoop-mix-kinder-lotus": "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80&sig=mix2",
    "scoop-pistachio": "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=400&q=80", // Green dessert scoop
    "scoop-red-velvet": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80&sig=redscoop",

    // Cookies
    "cookie-original": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80",
    "cookie-double-choco": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80&sig=doublechoco",
    "cookie-red-velvet": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80&sig=redcookie",
    "cookie-pistachio": "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=400&q=80&sig=pistcookie",
    "cookie-monster": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=400&q=80",
    "cookie-kinder": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80&sig=kindercookie",
    "cookie-lotus": "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80&sig=lotuscookie",
    "cookie-tiramisu": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80&sig=tiramisucookie",
    "cookie-pistachio-kunafa": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80&sig=kunafacookie",
    "cookie-icecream": "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=400&q=80",

    // Cheesecake Cookies
    "cc-cookie-nutella": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80&sig=ccnutella",
    "cc-cookie-lotus": "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80&sig=cclotus",
    "cc-cookie-kinder": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80&sig=cckinder",
    "cc-cookie-blueberry": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80&sig=ccblueberry",
    "cc-cookie-pistachio": "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=400&q=80&sig=ccpistachio",
    "cc-cookie-caramel": "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80&sig=cccaramel",
 
    // Cinnamon Rolls
    "roll-caramel": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
    "roll-nutella": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=nutellaroll",
    "roll-lotus": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=lotusroll",
    "roll-kinder": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=kinderroll",
    "roll-cookies-cream": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=cookiescreamroll",
    "roll-raffaello": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=raffaelloroll",
    "roll-blueberry": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=blueberryroll",
    "roll-pistachio": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=pistachioroll",
    "box-banana-pudding": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=bananabox",
    "box-apple-pie": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=applebox",
    "box-red-velvet-bb": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=redbox",
    "box-tiramisu": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=tiramisubox",
    "box-double-choco": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=chocobox",
    "roll-mid-3pcs": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=mid3",
    "roll-mid-4pcs": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=mid4",
    "roll-mid-6pcs": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=mid6",
    "roll-mini-12pcs": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=mini12",
    "roll-mini-20pcs": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80&sig=mini20",

    // Cheesecakes
    "cc-caramel": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80&sig=cccaramelslice",
    "cc-nutella": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80",
    "cc-mango": "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=400&q=80",
    "cc-strawberry": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80",
    "cc-lotus": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80&sig=lotus",
    "cc-kinder": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80&sig=kinder",
    "cc-blueberry": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80&sig=blueberry",
    "cc-pistachio": "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=400&q=80&sig=pistcc",
    "cc-tart": "https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&w=400&q=80",
    "cc-box-3pcs": "https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&w=400&q=80&sig=box3",
    "cc-box-4pcs": "https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&w=400&q=80&sig=box4",
    "cc-box-6pcs": "https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&w=400&q=80&sig=box6",

    // Donuts
    "donut-glazed": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
    "donut-chocolate": "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?auto=format&fit=crop&w=400&q=80&sig=chocodonut",
    "donut-lotus": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80&sig=lotus",
    "donut-pistachio": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80&sig=pistachio",
    "donut-kinder": "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?auto=format&fit=crop&w=400&q=80&sig=kinder"
};

// Apply unique image mapping to MENU_DATA catalog
MENU_DATA.forEach(item => {
    if (IMAGE_MAPPING[item.id]) {
        item.image = IMAGE_MAPPING[item.id];
    }
});

// 2. Categories Metadata
const CATEGORIES = [
    { id: "all", nameAr: "الكل", emoji: "✨" },
    { id: "cookiescoop", nameAr: "كوكي سكوب", emoji: "🥣" },
    { id: "cookies", nameAr: "كوكيز", emoji: "🍪" },
    { id: "cheesecake_cookie", nameAr: "تشيز كيك كوكي", emoji: "🍰🍪" },
    { id: "cinnamon", nameAr: "سينامون رولز", emoji: "🌀" },
    { id: "cheesecake", nameAr: "تشيز كيك", emoji: "🍰" },
    { id: "donuts", nameAr: "دوناتس", emoji: "🍩" }
];

// 3. Application State
let cart = [];
let currentCategory = "all";
let searchQuery = "";
let itemBeingCustomized = null;

// 4. WhatsApp Business Information
const WHATSAPP_PHONE = "201061219807"; // Country code + phone (Egypt: +20)

// 5. DOM Elements
const mainHeader = document.getElementById("mainHeader");
const categoriesContainer = document.getElementById("categoriesContainer");
const productsGrid = document.getElementById("productsGrid");
const currentCategoryHeading = document.getElementById("currentCategoryHeading");
const searchInput = document.getElementById("searchInput");

// Cart Elements
const cartToggleBtn = document.getElementById("cartToggleBtn");
const floatingCartBtn = document.getElementById("floatingCartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartCloseBtn = document.getElementById("cartCloseBtn");
const cartItemsList = document.getElementById("cartItemsList");
const cartCount = document.getElementById("cartCount");
const floatingCartCount = document.getElementById("floatingCartCount");
const floatingCartPrice = document.getElementById("floatingCartPrice");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");

// Toppings Modal Elements
const toppingModal = document.getElementById("toppingModal");
const toppingModalBackdrop = document.getElementById("toppingModalBackdrop");
const toppingModalCloseBtn = document.getElementById("toppingModalCloseBtn");
const customizerImg = document.getElementById("customizerImg");
const customizerName = document.getElementById("customizerName");
const customizerPrice = document.getElementById("customizerPrice");
const toppingsContainer = document.getElementById("toppingsContainer");
const confirmToppingBtn = document.getElementById("confirmToppingBtn");

// Checkout Modal Elements
const checkoutModal = document.getElementById("checkoutModal");
const checkoutModalBackdrop = document.getElementById("checkoutModalBackdrop");
const checkoutModalCloseBtn = document.getElementById("checkoutModalCloseBtn");
const checkoutForm = document.getElementById("checkoutForm");
const orderTypeRadios = document.getElementsByName("orderType");
const deliveryAddressGroup = document.getElementById("deliveryAddressGroup");
const clientAddress = document.getElementById("clientAddress");

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    // Generate sugar sprinkles in the background
    generateSugarSprinkles();

    // Render category filters
    renderCategories();

    // Render products catalog
    renderProducts();

    // Attach Event Listeners
    setupEventListeners();

    // Load Cart from LocalStorage if exists
    loadCartFromStorage();

    // Replace all Unicode Emojis with Apple Emoji images
    replaceEmojisInDOM(document.body);
});

// --- Background Sprinkles Effect ---
function generateSugarSprinkles() {
    const bg = document.getElementById("sprinklesBg");
    const colors = ["#FF2E93", "#00B1A5", "#FFD700", "#FFC0CB", "#FFFFFF"];
    const count = 30;

    for (let i = 0; i < count; i++) {
        const sprinkle = document.createElement("div");
        sprinkle.className = "sprinkle";
        
        // Random style attributes
        const size = Math.random() * 8 + 4;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        sprinkle.style.width = `${size}px`;
        sprinkle.style.height = `${size * (Math.random() > 0.5 ? 2.5 : 1)}px`; // some circular, some oval/sticks
        sprinkle.style.background = color;
        sprinkle.style.top = `${Math.random() * 100}vh`;
        sprinkle.style.left = `${Math.random() * 100}vw`;
        sprinkle.style.borderRadius = "20px";
        sprinkle.style.opacity = Math.random() * 0.5 + 0.2;
        
        // Random float duration
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * -20;
        sprinkle.style.animation = `float ${duration}s infinite ease-in-out ${delay}s`;
        
        bg.appendChild(sprinkle);
    }
}

// --- Render Category Tabs ---
function renderCategories() {
    categoriesContainer.innerHTML = CATEGORIES.map(category => `
        <button class="category-tab ${category.id === currentCategory ? 'active' : ''}" 
                data-category-id="${category.id}">
            <span class="category-emoji">${category.emoji}</span>
            <span>${category.nameAr}</span>
        </button>
    `).join('');

    // Replace unicode emojis in categories
    replaceEmojisInDOM(categoriesContainer);

    // Attach click events to tabs
    document.querySelectorAll(".category-tab").forEach(tab => {
        tab.addEventListener("click", (e) => {
            const button = e.currentTarget;
            currentCategory = button.getAttribute("data-category-id");
            
            // Update active styling
            document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
            button.classList.add("active");

            // Update category title
            const categoryObj = CATEGORIES.find(c => c.id === currentCategory);
            currentCategoryHeading.textContent = categoryObj.nameAr === "الكل" ? "كل الأصناف" : categoryObj.nameAr;
            replaceEmojisInDOM(currentCategoryHeading);

            // Re-render
            renderProducts();
        });
    });
}

// --- Render Products Catalog Grid ---
function renderProducts() {
    // Filter by Category and Search Query
    let filteredList = MENU_DATA;

    if (currentCategory !== "all") {
        filteredList = filteredList.filter(item => item.category === currentCategory);
    }

    if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        filteredList = filteredList.filter(item => 
            item.nameAr.toLowerCase().includes(query) || 
            item.nameEn.toLowerCase().includes(query) ||
            item.desc.toLowerCase().includes(query)
        );
    }

    if (filteredList.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
                <div style="font-size: 54px; margin-bottom: 16px;">🔍</div>
                <h3 style="font-weight: 700; margin-bottom: 8px;">لم نجد أي صنف يطابق بحثك!</h3>
                <p>تأكد من كتابة الكلمة بشكل صحيح، أو ابحث في تصنيف آخر.</p>
            </div>
        `;
        replaceEmojisInDOM(productsGrid);
        return;
    }

    productsGrid.innerHTML = filteredList.map(item => {
        const cartItem = cart.find(ci => ci.id === item.id && !ci.hasCustomOptions);
        const qtyInCart = cartItem ? cartItem.qty : 0;

        return `
            <div class="product-card" data-product-id="${item.id}">
                <div class="product-image-container">
                    <img src="${item.image}" alt="${item.nameAr}" class="product-img" loading="lazy">
                    ${item.badge ? `<span class="product-badge">${item.badge}</span>` : ''}
                    <div class="product-price">${item.price}<span>ج.م</span></div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${item.nameAr}</h3>
                    <p class="product-desc">${item.desc}</p>
                    
                    <div class="product-actions">
                        ${qtyInCart > 0 ? `
                            <div class="card-quantity-controls">
                                <button class="card-qty-btn decrease-qty-btn" data-product-id="${item.id}">-</button>
                                <span class="card-qty-value">${qtyInCart}</span>
                                <button class="card-qty-btn increase-qty-btn" data-product-id="${item.id}">+</button>
                            </div>
                        ` : `
                            <button class="add-to-cart-btn direct-add-btn" data-product-id="${item.id}">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                                </svg>
                                <span>إضافة للسلة</span>
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Replace unicode emojis in products grid
    replaceEmojisInDOM(productsGrid);

    // Attach actions
    attachCardActionListeners();
}

// --- Attach Actions to Catalog Cards ---
function attachCardActionListeners() {
    // Add to Cart (Direct or with Customizer)
    document.querySelectorAll(".direct-add-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.currentTarget.getAttribute("data-product-id");
            const product = MENU_DATA.find(p => p.id === id);
            
            if (product.customizable) {
                openCustomizerModal(product);
            } else {
                addToCart(product);
            }
        });
    });

    // Increase Quantity
    document.querySelectorAll(".increase-qty-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.currentTarget.getAttribute("data-product-id");
            const cartItem = cart.find(ci => ci.id === id && !ci.hasCustomOptions);
            if (cartItem) {
                updateCartItemQuantity(cartItem.uniqueId, cartItem.qty + 1);
            }
        });
    });

    // Decrease Quantity
    document.querySelectorAll(".decrease-qty-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.currentTarget.getAttribute("data-product-id");
            const cartItem = cart.find(ci => ci.id === id && !ci.hasCustomOptions);
            if (cartItem) {
                updateCartItemQuantity(cartItem.uniqueId, cartItem.qty - 1);
            }
        });
    });
}

// --- Open Customization Modal ---
function openCustomizerModal(product) {
    itemBeingCustomized = product;
    
    // Set UI
    customizerImg.src = product.image;
    customizerImg.alt = product.nameAr;
    customizerName.textContent = product.nameAr;
    customizerPrice.innerHTML = `${product.price}<span>ج.م</span>`;
    
    // Render Toppings
    toppingsContainer.innerHTML = product.toppings.map((topping, index) => `
        <div class="topping-option">
            <input type="checkbox" id="topping-${index}" class="topping-checkbox" value="${topping}">
            <label for="topping-${index}" class="topping-label">
                <span>${topping}</span>
                <span class="topping-indicator"></span>
            </label>
        </div>
    `).join('');
    
    // Replace emojis in topping modal
    replaceEmojisInDOM(toppingModal);
    
    toppingModal.classList.add("active");
}

function closeCustomizerModal() {
    toppingModal.classList.remove("active");
    itemBeingCustomized = null;
}

// --- Add to Cart Logic ---
function addToCart(product, selectedToppings = []) {
    const isCustom = selectedToppings.length > 0;
    
    // For custom items, uniqueId combines product.id and selected toppings
    const toppingString = selectedToppings.sort().join(", ");
    const uniqueId = isCustom ? `${product.id}-[${toppingString}]` : product.id;

    const existingItem = cart.find(item => item.uniqueId === uniqueId);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({
            uniqueId: uniqueId,
            id: product.id,
            nameAr: product.nameAr,
            price: product.price,
            image: product.image,
            hasCustomOptions: isCustom,
            toppings: selectedToppings,
            qty: 1
        });
    }

    saveCartToStorage();
    updateCartUI();
    renderProducts(); // Refresh buttons on catalog
    
    showToast(`تمت إضافة "${product.nameAr}" بنجاح 🤤`, "success");
}

// --- Update Cart Quantity ---
function updateCartItemQuantity(uniqueId, newQty) {
    const itemIndex = cart.findIndex(item => item.uniqueId === uniqueId);
    
    if (itemIndex === -1) return;

    if (newQty <= 0) {
        // Remove item
        const removedItemName = cart[itemIndex].nameAr;
        cart.splice(itemIndex, 1);
        showToast(`تم حذف "${removedItemName}" من السلة`);
    } else {
        cart[itemIndex].qty = newQty;
    }

    saveCartToStorage();
    updateCartUI();
    renderProducts();
}

// --- Update Cart Drawer UI ---
function updateCartUI() {
    // 1. Update Cart Badge Counters
    const totalCount = cart.reduce((total, item) => total + item.qty, 0);
    cartCount.textContent = totalCount;
    floatingCartCount.textContent = totalCount;
    
    // 2. Render Cart Items List
    if (cart.length === 0) {
        cartItemsList.innerHTML = `
            <div class="empty-cart-state">
                <span class="empty-cart-icon">🛒</span>
                <p class="empty-cart-text">سلة المشتريات فارغة تماماً!</p>
                <p style="font-size: 13px;">تصفح المنيو وأضف أصنافك المفضلة لطلبها بسرعة.</p>
            </div>
        `;
        checkoutBtn.disabled = true;
    } else {
        checkoutBtn.disabled = false;
        cartItemsList.innerHTML = cart.map(item => `
            <div class="cart-item">
                <button class="cart-item-remove-btn" data-unique-id="${item.uniqueId}" aria-label="حذف">
                    <svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                </button>
                <div class="cart-item-img-container">
                    <img src="${item.image}" alt="${item.nameAr}" class="cart-item-img">
                </div>
                <div class="cart-item-details">
                    <div>
                        <h4 class="cart-item-title">${item.nameAr}</h4>
                        ${item.hasCustomOptions ? `<div class="cart-item-options">الإضافات: ${item.toppings.join('، ')}</div>` : ''}
                    </div>
                    <div class="cart-item-bottom">
                        <div class="cart-item-price">${item.price * item.qty}<span>ج.م</span></div>
                        
                        <div class="cart-item-qty-controls">
                            <button class="cart-qty-btn-sm dec-cart-item" data-unique-id="${item.uniqueId}">-</button>
                            <span class="cart-qty-val-sm">${item.qty}</span>
                            <button class="cart-qty-btn-sm inc-cart-item" data-unique-id="${item.uniqueId}">+</button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        // Attach cart drawer items listeners
        attachCartItemsListeners();
    }

    // 3. Update Totals
    const subtotal = cart.reduce((total, item) => total + (item.price * item.qty), 0);
    cartSubtotal.innerHTML = `${subtotal}<span> ج.م</span>`;
    cartTotal.innerHTML = `${subtotal}<span> ج.م</span>`;
    
    // Update floating cart price if element exists
    if (floatingCartPrice) {
        floatingCartPrice.textContent = subtotal;
    }
    
    // Toggle active class on mobile floating cart bar based on count
    if (floatingCartBtn) {
        floatingCartBtn.classList.toggle("active", totalCount > 0);
    }

    // Replace unicode emojis in cart list
    replaceEmojisInDOM(cartItemsList);
}

// --- Attach Action Listeners to Cart Drawer Items ---
function attachCartItemsListeners() {
    // Increase quantity in cart
    document.querySelectorAll(".inc-cart-item").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const uniqueId = e.currentTarget.getAttribute("data-unique-id");
            const item = cart.find(ci => ci.uniqueId === uniqueId);
            if (item) {
                updateCartItemQuantity(uniqueId, item.qty + 1);
            }
        });
    });

    // Decrease quantity in cart
    document.querySelectorAll(".dec-cart-item").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const uniqueId = e.currentTarget.getAttribute("data-unique-id");
            const item = cart.find(ci => ci.uniqueId === uniqueId);
            if (item) {
                updateCartItemQuantity(uniqueId, item.qty - 1);
            }
        });
    });

    // Remove item fully
    document.querySelectorAll(".cart-item-remove-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const uniqueId = e.currentTarget.getAttribute("data-unique-id");
            updateCartItemQuantity(uniqueId, 0);
        });
    });
}

// --- Setup Event Listeners ---
function setupEventListeners() {
    // Header Scroll Shadow effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add("scrolled");
        } else {
            mainHeader.classList.remove("scrolled");
        }
    });

    // Cart Drawer Toggle
    const openCart = () => {
        cartDrawer.classList.add("active");
        cartOverlay.classList.add("active");
    };

    const closeCart = () => {
        cartDrawer.classList.remove("active");
        cartOverlay.classList.remove("active");
    };

    cartToggleBtn.addEventListener("click", openCart);
    floatingCartBtn.addEventListener("click", openCart);
    cartCloseBtn.addEventListener("click", closeCart);
    cartOverlay.addEventListener("click", closeCart);

    // Search bar functionality
    const handleSearch = (e) => {
        searchQuery = e.target.value;
        renderProducts();
    };

    searchInput.addEventListener("input", handleSearch);

    // Customizer Modal Actions
    toppingModalCloseBtn.addEventListener("click", closeCustomizerModal);
    toppingModalBackdrop.addEventListener("click", closeCustomizerModal);

    confirmToppingBtn.addEventListener("click", () => {
        if (!itemBeingCustomized) return;
        
        // Collect checked checkboxes
        const checkedToppings = [];
        document.querySelectorAll(".topping-checkbox:checked").forEach(checkbox => {
            checkedToppings.push(checkbox.value);
        });

        if (checkedToppings.length === 0) {
            // Ask for confirmation to add without toppings
            if (!confirm("هل ترغب في إضافة الصنف بدون أي توبينج إضافي؟")) {
                return;
            }
        }

        addToCart(itemBeingCustomized, checkedToppings);
        closeCustomizerModal();
    });

    // Checkout Modal Actions
    checkoutBtn.addEventListener("click", () => {
        // Close cart drawer first
        closeCart();
        
        // Render Order Summary in Checkout Modal
        renderCheckoutSummary();
        
        // Show Checkout Dialog
        checkoutModal.classList.add("active");
    });

    checkoutModalCloseBtn.addEventListener("click", () => {
        checkoutModal.classList.remove("active");
    });

    checkoutModalBackdrop.addEventListener("click", () => {
        checkoutModal.classList.remove("active");
    });

    // Toggle Address Input based on Delivery Type
    orderTypeRadios.forEach(radio => {
        radio.addEventListener("change", (e) => {
            if (e.target.value === "pickup") {
                deliveryAddressGroup.style.display = "none";
                clientAddress.required = false;
            } else {
                deliveryAddressGroup.style.display = "block";
                clientAddress.required = true;
            }
        });
    });

    // Submit Checkout form -> Generate WhatsApp Order
    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // 1. Gather Information
        const name = document.getElementById("clientName").value.trim();
        const phone = document.getElementById("clientPhone").value.trim();
        const type = document.querySelector('input[name="orderType"]:checked').value;
        const address = type === "delivery" ? clientAddress.value.trim() : "استلام من الفرع";
        const notes = document.getElementById("orderNotes").value.trim();
        
        // 2. Build WhatsApp Message
        const orderText = generateWhatsAppMessage(name, phone, type, address, notes);
        
        // 3. Format URL
        const encodedText = encodeURIComponent(orderText);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodedText}`;
        
        // 4. Open WhatsApp
        window.open(whatsappUrl, "_blank");

        // 5. Success Flow
        showToast("جاري توجيهك للواتساب لتأكيد طلبك... \uD83D\uDE9A", "success");
        
        // Clear Cart
        cart = [];
        saveCartToStorage();
        updateCartUI();
        renderProducts();
        
        // Hide Modal
        checkoutModal.classList.remove("active");
    });
}

// --- Render Order Summary in Checkout Modal ---
function renderCheckoutSummary() {
    const summaryItemsContainer = document.getElementById("checkoutSummaryItems");
    const totalValContainer = document.getElementById("checkoutTotalVal");
    
    if (!summaryItemsContainer || !totalValContainer) return;
    
    if (cart.length === 0) {
        summaryItemsContainer.innerHTML = '<div style="font-size: 13px; color: var(--text-muted); text-align: center;">سلة المشتريات فارغة</div>';
        totalValContainer.textContent = "0 ج.م";
        return;
    }
    
    summaryItemsContainer.innerHTML = cart.map(item => `
        <div style="display: flex; justify-content: space-between; font-size: 13px; color: var(--text-color); border-bottom: 1px dashed rgba(61, 35, 20, 0.05); padding-bottom: 6px;">
            <span>• ${item.qty}x ${item.nameAr} ${item.hasCustomOptions ? `<span style="font-size: 11px; color: var(--secondary-dark);">(إضافات: ${item.toppings.join('، ')})</span>` : ''}</span>
            <span style="font-family: var(--font-en); font-weight: 700;">${item.price * item.qty} ج.م</span>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    totalValContainer.textContent = `${total} ج.م`;
    
    replaceEmojisInDOM(summaryItemsContainer);
}

// --- WhatsApp Message Builder ---
function generateWhatsAppMessage(name, phone, type, address, notes) {
    const divider = "------------------------------------------";
    let message = `*\uD83D\uDCE3 طلب جديد من EMY BAKES \uD83C\uDF69\u2728*\n${divider}\n`;
    message += `\uD83D\uDC64 *الاسم:* ${name}\n`;
    message += `\uD83D\uDCDE *رقم الموبايل:* ${phone}\n`;
    message += `\uD83D\uDE9A *نوع الطلب:* ${type === "delivery" ? "توصيل دليفري" : "استلام من الفرع"}\n`;
    
    if (type === "delivery") {
        message += `\uD83D\uDCCD *العنوان:* ${address}\n`;
    }
    
    message += `${divider}\n*\uD83D\uDED2 الأصناف المطلوبة:*\n`;

    cart.forEach(item => {
        message += `• ${item.qty}x ${item.nameAr}`;
        if (item.hasCustomOptions) {
            message += ` (إضافات: ${item.toppings.join('، ')})`;
        }
        message += ` ➔ _${item.price * item.qty} ج.م_\n`;
    });

    message += `${divider}\n`;
    
    if (notes) {
        message += `\uD83D\uDCDD *ملاحظات:* ${notes}\n${divider}\n`;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    message += `\uD83D\uDCB0 *المجموع الإجمالي:* *${total} ج.م*\n\n`;
    message += `شكراً لاختياركم *Emy Bakes*! يرجى إرسال هذه الرسالة لتأكيد الطلب وسيتم مراجعته وتجهيزه فوراً. \uD83D\uDC96`;

    return message;
}

// --- LocalStorage Cart helpers ---
function saveCartToStorage() {
    localStorage.setItem("emy_bakes_cart", JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem("emy_bakes_cart");
    if (saved) {
        try {
            cart = JSON.parse(saved);
            updateCartUI();
            renderProducts();
        } catch (e) {
            console.error("Failed to parse cart from storage", e);
            cart = [];
        }
    }
}

// --- Toast Notifications Helper ---
function showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    
    toast.className = `toast ${type}`;
    
    const icon = type === "success" 
        ? `<span class="toast-icon success">✓</span>` 
        : `<span class="toast-icon">ℹ</span>`;
        
    toast.innerHTML = `
        ${icon}
        <div>${message}</div>
    `;

    container.appendChild(toast);
    
    // Replace emojis in the toast
    replaceEmojisInDOM(toast);
    
    // Trigger animation
    setTimeout(() => {
        toast.classList.add("active");
    }, 50);

    // Auto-destruct after 3.5 seconds
    setTimeout(() => {
        toast.classList.remove("active");
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3500);
}

// --- Apple Emoji Replacement Helper ---
function replaceEmojisInDOM(node) {
    if (!node) return;
    const emojiRegex = /\p{Extended_Pictographic}/gu;
    
    if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        if (emojiRegex.test(text)) {
            const span = document.createElement("span");
            span.className = "apple-emoji-wrapper";
            span.innerHTML = text.replace(emojiRegex, (match) => {
                const codePoint = Array.from(match)
                    .map(c => c.codePointAt(0).toString(16))
                    .filter(cp => cp !== 'fe0f')
                    .join('-');
                return `<img class="apple-emoji" src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/${codePoint}.png" alt="${match}">`;
            });
            node.parentNode.replaceChild(span, node);
        }
    } else if (node.nodeType === Node.ELEMENT_NODE && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE' && !node.classList.contains("apple-emoji-wrapper")) {
        const children = Array.from(node.childNodes);
        for (let child of children) {
            replaceEmojisInDOM(child);
        }
    }
}
