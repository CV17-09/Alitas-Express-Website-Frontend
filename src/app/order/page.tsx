"use client";

import { useState } from "react";

export default function OrderPage() {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [flavor, setFlavor] = useState("Classic");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/orders`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customerName,
            customerEmail,
            phoneNumber,
            deliveryAddress,
            flavor,
            quantity,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Order submitted successfully!");

        setCustomerName("");
        setCustomerEmail("");
        setPhoneNumber("");
        setDeliveryAddress("");
        setFlavor("Classic");
        setQuantity(1);
      } else {
        setMessage(data.message || "Failed to submit order.");
      }
    } catch (error) {
      setMessage("Unable to connect to server.");
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-[#E6A11A]/40 bg-white/5 p-8">
        <h1 className="text-5xl font-black text-[#E6A11A]">
          Place Your Order
        </h1>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
          <input
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Customer Name"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3"
            required
          />

          <input
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            placeholder="Email Address"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3"
            required
          />

          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3"
            required
          />

          <input
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            placeholder="Delivery Address"
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3"
            required
          />

          <select
            value={flavor}
            onChange={(e) => setFlavor(e.target.value)}
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3"
          >
            <option>Classic</option>
            <option>BBQ</option>
            <option>Buffalo</option>
            <option>Hot</option>
            <option>Lemon Pepper</option>
            <option>Mango Habanero</option>
            <option>Teriyaki</option>
          </select>

          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3"
            required
          />

          <button
            type="submit"
            className="rounded-xl bg-[#A61E1E] px-6 py-4 text-xl font-black uppercase hover:bg-red-800"
          >
            Submit Order
          </button>
        </form>

        {message && (
          <p className="mt-6 rounded-xl bg-[#E6A11A] p-4 font-bold text-black">
            {message}
          </p>
        )}
      </div>
    </main>
  );
}