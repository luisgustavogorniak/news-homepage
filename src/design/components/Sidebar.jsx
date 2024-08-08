import iconMenuClose from "../../assets/images/icon-menu-close.svg";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
      <div
        className={`flex flex-col py-8 px-5 fixed top-0 right-0 h-full bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-4/5`}
      >
        <button className="ml-auto" onClick={toggleSidebar}>
          <img src={iconMenuClose} alt="" />
        </button>
        <div className="p-4">
          {/* Adicione o conteúdo da sua sidebar aqui */}
          <ul className="mt-20 text-2xl">
            <li className="pb-5 cursor-pointer hover:text-[#f15e50]">Home</li>
            <li className="pb-5 cursor-pointer hover:text-[#f15e50]">New</li>
            <li className="pb-5 cursor-pointer hover:text-[#f15e50]">
              Popular
            </li>
            <li className="pb-5 cursor-pointer hover:text-[#f15e50]">
              Trending
            </li>
            <li className="pb-5 cursor-pointer hover:text-[#f15e50]">
              Categories
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
