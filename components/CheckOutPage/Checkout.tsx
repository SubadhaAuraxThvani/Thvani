import { TbCircleNumber1Filled } from "react-icons/tb";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { PiNumberCircleThreeFill } from "react-icons/pi";

export default function CheckOutPage(){
    return(
        <div className="flex w-full">
            <div className="flex w-2/3 p-3">
                <div className="flex">
                    <TbCircleNumber1Filled />
                </div>
                <div className="flex">
                    <PiNumberCircleTwoFill />
                </div>
                <div className="flex">
                    <PiNumberCircleThreeFill /> 
                </div>
            </div>
            <div className="flex w-1/3">

            </div>
        </div>
    )
}