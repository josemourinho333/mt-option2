import { FaFacebookF, FaTwitter, FaLinkedin, FaGooglePlusG, FaPinterest, FaRedditAlien, FaDropbox } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-300 flex flex-col items-center py-16">
      <div className="flex my-5">
        <FaFacebookF className="w-6 h-6 mx-3"/>
        <FaTwitter className="w-6 h-6 mx-3"/>
        <FaLinkedin className="w-6 h-6 mx-3"/>
        <FaGooglePlusG className="w-6 h-6 mx-3"/>
        <FaPinterest className="w-6 h-6 mx-3"/>
        <FaRedditAlien className="w-6 h-6 mx-3"/>
        <FaDropbox className="w-6 h-6 mx-3"/>
      </div>
      <p className="my-1">Company Title ® 2020. All Rights Reserved.</p>
      <p>Website Design by MilesTechnologies.com | <a href="#">Sitemap</a> | Privacy Policy</p>
    </footer>
  )
}

export default Footer;