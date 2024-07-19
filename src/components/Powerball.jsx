import { FiRefreshCw } from "react-icons/fi"; 
import { RxCross1 } from "react-icons/rx"; 
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import React, { useState, useEffect } from "react";

const Powerball = () => {
  const mainBallNumbers = [...Array(69).keys()].map((i) => i + 1);
  const megaBallNumbers = [...Array(26).keys()].map((i) => i + 1);

  const [selectedMainBalls, setSelectedMainBalls] = useState([null, null, null, null, null]);
  const [selectedMegaBall, setSelectedMegaBall] = useState(null); 
  const [timeLeft, setTimeLeft] = useState(300); 

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } 
  }, [timeLeft]);
  
   

  const handleMainBallClick = (num) => { 
    const index = selectedMainBalls.indexOf(num); 
    // console.log("index of",index); 
    if (index !== -1) {
    
      const newSelectedMainBalls = [...selectedMainBalls]; 
      // console.log("new selected ball",newSelectedMainBalls);
      
      newSelectedMainBalls[index] = null;
      setSelectedMainBalls(newSelectedMainBalls);
    } else if (selectedMainBalls.includes(null)) {
      const newSelectedMainBalls = [...selectedMainBalls]; 

      const firstEmptyIndex = newSelectedMainBalls.indexOf(null);  
      // console.log("firstEmptyIndex",firstEmptyIndex)
      newSelectedMainBalls[firstEmptyIndex] = num; 
      setSelectedMainBalls(newSelectedMainBalls); 
     
    }
  };  




  // console.log("selectedMainBalls",selectedMainBalls)

  const handleMegaBallClick = (num) => {  
    // console.log("num",num);

    setSelectedMegaBall(selectedMegaBall === num ? null : num);  
  
  };    


  const clearSelection = () => {
    setSelectedMainBalls([null, null, null, null, null]);
    setSelectedMegaBall(null); 
  };

  const autoSelect = () => { 

    const shuffledMainBalls = mainBallNumbers.sort(() =>0.5 - Math.random());  
    // console.log("shuffledMainBalls",shuffledMainBalls);
 

    const shuffledMegaBalls = megaBallNumbers.sort(() => 0.5 - Math.random()); 
    // console.log("shuffledMegaBalls",shuffledMegaBalls);
 

    setSelectedMainBalls(shuffledMainBalls.slice(0, 5));
    setSelectedMegaBall(shuffledMegaBalls[0]);  

  };   



  const handleSelectedMainBallClick = (num) => {
    const index = selectedMainBalls.indexOf(num); 
    console.log("index",index);

    if (index !== -1) {
      const newSelectedMainBalls = [...selectedMainBalls]; 
      newSelectedMainBalls[index] = null;    
      setSelectedMainBalls(newSelectedMainBalls);
    } 
  }; 


  const handleSelectedMegaBallClick = () => {
    setSelectedMegaBall(null);
  };  



  return (
    <div className="w-full h-[1000px] m-0 p-0 box-border bg-black overflow-x-visible relative">
      <div className="flex flex-col items-center justify-center mx-auto relative"> 
        <div className="absolute top-2 left-2 w-12"> 
          <img src={`/images/ball-1.png.png`} alt="" className="w-full h-full object-contain" />
        </div> 

        <div className="absolute top-16 left-10 w-16"> 
          <img src={`/images/ball-2.png.png`} alt="" className="w-full h-full object-contain" />
        </div>

        {/* section 1  */}
        <div className="flex flex-col items-center justify-center text-center p-2 gap-y-1 "> 
          <div className="text-white py-2 font-poppins font-semibold text-sm  tracking-[1.8px] ">
            ALL LOTTERIES
          </div>
          <div className="">
            <img
              src={`/images/image.png`}
              alt="image_1"
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="font-bold font-poppins text-4xl text-center text-white leading-7 p-2 text-gradient ">
            Powerball
          </h1>
        </div>
      </div>

      {/* section 2 */}
      <div
        className="rounded-md mx-auto flex items-center w-10/12 gap-x-[8rem] p-2 shadow-lg  "
        style={{ backgroundImage: "url(/images/section_1.png)" }}
      >
        <div className="flex items-center gap-x-1 ">
          {/* button 1 */}
          <div>
            <BiChevronLeftCircle size={23} />
          </div>

          {/* inner section  */}
          <div className="flex items-center border-[1px] rounded-md shadow-md p-2 px-4 bg-custom-gradient">
            <div className="w-20 p-2">
              <img
                src={"/images/euro-jackpot-big.png.png"}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col items-start space-y-1 ">
              <div className="font-bold text-2xl font-poppins tracking-wider leading-8">
                {" "}
                Mega Jackpot
              </div>
              <div className="flex items-center text-sm font-poppins tracking-wide ">
                Estimated Prize:{" "}
                <span className="text-white font-bold font-poppins text-lg px-3">
                  $20,50,000
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-3 mr-1">
                  <img src={"/images/calendar.svg fill.png"} alt="" />
                </span>
                <span className="text-[12px] font-poppins font-normal">
                  Tuesday, July 9, 2024
                </span>
              </div>
            </div>

            {/* timer section  */}
            <div className="flex flex-col items-center justify-center gap-y-1">
              <h1 className="text-center font-roboto-mono">TIMER</h1>
              <div className="flex items-center gap-2 p-2 font-roboto-mono">
                <div className="flex flex-col items-center text-[10px]">
                  <div>Hours</div>
                  <div className="bg-white  px-2 text-lg">00</div>
                </div>
                <div className="flex flex-col items-center text-[10px]">
                  <div>Minutes</div>
                  <div className="bg-white  px-2 text-lg">  {String(Math.floor(timeLeft / 60)).padStart(2, "0")}</div>
                </div>
                <div className="flex flex-col items-center text-[10px]">
                  <div>Seconds</div>
                  <div className="bg-white  px-2 text-lg">  {String(timeLeft % 60).padStart(2, "0")}</div>
                </div> 
              </div>
            </div>
          </div>

          <div className="text-white">
            <BiChevronRightCircle size={23} />
          </div>
        </div> 

        <div
          className="flex items-center justify-center text-center"
          // style={{ backgroundImage: url("/images/bg-shape-1.png 2") }}
        >
          <div className="text-white flex items-center justify-center gap-x-2">
            <button className="rounded-2xl border-[#D4AC54] border-[1px] bg-black px-4 p-1 ">
              Winners
            </button>
            <button className="rounded-2xl border-[#D4AC54] border-[1px] px-5 bg-black p-1">
              Prize & info
            </button>
          </div>
        </div>
      </div> 

      {/* section 3 */}
      <div className="rounded-md mx-auto flex flex-col items-center flex-wrap bg-white w-10/12 p-2 mt-2">
        <div className="p-6 rounded-lg shadow-md flex items-center gap-x-6">
          <div className="w-8/12">
            <h2 className="mb-4 text-lg font-bold font-roboto underline">
              Main Ball
            </h2>     

            <div className="grid grid-cols-12 gap-4 border-[1px] p-4 rounded-md cursor-pointer">
              {mainBallNumbers.map((num) => (
                <div
                  key={num}
                  className={`flex items-center justify-center w-10 h-10 border rounded-full ${
                    selectedMainBalls.includes(num) ? "bg-custom-gradient" : ""
                  }`}
                  onClick={() => handleMainBallClick(num)}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>

          <div className="w-4/12">
            <h2 className="mb-4 text-lg font-bold underline font-roboto">
              Mega Ball
            </h2>
            <div className="grid grid-cols-5 gap-4 p-4 border-[1px] rounded-md cursor-pointer">
              {megaBallNumbers.map((num) => (
                <div
                  key={num}
                  className={`flex items-center justify-center w-10 h-10 border rounded-full p-2 ${
                    selectedMegaBall === num ? "bg-red-500 text-white" : ""
                  }`}
                  onClick={() => handleMegaBallClick(num)}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white w-full">
          <div className="flex items-center justify-between p-4 border rounded-lg"> 
            <div className="flex items-center">
              <span className="text-lg font-semibold text-[#0D3B54]">Selected numbers:</span> 
              <span className="w-20 absolute left-64">
                <img src={"/images/Image (1).png"} alt="" className="w-full h-full object-cover"/>
              </span>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <div className="flex space-x-2">
                {selectedMainBalls.map((num, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center w-10 h-10 border rounded-full ${
                      num ? "bg-custom-gradient cursor-pointer" : ""
                    }`}
                    onClick={() => num && handleSelectedMainBallClick(num)}
                  >
                    {num ? num : ""}
                  </div>
                ))}
                {selectedMegaBall !== null ? (
                  <div
                    className={`flex items-center justify-center w-10 h-10 border rounded-full bg-red-500 text-white cursor-pointer`} 
                    onClick={handleSelectedMegaBallClick}
                  >
                    {String(selectedMegaBall).padStart(2, "0")}
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-10 h-10 border-[1px] rounded-full "></div>
                )}
                
                
              </div>
            </div>
            <div className="flex items-center space-x-2 text-[#B6C2C8]">
              <button
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-3xl hover:bg-gray-100 flex items-center justify-center cursor-pointer"
                onClick={clearSelection}
              >
                Clear <span className="text-center px-1 mt-1"><RxCross1 size={12} className="font-bold"/></span>
              </button>
              <button
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-3xl hover:bg-gray-100 flex items-center justify-cneter"
                onClick={autoSelect}
              >
                Auto select<span className="text-center px-2 mt-1"><FiRefreshCw size={12} className="font-bold"/></span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="mt-4 text-sm text-gray-500 w-6/12">
            <p>
              <strong>Note:</strong> Problem set compensation the harmonics,
              understood. Hundreds times, of until they employed sure a behind
              boundless their for.
            </p>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-6 py-3 full rounded-[24px] font-semibold bg-custom-gradient">
              Continue To Cart
            </button>
          </div>
        </div>
      </div> 

      <div className="absolute bottom-[8.5rem] right-[1rem]  w-16"> 
        <img src={`/images/ball-1.png.png`} alt="" className="w-full h-full object-contain" />
      </div> 

      <div className="absolute bottom-[15rem] right-[3rem] w-12"> 
        <img src={`/images/ball-2.png.png`} alt="" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default Powerball;
