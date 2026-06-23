"use client";

import Link from "next/link";

type Order = {
  id: number;
  customerName: string;
  phoneNumber: string;
  deliveryAddress: string;
  flavor: string;
  quantity: number;
  orderStatus: string;
};

type Props = {
  order: Order;
};

export default function OrderCard({ order }: Props) {
  return (
    <div className="rounded-3xl border border-[#E6A11A]/30 bg-gradient-to-r from-white/10 to-[#A61E1E]/20 p-6 shadow-xl">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-black">
            {order.customerName}
          </h2>

          <p className="text-[#F3E7D3]">
            {order.phoneNumber}
          </p>

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

          <Link
            href={`/admin/orders/${order.id}/edit`}
            className="rounded-xl border border-[#E6A11A] px-5 py-2 text-center font-bold text-[#E6A11A] hover:bg-[#E6A11A] hover:text-black"
          >
            Edit Order
          </Link>
        </div>
      </div>
    </div>
  );
}