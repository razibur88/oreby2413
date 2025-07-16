import Banner from "../components/Banner"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import NewArrivals from "../components/NewArrivals"
import Sales from "../components/Sales"

const Home = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <Banner/>
        <Sales/>
        <NewArrivals/>
    </>
  )
}
export default Home