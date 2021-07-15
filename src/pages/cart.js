import Sidebar from "../components/Sidebar"
import Head from "next/head"

const cart = () => {
  return (
    <span className={"h-screen flex"}>
      <Head>
        <title>Amazon | Your Shopping Cart</title>
      </Head>
      <div className={"w-full"}>
        Cart
      </div>
      <Sidebar/>
    </span>
  )
}

export default cart