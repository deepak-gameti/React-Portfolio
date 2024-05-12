import logo from "../assets/dg logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/deepak-gameti/" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/deepak-gameti" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/deepak_G226" target="_blank"><FaSquareXTwitter/></a>
        <a href="#"><FaInstagram/></a>
      </div>
    </nav>
  )
}

export default Navbar