import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactsLogo() {

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
            <a href="#contacs" className="card mx-auto mt-5" style={{ width: "200px", background: 'transparent' }}>
                <div className="col-sm-12">
                    <svg width="202" height="203" viewBox="0 0 202 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} id="fill" cx="101" cy="101" rx="97.5" ry="97.5" fill={fill} stroke="white" stroke-width="7" /> 
                        <path onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} id="stroke" d="M111.046 44C122.438 44 133.364 48.5686 141.419 56.7007C149.475 64.8328 154 75.8623 154 87.3629M111.046 63.2724C117.375 63.2724 123.445 65.8105 127.92 70.3283C132.395 74.8462 134.909 80.9737 134.909 87.3629M112.516 112.374L102.298 122.535C96.9697 119.289 92.0197 115.449 87.5411 111.087C83.2285 106.563 79.4269 101.57 76.2061 96.1993L86.2764 85.8837C86.8796 85.2593 87.2869 84.4691 87.4474 83.6121C87.6078 82.755 87.5143 81.8692 87.1784 81.0656L76.6834 56.3343C76.267 55.3614 75.5191 54.5713 74.5752 54.1072C73.6313 53.6432 72.554 53.5359 71.5385 53.8048L52.2857 58.9361C51.3222 59.1891 50.4725 59.765 49.8759 60.5696C49.2793 61.3741 48.9712 62.3594 49.0021 63.3639C50.2283 85.9677 59.5385 107.354 75.2039 123.552C91.2541 139.369 112.446 148.766 134.843 149.998C135.836 150.027 136.81 149.715 137.605 149.113C138.4 148.511 138.969 147.654 139.219 146.683L144.307 127.237C144.574 126.213 144.468 125.126 144.009 124.173C143.55 123.22 142.769 122.465 141.806 122.044L117.327 111.453C116.525 111.107 115.64 111.01 114.783 111.174C113.926 111.338 113.137 111.755 112.516 112.374Z" stroke={stroke} stroke-width="8" stroke-miterlimit="10" stroke-linecap="square" />
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