import {
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";

import { auth, db } from "../components/firebase/config";
import AddOrderModal from "./AddOrderModal";

const DashboardHome = () => {
  const [showModal, setShowModal] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================================
  // CURRENT USER
  // ==========================================

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (loggedInUser) => {
        if (loggedInUser) {
          setCurrentUser(loggedInUser);

          setProfile({
            uid: loggedInUser.uid,
            username:
              loggedInUser.displayName || "User",
            email:
              loggedInUser.email || "",
            photoURL:
              loggedInUser.photoURL || "",
          });
        } else {
          setCurrentUser(null);
          setProfile(null);
          setOrders([]);
        }

        setProfileLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // ==========================================
  // GET CURRENT USER ORDERS
  // ==========================================

  useEffect(() => {
    if (!currentUser) {
      setOrders([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    const ordersRef = collection(db, "orders");

    /*
      IMPORTANT:

      orderBy("createdAt", "desc") remove kiya gaya hai.

      Pehle query:
      
      where("userId", "==", currentUser.uid),
      orderBy("createdAt", "desc")

      Firebase composite index maang raha tha.

      Ab sirf userId se orders fetch honge.
      Sorting neeche JavaScript mein hogi.
    */

    const ordersQuery = query(
      ordersRef,
      where("userId", "==", currentUser.uid)
    );

    const unsubscribe = onSnapshot(
      ordersQuery,
      (snapshot) => {
        const ordersData = snapshot.docs.map(
          (orderDoc) => ({
            id: orderDoc.id,
            ...orderDoc.data(),
          })
        );

        // =====================================
        // NEWEST ORDERS FIRST
        // =====================================

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
        console.error(
          "User orders error:",
          error
        );

        setOrders([]);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [currentUser]);

  // ==========================================
  // ORDER STATISTICS
  // ==========================================

  const totalOrders = orders.length;

  const pendingOrders = orders.filter(
    (order) =>
      String(order.status || "")
        .toLowerCase() === "pending"
  ).length;

  const completedOrders = orders.filter(
    (order) =>
      String(order.status || "")
        .toLowerCase() === "completed"
  ).length;

  // ==========================================
  // RECENT ORDERS
  // ==========================================

  const recentOrders = orders.slice(0, 5);

  // ==========================================
  // DATE FORMAT
  // ==========================================

  const formatDate = (timestamp) => {
    if (!timestamp) {
      return "Just now";
    }

    try {
      const date =
        typeof timestamp?.toDate === "function"
          ? timestamp.toDate()
          : new Date(timestamp);

      return date.toLocaleDateString(
        "en-PK",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      );
    } catch {
      return "Just now";
    }
  };

  // ==========================================
  // PRODUCT NAME
  // ==========================================

  const getProductName = (order) => {
    const productType = String(
      order?.productType || ""
    ).toLowerCase();

    if (
      productType.includes("window")
    ) {
      return "Aluminium Window";
    }

    if (
      productType.includes("door")
    ) {
      return "Aluminium Door";
    }

    return "Aluminium Product";
  };

  // ==========================================
  // STATUS
  // ==========================================

  const getStatus = (status) => {
    return String(
      status || "pending"
    ).toLowerCase();
  };

  // ==========================================
  // STATS
  // ==========================================

  const stats = [
    {
      title: "My Orders",
      value: totalOrders
        .toString()
        .padStart(2, "0"),
      icon: "fa-solid fa-box",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      title: "Pending",
      value: pendingOrders
        .toString()
        .padStart(2, "0"),
      icon: "fa-solid fa-clock",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
    {
      title: "Completed",
      value: completedOrders
        .toString()
        .padStart(2, "0"),
      icon:
        "fa-solid fa-circle-check",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 sm:p-6 lg:p-8">

      {/* ======================================
          HEADER
      ====================================== */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

        <div>

          <p className="text-sm text-gray-400 mb-1">
            Welcome back{" "}
            {profileLoading
              ? "..."
              : profile?.username || "User"}
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold">
            My Dashboard
          </h1>

          <p className="text-gray-400 mt-2 text-sm">
            Manage your aluminium orders
            and account.
          </p>

        </div>

        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="w-fit inline-flex items-center gap-2 cursor-pointer bg-[#ff7700] hover:bg-[#e66b00] px-5 py-3 rounded-lg font-semibold transition"
        >
          <i className="fa-solid fa-plus"></i>
          New Order
        </button>

      </div>

      {/* ======================================
          USER STATS
      ====================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">

        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-[#1c1c1c] border border-[#2d2d2d] rounded-xl p-5 hover:border-[#ff7700]/50 transition"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-400 text-sm">
                  {item.title}
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  {item.value}
                </h2>

              </div>

              <div
                className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center`}
              >

                <i
                  className={`${item.icon} ${item.color} text-xl`}
                ></i>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* ======================================
          MAIN CONTENT
      ====================================== */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* ====================================
            MY RECENT ORDERS
        ==================================== */}

        <div className="xl:col-span-2 bg-[#1c1c1c] border border-[#2d2d2d] rounded-xl overflow-hidden">

          <div className="flex items-center justify-between p-5 border-b border-[#2d2d2d]">

            <div>

              <h2 className="text-lg font-semibold">
                My Recent Orders
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Your latest orders
              </p>

            </div>

            <Link
              to="/dashboard/orders"
              className="text-[#ff7700] hover:text-orange-400 text-sm font-medium"
            >
              View All
            </Link>

          </div>

          {/* ==================================
              DESKTOP
          ================================== */}

          <div className="hidden md:block overflow-x-auto">

            {loading ? (

              <div className="p-10 text-center text-gray-400">

                <i className="fa-solid fa-spinner fa-spin mr-2"></i>

                Loading your orders...

              </div>

            ) : recentOrders.length === 0 ? (

              <div className="p-10 text-center">

                <i className="fa-solid fa-box-open text-4xl text-gray-600"></i>

                <p className="text-gray-400 mt-3">
                  You don't have any
                  orders yet.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setShowModal(true)
                  }
                  className="mt-4 text-[#ff7700] hover:text-orange-400 text-sm cursor-pointer"
                >
                  Create your first
                  order
                </button>

              </div>

            ) : (

              <table className="w-full">

                <thead>

                  <tr className="text-left text-gray-400 text-sm border-b border-[#2d2d2d]">

                    <th className="px-5 py-4">
                      Order ID
                    </th>

                    <th className="px-5 py-4">
                      Product
                    </th>

                    <th className="px-5 py-4">
                      Amount
                    </th>

                    <th className="px-5 py-4">
                      Date
                    </th>

                    <th className="px-5 py-4">
                      Status
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {recentOrders.map(
                    (order) => {

                      const status =
                        getStatus(
                          order.status
                        );

                      return (
                        <tr
                          key={order.id}
                          className="border-b border-[#2d2d2d] last:border-0 hover:bg-[#222222]"
                        >

                          <td className="px-5 py-4 text-[#ff7700] font-medium">
                            {order.orderNumber ||
                              `#${order.id.slice(
                                0,
                                8
                              )}`}
                          </td>

                          <td className="px-5 py-4 text-gray-300">
                            {getProductName(
                              order
                            )}
                          </td>

                          <td className="px-5 py-4 font-medium">

                            {order.amount !==
                              undefined &&
                            order.amount !==
                              null &&
                            order.amount !==
                              "" ? (
                              `Rs ${Number(
                                order.amount
                              ).toLocaleString(
                                "en-PK"
                              )}`
                            ) : (
                              "Pending"
                            )}

                          </td>

                          <td className="px-5 py-4 text-gray-400 text-sm">
                            {formatDate(
                              order.createdAt
                            )}
                          </td>

                          <td className="px-5 py-4">

                            {status ===
                            "pending" ? (

                              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs">

                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>

                                Pending

                              </span>

                            ) : status ===
                              "completed" ? (

                              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs">

                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>

                                Completed

                              </span>

                            ) : (

                              <span className="text-gray-400 text-xs">
                                {order.status ||
                                  "Unknown"}
                              </span>

                            )}

                          </td>

                        </tr>
                      );
                    }
                  )}

                </tbody>

              </table>

            )}

          </div>

          {/* ==================================
              MOBILE
          ================================== */}

          <div className="md:hidden p-4 space-y-4">

            {loading ? (

              <div className="p-6 text-center text-gray-400">

                <i className="fa-solid fa-spinner fa-spin mr-2"></i>

                Loading orders...

              </div>

            ) : recentOrders.length === 0 ? (

              <div className="p-6 text-center">

                <i className="fa-solid fa-box-open text-3xl text-gray-600"></i>

                <p className="text-gray-400 mt-3">
                  No orders yet
                </p>

              </div>

            ) : (

              recentOrders.map(
                (order) => {

                  const status =
                    getStatus(
                      order.status
                    );

                  return (
                    <div
                      key={order.id}
                      className="bg-[#222222] border border-[#333333] rounded-lg p-4"
                    >

                      <div className="flex items-center justify-between mb-3">

                        <span className="text-[#ff7700] font-semibold">
                          {order.orderNumber ||
                            `#${order.id.slice(
                              0,
                              8
                            )}`}
                        </span>

                        {status ===
                        "pending" ? (

                          <span className="text-yellow-500 text-xs bg-yellow-500/10 px-2 py-1 rounded-full">
                            Pending
                          </span>

                        ) : status ===
                          "completed" ? (

                          <span className="text-green-500 text-xs bg-green-500/10 px-2 py-1 rounded-full">
                            Completed
                          </span>

                        ) : (

                          <span className="text-gray-400 text-xs bg-gray-500/10 px-2 py-1 rounded-full">
                            {order.status ||
                              "Unknown"}
                          </span>

                        )}

                      </div>

                      <p className="text-white font-medium">
                        {getProductName(
                          order
                        )}
                      </p>

                      <div className="flex items-center justify-between mt-3">

                        <p className="text-gray-200 font-semibold">

                          {order.amount !==
                            undefined &&
                          order.amount !==
                            null &&
                          order.amount !==
                            "" ? (
                            `Rs ${Number(
                              order.amount
                            ).toLocaleString(
                              "en-PK"
                            )}`
                          ) : (
                            "Price Pending"
                          )}

                        </p>

                        <p className="text-gray-500 text-xs">
                          {formatDate(
                            order.createdAt
                          )}
                        </p>

                      </div>

                    </div>
                  );
                }
              )

            )}

          </div>

        </div>

        {/* ====================================
            QUICK ACTIONS
        ==================================== */}

        <div className="bg-[#1c1c1c] border border-[#2d2d2d] rounded-xl p-5">

          <div className="mb-5">

            <h2 className="text-lg font-semibold">
              Quick Actions
            </h2>

            <p className="text-gray-400 text-sm mt-1">
              Manage your account
            </p>

          </div>

          <div className="space-y-3">

            {/* NEW ORDER */}

            <button
              type="button"
              onClick={() =>
                setShowModal(true)
              }
              className="w-full flex items-center gap-4 p-4 bg-[#222222] border border-[#333333] hover:border-[#ff7700]/50 rounded-lg transition group text-left cursor-pointer"
            >

              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">

                <i className="fa-solid fa-plus text-[#ff7700]"></i>

              </div>

              <div className="flex-1">

                <h3 className="font-medium">
                  New Order
                </h3>

                <p className="text-gray-500 text-xs mt-1">
                  Place a new aluminium order
                </p>

              </div>

              <i className="fa-solid fa-chevron-right text-gray-600 group-hover:text-[#ff7700]"></i>

            </button>

            {/* MY ORDERS */}

            <Link
              to="/dashboard/orders"
              className="flex items-center gap-4 p-4 bg-[#222222] border border-[#333333] hover:border-[#ff7700]/50 rounded-lg transition group"
            >

              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">

                <i className="fa-solid fa-box text-[#ff7700]"></i>

              </div>

              <div className="flex-1">

                <h3 className="font-medium">
                  My Orders
                </h3>

                <p className="text-gray-500 text-xs mt-1">
                  Track your orders
                </p>

              </div>

              <i className="fa-solid fa-chevron-right text-gray-600 group-hover:text-[#ff7700]"></i>

            </Link>

            {/* PROFILE */}

            <Link
              to="/dashboard/profile"
              className="flex items-center gap-4 p-4 bg-[#222222] border border-[#333333] hover:border-[#ff7700]/50 rounded-lg transition group"
            >

              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">

                <i className="fa-solid fa-user text-[#ff7700]"></i>

              </div>

              <div className="flex-1">

                <h3 className="font-medium">
                  My Profile
                </h3>

                <p className="text-gray-500 text-xs mt-1">
                  Update your profile
                </p>

              </div>

              <i className="fa-solid fa-chevron-right text-gray-600 group-hover:text-[#ff7700]"></i>

            </Link>

            {/* HELP */}

            <Link
              to="/dashboard/help"
              className="flex items-center gap-4 p-4 bg-[#222222] border border-[#333333] hover:border-[#ff7700]/50 rounded-lg transition group"
            >

              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">

                <i className="fa-solid fa-circle-question text-[#ff7700]"></i>

              </div>

              <div className="flex-1">

                <h3 className="font-medium">
                  Help & Support
                </h3>

                <p className="text-gray-500 text-xs mt-1">
                  Need help? Contact us
                </p>

              </div>

              <i className="fa-solid fa-chevron-right text-gray-600 group-hover:text-[#ff7700]"></i>

            </Link>

          </div>

        </div>

      </div>

      {/* ======================================
          USER INFORMATION CARD
      ====================================== */}

      <div className="mt-6 bg-gradient-to-r from-[#1c1c1c] to-[#21170f] border border-[#2d2d2d] rounded-xl p-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <div>

            <div className="flex items-center gap-2 mb-2">

              <span className="w-2 h-2 bg-[#ff7700] rounded-full"></span>

              <span className="text-[#ff7700] text-sm font-medium">
                ALU PRO
              </span>

            </div>

            <h2 className="text-xl font-bold">
              Welcome to ALU PRO
            </h2>

            <p className="text-gray-400 text-sm mt-2 max-w-xl">
              Place your aluminium orders,
              track their status and manage
              your account from one place.
            </p>

          </div>

          <Link
            to="/dashboard/orders"
            className="w-fit border border-[#ff7700] text-[#ff7700] hover:bg-[#ff7700] hover:text-white px-5 py-3 rounded-lg font-medium transition"
          >
            My Orders
          </Link>

        </div>

      </div>

      {/* ======================================
          ADD ORDER MODAL
      ====================================== */}

      {showModal && (
        <AddOrderModal
          onClose={() =>
            setShowModal(false)
          }
        />
      )}

    </div>
  );
};

export default DashboardHome;