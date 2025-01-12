import { Suspense } from "react"
import ProductDetails from "./ProductDetails"

export default async function MahsulotTafsilotlari({ params }) {
  // params ni await qilamiz
  const { id } = await params

  return (
    <Suspense fallback={<div>Yuklanmoqda...</div>}>
      <ProductDetails id={id} />
    </Suspense>
  )
}

