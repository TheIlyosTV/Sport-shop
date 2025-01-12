"use client"
import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Mahsulotlar() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState("")
  const [search, setSearch] = useState("")

  const fetchProducts = useCallback(async () => {
    const res = await fetch(
      `/api/products?category=${category}&search=${search}`
    )
    const data = await res.json()
    setProducts(data)
  }, [category, search])

  useEffect(() => {
    fetchProducts()
  }, [category, search, fetchProducts])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Mahsulotlar</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          placeholder="Mahsulot qidirish..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="md:w-1/2"
        />
        <Select onValueChange={setCategory}>
          <SelectTrigger className="md:w-1/2">
            <SelectValue placeholder="Kategoriya tanlang" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Barcha kategoriyalar</SelectItem>
            <SelectItem value="Futbol">Futbol</SelectItem>
            <SelectItem value="Basketbol">Basketbol</SelectItem>
            <SelectItem value="Tennis">Tennis</SelectItem>
            <SelectItem value="Voleybol">Voleybol</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {products.map(product => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="mx-auto rounded-md"
                />
                <p className="text-center mt-4 text-xl font-semibold">
                  {product.price.toLocaleString()} so&apos;m
                </p>
                <p className="text-center text-gray-500">{product.category}</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild>
                  <Link href={`/mahsulot/${product.id}`}>Batafsil</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
