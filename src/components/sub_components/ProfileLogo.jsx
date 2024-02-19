import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProfileLogo() {

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
            <a href="#profile" className="card mx-auto mt-5" style={{ width: "200px", background: 'transparent' }}>
                <div className="col-sm-12">
                    <svg width="194" height="195" viewBox="0 0 194 195" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
                        <path onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} id="fill" d="M190.5 97.5C190.5 149.432 148.622 191.5 97 191.5C45.3783 191.5 3.5 149.432 3.5 97.5C3.5 45.5682 45.3783 3.5 97 3.5C148.622 3.5 190.5 45.5682 190.5 97.5Z" fill={fill} stroke="white" stroke-width="7" />
                        <path onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} id="stroke" d="M71.25 97H77.8125V102.889H117.188V97H123.75V91.1111H130.312V55.7778H123.75V49.8889H117.188V44H77.8125V49.8889H71.25V55.7778H64.6875V91.1111H71.25V97ZM77.8125 67.5556H84.375V61.6667H90.9375V55.7778H104.062V61.6667H110.625V67.5556H117.188V79.3333H110.625V85.2222H104.062V91.1111H90.9375V85.2222H84.375V79.3333H77.8125V67.5556ZM143.438 120.556V114.667H136.875V108.778H58.125V114.667H51.5625V120.556H45V150H58.125V132.333H64.6875V126.444H71.25V120.556H123.75V126.444H130.312V132.333H136.875V150H150V120.556H143.438Z" fill={stroke} />
                    </svg>
                </div>
                <div className="card-body">
                    <div className="card-title text-white text-center">
                        <h5>Profile</h5>
                    </div>
                </div>
            </a>
        </motion.div>
    )
}