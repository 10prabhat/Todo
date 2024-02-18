export default function Navbar() {
  return (
    <nav className='flex bg-indigo-600 text-white justify-between items-center py-3 px-4'>
        <div className="logo font-extrabold text-2xl flex justify-center font-sans items-center">
            TOdo
        </div>
        <ul className='flex gap-x-3 justify-between items-center'>
            <li className='hover:font-semibold  transition-all cursor-pointer duration-150'>Home</li>
            <li className='hover:font-semibold  transition-all cursor-pointer duration-150'>Your</li>
            <li className='hover:font-semibold  transition-all cursor-pointer duration-150'>Tasks</li>
        </ul>
    </nav>
  )
}
