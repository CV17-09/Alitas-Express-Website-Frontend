"use client";

import { useState } from "react";

type MenuItem = {
  name: string;
  description: string;
  active: boolean;
};

const defaultMenuItems: MenuItem[] = [
  {
    name: "Classic",
    description: "Traditional crispy wings seasoned to perfection.",
    active: true,
  },
  {
    name: "BBQ",
    description: "Sweet and smoky barbecue sauce.",
    active: true,
  },
  {
    name: "Buffalo",
    description: "A bold and spicy customer favorite.",
    active: true,
  },
  {
    name: "Hot",
    description: "Extra heat for spice lovers.",
    active: true,
  },
  {
    name: "Lemon Pepper",
    description: "Savory citrus seasoning with a pepper kick.",
    active: true,
  },
  {
    name: "Mango Habanero",
    description: "Sweet tropical flavor with a spicy finish.",
    active: true,
  },
  {
    name: "Teriyaki",
    description: "Rich Asian-inspired sweet soy glaze.",
    active: true,
  },
];

export default function AdminMenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(defaultMenuItems);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [form, setForm] = useState<MenuItem>({
    name: "",
    description: "",
    active: true,
  });

  const startEditing = (index: number) => {
    setEditingIndex(index);
    setForm(menuItems[index]);
  };

  const saveMenuItem = () => {
    if (editingIndex === null) return;

    const updatedItems = [...menuItems];
    updatedItems[editingIndex] = form;

    setMenuItems(updatedItems);
    setEditingIndex(null);
  };

  const toggleActive = (index: number) => {
    const updatedItems = [...menuItems];

    updatedItems[index] = {
      ...updatedItems[index],
      active: !updatedItems[index].active,
    };

    setMenuItems(updatedItems);
  };

  const activeItems = menuItems.filter((item) => item.active).length;

  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <a
          href="/admin"
          className="font-bold text-[#E6A11A] hover:text-yellow-400"
        >
          ← Back to Dashboard
        </a>

        <section className="mt-6 rounded-[2rem] bg-gradient-to-r from-[#A61E1E] via-[#D97706] to-[#E6A11A] p-8 text-black shadow-2xl">
          <p className="text-sm font-black uppercase tracking-[0.3em]">
            Alitas Express
          </p>

          <h1 className="mt-3 text-5xl font-black uppercase">
            Menu Management
          </h1>

          <p className="mt-3 text-xl font-semibold">
            Review, update, and organize available menu selections.
          </p>
        </section>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="rounded-3xl border border-[#E6A11A]/30 bg-gradient-to-br from-white/10 to-[#A61E1E]/20 p-6 shadow-xl"
            >
              {editingIndex === index ? (
                <div className="space-y-4">
                  <input
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full rounded-xl bg-white p-3 text-black"
                    placeholder="Menu item name"
                  />

                  <textarea
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    className="w-full rounded-xl bg-white p-3 text-black"
                    placeholder="Description"
                    rows={4}
                  />

                  <div className="flex gap-3">
                    <button
                      onClick={saveMenuItem}
                      className="rounded-full bg-[#E6A11A] px-5 py-2 font-bold text-black"
                    >
                      Save
                    </button>

                    <button
                      onClick={() => setEditingIndex(null)}
                      className="rounded-full bg-gray-700 px-5 py-2 font-bold text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#F3E7D3]">
                        Menu Item
                      </p>

                      <h2 className="mt-2 text-3xl font-black text-[#E6A11A]">
                        {item.name}
                      </h2>

                      <p className="mt-3 text-[#F3E7D3]">
                        {item.description}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-black ${
                        item.active
                          ? "bg-[#E6A11A] text-black"
                          : "bg-gray-600 text-white"
                      }`}
                    >
                      {item.active ? "Active" : "Disabled"}
                    </span>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => startEditing(index)}
                      className="rounded-full bg-[#A61E1E] px-5 py-2 font-bold hover:bg-red-800"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => toggleActive(index)}
                      className="rounded-full border border-[#E6A11A] px-5 py-2 font-bold text-[#E6A11A] hover:bg-[#E6A11A] hover:text-black"
                    >
                      {item.active ? "Disable" : "Enable"}
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-[#E6A11A]/30 bg-white/5 p-6">
          <h2 className="text-2xl font-black text-[#E6A11A]">
            Menu Summary
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-[#0B0B0B] p-5">
              <p className="text-[#F3E7D3]">Available Items</p>
              <p className="mt-2 text-4xl font-black text-[#E6A11A]">
                {activeItems}
              </p>
            </div>

            <div className="rounded-2xl bg-[#0B0B0B] p-5">
              <p className="text-[#F3E7D3]">Most Popular</p>
              <p className="mt-2 text-2xl font-black text-[#E6A11A]">
                Mango Habanero
              </p>
            </div>

            <div className="rounded-2xl bg-[#0B0B0B] p-5">
              <p className="text-[#F3E7D3]">Status</p>
              <p className="mt-2 text-2xl font-black text-green-400">
                {activeItems === menuItems.length ? "All Active" : "Some Disabled"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}