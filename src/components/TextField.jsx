const TextField = ({ label, type = "text", id,name, placeholder, required, value, onChange }) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
  );
};

export default TextField;
