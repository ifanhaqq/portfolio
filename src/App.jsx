import './App.css'
import { motion } from 'framer-motion'
import Intro from './components/Intro';
import Menus from './components/Menus';

export default function App() {

  return (
    <>
      <div className="container-fluid">
        <Intro />
        <Menus />
      </div>
    </>
  );
  // const MyComponent = ({ isVisible }) => (
  //   <motion.div animate={{ x: 100 }} />
  // )
  // return (
  //   <>
  //     <motion.div
  //       className='mg-top'
  //       initial={{ opacity: 0 }}
  //       whileInView={{ opacity: 1 }}
  //     > Easti Damayanti </motion.div>
  //   </>
  // )
}
