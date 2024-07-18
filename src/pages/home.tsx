import HomeLock from "./home-lock"

const HomePage = () => {
  return <HomeLock />
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 2000)
  // }, [])
  // if (window.innerWidth > 768) {
  //   return (
  //     <>
  //       {loading && <PageLoading />}
  //       <div>
  //         <HomeDesktop />
  //       </div>
  //     </>
  //   )
  // }
  // return (
  //   <>
  //     {loading && <PageLoadingMobile />}
  //     <HomePageMobile />
  //   </>
  // )
}

export default HomePage
