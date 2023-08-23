import React from 'react';

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3 ">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">45646545646</td>
            <td className="py-6 px-1">27/07/2023</td>
            <td className="py-6 px-1">$89.95</td>
            <td className="hidden md:block py-6 px-1">Pizza Napolitana</td>
            <td className="py-6 px-1 text-red-600">On the way-aprox. 10m</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
