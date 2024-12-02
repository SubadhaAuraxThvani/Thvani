"use client";

import React, { ReactNode } from "react";
import { Box, Button, Typography } from "@mui/material";
// import Cookies from "js-cookie";
import { CiMenuFries } from "react-icons/ci";
import './index.css'
import { FaUsers, FaProductHunt, FaComments, FaCogs, FaShippingFast, FaFileInvoiceDollar, FaChartBar, 
  // FaHandsHelping, 
  FaQuestionCircle } from "react-icons/fa";

// Admin menu items with corresponding icons
const adminList = [
  { id: 1, text: "Users Management", route: "/admin/users", icon: <FaUsers /> },
  { id: 2, text: "Product Management", route: "/admin/products", icon: <FaProductHunt /> },
  { id: 3, text: "Reviews & Feedback", route: "/admin/reviews", icon: <FaComments /> },
  { id: 4, text: "Categories", route: "/admin/categories", icon: <FaCogs /> },
  { id: 5, text: "Testimonals", route: "/admin/testimonals", icon: <FaComments /> },
  { id: 7, text: "Orders", route: "/admin/orders", icon: <FaFileInvoiceDollar /> },
  { id: 9, text: "Analytics & Reports", route: "/admin/analytics", icon: <FaChartBar /> },
  { id: 10, text: "Payments", route: "/admin/payments", icon: <FaFileInvoiceDollar /> },
  { id: 11, text: "Shipping & Delivery", route: "/admin/shipping", icon: <FaShippingFast /> },
  { id: 13, text: "Site Settings", route: "/admin/site-settings", icon: <FaCogs /> },
  { id: 16, text: "FAQ's", route: "/admin/faq", icon: <FaQuestionCircle /> }
];

interface AdminDashboardProps {
  children: ReactNode;
}

const AdminDashboardLayout: React.FC<AdminDashboardProps> = ({ children }) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulated authentication check
  // useEffect(() => {
  //   const token = Cookies.get("jwt_token");
  //   if (token) {
  //     setIsAuthenticated(true);
  //   } else {
  //     document.location.replace("/login");
  //   }
  // }, []);

  // const handleLogout = () => {
  //   Cookies.remove("jwt_token");
  //   document.location.replace("/login");
  // };

  return (
    <Box className="flex min-h-screen bg-gray-100 shadow-lg">
      {/* Left Sidebar */}
      <div className="left-side-menu w-70 bg-white text-black p-5 space-y-4">
        <Typography variant="h6" className="text-xl font-semibold">
          Admin Menu
        </Typography>
        {adminList.map((item) => (
          <Box
            key={item.id}
            className="hover:bg-gray-700 rounded-lg"
          >
            {/* Sidebar Links with Icons */}
            <a
              href={item.route}
              className="py-2 px-3 text-black hover:text-gray-300 flex items-center space-x-2"
            >
              {/* Menu Item Icon */}
              <span className="text-xl ">{item.icon}</span>
              <span className="text-list">{item.text}</span>
            </a>
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
            <Typography
              variant="h6"
              component="a"
              href="/admin"
              className="font-semibold text-xl text-gray-800"
            >
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
