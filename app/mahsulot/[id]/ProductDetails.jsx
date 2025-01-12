"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast"; // shadcn/ui toast
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { useCart } from "@/app/context/CartContext";
import { useAuth } from "@/app/context/AuthContext";

export default function ProductDetails({ id }) {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const { toast } = useToast(); // toast kutubxonasi
  const router = useRouter();
  const { addToCart } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products?id=${id}`);
        const data = await res.json();
        setProduct(data[0]);
      } catch (error) {
        console.error("Mahsulotni olishda xatolik:", error);
        toast({
          title: "Xatolik",
          description: "Mahsulotni olishda xatolik yuz berdi.",
          variant: "destructive",
        });
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!user) {
      toast({
        title: "Xatolik",
        description: "Iltimos, avval tizimga kiring",
        variant: "destructive",
        position: "bottom-right", // pastga, o'ng tomonga joylashtirish
      });
      router.push("/kirish");
      return;
    }

    if (!product || !selectedSize || !selectedColor) {
      toast({
        title: "Xatolik",
        description: "Iltimos, o'lcham va rangni tanlang",
        variant: "destructive",
        position: "bottom-right", // pastga, o'ng tomonga joylashtirish
      });
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      size: selectedSize,
      color: selectedColor,
    });

    toast({
      title: "Mahsulot savatga qo'shildi",
      description: `${product.name} (O'lcham: ${selectedSize}, Rang: ${selectedColor}) savatga muvaffaqiyatli qo'shildi.`,
      position: "bottom-right", // pastga, o'ng tomonga joylashtirish
    });
  };

  const buyNow = () => {
    if (!user) {
      toast({
        title: "Xatolik",
        description: "Iltimos, avval tizimga kiring",
        variant: "destructive",
        position: "bottom-right", // pastga, o'ng tomonga joylashtirish
      });
      router.push("/kirish");
      return;
    }

    if (!selectedSize || !selectedColor) {
      toast({
        title: "Xatolik",
        description: "Iltimos, o'lcham va rangni tanlang",
        variant: "destructive",
        position: "bottom-right", // pastga, o'ng tomonga joylashtirish
      });
      return;
    }
    router.push("/tolov");
  };

  if (!product) return <div>Yuklanmoqda...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-8"
      >
        <div className="md:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">
            {product.price.toLocaleString()} so&apos;m
          </p>
          <p className="text-gray-600 mb-4">Kategoriya: {product.category}</p>
          <p className="mb-6">{product.description}</p>
          <div className="space-y-4 mb-6">
            <Select onValueChange={setSelectedSize}>
              <SelectTrigger>
                <SelectValue placeholder="O'lchamni tanlang" />
              </SelectTrigger>
              <SelectContent>
                {product.sizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={setSelectedColor}>
              <SelectTrigger>
                <SelectValue placeholder="Rangni tanlang" />
              </SelectTrigger>
              <SelectContent>
                {product.colors.map((color) => (
                  <SelectItem key={color} value={color}>
                    {color}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex space-x-4">
            <Button onClick={handleAddToCart}>Savatga qo&apos;shish</Button>
            <Button onClick={buyNow} variant="outline">
              Hozir sotib olish
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
