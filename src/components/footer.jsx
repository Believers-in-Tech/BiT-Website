import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="py-16 sm:px-8 text-sm leading-6 bg-dark text-pastel">
      <div className="max-w-7xl mx-auto divide-y divide-slate-700 px-4">
        <div className="">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link
              to="/"
              className="flex w-auto overflow-hidden text-white text-2xl items-center space-x-2"
            >
              <StaticImage
                src="../images/footer-logo.png"
                loading="eager"
                height={30}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="BiT Footer Logo"
                className=""
              />
            </Link>


            <p className="md:float-right">
              ©{new Date().getFullYear()}. Believers in Tech (BiT).
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer