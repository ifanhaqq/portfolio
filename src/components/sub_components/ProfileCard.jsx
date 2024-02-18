import { motion } from 'framer-motion'
import self from "../../assets/img/self-thumbnail.jpeg"

export default function ProfileCard() {
    return (
        <motion.div initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 1 }}>
            <div className="card mx-auto border border-5 border-white border-opacity-50" style={{ width: "55%", background: "transparent", marginTop: "25%" }}>
                <img className="rounded-pill mx-auto mt-5" src={self} alt="self" style={{ width: "30%" }} />
                <div className="card-body">
                    <h5 className="card-title text-white text-center mt-3">Hanifan Haqin</h5>
                    <h5 className="card-title text-white text-center mb-5">College Student</h5>
                </div>
            </div>
        </motion.div>
    )
}