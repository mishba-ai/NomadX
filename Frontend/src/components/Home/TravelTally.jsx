

function TravelTally() {
  return (
    <div className="mt-4">
      <h3 className="font-medium text-sm font-montserrat">So far you&#39;ve been to</h3>
      <ul className='flex gap-x-10 mt-6'>
        <li className='w-36 h-36 rounded-full bg-lime-200'></li>
        <li className='w-36 h-36 rounded-full bg-purple-400'></li>
        <li className='w-36 h-36 rounded-full bg-blue'></li>

      </ul>
    </div>
  )
}

export default TravelTally