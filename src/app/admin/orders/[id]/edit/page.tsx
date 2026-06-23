"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditOrderPage() {
  const params = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    customerName: "",
    phoneNumber: "",
    deliveryAddress: "",
    flavor: "",
    quantity: 1,
    orderStatus: "Pending",
  });

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/orders/${params.id}`
        );

        const data = await response.json();

        setForm({
          customerName: data.customerName,
          phoneNumber: data.phoneNumber,
          deliveryAddress: data.deliveryAddress,
          flavor: data.flavor,
          quantity: data.quantity,
          orderStatus: data.orderStatus,
        });

        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrder();
  }, [params.id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/orders/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      router.push("/admin/orders");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0B0B0B] text-white">
        Loading Order...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-12 text-white">
      <div className="mx-auto max-w-2xl rounded-3xl border border-[#E6A11A]/30 bg-[#151515] p-8">

        <h1 className="mb-8 text-4xl font-black text-[#E6A11A]">
          Edit Order #{params.id}
        </h1>

        <div className="space-y-4">

          <input
            name="customerName"
            value={form.customerName}
            onChange={handleChange}
            placeholder="Customer Name"
            className="w-full rounded-xl p-3 text-black"
          />

          <input
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full rounded-xl p-3 text-black"
          />

          <input
            name="deliveryAddress"
            value={form.deliveryAddress}
            onChange={handleChange}
            placeholder="Delivery Address"
            className="w-full rounded-xl p-3 text-black"
          />

          <input
            name="flavor"
            value={form.flavor}
            onChange={handleChange}
            placeholder="Flavor"
            className="w-full rounded-xl p-3 text-black"
          />

          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            className="w-full rounded-xl p-3 text-black"
          />

          <select
            name="orderStatus"
            value={form.orderStatus}
            onChange={handleChange}
            className="w-full rounded-xl p-3 text-black"
          >
            <option value="Pending">Pending</option>
            <option value="Preparing">Preparing</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <div className="flex gap-4 pt-4">

            <button
              onClick={handleSave}
              className="rounded-xl bg-[#E6A11A] px-6 py-3 font-bold text-black"
            >
              Save Changes
            </button>

            <button
              onClick={() => router.push("/admin/orders")}
              className="rounded-xl border border-white px-6 py-3"
            >
              Cancel
            </button>

          </div>
        </div>
      </div>
    </main>
  );
}