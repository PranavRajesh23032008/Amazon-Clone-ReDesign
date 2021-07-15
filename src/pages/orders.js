import Sidebar from "../components/Sidebar"
import Head from "next/head"

const cart = () => {
  return (
    <span className={"h-screen flex"}>
      <Head>
        <title>Amazon | Your Orders</title>
      </Head>
      <div className={"w-full"}>
        Orders
      </div>
      <Sidebar/>
    </span>
  )
}

export default cart