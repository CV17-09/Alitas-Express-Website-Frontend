"use client";

import { useEffect, useState } from "react";

type Order = {
  id: number;
  customerName: string;
  customerEmail: string;
  phoneNumber: string;
  deliveryAddress: string;
  flavor: string;
  quantity: number;
  orderStatus: string;
  createdAt: string;
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<Partial<Order>>({});

  const fetchOrders = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/orders`
    );
    const data = await response.json();
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const startEditing = (order: Order) => {
    setEditingId(order.id);
    setForm(order);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveOrder = async (id: number) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/orders/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerName: form.customerName,
          customerEmail: form.customerEmail,
          phoneNumber: form.phoneNumber,
          deliveryAddress: form.deliveryAddress,
          flavor: form.flavor,
          quantity: Number(form.quantity),
          orderStatus: form.orderStatus,
        }),
      }
    );

    if (!response.ok) {
      alert("Order did not save.");
      return;
    }

    setEditingId(null);
    fetchOrders();
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <a href="/admin" className="font-bold text-[#E6A11A]">
          ← Back to Dashboard
        </a>

        <h1 className="mt-6 text-5xl font-black uppercase text-[#E6A11A]">
          Customer Orders
        </h1>

        <div className="mt-8 grid gap-5">
          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-3xl border border-[#E6A11A]/30 bg-gradient-to-r from-white/10 to-[#A61E1E]/20 p-6 shadow-xl"
            >
              {editingId === order.id ? (
                <div className="grid gap-4">
                  <input
                    name="customerName"
                    value={form.customerName || ""}
                    onChange={handleChange}
                    placeholder="Customer Name"
                    className="rounded-xl bg-white p-3 text-black"
                  />

                  <input
                    name="customerEmail"
                    type="email"
                    value={form.customerEmail || ""}
                    onChange={handleChange}
                    placeholder="Customer Email"
                    className="rounded-xl bg-white p-3 text-black"
                  />

                  <input
                    name="phoneNumber"
                    value={form.phoneNumber || ""}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="rounded-xl bg-white p-3 text-black"
                  />

                  <input
                    name="deliveryAddress"
                    value={form.deliveryAddress || ""}
                    onChange={handleChange}
                    placeholder="Delivery Address"
                    className="rounded-xl bg-white p-3 text-black"
                  />

                  <input
                    name="flavor"
                    value={form.flavor || ""}
                    onChange={handleChange}
                    placeholder="Flavor"
                    className="rounded-xl bg-white p-3 text-black"
                  />

                  <input
                    name="quantity"
                    type="number"
                    value={form.quantity || 1}
                    onChange={handleChange}
                    placeholder="Quantity"
                    className="rounded-xl bg-white p-3 text-black"
                  />

                  <select
                    name="orderStatus"
                    value={form.orderStatus || "Pending"}
                    onChange={handleChange}
                    className="rounded-xl bg-white p-3 text-black"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Preparing">Preparing</option>
                    <option value="Ready">Ready</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>

                  <div className="flex gap-3">
                    <button
                      onClick={() => saveOrder(order.id)}
                      className="rounded-xl bg-[#E6A11A] px-5 py-2 font-black text-black"
                    >
                      Save
                    </button>

                    <button
                      onClick={() => setEditingId(null)}
                      className="rounded-xl bg-gray-700 px-5 py-2 font-black text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <h2 className="text-2xl font-black">
                      {order.customerName}
                    </h2>

                    <p className="text-[#F3E7D3]">{order.customerEmail}</p>
                    <p className="text-[#F3E7D3]">{order.phoneNumber}</p>

                    <p className="text-sm text-gray-300">
                      {order.deliveryAddress}
                    </p>

                    <p className="mt-2">
                      {order.quantity} order(s) of{" "}
                      <span className="font-bold text-[#E6A11A]">
                        {order.flavor}
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="rounded-full bg-[#E6A11A] px-5 py-2 text-center font-black text-black">
                      {order.orderStatus}
                    </span>

                    <button
                      onClick={() => startEditing(order)}
                      className="rounded-xl border border-[#E6A11A] px-5 py-2 font-bold text-[#E6A11A] hover:bg-[#E6A11A] hover:text-black"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}