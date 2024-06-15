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
                    "logo" : "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lw9g1vt9c2d99d",
                    "products" : [
                        {
                            "name": "Monoshock Mb-2+ Series",
                            "logo": "https://rcb.com/wp-content/uploads/2023/03/mb2-plus-b.png",
                            "link1": "https://tokopedia.link/5chYgiTY5Jb",
                            "link2": "https://id.shp.ee/SNusKzH "
                        },
                        {
                            "name": "Monoshock A2 Pink Series",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98x-lw6kwka110ne9f",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-monoshok-a2-series-pink-305mm-330mm",
                            "link2": "https://shopee.co.id/product/277671211/18525734608/ "
                        },
                        {
                            "name": "Monoshock Mb-2 Pink Series",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98y-lw6kwka12f7ud6",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-monoshok-mb-2-series-pink-305mm-330mm",
                            "link2": "https://shopee.co.id/product/277671211/21825745281/ "
                        },
                        {
                            "name": "Shock Mb-2 Pink Series",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98z-lw6kwka13tsa71",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-shock-mb-2-pink-series-305mm-nmax-new-aerox-new",
                            "link2": "https://shopee.co.id/product/277671211/29851924670/ "
                        },
                        {
                            "name": "Shock A2 Series",
                            "logo": "https://rcb.com/wp-content/uploads/2021/09/a2-series-red-black.png",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-shock-a2-series-275mm-320mm-335mm-merah-hitam-titan",
                            "link2": "https://shopee.co.id/product/277671211/25531856859/ "
                        },
                        {
                            "name": "Monoshock A2 Series",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r992-lw9g1vt9ga2l72",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-monoshok-a2-series-330mm-305mm-vario125-150-beat-mio-sporty-fino-freego-fazzio-gear-mio-j-mio-s-black-red",
                            "link2": "https://shopee.co.id/product/277671211/27552125516/ "
                        },
                        {
                            "name": "Shock E Series",
                            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLu6FxOMNtyz09aMLSQE0agz1nAEkDh6ejA&s",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-shok-e-series-335mm-blade-revo-supra-rx-king",
                            "link2": "https://shopee.co.id/product/277671211/4946234951/ "
                        },
                        {
                            "name": "Shock Flow Pro Series",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lw9g1vt9c2d99d",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-shock-flow-pro-nmax-old-nmax-new-aerox-pcx-160",
                            "link2": "https://shopee.co.id/product/277671211/26502119548/ "
                        },
                        {
                            "name": "Monoshock Flow Pro Series",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98p-lw9g1vt9j37h69",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-monoshok-flow-pro-330mm-305mm-340mm-series-mio-sporty-vario-125-vario-150-beat-fi-beat-karbu-soul-gt-mio-s-mio-j-fino-scoopy-fi-vario-160-mio-m3-freego-fazzio-gear",
                            "link2": "https://shopee.co.id/product/277671211/25910727843/ "
                        },
                        {
                            "name": "Shock Mb-2 Series",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98y-lw9g1vt9nawt8a",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-shock-mb-2-series-275mm-335mm-nmax-new-aerox-new-red-yellow-titan-hitam-black-series",
                            "link2": "https://shopee.co.id/product/277671211/9497245746/ "
                        },
                        {
                            "name": "Monoshock Mb-2 Series",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98q-lw9kfjh9ermj80",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-monoshok-mb-2-series-mio-vario-305mm-330mm-beat-vario-scoopy-mio-sporty-soul-gt-freego-fazzio-gear-mio-j",
                            "link2": "https://shopee.co.id/product/277671211/5946631303/ "
                        },
                        {
                            "name": "Shock Mb-2+ Series",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r991-lw9kfjh9izbvac",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-shock-mb-2-nmax-old-330mm-275mm-335mm-red-titan-black-series",
                            "link2": "https://shopee.co.id/product/277671211/11598905924/ "
                        },
                        {
                            "name": "Shock VD Black Series",
                            "logo": "https://down-id.img.susercontent.com/file/e130beeff6ff27d69f1802901bb31355",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-shock-vd-black-series-namx-old-nmax-new-aerox-new-335mm-rx-king-megapro-verza-supra-supra-x-125-revo",
                            "link2": "https://shopee.co.id/product/277671211/24631947076/ "
                        },
                        {
                            "name": "Shock Vs Series",
                            "logo": "https://rcb.com/wp-content/uploads/2021/09/VS-red.png",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-shock-vs-series-nmax-old-aerox-275mm-335mm-red-black-series",
                            "link2": "https://shopee.co.id/product/277671211/26552290982/ "
                        },
                        {
                            "name": "Monoshock Vs Series",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98u-lwcapp9hdoa287",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-monoshock-vs-series-305mm-330mm-beat-vario-mio-sporty-freego-fazzio-gear-mio-j-fino-soul-gt-scoopy-genio",
                            "link2": "https://shopee.co.id/product/277671211/26852302433/ "
                        },
                        {
                            "name": "Monoshock VE Series",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r990-lwcapp9hjajuac",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-monoshock-ve-black-series",
                            "link2": "https://shopee.co.id/product/277671211/6965377064/"
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
                },
                {
                    "name" : "Handle Bar",
                    "logo" : "https://www.motomodz.com/cdn/shop/files/rcb-handlebar-taper-28-6-mm-x-series-low-moto-modz-2.png?v=1706518613",
                    "products" : [
                        {
                            "name": "Handle Bar Mount Nmax",
                            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYaISHrYegeUEk3O0qE2V__1sLh9C7qAB4fFn2rLZbf_Yj7QSFNg5J29QWEtZQ5tGg04&usqp=CAU",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-handle-bar-mount-nmax-28-6mm-re-black-gold-silver",
                            "link2": "https://shopee.co.id/product/277671211/6841208370/ "
                        },
                        {
                            "name": "Handlebar end Balancer M5",
                            "logo": "https://images.tokopedia.net/img/cache/700/VqbcmM/2024/4/24/1b9f5833-1aee-4b41-8c7e-853b8f593b28.jpg",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-jalu-stang-hitam-merah-silver",
                            "link2": "https://shopee.co.id/product/277671211/18387555575/ "
                        },
                        {
                            "name": "Bar Mount 28.6",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lw6kwka0sl8q78",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-bar-mount-universal-28-6mm",
                            "link2": "https://shopee.co.id/product/277671211/17703250016/ "
                        },
                        {
                            "name": "Cover Raiser KLX",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lw6kwka0zm2y50",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-cover-raiser-bar-mount-cover-klx-150",
                            "link2": "https://shopee.co.id/product/277671211/4247655078/ "
                        },
                        {
                            "name": "Handle Bar Taper 28.6mm (low)",
                            "logo": "https://www.motomodz.com/cdn/shop/files/rcb-handlebar-taper-28-6-mm-x-series-low-moto-modz-2.png?v=1706518613",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-handle-bar-stang-28-6mm-low-mera-biru-oren-silver-gold",
                            "link2": "https://shopee.co.id/product/277671211/8139314901/ "
                        },
                        {
                            "name": "Stang Jepit R25",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lw6kwka0y7iid9",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-stang-jepit-r25",
                            "link2": "https://shopee.co.id/product/277671211/5343848566/"
                        }
                    ]
                },
                {
                    "name" : "Cakram",
                    "logo" : "https://cf.shopee.co.id/file/fef89c3a69445902745168a10cde1ffe",
                    "products" : [
                        {
                            "name": "E Series",
                            "logo": "https://cf.shopee.co.id/file/fef89c3a69445902745168a10cde1ffe",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-piringan-cakram-depan-e-series-nmax-old-mio-vario-beat-mx-king",
                            "link2": "https://shopee.co.id/product/277671211/26602502514/ "
                        },
                        {
                            "name": "E2 Series",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98v-lwf7j6vlm7u671",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-piringan-cakram-e2-series-depan-belakang-nmax-old-vario-160-nmax-old",
                            "link2": "https://shopee.co.id/product/277671211/25526223532/ "
                        },
                        {
                            "name": "S Series",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7qul3-lk6ae38iyy4je9",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/rcb-piringan-cakram-s-series-nmax-old-mx-king",
                            "link2": "https://shopee.co.id/product/277671211/27802679424/"
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
                },
                {
                    "name" : "Cop Busi",
                    "logo" : "https://down-id.img.susercontent.com/file/id-11134207-7r98u-ls29ls6gs85la7",
                    "products" : [
                        {
                            "name": "Cop Busi 90°",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98u-ls29ls6gs85la7",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/daytona-5239-kop-busi-90",
                            "link2": "https://shopee.co.id/product/277671211/24366119400/"
                        }
                    ]
                },
                {
                    "name" : "Slider",
                    "logo" : "https://down-id.img.susercontent.com/file/id-11134207-7r98p-lw9kfjh9lsgrac",
                    "products" : [
                        {
                            "name": "Slider Piece Pulley",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98p-lw9kfjh9lsgrac",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/daytona-slider-piece-pulley-beat-fi-esp-vario110-scoopy-beat-genio-16-22-vario125-150-pcx-adv-nmax-aerox-mio125",
                            "link2 ": "https://shopee.co.id/product/277671211/29252151385/"
                        }
                    ]
                },
                {
                    "name" : "Bearing Wheel",
                    "logo" : "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/3/11/4cf009ff-fb8b-4807-9a63-a0bf7e3f25e8.jpg",
                    "products" : [
                        {
                            "name": "Bearing Wheel",
                            "logo": "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/3/11/4cf009ff-fb8b-4807-9a63-a0bf7e3f25e8.jpg",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/daytona-bearing-wheel-6201-6203-6300-6301-6204",
                            "link2 ": "https://shopee.co.id/product/277671211/18688918092/"
                        }
                    ]
                },
                {
                    "name" : "Clutch Shoe",
                    "logo" : "https://down-id.img.susercontent.com/file/id-11134207-7r98x-lwdr5ypmgk3067",
                    "products" : [
                        {
                            "name": "Clutch Shoe",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98x-lwdr5ypmgk3067",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/daytona-kampas-ganda-nmax-vario-125-150-aerox-beat-mio-mio-j-soul-gt-scoopy-all-new-beat-beat-street",
                            "link2": "https://shopee.co.id/product/277671211/29702299260/"
                        }
                    ]
                },
                {
                    "name" : "Air Filter",
                    "logo" : "https://media.monotaro.id/mid01/big/Otomotif%2C%20Truk%20%26%20Sepeda%20Motor/Onderdil%2C%20Aksesoris%20Motor/Perlengkapan%20Motor/Aksesoris%20Intake/Daytona%20Ultra%20Nano%20Air%20Filter/Daytona%20Ultra%20Nano%20Air%20Filter%20Mio%2C%20dll%201pc/S003432341-3.jpg",
                    "products" : [
                        {
                            "name": "Air Filter",
                            "logo": "https://media.monotaro.id/mid01/big/Otomotif%2C%20Truk%20%26%20Sepeda%20Motor/Onderdil%2C%20Aksesoris%20Motor/Perlengkapan%20Motor/Aksesoris%20Intake/Daytona%20Ultra%20Nano%20Air%20Filter/Daytona%20Ultra%20Nano%20Air%20Filter%20Mio%2C%20dll%201pc/S003432341-3.jpg",
                            "link1": "https://tokopedia.link/8fJXa9ROpKb",
                            "link2": "https://shopee.co.id/product/277671211/29702844617/"
                        }
                    ]
                },
                {
                    "name" : "Busi Splug",
                    "logo" : "https://s4.bukalapak.com/img/4579788648/s-400-400/data.png.webp",
                    "products" : [
                        {
                            "name": "Busi Splug Double Iridium",
                            "logo": "https://s4.bukalapak.com/img/4579788648/s-400-400/data.png.webp",
                            "link1": "https://tokopedia.link/mibusE7mrKb",
                            "link2": "https://shopee.co.id/product/277671211/26352927878/ "
                        },
                        {
                            "name": "Busi Splug Tapered",
                            "logo": "https://img.ws.mms.shopee.co.id/sg-11134201-22100-t3mrlepbhgive4",
                            "link1": "https://tokopedia.link/zkhIaVSjrKb",
                            "link2": "https://shopee.co.id/product/277671211/26452927109/"
                        }
                    ]
                },
                {
                    "name" : "Gas Spontan",
                    "logo" : "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lwglemir9b1a39",
                    "products" : [
                        {
                            "name": "Gas Spontan",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lwglemir9b1a39",
                            "link1": "https://www.tokopedia.com/maxspeedracingshopp/daytona-gas-spontan-2-kabel-matic-dan-bebek",
                            "link2": "https://shopee.co.id/product/277671211/20574793886/"
                        }
                    ]
                },
                {
                    "name" : "Mangkok",
                    "logo" : "https://down-id.img.susercontent.com/file/id-11134207-7r990-lwdr5ypmhyngbf",
                    "products" : [
                        {
                            "name": "Mangkok Kampas Ganda",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-7r990-lwdr5ypmhyngbf",
                            "link1": "https://tokopedia.link/LrgLs4FZkKb",
                            "link2": "https://shopee.co.id/product/277671211/12678840561/"
                        }
                    ]
                },
                {
                    "name" : "Per Kopling",
                    "logo" : "https://down-id.img.susercontent.com/file/id-11134207-23020-zef8jy944snv16",
                    "products" : [
                        {
                            "name": "Per Kopling",
                            "logo": "https://down-id.img.susercontent.com/file/id-11134207-23020-zef8jy944snv16",
                            "link1": "https://tokopedia.link/mJ3aGpOZkKb",
                            "link2": "https://shopee.co.id/product/277671211/18849585560/"
                        }
                    ]
                },
                {
                    "name" : "Brake Shoe",
                    "logo" : "https://id-live-01.slatic.net/p/74d4fd7cecd3521a16618223422ac627.jpg",
                    "products" : [
                        {
                            "name": "Brake Shoe",
                            "logo": "https://id-live-01.slatic.net/p/74d4fd7cecd3521a16618223422ac627.jpg",
                            "link1": "https://tokopedia.link/mZPe4T0VnKb",
                            "link2": "https://shopee.co.id/product/277671211/24907768843/"
                        }
                    ]
                },
                {
                    "name" : "Komstir",
                    "logo" : "https://filebroker-cdn.lazada.co.id/kf/S103d349f3aa0483abd1184be4ef85692y.jpg",
                    "products" : [
                        {
                            "name": "Komstir",
                            "logo": "https://filebroker-cdn.lazada.co.id/kf/S103d349f3aa0483abd1184be4ef85692y.jpg",
                            "link1": "https://tokopedia.link/LJyVUjAYnKb",
                            "link2": "https://shopee.co.id/product/277671211/21250605288/"
                        }
                    ]
                },
                {
                    "name" : "Pulley",
                    "logo" : "https://id-live-01.slatic.net/p/74d4fd7cecd3521a16618223422ac627.jpg",
                    "products" : [
                        {
                            "name": "Pulley",
                            "logo": "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/9/5/a150ddaf-b27f-4d58-83bb-f424248697cc.jpg",
                            "link1": "https://tokopedia.link/7LTviItZnKb",
                            "link2": "https://shopee.co.id/product/277671211/20490908900/"
                        }
                    ]
                },
                
            ]
        },
        {
            "name" : "Kenda",
            "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5lKWaGlPI_HZFj7mdS7Ha3S6_dzmqFIeeQ&s",
            "categories" : [
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
                },
                {
                    "name" : "Tubbles",
                    "logo" : "https://down-id.img.susercontent.com/file/86216f24a51cfa640163af8e476cd827",
                    "products" : [
                        {
                            "name": "K488",
                            "logo": "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/15/196c2df6-eaa1-45e3-bf61-4d3be4e415bc.jpg",
                            "link1": "https://tokopedia.link/KUBPVOjF7Jb",
                            "link2": "https://id.shp.ee/9sXy5t7 "
                        },
                        {
                            "name": "K6007",
                            "logo": "https://down-id.img.susercontent.com/file/86216f24a51cfa640163af8e476cd827",
                            "link1": "https://tokopedia.link/9npUrlmF7Jb",
                            "link2": "https://id.shp.ee/1t7Wxcr "
                        },
                        {
                            "name": "K492",
                            "logo": "https://www.chongaik.com.sg/2675-superlarge_default/kenda-motorcycle-tyres-made-in-vietnam-k492.jpg",
                            "link1": "https://tokopedia.link/1TPOL3nF7Jb",
                            "link2": "https://id.shp.ee/92BQLRT"
                        }
                    ]
                }
            ]
        },
        {
            "name" : "XPress",
            "logo" : "https://down-id.img.susercontent.com/file/5c91f7e007df53d657d80140066f607b",
            "categories" : [
                
            ]
        },
        {
            "name" : "DYNAVOLT",
            "logo" : "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/aef5e73842ab3b1c1cf70ea653720b88.jpg",
            "categories" : [
                
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