const Table = ({ }) => {
  return (
    <>
    <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Sr No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Message
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Edit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    1
                  </th>
                  <td className="px-6 py-4">
                    dfhfh
                  </td>
                  <td className="px-6 py-4">
                    fg@gmail.com
                  </td>
                  <td className="px-6 py-4">
                    999
                  </td>
                  <td className="px-6 py-4">
                    rsgrhrjhr sdfs
                  </td>
                  <td className="px-6 py-4">
                    <button className="cursor-pointer font-medium text-blue-600 hover:underline">Edit</button>
                  </td>
                  <td className="px-6 py-4">
                    <button className="cursor-pointer font-medium text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
               
              </tbody>
            </table>
          </div>
    
    </>
  );
};

export default Table;
