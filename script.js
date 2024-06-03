document.addEventListener("DOMContentLoaded", () => {
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
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98p-lw2ee9u98izi91",
                            "link1": "https://tokopedia.link/IYeNWBim7Jb",
                            "link2": "https://id.shp.ee/sxcB962 "
                        },
                        {
                            "name": "Grip Karet 201",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lw2ee9u99xjy49",
                            "link1": "https://tokopedia.link/pvE8hkkm7Jb",
                            "link2": "https://id.shp.ee/1t2V43J "
                        },
                        {
                            "name": "Grip Karet 303",
                            "logo": "https://ae05.alicdn.com/kf/H6ecf4dd8f3f849faa8439e30ca76dec6r/Universal-Motorcycle-Rubber-Handlebar-Handle-Bar-Grip-Motorbike-For-HONDA-XRV750-XRV-750-XRV750-L-Y.jpg",
                            "link1": "https://tokopedia.link/IUXfnoHj7Jb",
                            "link2": "https://id.shp.ee/kN6UgXj"
                        }
                    ]
                },
                // {
                //     "name" : "",
                //     "logo" : "",
                //     "products" : ,
                // }
            ]
        },
        {
            "name" : "DAYTONA",
            "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6-KepIr5Q3xhAuRkCcknEtw_1zqJznbWWg&s",
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