import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db  , auth } from "../components/firebase/config";

const AddOrderModal = ({ onClose }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    productType: "Window",
    material: "",
    width: "",
    height: "",
    quantity: 1,
    color: "",
    glassType: "",
    amount: "",
    notes: "",
  });

  // ESC key se modal close
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && !loading) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose, loading]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.customerName.trim()) {
      toast.error("Customer name is required!");
      return;
    }

    if (!formData.phone.trim()) {
      toast.error("Phone number is required!");
      return;
    }

    if (formData.phone.trim().length < 10) {
      toast.error("Please enter a valid phone number!");
      return;
    }

    if (
      !formData.width ||
      Number(formData.width) <= 0
    ) {
      toast.error("Please enter a valid width!");
      return;
    }

    if (
      !formData.height ||
      Number(formData.height) <= 0
    ) {
      toast.error("Please enter a valid height!");
      return;
    }

    if (
      !formData.quantity ||
      Number(formData.quantity) < 1
    ) {
      toast.error("Quantity must be at least 1!");
      return;
    }

    try {
      setLoading(true);

      const currentUser = auth.currentUser;

      if (!currentUser) {
        toast.error("Please login first!");
        setLoading(false);
        return;
      }

      // Order number generate
      const randomNumber = Math.floor(
        1000 + Math.random() * 9000
      );

      const orderNumber = `#ORD-${randomNumber}`;

      await addDoc(collection(db, "orders"), {
        orderNumber,

        customerName: formData.customerName.trim(),

        phone: formData.phone.trim(),

        productType: formData.productType,

        material: formData.material.trim(),

        width: Number(formData.width),

        height: Number(formData.height),

        quantity: Number(formData.quantity),

        color: formData.color,

        glassType: formData.glassType,

        amount: formData.amount
          ? Number(formData.amount)
          : 0,

        notes: formData.notes.trim(),

        status: "pending",

        userId: currentUser.uid,

        createdBy: currentUser.email || "",

        createdAt: serverTimestamp(),

        updatedAt: serverTimestamp(),
      });

      toast.success("Order added successfully! 🎉");

      onClose();

    } catch (error) {
      console.error("Order Error:", error);

      toast.error(
        error.message || "Failed to add order!"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && !loading) {
          onClose();
        }
      }}
    >

      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#333] bg-[#1c1c1c] p-6 text-white shadow-2xl">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold">
              Add New Order
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Aluminium Windows & Doors
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="flex h-9 w-9 items-center cursor-pointer justify-center rounded-lg text-2xl text-gray-400 hover:bg-[#2a2a2a] hover:text-orange-500 disabled:opacity-50"
          >
            &times;
          </button>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <div className="grid gap-4 sm:grid-cols-2">

            {/* Customer */}
            <div>
              <label className="mb-1 block text-sm">
                Customer Name
              </label>

              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="Enter customer name"
                className="w-full rounded-lg border border-gray-700 bg-[#121212] p-3 outline-none transition focus:border-orange-500"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-1 block text-sm">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="03XX XXXXXXX"
                className="w-full rounded-lg border border-gray-700 bg-[#121212] p-3 outline-none transition focus:border-orange-500"
                required
              />
            </div>

            {/* Product */}
            <div>
              <label className="mb-1 block text-sm">
                Product Type
              </label>

              <select
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-700 bg-[#121212] p-3 outline-none transition focus:border-orange-500"
              >
                <option value="Window">
                  Aluminium Window
                </option>

                <option value="Door">
                  Aluminium Door
                </option>
              </select>
            </div>

            {/* Material */}
            <div>
              <label className="mb-1 block text-sm">
                Material / Profile
              </label>

              <input
                type="text"
                name="material"
                value={formData.material}
                onChange={handleChange}
                placeholder="e.g. Aluminium Profile"
                className="w-full rounded-lg border border-gray-700 bg-[#121212] p-3 outline-none transition focus:border-orange-500"
              />
            </div>

            {/* Width */}
            <div>
              <label className="mb-1 block text-sm">
                Width (inches)
              </label>

              <input
                type="number"
                name="width"
                value={formData.width}
                onChange={handleChange}
                placeholder="Enter width"
                min="0"
                step="any"
                className="w-full rounded-lg border border-gray-700 bg-[#121212] p-3 outline-none transition focus:border-orange-500"
                required
              />
            </div>

            {/* Height */}
            <div>
              <label className="mb-1 block text-sm">
                Height (inches)
              </label>

              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="Enter height"
                min="0"
                step="any"
                className="w-full rounded-lg border border-gray-700 bg-[#121212] p-3 outline-none transition focus:border-orange-500"
                required
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="mb-1 block text-sm">
                Quantity
              </label>

              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                className="w-full rounded-lg border border-gray-700 bg-[#121212] p-3 outline-none transition focus:border-orange-500"
                required
              />
            </div>

            {/* Color */}
            <div>
              <label className="mb-1 block text-sm">
                Aluminium Color
              </label>

              <select
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-700 bg-[#121212] p-3 outline-none transition focus:border-orange-500"
              >
                <option value="">
                  Select Color
                </option>

                <option value="Silver">
                  Silver
                </option>

                <option value="Black">
                  Black
                </option>

                <option value="White">
                  White
                </option>

                <option value="Bronze">
                  Bronze
                </option>
              </select>
            </div>

            {/* Glass */}
            <div>
              <label className="mb-1 block text-sm">
                Glass Type
              </label>

              <select
                name="glassType"
                value={formData.glassType}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-700 bg-[#121212] p-3 outline-none transition focus:border-orange-500"
              >
                <option value="">
                  Select Glass
                </option>

                <option value="Clear">
                  Clear Glass
                </option>

                <option value="Tinted">
                  Tinted Glass
                </option>

                <option value="Reflective">
                  Reflective Glass
                </option>

                <option value="Double Glazed">
                  Double Glazed
                </option>
              </select>
            </div>

            {/* Amount */}
            <div>
              <label className="mb-1 block text-sm">
                Order Amount (Rs)
              </label>

              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                min="0"
                className="w-full rounded-lg border border-gray-700 bg-[#121212] p-3 outline-none transition focus:border-orange-500"
              />
            </div>

          </div>

          {/* Notes */}
          <div>
            <label className="mb-1 block text-sm">
              Additional Notes
            </label>

            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Enter additional requirements..."
              rows="3"
              className="w-full resize-none rounded-lg border border-gray-700 bg-[#121212] p-3 outline-none transition focus:border-orange-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 pt-3 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="rounded-lg border cursor-pointer border-gray-600 px-5 py-3 text-gray-300 transition hover:bg-gray-800 disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-[#ff7700] px-5 py-3 cursor-pointer font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                  Saving...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-plus mr-2"></i>
                  Submit Order
                </>
              )}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddOrderModal;