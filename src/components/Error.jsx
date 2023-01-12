const Error = ({ children }) => {
  return (
    <div className="bg-red-700 my-4 rounded-md text-white font-bold p-3 uppercase text-center">
      {children}
    </div>
  );
};

export default Error;
