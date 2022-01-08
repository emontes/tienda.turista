import React from "react"
import { FaUndoAlt } from "react-icons/fa"
import { BsBasket2Fill } from "react-icons/bs"
import { BiSupport } from "react-icons/bi"
const services = [
  {
    id: 1,
    icon: <BsBasket2Fill className="service-icon" />,
    title: "Envío Gratis",
    text: "En pedidos de más de $1,980",
  },
  {
    id: 3,
    icon: <FaUndoAlt className="service-icon" />,
    title: "Devolución",
    text: `Proceso Simple`,
  },
  {
    id: 2,
    icon: <BiSupport className="service-icon" />,
    title: "Soporte",
    text: `Nos en encantará ayudarte`,
  },
]

export default services
