import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sport Anjomlari</h3>
            <p>Sifatli sport anjomlari va kiyimlarini onlayn xarid qiling.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Tezkor havolalar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link href="/mahsulotlar" className="hover:text-blue-400">
                  Mahsulotlar
                </Link>
              </li>
              <li>
                <Link href="/biz-haqimizda" className="hover:text-blue-400">
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link href="/aloqa" className="hover:text-blue-400">
                  Aloqa
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Bizni kuzatib boring</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Facebook />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Instagram />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} Sport Anjomlari. Barcha huquqlar
            himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  )
}
