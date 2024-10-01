import React from 'react'

function Discussion() {
  return (
    <>
    <div className="font-Robotomono text-gray-200 w-full max-w-[840px] mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Digital Nomad Discussions</h2>
      
      <div className="space-y-6">
        <div className="border-2 border-gray-700 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Top Discussions</h3>
          <ul className="space-y-4">
            <li>
              <a href="#" className="block hover:bg-[#1c1c1c] p-3 rounded-xl transition duration-300">
                <h4 className="text-lg font-medium">Best countries for digital nomads in 2024</h4>
                <p className="text-sm text-gray-500 mt-1">32 comments • 2 hours ago</p>
              </a>
            </li>
            <li>
              <a href="#" className="block hover:bg-[#1c1c1c] p-3 rounded-xl transition duration-300">
                <h4 className="text-lg font-medium">How to manage taxes as a digital nomad?</h4>
                <p className="text-sm text-gray-500 mt-1">18 comments • 1 day ago</p>
              </a>
            </li>
            <li>
              <a href="#" className="block hover:bg-[#1c1c1c] p-3 rounded-xl transition duration-300">
                <h4 className="text-lg font-medium">Remote work tools every nomad should know</h4>
                <p className="text-sm text-gray-500 mt-1">25 comments • 3 days ago</p>
              </a>
            </li>
            <li>
              <a href="#" className="block hover:bg-[#1c1c1c] p-3 rounded-xl transition duration-300">
                <h4 className="text-lg font-medium">Balancing travel and productivity: Tips from seasoned nomads</h4>
                <p className="text-sm text-gray-500 mt-1">41 comments • 5 days ago</p>
              </a>
            </li>
            <li>
              <a href="#" className="block hover:bg-[#1c1c1c] p-3 rounded-xl transition duration-300">
                <h4 className="text-lg font-medium">Health insurance options for digital nomads</h4>
                <p className="text-sm text-gray-500 mt-1">29 comments • 1 week ago</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Discussion