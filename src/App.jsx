import Intro from "./components/Intro"
import Socials from "./components/Socials"


const App = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-custom-darkest'>
      <div className='w-[80vw] md:w-[50vh] lg:w-[50vh] py-6 rounded-lg bg-custom-darker flex flex-col items-center gap-3 '>
          <Intro/>
          <div>
            <h2 className="text-[20px] text-white">Jessica Randall</h2>
            <p className="text-[10px] text-center text-custom-green font-semibold">London, United Kingdom</p>
          </div>
          <div className="text-sm text-center text-gray-200">
            "Front-end developer and avid reader"
          </div>
          <Socials/>
      </div>
    </div>
  )
}

export default App
