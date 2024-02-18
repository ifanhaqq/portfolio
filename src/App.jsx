import './App.css'
import { motion } from 'framer-motion'
import Intro from './components/Intro';
import Menus from './components/Menus';
import Profile from './components/Profile';

export default function App() {

  return (
    <>
      <div className="container-fluid">
        <Intro />
        <Menus />
        <Profile />
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
