"use client"
import React, { createContext, useContext, useState, useEffect } from "react"

// AuthContext yaratish
const AuthContext = createContext(undefined)

// AuthProvider komponenti
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  // Foydalanuvchi ma'lumotlarini localStorage dan olish
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  // Kirish funksiyasi
  const login = async email => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      if (parsedUser.email === email) {
        setUser(parsedUser)
        return
      }
    }
    
    // Yangi foydalanuvchi yaratish
    const newUser = { id: "1", name: email.split("@")[0], email: email }
    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
  }

  // Ro'yxatdan o'tish funksiyasi
  const register = async (name, email) => {
    const newUser = { id: "1", name: name, email: email }
    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
  }

  // Chiqish funksiyasi
  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// useAuth hook'ini yaratish
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
