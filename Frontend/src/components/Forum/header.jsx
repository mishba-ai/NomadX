import search from "../../assets/svg/search.svg";

function header() {
  return (
    <div className=''>

        <div className='w-full h-64 bg-gradient-to-r px-44  py-10  from-[#10161f] to-[#98cdf9]'>
                <div className=' flex justify-center mt-28 '>
                  <img src={search} alt=""className="w-6 h-6 relative left-10 top-3"/>
                  <input type="text" className='w-[45rem] py-3 pr-4 pl-12 focus:border  focus:border-sky-200 rounded-full opacity-40' placeholder='Search'/>
                </div>
        </div>
    </div>
  )
}

export default header