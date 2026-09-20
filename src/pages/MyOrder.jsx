import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { auth, db } from "../components/firebase/config";
import { toast } from "react-toastify";

const MyOrders = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribeOrders = null;

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);

      // Agar user login nahi hai
      if (!user) {
        setOrders([]);
        setLoading(false);

        if (unsubscribeOrders) {
          unsubscribeOrders();
          unsubscribeOrders = null;
        }

        return;
      }

      setLoading(true);

      const ordersRef = collection(db, "orders");

      // Sirf current logged-in user ke orders
      // orderBy() intentionally use nahi kiya,
      // isliye composite index ki zaroorat nahi hogi.
      const ordersQuery = query(
        ordersRef,
        where("userId", "==", user.uid)
      );

      unsubscribeOrders = onSnapshot(
        ordersQuery,
        (snapshot) => {
          const ordersData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          // Newest orders first
          ordersData.sort((a, b) => {
            const aTime =
              typeof a.createdAt?.toMillis === "function"
                ? a.createdAt.toMillis()
                : 0;

            const bTime =
              typeof b.createdAt?.toMillis === "function"
                ? b.createdAt.toMillis()
                : 0;

            return bTime - aTime;
          });

          setOrders(ordersData);
          setLoading(false);
        },
        (error) => {
          console.error("User orders error:", error);

          toast.error("Orders load nahi ho sakay.");

          setOrders([]);
          setLoading(false);
        }
      );
    });

    return () => {
      unsubscribeAuth();

      if (unsubscribeOrders) {
        unsubscribeOrders();
      }
    };
  }, []);

  // Date format
  const formatDate = (timestamp) => {
    if (!timestamp) {
      return "Date not available";
    }

    try {
      if (typeof timestamp.toDate === "function") {
        return timestamp.toDate().toLocaleDateString("en-PK", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
      }

      return "Date not available";
    } catch (error) {
      return "Date not available";
    }
  };

  // Status styling
  const getStatusStyle = (status) => {
    const currentStatus = status?.toLowerCase();

    if (currentStatus === "completed") {
      return "bg-green-500/10 text-green-400 border border-green-500/20";
    }

    if (currentStatus === "pending") {
      return "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20";
    }

    if (
      currentStatus === "processing" ||
      currentStatus === "in progress"
    ) {
      return "bg-blue-500/10 text-blue-400 border border-blue-500/20";
    }

    if (
      currentStatus === "cancelled" ||
      currentStatus === "canceled"
    ) {
      return "bg-red-500/10 text-red-400 border border-red-500/20";
    }

    return "bg-gray-500/10 text-gray-400 border border-gray-500/20";
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 sm:p-6 lg:p-8">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

        <div>
          <div className="flex items-center gap-3 mb-2">

            <div className="w-11 h-11 rounded-xl bg-[#ff7700]/10 flex items-center justify-center">
              <i className="fa-solid fa-box text-[#ff7700] text-lg"></i>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold">
              My Orders
            </h1>

          </div>

          <p className="text-gray-400 text-sm">
            Apne tamam orders aur unki current status yahan dekhein.
          </p>
        </div>

        {/* Total Orders */}
        <div className="bg-[#1c1c1c] border border-gray-800 rounded-xl px-5 py-3 min-w-[130px]">

          <p className="text-xs text-gray-500">
            Total Orders
          </p>

          <p className="text-xl font-bold text-[#ff7700]">
            {orders.length}
          </p>

        </div>

      </div>

      {/* ================= LOADING ================= */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20">

          <div className="w-10 h-10 border-4 border-gray-700 border-t-[#ff7700] rounded-full animate-spin"></div>

          <p className="text-gray-400 mt-4">
            Orders loading...
          </p>

        </div>
      )}

      {/* ================= LOGIN REQUIRED ================= */}
      {!loading && !currentUser && (
        <div className="bg-[#1c1c1c] border border-gray-800 rounded-2xl p-10 text-center">

          <div className="w-16 h-16 mx-auto rounded-full bg-gray-800 flex items-center justify-center mb-5">

            <i className="fa-solid fa-user-lock text-gray-500 text-2xl"></i>

          </div>

          <h2 className="text-xl font-semibold mb-2">
            Login Required
          </h2>

          <p className="text-gray-400">
            Apne orders dekhne ke liye login karein.
          </p>

        </div>
      )}

      {/* ================= NO ORDERS ================= */}
      {!loading && currentUser && orders.length === 0 && (
        <div className="bg-[#1c1c1c] border border-gray-800 rounded-2xl p-10 sm:p-16 text-center">

          <div className="w-20 h-20 mx-auto rounded-full bg-[#ff7700]/10 flex items-center justify-center mb-5">

            <i className="fa-solid fa-box-open text-[#ff7700] text-3xl"></i>

          </div>

          <h2 className="text-xl font-semibold mb-2">
            No Orders Yet
          </h2>

          <p className="text-gray-400 max-w-md mx-auto">
            Aap ne abhi tak koi order place nahi kiya.
            Jab aap order place karenge to woh yahan show hoga.
          </p>

        </div>
      )}

      {/* ================= ORDERS ================= */}
      {!loading && currentUser && orders.length > 0 && (
        <div className="space-y-4">

          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-[#1c1c1c] border border-gray-800 rounded-2xl p-5 sm:p-6 hover:border-[#ff7700]/40 transition"
            >

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                {/* LEFT SIDE */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[#ff7700]/10 flex items-center justify-center">

                    <i className="fa-solid fa-box text-[#ff7700]"></i>

                  </div>

                  <div className="min-w-0">

                    <div className="flex flex-wrap items-center gap-3 mb-2">

                      <h2 className="font-semibold text-lg">
                        {order.productType || "Aluminium Order"}
                      </h2>

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                          order.status
                        )}`}
                      >
                        {order.status || "Pending"}
                      </span>

                    </div>

                    {/* Order ID */}
                    <p className="text-sm text-gray-500">
                      Order ID:{" "}

                      <span className="text-gray-300 break-all">
                        {order.orderNumber || order.id}
                      </span>
                    </p>

                    {/* Date */}
                    <p className="text-sm text-gray-500 mt-2">

                      <i className="fa-regular fa-calendar mr-2"></i>

                      {formatDate(order.createdAt)}

                    </p>

                  </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center justify-between lg:justify-end gap-8">

                  <div>

                    <p className="text-xs text-gray-500 mb-1">
                      Amount
                    </p>

                    <p className="text-lg font-bold text-[#ff7700]">
                      Rs.{" "}
                      {Number(order.amount || 0).toLocaleString()}
                    </p>

                  </div>

                  <div className="w-10 h-10 rounded-lg bg-[#222] flex items-center justify-center">

                    <i className="fa-solid fa-chevron-right text-gray-500"></i>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default MyOrders;