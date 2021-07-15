import Sidebar from "../components/Sidebar"
import Head from "next/head"

const cart = () => {
  return (
    <span className={"h-screen flex"}>
      <Head>
        <title>Amazon | Your Wish List</title>
      </Head>
      <div className={"w-full"}>
        Wish List
      </div>
      <Sidebar/>
    </span>
  )
}

export default cart