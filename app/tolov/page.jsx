"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function TolovSahifasi() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async event => {
    event.preventDefault()
    setIsLoading(true)

    // TODO: Implement actual payment logic here
    // This is just a mock implementation
    await new Promise(resolve => setTimeout(resolve, 2000))

    toast({
      title: "To'lov muvaffaqiyatli amalga oshirildi",
      description: "Sizning buyurtmangiz qabul qilindi."
    })

    setIsLoading(false)
    router.push("/buyurtma-tasdiqlandi")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">To&apos;lov</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="space-y-4">
          <Input type="text" placeholder="Karta raqami" required />
          <div className="grid grid-cols-2 gap-4">
            <Input type="text" placeholder="Amal qilish muddati" required />
            <Input type="text" placeholder="CVV" required />
          </div>
          <Input type="text" placeholder="Karta egasining ismi" required />
        </div>
        <Button type="submit" className="w-full mt-6" disabled={isLoading}>
          {isLoading
            ? "To'lov amalga oshirilmoqda..."
            : "To'lovni amalga oshirish"}
        </Button>
      </form>
    </div>
  )
}
