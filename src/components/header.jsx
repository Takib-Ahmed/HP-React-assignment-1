

const HeaderComponent = () => {
  return (
    <div className="bg-gray-100 p-4 flex justify-between items-center px-24">
      {/* Left Section */}
      <div>
        <p className="text-gray-500">Welcome back</p>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search Box */}
        <form className="bg-white p-2 flex items-center gap-2 rounded-md shadow-md">
          <span role="img" aria-label="search"><img src="/public/Frame (3).png" alt="" /></span> 
    <input type="text" className=' border-none out border-none outline-none'  placeholder='Search incident'/>
        </form>

        {/* Sort By */}
        <button className="bg-white p-2 rounded-md shadow-md">
          <span className="text-gray-500">Sort By: Date modified</span>
        </button>

        {/* Cypher AI Button */}
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md shadow-md">
          Cypher AI
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
