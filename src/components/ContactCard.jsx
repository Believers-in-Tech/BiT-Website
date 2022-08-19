import React from 'react';
import { HiOutlineChevronRight } from "react-icons/hi";
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

export const ContactCard = () => {
    return (
 <section className="py-20">

<div className="max-w-5xl mx-auto container px-4 text-center ">
  <StaticImage src="../images/bg/3.png" alt="Contact Us Illustration"  height="300" />
  <div className="">
    <h1 className="font-serif font-bold text-4xl mb-3">
      Do you have a question?
    </h1>
    <p className="mb-6">
      Send us a message at{" "}
      <a
        href="mailto:hello@believersin.tech"
        className="text-primary font-bold"
      >
        hello@believersin.tech
      </a>{" "} or just send us a DM on instagram  <a
        href="https://instagram.com/believersintech"
        className="text-primary font-bold"
      >
        @believersintech
      </a>{" "}
      to get assistance with all your enquiries. We'd be more than happy to answer your questions.
    </p>
    <Link target={'_blank'} to="https://www.instagram.com/believersintech" >
      <button aria-label="Send Us a DM" className="btn bg-dark text-white mx-auto px-8 py-4">
      <span>Send Us a DM</span>
      </button>
    </Link>
  </div>
  </div>
 </section>
    );
  };

export default ContactCard