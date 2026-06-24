"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [message, setMessage] = useState("Verifying your email...");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setMessage("Missing verification token.");
        return;
      }

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify-email?token=${token}`
        );

        const data = await response.json();

        if (!response.ok) {
          setMessage(data.message || "Email verification failed.");
          setSuccess(false);
          return;
        }

        setMessage("Email verified successfully. You can now log in.");
        setSuccess(true);
      } catch (error) {
        setMessage("Something went wrong while verifying your email.");
        setSuccess(false);
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0B0B] px-6 text-white">
      <div className="max-w-md rounded-3xl border border-[#E6A11A]/30 bg-white/10 p-8 text-center shadow-xl">
        <h1 className="text-4xl font-black text-[#E6A11A]">
          {success ? "Email Verified" : "Verify Email"}
        </h1>

        <p className="mt-4 text-[#F3E7D3]">{message}</p>

        {success && (
          <a
            href="/login"
            className="mt-6 inline-block rounded-full bg-[#E6A11A] px-6 py-3 font-bold text-black hover:bg-yellow-500"
          >
            Go to Login
          </a>
        )}
      </div>
    </main>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#0B0B0B] px-6 text-white">
          <p className="text-[#F3E7D3]">Loading verification page...</p>
        </main>
      }
    >
      <VerifyEmailContent />
    </Suspense>
  );
}