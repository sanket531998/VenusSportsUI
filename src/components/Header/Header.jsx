import venusLogo from "../../assets/venuslogo.png";

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <navbar>
      <div className="bg-slate-200 text-2xl h-12 flex justify-center items-center text-gray-400">
        <span>Venus Sports Association</span>
      </div>

      <div className="bg-white flex flex-row border-b  border-slate-300 justify-between items-center  cursor-pointer select-none px-4 shadow-lg  w-full h-12">
        <div>
          <img
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUBq0UUE7M-2p26qp91KIKMHJw2s8XPI7iQ&s"
            src={venusLogo}
            className="h-11 rounded m-2"
            alt="logo-venus"
          ></img>
        </div>
        <ul className="md:flex flex-row hidden">
          <li className="px-3 py-1 font-semibold hover:bg-slate-100 rounded-lg">
            Home
          </li>
          <li className="px-3 py-1 font-semibold hover:bg-slate-100 rounded-lg">
            Volleyball
          </li>
          <li className="px-3 py-1 font-semibold hover:bg-slate-100 rounded-lg">
            Summer Camp
          </li>
          <li className="px-3 py-1 font-semibold hover:bg-slate-100 rounded-lg">
            Gallery
          </li>
          <li className="px-3 py-1 font-semibold hover:bg-slate-100 rounded-lg">
            Team
          </li>
          <li className="px-3 py-1 font-semibold hover:bg-slate-100 rounded-lg">
            Contact us
          </li>
        </ul>
        <div>
          <p className="md:block hidden bg-blue-500 hover:bg-blue-400 px-3 py-1 rounded-lg text-white shadow-md">
            Register
          </p>
        </div>
        <div className="md:hidden cursor-pointer">
          <div class="hamburger">
            <div className="bg-slate-500 h-1 w-6 my-1"></div>
            <div className="bg-slate-500 h-1 w-6 my-1"></div>
            <div className="bg-slate-500 h-1 w-6 my-1"></div>
          </div>
        </div>
      </div>
    </navbar>
  );
};

export default Header;
