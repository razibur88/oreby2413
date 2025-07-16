import { useContext } from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import Slider from "react-slick";
import Container from "./Container";
import { ApiData } from "./ContextApi";

const NewArrivals = () => {
    let data = useContext(ApiData);
    let newSlider = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
  return (
    <div>
      <Container>
        <h2 className="font-dm text-[40px] text-[#262626] font-bold">
          New Arrivals
        </h2>

        <div>
          <Slider {...newSlider}>
            {data.map((item) => (
              <div className="!w-[95%]">
                <div className="relative group">
                  <div className="">
                    <img src={item.thumbnail} alt="" />
                  </div>
                  <div className="absolute left-0 bottom-0 w-full bg-[white] opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                    <ul className="pr-4">
                      <li className="flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]">
                        <span className="">Add to Wish List</span>{" "}
                        <FaHeart className="" />
                      </li>
                      <li className="flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]">
                        <span> Compare</span> <IoGitCompare />
                      </li>
                      <li className="flex items-center justify-end py-2 gap-2 text-[#767676] hover:text-[#222]">
                        <span> Add to Cart</span> <FaCartPlus />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="">
                    <h3>{item.title}</h3>
                    <p>{item.brand}</p>
                  </div>
                  <div className="">${item.price}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
}
export default NewArrivals