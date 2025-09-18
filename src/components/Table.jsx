import axios from "axios";
import { toast } from "react-toastify";

const Table = ({ data, getEnquiryList, Swal, setForm }) => {

  const deleteRow = (id) => {
    console.log('Delete row with id:', id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {

      if (result.isConfirmed) {


        axios.delete(`http://localhost:8020/api/website/enquiry/delete/${id}`)
          .then(response => {
            toast.success('Row deleted successfully!');
            getEnquiryList();

          })
          .catch(error => {
            console.error('Error deleting row:', error);
          });


      }
    });


  }

  const editRow = (id) => {

    axios.get(`http://localhost:8020/api/website/enquiry/single/${id}`).then(response => {
      const rowData = response.data?.enquiry;
      setForm(rowData);
    })

    // setForm({
    //     name: rowData.name,
    //     email: rowData.email,
    //     phone: rowData.phone,
    //     message: rowData.message,
    //     id: rowData._id, // Add the id to the form state for reference
    //   });


  }
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
            {
              data.length > 0 ? data?.map((item, index) => (
                <tr key={index} className="bg-white border-b border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">
                    {item.name}
                  </td>
                  <td className="px-6 py-4">
                    {item.email}
                  </td>
                  <td className="px-6 py-4">
                    {item.phone}
                  </td>
                  <td className="px-6 py-4">
                    {item.message}
                  </td>
                  <td className="px-6 py-4">
                    <button className="cursor-pointer font-medium text-blue-600 hover:underline" onClick={() => editRow(item._id)}>Edit</button>
                  </td>
                  <td className="px-6 py-4">
                    <button className="cursor-pointer font-medium text-red-600 hover:underline" onClick={() => deleteRow(item._id)}>Delete</button>
                  </td>
                </tr>
              ))
                : <tr><td colSpan="7" className="text-center py-4">No data available</td></tr>

            }

          </tbody>
        </table>
      </div>

    </>
  );
};

export default Table;
