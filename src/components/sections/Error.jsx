const Error = ({ error }) => {
  return (
    <div
      className="bg-red-100 border border-red-400 p-2 text-center text-red-700 rounded"
    >{error}</div>
  );
}

export default Error;