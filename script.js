document.addEventListener("DOMContentLoaded", () => {
    // {
    //     "name" : "",
    //     "logo" : "",
    //     "products" : 
    // }
    const data = [
        {
            "name" : "Racing Boy",
            "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQndfsaawxPyDrsJOH80UWVgVQ3YjblpdVzmw&s",
            "categories" : [
                {
                    "name" : "Velg",
                    "logo" : "https://rcb.com/wp-content/uploads/2021/09/sp811-1-jpg.webp",
                    "products" : [
                        {
                          "name": "SP811",
                          "logo": "https://rcb.com/wp-content/uploads/2021/09/sp811-1-jpg.webp",
                          "link1": "https://tokopedia.link/5xBYQxGd4Jb",
                          "link2": "https://id.shp.ee/9PrBY92"
                        },
                        {
                          "name": "Alloy rim/Daun Velg 160-17 ",
                          "logo": "https://rcb.com/wp-content/uploads/2021/09/alloy-7-jpg.webp",
                          "link1": "https://tokopedia.link/lbf6Xh1U5Jb",
                          "link2": "https://id.shp.ee/fqxFDeD"
                        }
                       ]
                },
                {
                    "name" : "Shock",
                    "logo" : "https://rcb.com/wp-content/uploads/2023/03/mb2-plus-b.png",
                    "products" : [
                        {
                            "name" : "Monoshock 330mm Mb-2+",
                            "logo" : "https://rcb.com/wp-content/uploads/2023/03/mb2-plus-b.png",
                            "link1" : "https://tokopedia.link/5chYgiTY5Jb",
                            "link2" : "https://id.shp.ee/SNusKzH"
                        }
                    ]
                },
                {
                    "name" : "Grip",
                    "logo" : "https://rcb.com/wp-content/uploads/2021/09/HG55-red.png",
                    "products" : [
                        {
                            "name": "HG55",
                            "logo": "https://rcb.com/wp-content/uploads/2021/09/HG55-red.png",
                            "link1": "https://tokopedia.link/Valo18Sf7Jb",
                            "link2": "https://id.shp.ee/VqchX9Z "
                        },
                        {
                            "name": "HG66",
                            "logo": "https://rcb.com/wp-content/uploads/2021/09/HG66-yellow.png",
                            "link1": "https://tokopedia.link/i06qQ5qg7Jb",
                            "link2": "https://id.shp.ee/qfRWea8 "
                        },
                        {
                            "name": "HG77",
                            "logo": "https://rcb.com/wp-content/uploads/2023/12/DSC08228.png",
                            "link1": "https://tokopedia.link/coWRBuHg7Jb",
                            "link2": "https://id.shp.ee/mp5wava "
                        },
                        {
                            "name": "Nagamaki",
                            "logo": "https://rcb.com/wp-content/uploads/2023/11/01HG020B.png",
                            "link1": "https://tokopedia.link/A2M6euph7Jb",
                            "link2": "https://id.shp.ee/NGUpDeN "
                        },
                        {
                            "name": "AHG66",
                            "logo": "https://rcb.com/wp-content/uploads/2021/09/AHG66-black.png",
                            "link1": "https://tokopedia.link/LFuL12ki7Jb",
                            "link2": "https://id.shp.ee/AzHStKJ "
                        },
                        {
                            "name": "AHG13",
                            "logo": "https://ph-test-11.slatic.net/p/4a05c40c67c0a304118ffee394c5e296.jpg",
                            "link1": "https://tokopedia.link/BPSy8x2i7Jb",
                            "link2": "https://id.shp.ee/LmDdptA "
                        },
                        {
                            "name": "AHG11",
                            "logo": "https://www.racingboy.com.ph/wp-content/uploads/2018/04/AHG-11-497x300.jpg",
                            "link1": "https://tokopedia.link/waztjMWl7Jb",
                            "link2": "https://id.shp.ee/JGDvSeB "
                        },
                        {
                            "name": "AHG55",
                            "logo": "https://www.racingboy.com.ph/wp-content/uploads/2018/05/01HG010-red-1024x978-314x300.jpg",
                            "link1": "https://tokopedia.link/zFX5oZcm7Jb",
                            "link2": "https://id.shp.ee/JjW3bWt "
                        },
                        {
                            "name": "AHG88",
                            "logo": "https://img.lazcdn.com/g/p/29c343ba9892788af034724bfa8572e1.png_720x720q80.png",
                            "link1": "https://tokopedia.link/yv1WaOem7Jb",
                            "link2": "https://id.shp.ee/UN3Deif "
                        },
                        {
                            "name": "HG305",
                            "logo": "https://www.racingboy.com.ph/wp-content/uploads/2018/04/tbolt-6-419x300.jpg",
                            "link1": "https://tokopedia.link/Q6mzyDgm7Jb",
                            "link2": "https://id.shp.ee/gBww6qz "
                        },
                        {
                            "name": "HG0845",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98p-lw2ee9u9cqou6c",
                            "link1": "https://tokopedia.link/IYeNWBim7Jb",
                            "link2": "https://id.shp.ee/sxcB962 "
                        },
                        {
                            "name": "Grip Karet 201",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98t-lw2ee9u9bc4e14",
                            "link1": "https://tokopedia.link/pvE8hkkm7Jb",
                            "link2": "https://id.shp.ee/1t2V43J "
                        },
                        {
                            "name": "Grip Karet 303",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98s-lw2ee9u9e59a32",
                            "link1": "https://tokopedia.link/IUXfnoHj7Jb",
                            "link2": "https://id.shp.ee/kN6UgXj"
                        }
                    ]
                },
                {
                    "name" : "Handle",
                    "logo" : "https://down-id.img.susercontent.com/file/0a8ba64d3f3d0849077da80211ec1d51",
                    "products" : [
                        {
                            "name": "Alloy Lever Handle set S3",
                            "logo": "https://down-id.img.susercontent.com/file/0a8ba64d3f3d0849077da80211ec1d51",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-handle-s3-series-nmax-old-nmax-new-r25-vixion-r15-mxking-adv-pcx160cbs-satria-fu-fi-gsx-150-aerox",
                            "link2": "https://shopee.co.id/product/277671211/16323097638/ "
                        },
                        {
                            "name": "Alloy Lever Handle E+",
                            "logo": "https://s1.bukalapak.com/img/69997548103/s-400-400/data.jpeg.webp",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-allo-lever-handle-e-nmax-new-nmax-old-beat-fi-cbs-beat-street-cbs",
                            "link2": "https://shopee.co.id/product/277671211/29501702048/"
                        }
                    ]
                },
                {
                    "name" : "Caliper",
                    "logo" : "https://gc-img.webike.net/@wid-shop/images/products/rcb/rcb-brake-caliper-s-red_TM.jpg",
                    "products" : [
                        {
                            "name": "Brake Caliper S Series",
                            "logo": "https://gc-img.webike.net/@wid-shop/images/products/rcb/rcb-brake-caliper-s-red_TM.jpg",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-brake-caliper-s-series-mxking-vixion-nmax-mx-new-beat-vario",
                            "link2": "https://shopee.co.id/product/277671211/9549842762/ "
                        },
                        {
                            "name": "Brake Caliper E Series",
                            "logo": "https://rcb.com/wp-content/uploads/2023/08/e-series-brake-caliper-red.jpg",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-caliper-e-series-nmax-new-old-satria-fu-beat-scoopy-vario-mio-mx",
                            "link2": "https://shopee.co.id/product/277671211/19683369356/ "
                        },
                        {
                            "name": "Brake Caliper R1 4 Piston",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7qul1-ljxov0f8q5gqd8",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-caliper-r1-kiri-4-piston-merah-silver",
                            "link2": "https://shopee.co.id/product/277671211/26651783933/ "
                        },
                        {
                            "name": "Brake Caliper S2 Series Sat fu fi",
                            "logo": "https://gc-img.webike.net/@wid-shop/images/products/rcb/rcb-brake-caliper-s55-black.jpg",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-caliper-s2-caliper-belakang-satria-fu-fi",
                            "link2": "https://shopee.co.id/product/277671211/27651796866/"
                        }
                    ]
                },
                {
                    "name" : "Master",
                    "logo" : "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/2/16/79fda230-08da-425f-b289-97d5f3b1b163.png",
                    "products" : [
                        {
                            "name": "Master Brake Pump S1 Series",
                            "logo": "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/2/16/79fda230-08da-425f-b289-97d5f3b1b163.png",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-master-brake-pump-s1-kanan-14mm",
                            "link2": "https://shopee.co.id/product/277671211/6939390359/ "
                        },
                        {
                            "name": "Master Brake Pump E2 Series ",
                            "logo": "https://gc-img.webike.net/@wid-shop/images/products/rcb/rcb-brake-pump-e2_TM.jpg",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-master-brake-pump-e2-kiri-kanan",
                            "link2": "https://shopee.co.id/product/277671211/6939516815/ "
                        },
                        {
                            "name": "Master Brake Pump E2 Cable Only",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134601-7qul6-liowkmk2lva1aa",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-master-brake-pump-e-2-cable-only-kopling-hitam",
                            "link2": "https://shopee.co.id/product/277671211/6141201513/ "
                        },
                        {
                            "name": "Master Brake Pump E3 Series",
                            "logo": "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/2/16/bc68f122-44e8-4c52-8366-e25a59b85cd0.png",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-master-brake-pump-e3-12-7mm-kanan-kiri",
                            "link2": "https://shopee.co.id/product/277671211/4047609263/ "
                        },
                        {
                            "name": "Master Brake Pump S1 Cable Only",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98t-lw5602960hlq60",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-master-brake-pump-s1-kiri-kopling",
                            "link2": "https://shopee.co.id/product/277671211/4039403609/ "
                        },
                        {
                            "name": "Rear Brake Pump E2 Series",
                            "logo": "https://rcb.com/wp-content/uploads/2021/09/GRT-master-brake-pump-black.png",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-master-rem-belakang-rear-brake-pump-e12-hitam",
                            "link2": "https://shopee.co.id/product/277671211/6539782491/ "
                        },
                        {
                            "name": "Rear Brake Pump S1 Series",
                            "logo": "https://rcb.com/wp-content/uploads/2021/09/S1-Rear-GRT-blue.png",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-master-rem-belakang-rear-brake-pump-s1-merah-silver-biru-14mm",
                            "link2": "https://shopee.co.id/product/277671211/18390714352/ "
                        },
                        {
                            "name": "Master Brake Pump E2 Reservoir",
                            "logo": "https://rcb.com/wp-content/uploads/2021/09/E2-Reservoir-black.png",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-master-brake-pump-e2-reservoir",
                            "link2": "https://shopee.co.id/product/277671211/5143107275/ "
                        },
                        {
                            "name": "Clutch Pump S1 Series",
                            "logo": "https://rcb.com/wp-content/uploads/2021/09/S1-Clutch-Pump-gold.png",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-clutch-pump-s1-14mm-gold",
                            "link2": "https://shopee.co.id/product/277671211/6359611890/"
                        }
                    ]
                }
            ]
        },
        {
            "name" : "DAYTONA",
            "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6-KepIr5Q3xhAuRkCcknEtw_1zqJznbWWg&s",
            "categories" : [
                {
                    "name" : "Grip",
                    "logo" : "https://down-id.img.susercontent.com/file/id-11134207-7r992-lrxyn43a9jd511",
                    "products" : [
                        {
                            "name": "Octagon Series",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r992-lrxyn43a9jd511",
                            "link1": "https://tokopedia.link/pXaEat5o7Jb",
                            "link2": "https://id.shp.ee/oCFrVwD "
                        },
                        {
                            "name": "Road Race Racing",
                            "logo": "https://s0.bukalapak.com/img/03491791003/s-463-463/data.jpeg.webp",
                            "link1": "https://tokopedia.link/wfFkGwrp7Jb",
                            "link2": "https://id.shp.ee/ZSRzXSY "
                        },
                        {
                            "name": "Dual Compound",
                            "logo": "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/11/187fd744-3dd1-4fc6-8cbf-05571872faec.png",
                            "link1": "https://tokopedia.link/nI4yzetp7Jb",
                            "link2": "https://id.shp.ee/QDHwine "
                        },
                        {
                            "name": "Full Black",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98x-loqj99nnguwc63_tn.webp",
                            "link1": "https://tokopedia.link/lbyeGOup7Jb",
                            "link2": "https://id.shp.ee/B78VwCM"
                        }
                    ]
                }
            ]
        },
        {
            "name" : "Kenda",
            "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5lKWaGlPI_HZFj7mdS7Ha3S6_dzmqFIeeQ&s",
            "categories" : [
                {
                    "name" : "Velg",
                    "logo" : "https://cdn.discordapp.com/attachments/1246347054813548635/1246347633237295125/sp811-1-jpg.png?ex=665c0f2f&is=665abdaf&hm=84a258f10538fad537891f695bf2ea6a9dcda13e43ab0fcfeece82d4f4edd4d1&",
                    "products" : [
                        {
                            "name" : "SP811",
                            "logo" : "https://cdn.discordapp.com/attachments/1246347054813548635/1246347633237295125/sp811-1-jpg.png?ex=665c0f2f&is=665abdaf&hm=84a258f10538fad537891f695bf2ea6a9dcda13e43ab0fcfeece82d4f4edd4d1&",
                            "link1" : "https://id.shp.ee/9PrBY92",
                            "link2" : "https://tokopedia.link/5xBYQxGd4Jb"
                        }
                    ]
                },
                {
                    "name" : "Non-Tubbles",
                    "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyui0JD_TDqY8nUnxR2JA4Fb71tdNc5WkTTA&s",
                    "products" : [
                        {
                            "name": "K772",
                            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyui0JD_TDqY8nUnxR2JA4Fb71tdNc5WkTTA&s",
                            "link1": "https://tokopedia.link/vSrjqSpF7Jb",
                            "link2": "https://id.shp.ee/A1v92NN "
                        },
                        {
                            "name": "K488",
                            "logo": "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/15/196c2df6-eaa1-45e3-bf61-4d3be4e415bc.jpg",
                            "link1": "https://tokopedia.link/KUBPVOjF7Jb",
                            "link2": "https://id.shp.ee/9sXy5t7"
                        }
                    ]
                }
            ]
        },
        {
            "name" : "XPress",
            "logo" : "https://down-id.img.susercontent.com/file/5c91f7e007df53d657d80140066f607b",
            "categories" : [
                {
                    "name" : "Velg",
                    "logo" : "https://cdn.discordapp.com/attachments/1246347054813548635/1246347633237295125/sp811-1-jpg.png?ex=665c0f2f&is=665abdaf&hm=84a258f10538fad537891f695bf2ea6a9dcda13e43ab0fcfeece82d4f4edd4d1&",
                    "products" : [
                        {
                            "name" : "SP811",
                            "logo" : "https://cdn.discordapp.com/attachments/1246347054813548635/1246347633237295125/sp811-1-jpg.png?ex=665c0f2f&is=665abdaf&hm=84a258f10538fad537891f695bf2ea6a9dcda13e43ab0fcfeece82d4f4edd4d1&",
                            "link1" : "https://id.shp.ee/9PrBY92",
                            "link2" : "https://tokopedia.link/5xBYQxGd4Jb"
                        }
                    ]
                }
            ]
        },
        {
            "name" : "DYNAVOLT",
            "logo" : "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/aef5e73842ab3b1c1cf70ea653720b88.jpg",
            "categories" : [
                {
                    "name" : "Velg",
                    "logo" : "https://cdn.discordapp.com/attachments/1246347054813548635/1246347633237295125/sp811-1-jpg.png?ex=665c0f2f&is=665abdaf&hm=84a258f10538fad537891f695bf2ea6a9dcda13e43ab0fcfeece82d4f4edd4d1&",
                    "products" : [
                        {
                            "name" : "SP811",
                            "logo" : "https://cdn.discordapp.com/attachments/1246347054813548635/1246347633237295125/sp811-1-jpg.png?ex=665c0f2f&is=665abdaf&hm=84a258f10538fad537891f695bf2ea6a9dcda13e43ab0fcfeece82d4f4edd4d1&",
                            "link1" : "https://id.shp.ee/9PrBY92",
                            "link2" : "https://tokopedia.link/5xBYQxGd4Jb"
                        }
                    ]
                }
            ]
        },
        {
            "name" : "FAG Bearing",
            "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTHMzKth0PmMvSMgmov9pn_fh0Xmb890O8Q&s",
            "categories" : [
                {
                    "name" : "Bearing",
                    "logo" : "https://laz-img-sg.alicdn.com/p/e0effb1d8a7b90cc59b2bee164ef3125.jpg",
                    "products" : [
                        {
                            "name": "Bantalan 6004",
                            "logo": "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/11/21/af9f5982-a0f0-464a-9958-1164cc83e806.jpg",
                            "link1": "https://tokopedia.link/c9rlDEMn7Jb",
                            "link2": "https://tokopedia.link/i06qQ5qg7Jb "
                        },
                        {
                            "name": "Bantalan 6302",
                            "logo": "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/11/21/af9f5982-a0f0-464a-9958-1164cc83e806.jpg",
                            "link1": "https://tokopedia.link/iOX4V8Jn7Jb",
                            "link2": "https://id.shp.ee/G2oh4gJ "
                        },
                        {
                            "name": "Bantalan 6202",
                            "logo": "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/11/21/af9f5982-a0f0-464a-9958-1164cc83e806.jpg",
                            "link1": "https://tokopedia.link/huq2MxLn7Jb",
                            "link2": "https://id.shp.ee/2vkY2Z8"
                        }
                    ]
                }
            ]
        }
    ];

    function getItems(idx1, idx2) {
        const items = document.querySelector(".items");
        items.remove();

        const new_items = document.createElement("div");
        new_items.classList.add("items");

        const path = document.querySelector(".path");
        path.remove();

        const new_path = document.createElement("div");

        const divider = document.createElement("h2");
        const divider2 = document.createElement("h2");
        const cat_path = document.createElement("h1");
        const item_path = document.createElement("h1");
        divider.innerHTML = "|";
        divider2.innerHTML = "|";
        cat_path.innerHTML = data[idx1].name;
        item_path.innerHTML = data[idx1].categories[idx2].name;

        cat_path.onclick = function() {getCategories(idx1)};
        item_path.onclick = function() {getItems(idx1, idx2)};

        new_path.append(divider);
        new_path.append(cat_path);
        new_path.append(divider2);
        new_path.append(item_path);

        new_path.classList.add("path");

        document.querySelector(".paths").append(new_path);

        data[idx1].categories[idx2].products.forEach(product => {
            const a = document.createElement("a");
            const logo = document.createElement("img");
            const h1 = document.createElement("h1");
            const div = document.createElement("div");
            const tokopediaa = document.createElement("a");
            const tokopedia = document.createElement("img");
            const shopeea = document.createElement("a");
            const shopee = document.createElement("img");
            
            div.classList.add("links");
            a.classList.add("item");
            logo.src = product.logo;
            h1.innerHTML = product.name;
            tokopedia.src = "./tokopedia.png";
            shopee.src = "./shopee.png";
            tokopediaa.href = product.link1;
            shopeea.href = product.link2;
            tokopediaa.target = "_blank";
            shopeea.target = "_blank";

            tokopediaa.append(tokopedia);
            shopeea.append(shopee);
            div.append(tokopediaa);
            div.append(shopeea);

            a.append(logo);
            a.append(h1);
            a.append(div);
            a.style.cursor = "unset";
            new_items.append(a);
        })
        document.querySelector(".container").append(new_items);
    }

    function getCategories(idx) {
        const items = document.querySelector(".items");
        items.remove();
        
        const new_items = document.createElement("div");
        new_items.classList.add("items");

        const path = document.querySelector(".path");
        path.remove();

        const new_path = document.createElement("div");

        const divider = document.createElement("h2");
        const cat_path = document.createElement("h1");
        divider.innerHTML = " |";
        cat_path.innerHTML = data[idx].name;

        cat_path.onclick = function() {getCategories(idx)};

        new_path.append(divider);
        new_path.append(cat_path);

        new_path.classList.add("path");

        document.querySelector(".paths").append(new_path);
        


        var counter = 0;
        data[idx].categories.forEach(category => {
            const a = document.createElement("a");
            const logo = document.createElement("img");
            const h1 = document.createElement("h1");
            const div = document.createElement("div");

            div.classList.add("gradient");
            a.classList.add("item");
            logo.src = category.logo;
            h1.innerHTML = category.name;

            a.onmouseover = function() {
                div.style.opacity = "1";
                h1.style.color = "white";
            }
            a.onmouseleave = function() {
                div.style.opacity = "0";
                h1.style.color = "#EB3932";
            }

            const temp = counter;
            a.onclick = function() {getItems(idx, temp)};

            a.append(div);
            a.append(logo);
            a.append(h1);
            a.style.cursor = "pointer";
            new_items.append(a);
            counter += 1;
        })
        document.querySelector(".container").append(new_items);
    }

    function getBrands() {
        const items = document.querySelector(".items");
        items.remove();
        
        const new_items = document.createElement("div");
        new_items.classList.add("items");

        const path = document.querySelector(".path");
        path.remove();

        const new_path = document.createElement("div");
        new_path.classList.add("path");

        document.querySelector(".paths").append(new_path);

        var counter = 0;
        data.forEach(brand => {
            const a = document.createElement("a");
            const logo = document.createElement("img");
            const h1 = document.createElement("h1");
            const div = document.createElement("div");

            div.classList.add("gradient");
            a.classList.add("item");
            logo.src = brand.logo;
            h1.innerHTML = brand.name;

            a.onmouseover = function() {
                div.style.opacity = "1";
                h1.style.color = "white";
            }
            a.onmouseleave = function() {
                div.style.opacity = "0";
                h1.style.color = "#EB3932";
            }
            
            const temp = counter;
            a.onclick = function() {getCategories(temp)};

            a.append(div);
            a.append(logo);
            a.append(h1);
            a.style.cursor = "pointer";
            new_items.append(a);
            counter += 1;
        })
        document.querySelector(".container").append(new_items);
    }

    getBrands();

    document.querySelector(".products").onclick = function() {getBrands()};
})