import { useRouter } from "next/dist/client/router"
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";
import { useRef } from "react";
import useDarkMode from "../../hooks/useDarkMode"
import {  useAuthState } from "react-firebase-hooks/auth"
import { auth, googleAuthProvider } from "../../firebase";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Sidebar = () => {
    const router = useRouter()
    const buttonRef = useRef();
    const [colorTheme, setTheme] = useDarkMode();   
    const [user, loading] = useAuthState(auth)    
    const signIn = () => {
        auth.signInWithRedirect(googleAuthProvider)
    }
    return (
        <div style={{
            width: "70px"
        }} className={"shadow-2xl relative"}>
            <img onClick={() => {router.push("/")}} className={"h-8 mx-auto mt-6 cursor-pointer"} src={"https://pngimg.com/uploads/amazon/amazon_PNG5.png"}/>
            <div style={{
                top: '50%',
                left: '50%',
                transform: "translateY(-50%) translateX(-50%)"
            }} className={"absolute space-y-10"}>
                <p onClick={() => router.push("/cart")} ref={buttonRef} className={' flex items-center cursor-pointer shadow-xl hover:shadow-md focus:shadow-sm duration-300 p-2 rounded-full'}>
                <svg style={{color: "#FF9900"}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                </p>
                <Tooltips placement="left" ref={buttonRef}>
                    <TooltipsContent>Cart</TooltipsContent>
                </Tooltips>
                <p onClick={() => router.push("/wishlist")} ref={buttonRef} className={'cursor-pointer shadow-xl hover:shadow-md focus:shadow-sm duration-300 p-2 rounded-full'}>
                    <svg style={{color: "#FF9900"}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </p>       
                <Tooltips placement="left" ref={buttonRef}>
                    <TooltipsContent>Wish<span className={"ml-1"}>List</span></TooltipsContent>
                </Tooltips>     
                <p onClick={() => router.push("/orders")} ref={buttonRef} className={'cursor-pointer shadow-xl hover:shadow-md focus:shadow-sm duration-300 p-2 rounded-full'}>
                    <svg style={{color: "#FF9900"}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </p>    
                <Tooltips placement="left" ref={buttonRef}>
                    <TooltipsContent>Orders</TooltipsContent>
                </Tooltips>     
                {colorTheme === "light" ? (   
                    <div>
                        <p onClick={() => setTheme("light")} ref={buttonRef} className={'cursor-pointer shadow-xl hover:shadow-md focus:shadow-sm duration-300 p-2 rounded-full'}>
                            <svg style={{color: "#FF9900"}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </p>   
                    <Tooltips placement="left" ref={buttonRef}>
                        <TooltipsContent>Theme</TooltipsContent>
                    </Tooltips>   
                </div>
                ) : (
                    <div>
                    <p  onClick={() => setTheme("dark")} ref={buttonRef} className={'cursor-pointer shadow-xl hover:shadow-md focus:shadow-sm duration-300 p-2 rounded-full'}>
                        <svg style={{color: "#FF9900"}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </p>        
                        <Tooltips placement="left" ref={buttonRef}>
                            <TooltipsContent>Theme</TooltipsContent>
                        </Tooltips>                       
                    </div>
                )}  
                {loading ? (
                    <div>
                        <div>
                           <p className={'cursor-pointer shadow-xl hover:shadow-md focus:shadow-sm duration-300 p-2 rounded-full'}>
                            <Loader
                                type="Watch"
                                color="#FF9900"
                                height={26}
                                width={26}
                            />
                           </p> 
                       </div>
                    </div>
                ) : (
                    <div>
                        {user ? (
                           <div>
                           <p onClick={() => {auth.signOut()}} ref={buttonRef} className={'cursor-pointer shadow-xl hover:shadow-md focus:shadow-sm duration-300 p-2 rounded-full'}>
                               <img src={user?.photoURL} className={"rounded-full"} />
                           </p>  
                           <Tooltips placement="left" ref={buttonRef}>
                               <TooltipsContent>Hello,<span className={"ml-1"}>{user?.displayName.replace(/ .*/,'')}!</span></TooltipsContent>
                           </Tooltips> 
                       </div>
                       ) : (
                           <div>
                               <p onClick={signIn} ref={buttonRef} className={'cursor-pointer shadow-xl hover:shadow-md focus:shadow-sm duration-300 p-2 rounded-full'}>
                                   <svg style={{color: "#FF9900"}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                   </svg>
                               </p>  
                           <Tooltips placement="left" ref={buttonRef}>
                               <TooltipsContent>Sign<span className={"ml-1"}>In</span></TooltipsContent>
                           </Tooltips> 
                       </div>
                       )}
                    </div>
                )}   
               
                <p ref={buttonRef} className={'cursor-pointer shadow-xl hover:shadow-md focus:shadow-sm duration-300 p-2 rounded-full'}>
                    <a href={"https://audible.vercel.app/"} target={"_blank"}>
                        <img src={"https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/logo/Audible_Logo_New_Icon._V312762632_.png"} className={"H-6 w-6"}/>
                    </a>
                </p>  
                <Tooltips placement="left" ref={buttonRef}>
                    <TooltipsContent>Audible</TooltipsContent>
                </Tooltips>  
            </div>
        </div>
    )
}

export default Sidebar