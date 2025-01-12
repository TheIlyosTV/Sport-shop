"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ShoppingBag, Truck, CreditCard, RotateCcw } from "lucide-react"
import { useAuth } from "./context/AuthContext"

export default function Home() {
  const { user } = useAuth()

  const features = [
    {
      icon: ShoppingBag,
      title: "Keng assortiment",
      description: "1000 dan ortiq sport anjomlari"
    },
    {
      icon: Truck,
      title: "Tezkor yetkazib berish",
      description: "O'zbekiston bo'ylab 1-3 kun ichida"
    },
    {
      icon: CreditCard,
      title: "Qulay to'lov",
      description: "Naqd pul, karta va onlayn to'lov"
    },
    {
      icon: RotateCcw,
      title: "Qaytarish kafolati",
      description: "14 kun ichida qaytarish imkoniyati"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Sport Anjomlari Savdosi
        </h1>
        <p className="text-2xl mb-8 text-gray-600">
          Sifatli va zamonaviy sport anjomlari bizning do&apos;konimizda
        </p>
        {user ? (
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-teal-400 text-white"
          >
            <Link href="/mahsulotlar">Mahsulotlarni ko&apos;rish</Link>
          </Button>
        ) : (
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-teal-400 text-white"
          >
            <Link href="/kirish">Kirish</Link>
          </Button>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Bizning brendlar</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {["Nike", "Adidas", "Puma", "Under Armour", "Reebok"].map(
            (brand, index) => (
              <div
                key={index}
                className="bg-gray-200 px-6 py-3 rounded-full text-gray-700 font-semibold"
              >
                {brand}
              </div>
            )
          )}
        </div>
      </motion.div>
    </div>
  )
}
