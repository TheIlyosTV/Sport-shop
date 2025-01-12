'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function BuyurtmaTasdiqlandi() {
  const [orderNumber, setOrderNumber] = useState('')

  useEffect(() => {
    setOrderNumber(Math.floor(100000 + Math.random() * 900000).toString())
  }, [])

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle className="mx-auto text-green-500" size={100} />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-4xl font-bold mt-8 mb-4"
      >
        Buyurtmangiz tasdiqlandi!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-xl mb-8"
      >
        Buyurtma raqamingiz: <span className="font-bold">{orderNumber}</span>
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="space-y-4"
      >
        <p className="text-gray-600">
          Buyurtmangiz haqida batafsil ma&apos;lumotni elektron pochtangizga yubordik.
        </p>
        <p className="text-gray-600">
          Buyurtmangiz holati haqida yangilanishlarni SMS orqali olasiz.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="mt-12"
      >
        <Button asChild>
          <Link href="/mahsulotlar">Xarid qilishni davom ettirish</Link>
        </Button>
      </motion.div>
    </div>
  )
}
