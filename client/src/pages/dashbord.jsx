import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

const salesData = [
  { name: "Jan", sold: 240 },
  { name: "Feb", sold: 139 },
  { name: "Mar", sold: 980 },
  { name: "Apr", sold: 390 },
  { name: "May", sold: 480 },
  { name: "Jun", sold: 380 },
];

const popularBooks = [
  { name: "Book A", value: 400 },
  { name: "Book B", value: 300 },
  { name: "Book C", value: 300 },
  { name: "Book D", value: 200 },
];

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 2000 },
  { month: "Apr", revenue: 2780 },
  { month: "May", revenue: 1890 },
];

const activeUsersData = [
  { name: "Week 1", users: 400 },
  { name: "Week 2", users: 700 },
  { name: "Week 3", users: 600 },
  { name: "Week 4", users: 900 },
];

const inventoryStats = [
  { category: "Fiction", books: 120 },
  { category: "Academic", books: 90 },
  { category: "Science", books: 60 },
  { category: "Comics", books: 30 },
];

export default function AdminAnalytics() {
  return (
    <div className="p-6 bg-amber-50 space-y-10">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        📊 Admin Analytics Dashboard
      </h2>

      <section>
        <h3 className="text-xl font-semibold mb-2">Total Books Sold</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={salesData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sold" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Most Popular Books</h3>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={popularBooks}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {popularBooks.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Revenue Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Active Users (Weekly)</h3>
        <ResponsiveContainer width="80%" height={400}>
          <BarChart data={activeUsersData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#ff8042" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Inventory Stats</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={inventoryStats}
              dataKey="books"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {inventoryStats.map((entry, index) => (
                <Cell key={`inv-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Quick Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white shadow p-4 rounded-lg">
            <p className="text-gray-500">Total Users</p>
            <p className="text-2xl font-bold text-blue-600">1,245</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg">
            <p className="text-gray-500">Books in Inventory</p>
            <p className="text-2xl font-bold text-green-600">654</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg">
            <p className="text-gray-500">Total Revenue</p>
            <p className="text-2xl font-bold text-yellow-600">₹2.4L</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg">
            <p className="text-gray-500">Monthly Orders</p>
            <p className="text-2xl font-bold text-red-600">328</p>
          </div>
        </div>
      </section>
    </div>
  );
}









// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
//   LineChart,
//   Line,
//   CartesianGrid,
// } from "recharts";

// const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

// const salesData = [
//   { name: "Jan", sold: 240 },
//   { name: "Feb", sold: 139 },
//   { name: "Mar", sold: 980 },
//   { name: "Apr", sold: 390 },
//   { name: "May", sold: 480 },
//   { name: "Jun", sold: 380 },
// ];

// const popularBooks = [
//   { name: "Book A", value: 400 },
//   { name: "Book B", value: 300 },
//   { name: "Book C", value: 300 },
//   { name: "Book D", value: 200 },
// ];

// const revenueData = [
//   { month: "Jan", revenue: 4000 },
//   { month: "Feb", revenue: 3000 },
//   { month: "Mar", revenue: 2000 },
//   { month: "Apr", revenue: 2780 },
//   { month: "May", revenue: 1890 },
// ];

// const activeUsersData = [
//   { name: "Week 1", users: 400 },
//   { name: "Week 2", users: 700 },
//   { name: "Week 3", users: 600 },
//   { name: "Week 4", users: 900 },
// ];

// const inventoryStats = [
//   { category: "Fiction", books: 120 },
//   { category: "Academic", books: 90 },
//   { category: "Science", books: 60 },
//   { category: "Comics", books: 30 },
// ];

// export default function AdminAnalytics() {
//   return (
//     <div className="p-6 bg-amber-50 space-y-10">
//       <h2 className="text-3xl font-bold text-center text-gray-800">
//         📊 Admin Analytics Dashboard
//       </h2>

//       <section>
//         <h3 className="text-xl font-semibold mb-2">Total Books Sold</h3>
//         <ResponsiveContainer width="100%" height={400}>
//           <BarChart data={salesData}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="sold" fill="#8884d8" />
//           </BarChart>
//         </ResponsiveContainer>
//       </section>

//       <section>
//         <h3 className="text-xl font-semibold mb-2">Most Popular Books</h3>
//         <ResponsiveContainer width="100%" height={400}>
//           <PieChart>
//             <Pie
//               data={popularBooks}
//               dataKey="value"
//               nameKey="name"
//               cx="50%"
//               cy="50%"
//               outerRadius={100}
//               label
//             >
//               {popularBooks.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </section>

//       <section>
//         <h3 className="text-xl font-semibold mb-2">Revenue Overview</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={revenueData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={2} />
//           </LineChart>
//         </ResponsiveContainer>
//       </section>

//       <section>
//         <h3 className="text-xl font-semibold mb-2">Active Users (Weekly)</h3>
//         <ResponsiveContainer width="80%" height={400}>
//           <BarChart data={activeUsersData}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="users" fill="#ff8042" />
//           </BarChart>
//         </ResponsiveContainer>
//       </section>

//       <section>
//         <h3 className="text-xl font-semibold mb-2">Inventory Stats</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <PieChart>
//             <Pie
//               data={inventoryStats}
//               dataKey="books"
//               nameKey="category"
//               cx="50%"
//               cy="50%"
//               outerRadius={100}
//               label
//             >
//               {inventoryStats.map((entry, index) => (
//                 <Cell key={`inv-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </section>

//       <section>
//         <h3 className="text-xl font-semibold mb-2">Quick Metrics</h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           <div className="bg-white shadow p-4 rounded-lg">
//             <p className="text-gray-500">Total Users</p>
//             <p className="text-2xl font-bold text-blue-600">1,245</p>
//           </div>
//           <div className="bg-white shadow p-4 rounded-lg">
//             <p className="text-gray-500">Books in Inventory</p>
//             <p className="text-2xl font-bold text-green-600">654</p>
//           </div>
//           <div className="bg-white shadow p-4 rounded-lg">
//             <p className="text-gray-500">Total Revenue</p>
//             <p className="text-2xl font-bold text-yellow-600">₹2.4L</p>
//           </div>
//           <div className="bg-white shadow p-4 rounded-lg">
//             <p className="text-gray-500">Monthly Orders</p>
//             <p className="text-2xl font-bold text-red-600">328</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }







// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
//   LineChart,
//   Line,
//   CartesianGrid,
// } from "recharts";

// const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

// const salesData = [
//   { name: "Jan", sold: 240 },
//   { name: "Feb", sold: 139 },
//   { name: "Mar", sold: 980 },
//   { name: "Apr", sold: 390 },
//   { name: "May", sold: 480 },
//   { name: "Jun", sold: 380 },
// ];

// const popularBooks = [
//   { name: "Book A", value: 400 },
//   { name: "Book B", value: 300 },
//   { name: "Book C", value: 300 },
//   { name: "Book D", value: 200 },
// ];

// const revenueData = [
//   { month: "Jan", revenue: 4000 },
//   { month: "Feb", revenue: 3000 },
//   { month: "Mar", revenue: 2000 },
//   { month: "Apr", revenue: 2780 },
//   { month: "May", revenue: 1890 },
// ];

// const activeUsersData = [
//   { name: "Week 1", users: 400 },
//   { name: "Week 2", users: 700 },
//   { name: "Week 3", users: 600 },
//   { name: "Week 4", users: 900 },
// ];

// const inventoryStats = [
//   { category: "Fiction", books: 120 },
//   { category: "Academic", books: 90 },
//   { category: "Science", books: 60 },
//   { category: "Comics", books: 30 },
// ];

// export default function AdminAnalytics() {
//   return (
//     <div className="p-6 bg-amber-50 space-y-10">
//       <h2 className="text-3xl font-bold text-center text-gray-800">
//         📊 Admin Analytics Dashboard
//       </h2>

//       <section>
//         <h3 className="text-xl font-semibold mb-2">Total Books Sold</h3>
//         <ResponsiveContainer width="100%" height={400}>
//           <BarChart data={salesData}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="sold" fill="#8884d8" />
//           </BarChart>
//         </ResponsiveContainer>
//       </section>

//       <section>
//         <h3 className="text-xl font-semibold mb-2">Most Popular Books</h3>
//         <ResponsiveContainer width="100%" height={400}>
//           <PieChart>
//             <Pie
//               data={popularBooks}
//               dataKey="value"
//               nameKey="name"
//               cx="50%"
//               cy="50%"
//               outerRadius={100}
//               label
//             >
//               {popularBooks.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </section>

//       <section>
//         <h3 className="text-xl font-semibold mb-2">Revenue Overview</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={revenueData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={2} />
//           </LineChart>
//         </ResponsiveContainer>
//       </section>

//       <section>
//         <h3 className="text-xl font-semibold mb-2">Active Users (Weekly)</h3>
//         <ResponsiveContainer width="80%" height={400}>
//           <BarChart data={activeUsersData}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="users" fill="#ff8042" />
//           </BarChart>
//         </ResponsiveContainer>
//       </section>

//       <section>
//         <h3 className="text-xl font-semibold mb-2">Inventory Stats</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <PieChart>
//             <Pie
//               data={inventoryStats}
//               dataKey="books"
//               nameKey="category"
//               cx="50%"
//               cy="50%"
//               outerRadius={100}
//               label
//             >
//               {inventoryStats.map((entry, index) => (
//                 <Cell key={`inv-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </section>

//       <section>
//         <h3 className="text-xl font-semibold mb-2">Quick Metrics</h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           <div className="bg-white shadow p-4 rounded-lg">
//             <p className="text-gray-500">Total Users</p>
//             <p className="text-2xl font-bold text-blue-600">1,245</p>
//           </div>
//           <div className="bg-white shadow p-4 rounded-lg">
//             <p className="text-gray-500">Books in Inventory</p>
//             <p className="text-2xl font-bold text-green-600">654</p>
//           </div>
//           <div className="bg-white shadow p-4 rounded-lg">
//             <p className="text-gray-500">Total Revenue</p>
//             <p className="text-2xl font-bold text-yellow-600">₹2.4L</p>
//           </div>
//           <div className="bg-white shadow p-4 rounded-lg">
//             <p className="text-gray-500">Monthly Orders</p>
//             <p className="text-2xl font-bold text-red-600">328</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
