import React from "react"
import {
  FaFacebookSquare,
  FaPinterestSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/TiendaTuristaMexico",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/turistamexico",
  },
  {
    id: 4,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/turistamexico/",
  },
  {
    id: 2,
    icon: <FaPinterestSquare className="social-icon"></FaPinterestSquare>,
    url: "https://www.pinterest.com.mx/turistamexico/_saved/",
  },
]

export default data
