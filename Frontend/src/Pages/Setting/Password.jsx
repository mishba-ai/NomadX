import React from 'react'

function Password() {
  const [passwordVisibility, setPasswordVisibility] = React.useState({
    currentPassword: false,
    newPassword: false
  });

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };
  return (
    <div className=" w-full h-full bg-[#1c1c1c] pb-8">
       <div className="flex justify-center items-center min-h-screen">
         <div className="w-full max-w-md p-8 bg-[#2c2c2c] rounded-lg shadow-lg">
           <h2 className="text-3xl font-bold text-white mb-8 text-center">Change Password</h2>
           <form>
             <div className="mb-6 relative">
               <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-400 mb-2">
                 Current Password
               </label>
               <input
                 type="password"
                 id="currentPassword"
                 name="currentPassword"
                 className="w-full px-4 py-3 bg-[#3c3c3c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200"
                 required
               />
               <button
                 type="button"
                 className="absolute right-3 top-[38px] text-gray-400 hover:text-white focus:outline-none"
                 onClick={() => togglePasswordVisibility('currentPassword')}
               >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                 </svg>
               </button>
             </div>
             <div className="mb-6 relative">
               <label htmlFor="newPassword" className="block text-sm font-medium text-gray-400 mb-2">
                 New Password
               </label>
               <input
                 type="password"
                 id="newPassword"
                 name="newPassword"
                 className="w-full px-4 py-3 bg-[#3c3c3c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200"
                 required
               />
               <button
                 type="button"
                 className="absolute right-3 top-[38px] text-gray-400 hover:text-white focus:outline-none"
                 onClick={() => togglePasswordVisibility('newPassword')}
               >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                 </svg>
               </button>
             </div>
             <div className="mb-8 relative">
               <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-400 mb-2">
                 Confirm New Password
               </label>
               <input
                 type="password"
                 id="confirmPassword"
                 name="confirmPassword"
                 className="w-full px-4 py-3 bg-[#3c3c3c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200"
                 required
               />
               <button
                 type="button"
                 className="absolute right-3 top-[38px] text-gray-400 hover:text-white focus:outline-none"
                 onClick={() => togglePasswordVisibility('confirmPassword')}
               >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                 </svg>
               </button>
             </div>
             <button
               type="submit"
               className="w-full bg-sky-500 text-white py-3 px-4 rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200"
             >
               Change Password
             </button>
           </form>
         </div>
       </div>
       </div>
  )
}

export default Password