"use client";

import { useEffect, useState } from "react";

type Order = {
  id: number;
  customerName: string;
  phoneNumber: string;
  deliveryAddress: string;
  flavor: string;
  quantity: number;
  orderStatus: string;
  createdAt: string;
};

export default function AdminDashboardPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`);
      const data = await response.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  const pendingOrders = orders.filter(
    (order) => order.orderStatus === "Pending"
  ).length;

  const completedOrders = orders.filter(
    (order) => order.orderStatus === "Completed"
  ).length;

  const stats = [
    { title: "Today’s Orders", value: orders.length.toString(), note: "Total orders saved" },
    { title: "Pending", value: pendingOrders.toString(), note: "Need attention" },
    { title: "Completed", value: completedOrders.toString(), note: "Finished orders" },
    { title: "Menu Items", value: "7", note: "Active flavors" },
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <section className="rounded-[2rem] bg-gradient-to-r from-[#A61E1E] via-[#D97706] to-[#E6A11A] p-8 text-black shadow-2xl">
          <p className="text-sm font-black uppercase tracking-[0.3em]">
            Alitas Express
          </p>
          <h1 className="mt-3 text-5xl font-black uppercase">
            Admin Dashboard
          </h1>
          <p className="mt-3 text-xl font-semibold">
            Manage orders, customers, flavors, and business activity.
          </p>
        </section>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="/admin/orders" className="rounded-full bg-[#A61E1E] px-6 py-3 font-bold hover:bg-red-800">
            View Orders
          </a>
          <a href="/admin/menu" className="rounded-full bg-[#E6A11A] px-6 py-3 font-bold text-black hover:bg-yellow-500">
            Manage Menu
          </a>
          <a href="/admin/customers" className="rounded-full border border-[#E6A11A] px-6 py-3 font-bold text-[#E6A11A] hover:bg-[#E6A11A] hover:text-black">
            Customers
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-3xl border border-[#E6A11A]/30 bg-gradient-to-br from-white/10 to-[#A61E1E]/20 p-6 shadow-xl"
            >
              <p className="text-[#F3E7D3]">{stat.title}</p>
              <p className="mt-3 text-5xl font-black text-[#E6A11A]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-gray-300">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}