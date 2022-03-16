import React from 'react';

function CustomersTableItem(props) {
  return (
    <tr>
      <td className="px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <div className="font-medium text-gray-800">{props.name}</div>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{props.email}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{props.location}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        {props.status ? (
          <div className="text-left font-medium text-[#EA4335] ">New Messages!</div>
        ) : (
          <div className="text-left font-medium text-slate-400 ">Replied</div>
        )}
      </td>
    </tr>
  );
}

export default CustomersTableItem;
