import { motion } from 'framer-motion'

export default function SvgCard({ pict, title }) {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}>
            <a href="" className="card mx-auto mt-5" style={{ width: "200px", background: 'transparent' }}>
                <object className='col-sm-12' type="image/svg+xml" data={pict} />
                <div className="card-body">
                    <div className="card-title text-white text-center">
                        <h5>{title}</h5>
                    </div>
                </div>
            </a>
        </motion.div>
    )
}