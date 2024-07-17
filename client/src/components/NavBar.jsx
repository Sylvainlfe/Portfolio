import { Link } from "react-router-dom"


function NavBar() {
  return (
    <header className="h-20 w-full bg-primary-bg-color flex justify-start items-center">
        <Link to="/" className="font-font-logo font-semibold italic text-5xl">PORTFOLIO</Link>
    </header>
  )
}

export default NavBar