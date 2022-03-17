import React, { useState, useEffect } from 'react';
import Customer from './CustomersTableItem';
import { Link } from 'react-router-dom';

function CustomersTable({ selectedItems }) {
  const customers = [
    {
      id: '0',
      name: 'Patricia Semklo',
      email: 'patricia.semklo@app.com',
      location: 'Tronto',
      orders: '24',
      status: true,
      spent: '$2,890.66',
      refunds: '-',
      fav: true,
    },
    {
      id: '1',
      name: 'Dominik Lamakani',
      email: 'dominik.lamakani@gmail.com',
      location: 'Kitchener',
      orders: '77',
      status: false,
      spent: '$14,767.04',
      refunds: '4',
      fav: false,
    },
    {
      id: '2',
      name: 'Ivan Mesaros',
      email: 'imivanmes@gmail.com',
      location: 'Toronto',
      orders: '44',
      status: false,
      spent: '$4,996.00',
      refunds: '1',
      fav: true,
    },
    {
      id: '3',
      name: 'Maria Martinez',
      email: 'martinezhome@gmail.com',
      location: 'Kingston',
      orders: '29',
      status: false,
      spent: '$3,220.66',
      refunds: '2',
      fav: false,
    },
    {
      id: '4',
      name: 'Vicky Jung',
      email: 'itsvicky@contact.com',
      location: 'Toronto',
      orders: '22',
      status: false,
      spent: '$2,890.66',
      refunds: '-',
      fav: true,
    },
    {
      id: '5',
      name: 'Tisho Yanchev',
      email: 'tisho.y@kurlytech.com',
      location: 'Toronto',
      orders: '14',
      status: false,
      spent: '$1,649.99',
      refunds: '1',
      fav: true,
    },
    {
      id: '6',
      name: 'James Cameron',
      email: 'james.ceo@james.tech',
      location: 'Toronto',
      orders: '34',
      status: false,
      spent: '$3,569.87',
      refunds: '2',
      fav: true,
    },
    {
      id: '7',
      name: 'Haruki Masuno',
      email: 'haruki@supermail.jp',
      location: 'PEI',
      orders: '112',
      status: false,
      spent: '$19,246.07',
      refunds: '6',
      fav: false,
    },
    {
      id: '8',
      name: 'Joe Huang',
      email: 'joehuang@hotmail.com',
      location: 'Waterloo',
      orders: '64',
      status: false,
      spent: '$12,276.92',
      refunds: '-',
      fav: true,
    },
    {
      id: '9',
      name: 'Carolyn McNeail',
      email: 'carolynlove@gmail.com',
      location: 'Winsor',
      orders: '19',
      status: false,
      spent: '$1,289.97',
      refunds: '2',
      fav: false,
    },
  ];

  // const [selectAll, setSelectAll] = useState(false);
  // const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(customers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleClick = (e) => {
  //   const { id, checked } = e.target;
  //   setSelectAll(false);
  //   setIsCheck([...isCheck, id]);
  //   if (!checked) {
  //     setIsCheck(isCheck.filter((item) => item !== id));
  //   }
  // };

  // useEffect(() => {
  //   selectedItems(isCheck);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isCheck]);

  return (
    <div className="bg-white shadow-lg rounded-sm border border-gray-200 relative">
      {/* NOTE: header */}
      <header className=" flex items-center justify-between px-5 py-4">
        <h2 className="font-semibold text-gray-800 pr-4">
          All Patients <span className="text-gray-400 font-medium">248</span>
        </h2>
        <form>
          <div className="relative">
            <input className="form-input w-full pl-9" type="search" placeholder="Search" />
            <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
              <svg
                className="w-4 h-4 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 mr-2"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </form>
      </header>
      <div>
        {/* Table */}
        <Link to="/patientdetail">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              {/* Table header */}
              <thead className="text-xs font-semibold uppercase text-gray-500 bg-gray-50 border-t border-b border-gray-200">
                <tr>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-left">Patient Name</div>
                  </th>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-left">Email</div>
                  </th>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-left">Location</div>
                  </th>
                  <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                    <div className="font-semibold text-left">status</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="cursor-pointer text-sm divide-y divide-gray-200">
                {list.map((customer) => {
                  return (
                    <Customer
                      key={customer.id}
                      id={customer.id}
                      image={customer.image}
                      name={customer.name}
                      email={customer.email}
                      location={customer.location}
                      status={customer.status}
                      fav={customer.fav}
                      // handleClick={handleClick}
                      // isChecked={isCheck.includes(customer.id)}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CustomersTable;
