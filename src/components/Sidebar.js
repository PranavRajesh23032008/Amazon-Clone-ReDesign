import { useRouter } from "next/dist/client/router"
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";
import { useRef } from "react";

const Sidebar = () => {
    const router = useRouter()
    const buttonRef = useRef();
    return (
        <div style={{
            width: "70px"
        }} className={"shadow-lg relative"}>
            <img onClick={() => {router.push("/")}} className={"h-8 mx-auto mt-6 cursor-pointer"} src={"https://pngimg.com/uploads/amazon/amazon_PNG5.png"}/>
            <div style={{
                top: '50%',
                left: '50%',
                transform: "translateY(-50%) translateX(-50%)"
            }} className={"absolute space-y-10"}>
                <p ref={buttonRef} className={'cursor-pointer shadow-xl hover:shadow-md focus:shadow-sm duration-300 p-2 rounded-full'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </p>
                <Tooltips placement="left" ref={buttonRef}>
                    <TooltipsContent>Cart</TooltipsContent>
                </Tooltips>
                <p ref={buttonRef} className={'cursor-pointer shadow-xl hover:shadow-md focus:shadow-sm duration-300 p-2 rounded-full'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </p>       
                <Tooltips placement="left" ref={buttonRef}>
                    <TooltipsContent>WishList</TooltipsContent>
                </Tooltips>     
                <p ref={buttonRef} className={'cursor-pointer shadow-xl hover:shadow-md focus:shadow-sm duration-300 p-2 rounded-full'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </p>    
                <Tooltips placement="left" ref={buttonRef}>
                    <TooltipsContent>Orders</TooltipsContent>
                </Tooltips>                   
                <p ref={buttonRef} className={'cursor-pointer shadow-xl hover:shadow-md focus:shadow-sm duration-300 p-2 rounded-full'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </p>
                <Tooltips placement="left" ref={buttonRef}>
                    <TooltipsContent>Theme</TooltipsContent>
                </Tooltips>
                
                <p ref={buttonRef} className={'cursor-pointer shadow-xl hover:shadow-md focus:shadow-sm duration-300 p-2 rounded-full'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </p>  
                <Tooltips placement="left" ref={buttonRef}>
                    <TooltipsContent>Account</TooltipsContent>
                </Tooltips>  
            </div>
        </div>
    )
}

export default Sidebar
