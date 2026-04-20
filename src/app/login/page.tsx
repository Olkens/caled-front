"use client";

import { LoginForm } from "@/components/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-2">Zaloguj się</h1>
        <p className="text-gray-500 text-sm text-center mb-6">
          Witaj z powrotem!
        </p>

        <LoginForm />

        <p className="text-sm text-center text-gray-500 mt-6">
          Nie masz konta?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Zarejestruj się
          </Link>
        </p>
      </div>
    </main>
  );
}
