import React from 'react';

const TopProducts = () => {
  return (
    <div className="col-span-1 md:col-span-3 p-5 bg-white rounded shadow w-full">
      <h2 className="text-lg font-semibold mb-4">Top Products</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4">Product</th>
              <th className="py-2 px-4">Sold Amount</th>
              <th className="py-2 px-4">Unit Price</th>
              <th className="py-2 px-4">Revenue</th>
              <th className="py-2 px-4">Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 px-4">Camera Mi 360°</td>
              <td className="py-2 px-4">432</td>
              <td className="py-2 px-4">$120</td>
              <td className="py-2 px-4">$51,840</td>
              <td className="py-2 px-4">4.81</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">Massage Gun</td>
              <td className="py-2 px-4">120</td>
              <td className="py-2 px-4">$112</td>
              <td className="py-2 px-4">$25,440</td>
              <td className="py-2 px-4">3.44</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">Vacuum-Mop 2 Pro</td>
              <td className="py-2 px-4">221</td>
              <td className="py-2 px-4">$320</td>
              <td className="py-2 px-4">$15,123</td>
              <td className="py-2 px-4">3.22</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">Vacuum-Mop 2</td>
              <td className="py-2 px-4">223</td>
              <td className="py-2 px-4">$234</td>
              <td className="py-2 px-4">$32,812</td>
              <td className="py-2 px-4">3.00</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">Camera Mi 360°</td>
              <td className="py-2 px-4">432</td>
              <td className="py-2 px-4">$120</td>
              <td className="py-2 px-4">$51,840</td>
              <td className="py-2 px-4">4.81</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">Massage Gun</td>
              <td className="py-2 px-4">120</td>
              <td className="py-2 px-4">$112</td>
              <td className="py-2 px-4">$25,440</td>
              <td className="py-2 px-4">3.44</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">Vacuum-Mop 2 Pro</td>
              <td className="py-2 px-4">221</td>
              <td className="py-2 px-4">$320</td>
              <td className="py-2 px-4">$15,123</td>
              <td className="py-2 px-4">3.22</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">Vacuum-Mop 2</td>
              <td className="py-2 px-4">223</td>
              <td className="py-2 px-4">$234</td>
              <td className="py-2 px-4">$32,812</td>
              <td className="py-2 px-4">3.00</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">Vacuum-Mop 2 Pro</td>
              <td className="py-2 px-4">221</td>
              <td className="py-2 px-4">$320</td>
              <td className="py-2 px-4">$15,123</td>
              <td className="py-2 px-4">3.22</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">Vacuum-Mop 2</td>
              <td className="py-2 px-4">223</td>
              <td className="py-2 px-4">$234</td>
              <td className="py-2 px-4">$32,812</td>
              <td className="py-2 px-4">3.00</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">Vacuum-Mop 2</td>
              <td className="py-2 px-4">223</td>
              <td className="py-2 px-4">$234</td>
              <td className="py-2 px-4">$32,812</td>
              <td className="py-2 px-4">3.00</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProducts;
