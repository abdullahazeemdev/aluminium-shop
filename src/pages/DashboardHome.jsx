import React from "react";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  const stats = [
    {
      title: "Total Orders",
      value: "24",
      icon: "fa-solid fa-box",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      title: "Pending Orders",
      value: "08",
      icon: "fa-solid fa-clock",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
    {
      title: "Completed Orders",
      value: "16",
      icon: "fa-solid fa-circle-check",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      title: "Total Revenue",
      value: "Rs 27,500",
      icon: "fa-solid fa-wallet",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD-1023",
      customer: "Ahmed Khan",
      product: "Aluminium Windows",
      amount: "Rs 12,450",
      status: "Pending",
    },
    {
      id: "#ORD-1022",
      customer: "Usman Ali",
      product: "Aluminium Door",
      amount: "Rs 8,750",
      status: "Completed",
    },
    {
      id: "#ORD-1021",
      customer: "Hassan Raza",
      product: "Glass & Aluminium",
      amount: "Rs 6,300",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <p className="text-sm text-gray-400 mb-1">
            Welcome back Abdullah Azeem!
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Dashboard
          </h1>

          <p className="text-gray-400 mt-2 text-sm">
            Here's what's happening with your business today.
          </p>
        </div>

        <Link
          to="/dashboard/orders"
          className="w-fit inline-flex items-center gap-2 bg-[#ff7700] hover:bg-[#e66b00] px-5 py-3 rounded-lg font-semibold transition duration-300 shadow-lg shadow-orange-500/10"
        >
          <i className="fa-solid fa-plus"></i>
          New Order
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#1c1c1c] border border-[#2d2d2d] rounded-xl p-5 hover:border-[#ff7700]/50 transition duration-300"
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
                <i className={`${item.icon} ${item.color} text-xl`}></i>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Recent Orders */}
        <div className="xl:col-span-2 bg-[#1c1c1c] border border-[#2d2d2d] rounded-xl overflow-hidden">

          <div className="flex items-center justify-between p-5 border-b border-[#2d2d2d]">
            <div>
              <h2 className="text-lg font-semibold">
                Recent Orders
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Latest customer orders
              </p>
            </div>

            <Link
              to="/dashboard/orders"
              className="text-[#ff7700] hover:text-orange-400 text-sm font-medium transition"
            >
              View All
            </Link>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 text-sm border-b border-[#2d2d2d]">
                  <th className="px-5 py-4">Order ID</th>
                  <th className="px-5 py-4">Customer</th>
                  <th className="px-5 py-4">Product</th>
                  <th className="px-5 py-4">Amount</th>
                  <th className="px-5 py-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {recentOrders.map((order, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#2d2d2d] last:border-0 hover:bg-[#222222] transition"
                  >
                    <td className="px-5 py-4 text-[#ff7700] font-medium">
                      {order.id}
                    </td>

                    <td className="px-5 py-4 text-gray-200">
                      {order.customer}
                    </td>

                    <td className="px-5 py-4 text-gray-400">
                      {order.product}
                    </td>

                    <td className="px-5 py-4 font-medium">
                      {order.amount}
                    </td>

                    <td className="px-5 py-4">
                      {order.status === "Pending" ? (
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                          Pending
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          Completed
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden p-4 space-y-4">
            {recentOrders.map((order, index) => (
              <div
                key={index}
                className="bg-[#222222] border border-[#333333] rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#ff7700] font-semibold">
                    {order.id}
                  </span>

                  {order.status === "Pending" ? (
                    <span className="text-yellow-500 text-xs bg-yellow-500/10 px-2 py-1 rounded-full">
                      Pending
                    </span>
                  ) : (
                    <span className="text-green-500 text-xs bg-green-500/10 px-2 py-1 rounded-full">
                      Completed
                    </span>
                  )}
                </div>

                <p className="text-white font-medium">
                  {order.customer}
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  {order.product}
                </p>

                <p className="text-gray-200 font-semibold mt-3">
                  {order.amount}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Quick Actions */}
        <div className="bg-[#1c1c1c] border border-[#2d2d2d] rounded-xl p-5">

          <div className="mb-5">
            <h2 className="text-lg font-semibold">
              Quick Actions
            </h2>

            <p className="text-gray-400 text-sm mt-1">
              Manage your business quickly
            </p>
          </div>

          <div className="space-y-3">

            <Link
              to="/dashboard/orders"
              className="flex items-center gap-4 p-4 bg-[#222222] border border-[#333333] hover:border-[#ff7700]/50 rounded-lg transition duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <i className="fa-solid fa-box text-[#ff7700]"></i>
              </div>

              <div className="flex-1">
                <h3 className="font-medium">
                  Manage Orders
                </h3>

                <p className="text-gray-500 text-xs mt-1">
                  View and manage orders
                </p>
              </div>

              <i className="fa-solid fa-chevron-right text-gray-600 group-hover:text-[#ff7700] transition"></i>
            </Link>

            <Link
              to="/dashboard/products"
              className="flex items-center gap-4 p-4 bg-[#222222] border border-[#333333] hover:border-[#ff7700]/50 rounded-lg transition duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <i className="fa-solid fa-cubes text-[#ff7700]"></i>
              </div>

              <div className="flex-1">
                <h3 className="font-medium">
                  Products
                </h3>

                <p className="text-gray-500 text-xs mt-1">
                  Manage your products
                </p>
              </div>

              <i className="fa-solid fa-chevron-right text-gray-600 group-hover:text-[#ff7700] transition"></i>
            </Link>

            <Link
              to="/dashboard/customers"
              className="flex items-center gap-4 p-4 bg-[#222222] border border-[#333333] hover:border-[#ff7700]/50 rounded-lg transition duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <i className="fa-solid fa-users text-[#ff7700]"></i>
              </div>

              <div className="flex-1">
                <h3 className="font-medium">
                  Customers
                </h3>

                <p className="text-gray-500 text-xs mt-1">
                  View customer details
                </p>
              </div>

              <i className="fa-solid fa-chevron-right text-gray-600 group-hover:text-[#ff7700] transition"></i>
            </Link>

            <Link
              to="/dashboard/settings"
              className="flex items-center gap-4 p-4 bg-[#222222] border border-[#333333] hover:border-[#ff7700]/50 rounded-lg transition duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <i className="fa-solid fa-gear text-[#ff7700]"></i>
              </div>

              <div className="flex-1">
                <h3 className="font-medium">
                  Settings
                </h3>

                <p className="text-gray-500 text-xs mt-1">
                  Manage dashboard settings
                </p>
              </div>

              <i className="fa-solid fa-chevron-right text-gray-600 group-hover:text-[#ff7700] transition"></i>
            </Link>

          </div>
        </div>
      </div>

      {/* Bottom Welcome Card */}
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
              Aluminium Solutions
            </h2>

            <p className="text-gray-400 text-sm mt-2 max-w-xl">
              Manage your orders, products and customers from one
              simple dashboard.
            </p>
          </div>

          <Link
            to="/dashboard/orders"
            className="w-fit border border-[#ff7700] text-[#ff7700] hover:bg-[#ff7700] hover:text-white px-5 py-3 rounded-lg font-medium transition duration-300"
          >
            View Orders
          </Link>

        </div>
      </div>

    </div>
  );
};

export default DashboardHome;