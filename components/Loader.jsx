const Loader = () => {
  return (
    <div className=" fixed top-0 flex justify-center items-center h-screen w-screen bg-blur">
      <div className="loader-wrapper relative">
        <div className="packman"></div>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
