import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const data = [
  {
    id: "1",
    image: (
      <StaticImage
        className="hero-img"
        src="../assets/images/slider-1.png"
        alt="Slider 1"
        placeholder="tracedSVG"
        layout="constrained"
      />
    ),

    leth2: "Tienda",
    leth3: "Los Artículos que le encantan al Turista",
    leth4: "Tienda Turista",
    linkText: "Ver Productos",
    linkGo: "/products",
  },
  {
    id: "2",
    image: (
      <StaticImage
        className="hero-img"
        src="../assets/images/slider-2.png"
        alt="Slider 2"
        placeholder="tracedSVG"
        layout="constrained"
      />
    ),

    leth2: "Tecno",
    leth3: "Artículos y novedades en Tecnología",
    leth4: "Accesorios y más",
    linkText: "Compra Ahora",
    linkGo: "/products/electronica",
  },
]

export default data
