import Head from "next/head"

const Home = () => {
  return (
    <div className={"flex flex-col items-center mt-56"}>
      <Head>
        <title>Amazon Re-Design</title>
      </Head>
      <img className={"animate-bounce"} height={300} objectfit={"contain"} width={400} src={"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"}/>
      <p>
        Edit <code style={{
          color: "#FF9900"
        }} className={"font-semibold "}>src/pages/index.js</code> and save to reload.
      </p>
      <div className={"mt-4 text-lg"}>
        <span className={"mr-2"}>Learn <a target={"_blank"} href={"https://nextjs.org/"} style={{color: "#FF9900"}} className={" hover:underline hover:brigthness-100 font-semibold "}>NextJS</a></span>
        <span className={"mr-2"}>Learn <a target={"_blank"} href={"https://reactjs.org/"} style={{color: "#FF9900"}} className={" hover:underline hover:brigthness-100 font-semibold "}>ReactJS</a></span>
        <span className={"mr-2"}>Learn <a target={"_blank"} href={"https://tailwindcss.com/"} style={{color: "#FF9900"}} className={" hover:underline hover:brigthness-100 font-semibold "}>TailwindCSS</a></span>
        <span className={"mr-2"}>Learn <a target={"_blank"} href={"https://redux.js.org/"} style={{color: "#FF9900"}} className={" hover:underline hover:brigthness-100 font-semibold "}>Redux</a></span>
      </div>
    </div>
  )
}
export default Home