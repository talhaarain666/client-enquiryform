import { useState } from 'react'
import './App.css'
import TextField from './components/TextField';

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <TextField
        label="Your Name"
        id="name"
        placeholder="Enter your name"
        required
        value={form.name}
        onChange={handleChange}
      />
      <TextField
        label="Your email"
        type="email"
        id="email"
        placeholder="Enter your email"
        required
        value={form.email}
        onChange={handleChange}
      />
      <TextField
        label="Your phone"
        type="phone"
        id="phone"
        placeholder="Enter your phone"
        required
        value={form.phone}
        onChange={handleChange}
      />

        <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
        <textarea id="message" value={form.message} onChange={handleChange} required rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                   focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                   text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default App
