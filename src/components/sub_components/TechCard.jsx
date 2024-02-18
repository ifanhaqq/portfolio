import { motion } from 'framer-motion'

export default function TechCard({ pict, title }) {
    return (
        <motion.div initial={{ x: 100, opacity: 0 }}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{ ease: "easeInOut", duration: 1 }}>
            <div className="card border border-5 border-white border-opacity-50" style={{ width: "65%", background: "transparent" }}>
                <div className="card-body">
                    <h5 className="card-title text-white text-center mt-3">{title}</h5>
                </div>
                <img className="col-sm-12 mx-auto mt-3 mb-4" src={pict} alt="self" style={{ width: "80%" }} />
            </div>
        </motion.div>
    )
}