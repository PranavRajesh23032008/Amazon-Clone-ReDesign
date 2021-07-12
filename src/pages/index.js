import Main from "../components/Main"
import Sidebar from "../components/Sidebar"
import Head from "next/head"

const index = () => {
  return (
    <span className={"h-screen flex"}>
      <Head>
        <title>Amazon | Online Shopping Site</title>
      </Head>
      <Main/>
      <Sidebar/>
    </span>
  )
}

export default index
