import { useEffect, useState } from 'react'
import './App.css'
import TextField from './components/TextField';
import Table from './components/Table';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2/dist/sweetalert2.js'
function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    _id: null, // Add an id field to track if we're editing an existing entry
  });
  const [enquiryList, setEnquiryList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form._id) {
      // Update existing entry
      axios.put(`http://localhost:8020/api/website/enquiry/update/${form._id}`, form)
        .then(response => {
          toast.success('Form updated successfully!');
          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
            _id: null,
          });
          getEnquiryList(); // Refresh the list after update
        })
        .catch(error => {
          console.error('Error updating form:', error);
        });

    } else {

      // Create new entry
      axios.post('http://localhost:8020/api/website/enquiry/insert', form)
        .then(response => {
          console.log('Form submitted successfully:', response.data);
          toast.success('Form submitted successfully!');
          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          getEnquiryList();
        })
        .catch(error => {
          console.error('Error submitting form:', error);
        });
    }

  };

  const getEnquiryList = () => {

    axios.get('http://localhost:8020/api/website/enquiry/view')
      .then(response => {
        setEnquiryList(response.data?.enquiryList || []);
      })
      .catch(error => {
        console.error('Error :', error);
      });
  };

  useEffect(() => {
    getEnquiryList();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className='grid grid-cols-[30%_auto] p-4 gap-10 '>
        <div className='bg-gray-100 rounded-2xl p-4'>
          <h2 className='text-lg font-bold mb-4'>Enquiry Form</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Your Name"
              name="name"
              placeholder="Enter your name"
              required
              value={form.name}
              onChange={handleChange}
            />
            <TextField
              label="Your email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={form.email}
              onChange={handleChange}
            />
            <TextField
              label="Your phone"
              type="phone"
              name="phone"
              placeholder="Enter your phone"
              required
              value={form.phone}
              onChange={handleChange}
            />

            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
            <textarea name="message" value={form.message} onChange={handleChange} required rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>

            <button
              type="submit"
              className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 
        focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
        text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {form._id ? 'Update' : 'Submit'}
            </button>
          </form>
        </div>



        <div className='bg-gray-100 rounded-2xl p-4'>
          <h2 className='text-lg font-bold mb-4'>Enquiry List</h2>

          <Table data={enquiryList} getEnquiryList={getEnquiryList} Swal={Swal} setForm={setForm} />
        </div>



      </div>
    </>
  );
};

export default App
