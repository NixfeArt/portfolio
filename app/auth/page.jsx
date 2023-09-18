'use client'
import Authentication from "@/components/auth/auth"
import { AuthProvider } from "@/context/auth-context"

export default function Auth() {
  return (
    <AuthProvider>
      <Authentication />
    </AuthProvider>
  )
}