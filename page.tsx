import Image from "next/image";

export default function Home() {
  return (
  
    <div className="flex justify-between items-center">
  
      <div className="w-fit h-[250px] m-[40px] text-[80px] font-blue">
        hey,<br/>
        My name is <span className="BlueColour"> Nimra Mehmood</span> <br/>
        I am Next js Developer <br/>
      </div>
      <div className="image">
      <img src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Nimra" /> 
    </div>
    </div>
   );
  }