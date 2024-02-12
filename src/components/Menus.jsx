import contacts from '../assets/img/contacts.png'
import projects from "../assets/img/projects.png"
import profile from '../assets/img/profile.png'
import IconCard from './IconCard'
import { motion } from 'framer-motion'

export default function Menus() {
    return (
        <div className='row bg-linear'>
            <div className="row" style={{marginTop: 100}} >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}>
                    <IconCard pict={profile} title='Profile' />
                </motion.div>
            </div>
            <div className="row" style={{marginBottom: 100}}>
                <div className="col-sm-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}>
                        <IconCard pict={projects} title='Projects' />
                    </motion.div>
                </div>
                
                <div className="col-sm-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}>
                        <IconCard pict={contacts} title='Contacts' />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}