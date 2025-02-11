import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../src/assets/logo2.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-white border-y">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img src={logo} className="mr-3 h-24" alt="Logo" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Resources
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/about" className="hover:underline">
                      About
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/product" className="hover:underline">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:underline">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Follow us
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/Ajay-Prajapati-2025"
                      className="hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Discord
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Youtube
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Legal
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <Link to="#" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2024
              <a
                href="/"
                className="hover:underline"
              >
                naturesnook
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex text-lg mt-4 space-x-5 sm:justify-center sm:mt-0">
              <Link to="#" className="text-gray-500 hover:text-[#036570]">
                <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-[#036570]">
                <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-[#036570]">
                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-[#036570]">
                <FontAwesomeIcon icon={faGithub} className="text-2xl" />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-[#036570]">
                <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
