const Error = ({ error }) => {
  return (
    <div
      className="bg-red-100 border border-red-400 rounded text-center text-red-700 p-2"
    >{error}</div>
  );
}

export default Error;