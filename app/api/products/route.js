import { NextResponse } from "next/server"

const products = [
  {
    id: 1,
    name: "Futbol ko'ylagi",
    price: 250000,
    category: "Futbol",
    image: "/images/futbol-koylagi.png",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Qizil", "Ko'k", "Oq"],
    description:
      "Yuqori sifatli materialdan tayyorlangan professional futbol ko'ylagi."
  },
  {
    id: 2,
    name: "Basketbol ko'ylagi",
    price: 300000,
    category: "Basketbol",
    image: "/images/basketbol-koylagi.png",
    sizes: ["M", "L", "XL"],
    colors: ["Qizil", "Ko'k", "Oq"],
    description:
      "Ergonomik dizayn va yumshoq materiallardan tayyorlangan basketbol ko'ylagi."
  },
  {
    id: 3,
    name: "Tennis ko'ylagi",
    price: 350000,
    category: "Tennis",
    image: "/images/tennis-koylagi.png",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Yashil", "Oq", "Ko'k"],
    description:
      "Tennis o'yinlari uchun maxsus tayyorlangan engil va nafas olishga imkon beruvchi ko'ylak."
  },
  {
    id: 4,
    name: "Voleybol ko'ylagi",
    price: 270000,
    category: "Voleybol",
    image: "/images/voleybol-koylagi.png",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Oq", "Sariq", "Ko'k"],
    description:
      "Voleybol o'yinlari uchun mos keladigan, tez quriydigan materialdan tayyorlangan ko'ylak."
  },
  {
    id: 5,
    name: "Futbol butsi",
    price: 450000,
    category: "Futbol",
    image: "/images/futbol-butsi.png",
    sizes: ["38", "39", "40", "41", "42"],
    colors: ["Qora", "Oq", "Yashil"],
    description:
      "Sifatli teridan tayyorlangan futbol butsilari, maydonda yuqori samaradorlikni ta'minlaydi."
  },
  {
    id: 6,
    name: "Basketbol butsi",
    price: 500000,
    category: "Basketbol",
    image: "/images/basketbol-butsi.png",
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Qora", "Qizil", "Oq"],
    description: "Basketbol o'yinlari uchun qulay va mustahkam butsilari."
  },
  {
    id: 7,
    name: "Tennis butsi",
    price: 550000,
    category: "Tennis",
    image: "/images/tennis-butsi.png",
    sizes: ["38", "39", "40", "41", "42"],
    colors: ["Oq", "Ko'k", "Yashil"],
    description:
      "Yengil va mustahkam tennis butsilari, maydonni yaxshi ushlab turadi."
  },
  {
    id: 8,
    name: "Voleybol butsi",
    price: 350000,
    category: "Voleybol",
    image: "/images/voleybol-butsi.png",
    sizes: ["39", "40", "41", "42"],
    colors: ["Qora", "Ko'k", "Oq"],
    description:
      "Voleybol uchun maxsus butsilari, sportchilarga qulay va bardoshli."
  },
  {
    id: 9,
    name: "Futbol raqami",
    price: 150000,
    category: "Futbol",
    image: "/images/futbol-raqami.png",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Qizil", "Oq", "Ko'k"],
    description:
      "Futbolchilar uchun maxsus dizaynda tayyorlangan futbol raqami."
  },
  {
    id: 10,
    name: "Basketbol raqami",
    price: 180000,
    category: "Basketbol",
    image: "/images/basketbol-raqami.png",
    sizes: ["M", "L", "XL"],
    colors: ["Qizil", "Ko'k", "Oq"],
    description: "Basketbol o'yinchilari uchun maxsus raqamli forma."
  },
  {
    id: 11,
    name: "Tennis raketkasi",
    price: 600000,
    category: "Tennis",
    image: "/images/tennis-raketkasi.png",
    sizes: ["Standart"],
    colors: ["Oq", "Ko'k"],
    description:
      "Yuqori sifatli materialdan tayyorlangan tennis raketkasi, uzoq xizmat qiladi."
  },

  {
    id: 12,
    name: "Futbol to'pi",
    price: 250000,
    category: "Futbol",
    image: "/images/futbol-topi.png",
    sizes: ["Standart"],
    colors: ["Oq", "Yashil"],
    description:
      "Futbol o'yinlari uchun maxsus to'p, uzoq vaqt davomida foydalanish mumkin."
  },
  {
    id: 13,
    name: "Basketbol to'pi",
    price: 300000,
    category: "Basketbol",
    image: "/images/basketbol-topi.png",
    sizes: ["Standart"],
    colors: ["Oq", "Qizil"],
    description:
      "Basketbol uchun maxsus, yuqori sifatli materiallardan tayyorlangan to'p."
  },
  {
    id: 14,
    name: "Tennis to'pi",
    price: 150000,
    category: "Tennis",
    image: "/images/tennis-topi.png",
    sizes: ["Standart"],
    colors: ["Yashil"],
    description:
      "Tennis o'yinlari uchun maxsus tayyorlangan engil va uzoq xizmat qiluvchi to'p."
  },
  {
    id: 15,
    name: "Voleybol to'pi",
    price: 200000,
    category: "Voleybol",
    image: "/images/voleybol-topi.png",
    sizes: ["Standart"],
    colors: ["Oq", "Ko'k"],
    description: "Voleybol o'yinlari uchun mustahkam va qulay to'p."
  },
  {
    id: 16,
    name: "Futbol sumkasi",
    price: 180000,
    category: "Futbol",
    image: "/images/futbol-sumkasi.png",
    sizes: ["Standart"],
    colors: ["Qora", "Qizil"],
    description: "Futbol uchun kerakli jihozlarni tashish uchun qulay sumka."
  },
  {
    id: 17,
    name: "Basketbol sumkasi",
    price: 200000,
    category: "Basketbol",
    image: "/images/basketbol-sumkasi.png",
    sizes: ["Standart"],
    colors: ["Qora", "Oq"],
    description:
      "Basketbol o'yinlari uchun jihozlarni tashishga mo'ljallangan sumka."
  },
  {
    id: 18,
    name: "Tennis sumkasi",
    price: 220000,
    category: "Tennis",
    image: "/images/tennis-sumkasi.png",
    sizes: ["Standart"],
    colors: ["Ko'k", "Oq"],
    description:
      "Tennis raketkasi va boshqa jihozlarni qulay joylash uchun sumka."
  },
  {
    id: 19,
    name: "Voleybol sumkasi",
    price: 190000,
    category: "Voleybol",
    image: "/images/voleybol-sumkasi.png",
    sizes: ["Standart"],
    colors: ["Ko'k", "Sariq"],
    description:
      "Voleybol uchun jihozlarni olib yurishga mo'ljallangan qulay sumka."
  },
  {
    id: 20,
    name: "Sport soati",
    price: 600000,
    category: "Aksessuarlar",
    image: "/images/sport-soati.png",
    sizes: ["Standart"],
    colors: ["Qora", "Ko'k", "Oq"],
    description:
      "Sport uchun maxsus tayyorlangan, suvga chidamli va zamonaviy soat."
  },
  {
    id: 21,
    name: "Sport boshligi",
    price: 80000,
    category: "Aksessuarlar",
    image: "/images/sport-boshligi.png",
    sizes: ["Standart"],
    colors: ["Qizil", "Ko'k", "Oq"],
    description: "Sport o'yinlari uchun maxsus bosh kiyimi."
  },
  {
    id: 22,
    name: "Sport quloqchinlari",
    price: 350000,
    category: "Aksessuarlar",
    image: "/images/sport-quloqchinlari.png",
    sizes: ["Standart"],
    colors: ["Qora", "Oq"],
    description:
      "Sportchilar uchun maxsus dizaynga ega, qulay va yuqori sifatli quloqchinlar."
  },
  {
    id: 23,
    name: "Futbol darvozasi uchun to'r",
    price: 200000,
    category: "Futbol",
    image: "/images/varata-setka.png",
    sizes: ["Standart"],
    colors: ["Oq"],
    description: "Futbol darvozasi uchun yuqori sifatli va chidamli to'r."
  }
]

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")
  const category = searchParams.get("category")
  const search = searchParams.get("search")

  let filteredProducts = products

  if (id) {
    filteredProducts = filteredProducts.filter(
      product => product.id === parseInt(id)
    )
  }

  if (category) {
    filteredProducts = filteredProducts.filter(
      product => product.category.toLowerCase() === category.toLowerCase()
    )
  }

  if (search) {
    filteredProducts = filteredProducts.filter(
      product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
    )
  }

  return NextResponse.json(filteredProducts)
}
