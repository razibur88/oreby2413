import { FaCartArrowDown, FaSearch, FaUser } from "react-icons/fa";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";

import Container from "./Container";


import Flex from "./Flex";


const Navbar = () => {
  return (
    <nav className={`bg-[#F5F5F3] py-2 lg:mt-0`}>
      <Container>
        <Flex className="items-center">
          <div className="w-1/4">
            <div className="flex items-center gap-2 ">
              <div className="">
                <HiOutlineBars2 />
              </div>
              <h3 className="font-dm text-[14px] text-[#262626] font-normal">
                Shop by Category
              </h3>
            </div>
          </div>
          <div className="w-2/4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white py-3 pl-4 rounded-full"
              />
              <div className="absolute right-6 top-[50%] translate-y-[-50%]">
                <FaSearch />
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="flex justify-end gap-x-3">
              <div className="flex">
                <FaUser />
                <IoMdArrowDropdown />
              </div>
              <FaCartArrowDown />
            </div>
          </div>
        </Flex>
      </Container>
    </nav>
  );
}
export default Navbar