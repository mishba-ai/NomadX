import React from 'react'

function About() {
  return (
   <> 
   <div className="font-Robotomono text-gray-200 w-full max-w-[840px] mx-auto">
      <h2 className="text-2xl font-semibold mb-6">About You</h2>
      
      <div className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="bio" className="relative top-3 z-10 left-4 w-12 text-center bg-[#1c1c1c] text-sm uppercase text-gray-500">
            Bio
          </label>
          <textarea
            id="bio"
            className="border-2 border-gray-700 bg-transparent px-4 py-5 text-lg rounded-2xl resize-none h-40"
            placeholder="Tell us about yourself, your journey as a digital nomad..."
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="currentLocation" className="relative top-3 z-10 left-4 w-40 text-center bg-[#1c1c1c] text-sm uppercase text-gray-500">
            Current Location
          </label>
          <input
            type="text"
            id="currentLocation"
            className="border-2 border-gray-700 bg-transparent px-4 py-3 text-lg rounded-2xl"
            placeholder="Where are you now?"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="nextDestination" className="relative top-3 z-10 left-4 w-40 text-center bg-[#1c1c1c] text-sm uppercase text-gray-500">
            Next Destination
          </label>
          <input
            type="text"
            id="nextDestination"
            className="border-2 border-gray-700 bg-transparent px-4 py-3 text-lg rounded-2xl"
            placeholder="Where are you heading next?"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="skills" className="relative top-3 z-10 left-4 w-16 text-center bg-[#1c1c1c] text-sm uppercase text-gray-500">
            Skills
          </label>
          <input
            type="text"
            id="skills"
            className="border-2 border-gray-700 bg-transparent px-4 py-3 text-lg rounded-2xl"
            placeholder="Your top skills (comma separated)"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="languages" className="relative top-3 z-10 left-4 w-24 text-center bg-[#1c1c1c] text-sm uppercase text-gray-500">
            Languages
          </label>
          <input
            type="text"
            id="languages"
            className="border-2 border-gray-700 bg-transparent px-4 py-3 text-lg rounded-2xl"
            placeholder="Languages you speak (comma separated)"
          />
        </div>
      </div>

      <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
        Save Changes
      </button>
    </div>
   </>
  )
}

export default About