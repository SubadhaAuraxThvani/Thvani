"use client";

import React, { useEffect, useState, ReactNode  } from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import Cookies from "js-cookie";
import { CiMenuFries } from "react-icons/ci";

// Admin menu items
const adminList = [
  { id: 1, text: "Users Management", route: "/admin/users" },
  { id: 2, text: "Product Management", route: "/admin/products" },
  { id: 3, text: "Reviews & Feedback", route: "/admin/reviews" },
  { id: 4, text: "Categories", route: "/admin/categories" },
  { id: 5, text: "Testimonals", route: "/admin/testimonals" },
  // { id: 6, text: "Customer Service", route: "/admin/achievements" },
  { id: 7, text: "Orders", route: "/admin/orders" },
  // { id: 8, text: "Marketing", route: "/admin/sub-admin" },
  { id: 9, text: "Analytics & Reports", route: "/admin/analytics" },
  { id: 10, text: "Payments", route: "/admin/payments" },
  { id: 11, text: "Shipping & Delivery", route: "/admin/shipping" },
  // { id: 12, text: "Content Management", route: "/admin/blog" },
  { id: 13, text: "Site Settings", route: "/admin/site-settings" },
  // { id: 14, text: "Help & Support", route: "/admin/blog" },
  // { id: 15, text: "Notifications", route: "/admin/blog" },
  { id: 16, text: "FAQ's", route: "/admin/faq"}
];

interface AdminDashboardProps {
    children: ReactNode;
  }

const AdminDashboardLayout: React.FC<AdminDashboardProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulated authentication check
//   useEffect(() => {
//     const token = Cookies.get("jwt_token");
//     if (token) {
//       setIsAuthenticated(true);
//     } else {
//       document.location.replace("/login");
//     }
//   }, []);

//   const handleLogout = () => {
//     Cookies.remove("jwt_token");
//     document.location.replace("/login");
//   };

  return (
    <Box className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-5 space-y-4">
        <Typography variant="h6" className="text-xl font-semibold">Admin Menu</Typography>
        {adminList.map((item) => (
          <Box key={item.id} className="hover:bg-gray-700 rounded-lg">
            {(

        // isAuthenticated &&
            <a href={item.route} className="block py-2 px-3 text-white hover:text-gray-300">
              {item.text}
            </a>
            )}
          </Box>
        ))}
      </div>

      {/* Main Content Area */}
      <Box className="flex-1 bg-white p-5">
        {/* Navbar */}
        <nav className="bg-white shadow-lg fixed w-full z-10 top-0 left-0 p-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* Sidebar Toggle Button */}
            <Button className="text-gray-600 md:hidden">
              <CiMenuFries className="text-2xl" />
            </Button>

            {/* Admin Title */}
            <Typography variant="h6" component="a" href="/admin" className="font-semibold text-xl text-gray-800">
              ADMIN
            </Typography>
          </div>

          {/* Logout Button */}
          <Button className="bg-blue-500 text-white hover:bg-blue-600">Log Out</Button>
        </nav>

        {/* Main Content */}
        <Box className="pt-16">
          {children} 
        </Box>
      </Box>
    </Box>
  );
};


export default AdminDashboardLayout;
