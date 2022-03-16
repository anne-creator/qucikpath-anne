import React from 'react';
import { useHistory } from 'react-router-dom';

function SpecimentTableItem({ id, name, createdDate }) {
  const history = useHistory();

  const changePage = (e) => {
    let path = `/specimendetail`;
    history.push(path);
  };
  return (
    <tr
      className="hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={changePage}
    >
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-gray-800 text-left">{name}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-gray-800 text-left">{id}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-gray-800 text-left">{createdDate}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-center"></div>
      </td>
    </tr>
  );
}

export default SpecimentTableItem;
