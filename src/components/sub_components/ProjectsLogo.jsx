import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProjectsLogo() {

    const [fill, setFill] = useState("transparent")
    const [stroke, setStroke] = useState("white")

    const handleMouseEnter = () => {
        setFill("white");
        setStroke("black")
    }

    const handleMouseOut = () => {
        setFill("transparent")
        setStroke("white")
    }

    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}>
            <a href="#projects" className="card mx-auto mt-5" style={{ width: "200px", background: 'transparent' }}>
                <div className="col-sm-12">
                    <svg width="194" height="195" viewBox="0 0 194 195" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} id="fill" d="M190.5 97.5C190.5 149.432 148.622 191.5 97 191.5C45.3783 191.5 3.5 149.432 3.5 97.5C3.5 45.5682 45.3783 3.5 97 3.5C148.622 3.5 190.5 45.5682 190.5 97.5Z" fill={fill} stroke="white" stroke-width="7" />
                        <path onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} id="stroke" d="M72.2199 124.738L78.7821 115.841L57.6571 97.5057L78.7821 79.1703L72.2199 70.2731L45.9711 93.0571C45.3561 93.5907 44.8596 94.2676 44.5184 95.0377C44.1772 95.8078 44 96.6513 44 97.5057C44 98.3601 44.1772 99.2036 44.5184 99.9737C44.8596 100.744 45.3561 101.421 45.9711 101.954L72.2199 124.738ZM120.78 70.2731L114.218 79.1703L135.343 97.5057L114.218 115.841L120.78 124.738L147.029 101.954C147.644 101.421 148.14 100.744 148.482 99.9737C148.823 99.2036 149 98.3601 149 97.5057C149 96.6513 148.823 95.8078 148.482 95.0377C148.14 94.2676 147.644 93.5907 147.029 93.0571L120.78 70.2731ZM112.123 47.4721L91.1242 150L80.8715 147.528L101.87 45L112.123 47.4721Z" fill={stroke} />
                    </svg>
                </div>
                <div className="card-body">
                    <div className="card-title text-white text-center">
                        <h5>Projects</h5>
                    </div>
                </div>
            </a>
        </motion.div>
    )
}