"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "@/app/context/CartContext"
import { useAuth } from "@/app/context/AuthContext"
import { useRouter } from "next/navigation"

export default function Savat() {
  const { cart, removeFromCart, updateQuantity } = useCart()
  const { toast } = useToast()
  const { user } = useAuth()
  const router = useRouter()

  const handleRemoveFromCart = id => {
    removeFromCart(id)
    toast({
      title: "Mahsulot o'chirildi",
      description: "Mahsulot savatdan muvaffaqiyatli o'chirildi."
    })
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleBuyurtma = () => {
    if (!user) {
      toast({
        title: "Xatolik",
        description: "Iltimos, avval tizimga kiring",
        variant: "destructive"
      })
      router.push("/kirish")
      return
    }
    // TODO: Implement order placement logic
    router.push("/tolov")
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-8">Savat</h1>
        <p className="text-xl mb-4">
          Savatni ko&apos;rish uchun tizimga kirishingiz kerak.
        </p>
        <Button onClick={() => router.push("/kirish")}>Kirish</Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Savat</h1>
      {cart.length === 0 ? (
        <p className="text-center text-xl">Savatingiz bo&apos;sh</p>
      ) : (
        <>
          <AnimatePresence>
            {cart.map(item => (
              <motion.div
                key={`${item.id}-${item.size}-${item.color}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow-md rounded-lg p-4 mb-4"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-gray-600">
                      {item.price.toLocaleString()} so&apos;m
                    </p>
                    <p className="text-gray-600">
                      O&apos;lcham: {item.size}, Rang: {item.color}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="ml-4"
                    >
                      O&apos;chirish
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="mt-8 text-right">
            <p className="text-2xl font-bold">
              Jami: {total.toLocaleString()} so&apos;m
            </p>
            <Button size="lg" className="mt-4" onClick={handleBuyurtma}>
              Buyurtma berish
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
