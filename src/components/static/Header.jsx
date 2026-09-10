import { useState } from "react";
import elishaLogo from "../../assets/elishaConsultancy.svg";
import GlobalBtn from "../ui/GlobalBtn";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="w-full bg-white text-black fixed top-0 left-0 shadow-sm z-[9999]">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        <div
          className="w-[180px] sm:w-[220px] md:w-[240px] flex items-center cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img
            src={elishaLogo}
            alt="Elisha Consultancy Services"
            className="w-full object-contain"
          />
        </div>

        {/* Desktop Navigation (Visible only on large screens lg:) */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center gap-8 lg:gap-12">
            <li
              className="font-semibold text-[16px] cursor-pointer hover:text-[#FFAE42] transition-colors"
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li
              className="font-semibold text-[16px] cursor-pointer hover:text-[#FFAE42] transition-colors"
              onClick={() => scrollToSection("about")}
            >
              About Us
            </li>
            <li
              className="font-semibold text-[16px] cursor-pointer hover:text-[#FFAE42] transition-colors"
              onClick={() => scrollToSection("services")}
            >
              Services
            </li>
            <li
              className="font-semibold text-[16px] cursor-pointer hover:text-[#FFAE42] transition-colors"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <GlobalBtn
            textBtn="Get in Touch"
            bg="bg-[#FFAE42] hover:bg-[#e59c3b] transition-colors duration-200"
            paddingX="px-6"
            paddingY="py-3"
            borderRadius="rounded-full"
            border="border-none"
            color="text-white"
            fontWeight="font-semibold"
            fontSize="text-[16px]"
            onClick={() => scrollToSection("contact")}
          />
        </div>

        {/* Hamburger Toggle Button (Visible on mobile & tablets up to lg) */}
        <button
          className="lg:hidden flex flex-col justify-between w-6 h-5 z-[10000] relative focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`h-[3px] w-full bg-black rounded-lg transition-all duration-300 origin-left ${isOpen ? "rotate-45" : ""}`}
          ></span>
          <span
            className={`h-[3px] w-full bg-black rounded-lg transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`h-[3px] w-full bg-black rounded-lg transition-all duration-300 origin-left ${isOpen ? "-rotate-45" : ""}`}
          ></span>
        </button>

        {/* Backdrop Overlay for Mobile/Tablet Drawer */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-[9998] lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile & Tablet Slide-out Drawer */}
        <div
          className={`fixed top-0 right-0 h-screen w-[80%] sm:w-[50%] md:w-[40%] bg-white shadow-2xl z-[9999] p-8 flex flex-col justify-start gap-8 transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <ul className="flex flex-col gap-6 mt-16 text-left">
            <li
              className="font-semibold text-[18px] cursor-pointer hover:text-[#FFAE42] transition-colors"
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li
              className="font-semibold text-[18px] cursor-pointer hover:text-[#FFAE42] transition-colors"
              onClick={() => scrollToSection("about")}
            >
              About Us
            </li>
            <li
              className="font-semibold text-[18px] cursor-pointer hover:text-[#FFAE42] transition-colors"
              onClick={() => scrollToSection("services")}
            >
              Services
            </li>
            <li
              className="font-semibold text-[18px] cursor-pointer hover:text-[#FFAE42] transition-colors"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>

          <div className="pt-4 border-t border-gray-100">
            <GlobalBtn
              textBtn="Get in Touch"
              bg="bg-[#FFAE42] w-full"
              paddingX="px-6"
              paddingY="py-3"
              borderRadius="rounded-full"
              border="border-none"
              color="text-white"
              fontWeight="font-semibold"
              fontSize="text-[16px]"
              onClick={() => scrollToSection("contact")}
            />
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;

// import { useState } from "react";
// import elishaLogo from "../../assets/elishaConsultancy.svg";
// import GlobalBtn from "../ui/GlobalBtn";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const scrollToSection = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setIsOpen(false);
//   };

//   return (
//     <header className="w-full bg-white text-black fixed top-0 left-0 shadow-sm z-[9999]">
//       <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">
//         <div
//           className="w-[200px] sm:w-[240px] flex items-center cursor-pointer"
//           onClick={() => scrollToSection("home")}
//         >
//           <img
//             src={elishaLogo}
//             alt="Elisha Consultancy Services"
//             className="w-full object-contain"
//           />
//         </div>

//         <nav className="hidden md:flex items-center">
//           <ul className="flex items-center gap-10 lg:gap-14">
//             <li
//               className="font-semibold text-[16px] cursor-pointer hover:text-[#FFAE42] transition-colors"
//               onClick={() => scrollToSection("home")}
//             >
//               Home
//             </li>
//             <li
//               className="font-semibold text-[16px] cursor-pointer hover:text-[#FFAE42] transition-colors"
//               onClick={() => scrollToSection("about")}
//             >
//               About Us
//             </li>
//             <li
//               className="font-semibold text-[16px] cursor-pointer hover:text-[#FFAE42] transition-colors"
//               onClick={() => scrollToSection("services")}
//             >
//               Services
//             </li>
//             <li
//               className="font-semibold text-[16px] cursor-pointer hover:text-[#FFAE42] transition-colors"
//               onClick={() => scrollToSection("contact")}
//             >
//               Contact
//             </li>
//           </ul>
//         </nav>

//         <div className="hidden md:block">
//           <GlobalBtn
//             textBtn="Get in Touch"
//             bg="bg-[#FFAE42] hover:bg-[#e59c3b] transition-colors duration-200"
//             paddingX="px-6"
//             paddingY="py-3"
//             borderRadius="rounded-full"
//             border="border-none"
//             color="text-white"
//             fontWeight="font-semibold"
//             fontSize="text-[16px]"
//             onClick={() => scrollToSection("contact")}
//           />
//         </div>

//         <button
//           className="md:hidden flex flex-col justify-between w-6 h-5 z-[10000] relative"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle Menu"
//         >
//           <span
//             className={`h-[3px] w-full bg-black rounded-lg transition-all duration-300 origin-left ${isOpen ? "rotate-45" : ""}`}
//           ></span>
//           <span
//             className={`h-[3px] w-full bg-black rounded-lg transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
//           ></span>
//           <span
//             className={`h-[3px] w-full bg-black rounded-lg transition-all duration-300 origin-left ${isOpen ? "-rotate-45" : ""}`}
//           ></span>
//         </button>

//         <div
//           className={`fixed top-0 right-0 h-screen w-[75%] sm:w-[60%] bg-white shadow-2xl z-[9999] p-10 flex flex-col justify-start gap-10 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
//         >
//           <ul className="flex flex-col gap-6 mt-16 text-left">
//             <li
//               className="font-semibold text-[18px] cursor-pointer hover:text-[#FFAE42]"
//               onClick={() => scrollToSection("home")}
//             >
//               Home
//             </li>
//             <li
//               className="font-semibold text-[18px] cursor-pointer hover:text-[#FFAE42]"
//               onClick={() => scrollToSection("about")}
//             >
//               About Us
//             </li>
//             <li
//               className="font-semibold text-[18px] cursor-pointer hover:text-[#FFAE42]"
//               onClick={() => scrollToSection("services")}
//             >
//               Services
//             </li>
//             <li
//               className="font-semibold text-[18px] cursor-pointer hover:text-[#FFAE42]"
//               onClick={() => scrollToSection("contact")}
//             >
//               Contact
//             </li>
//           </ul>

//           <div className="pt-4 border-t border-gray-100">
//             <GlobalBtn
//               textBtn="Get in Touch"
//               bg="bg-[#FFAE42] w-full"
//               paddingX="px-6"
//               paddingY="py-3"
//               borderRadius="rounded-full"
//               border="border-none"
//               color="text-white"
//               fontWeight="font-semibold"
//               fontSize="text-[16px]"
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
