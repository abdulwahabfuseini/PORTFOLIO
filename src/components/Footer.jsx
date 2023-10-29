import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa"


const Footer = () => {

  return (
    <div className='w-full px-4 py-6 border-t-2 bg-foot'>
    <div className='flex flex-wrap justify-between mx-auto sm:px-2 sm:items-center max-w-7xl gap-y-4'>
      <h1 className="gap-3 text-xl leading-10 sm:flex">&copy; 2023 All Right Reserved <br className="sm:hidden" /> <span className="hidden sm:block">|</span> FUSEINI ABDUL WAHAB</h1>
      <div className="flex flex-col gap-4 text-lg sm:text-xl sm:flex-row">
        <div className="flex items-center gap-2">
          <FaPhoneAlt />
          <a href="tel:+233 24 526 4999">+233 24 526 4999</a>
          </div>
          <span className="hidden sm:block">|</span> 
          <div className="flex items-center gap-2">
            <FaRegEnvelope />
            <a href="mailto:abdulwahabfuseini78@gmail.com">abdulwahabfuseini78@gmail.com</a>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Footer