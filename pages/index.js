import Head from 'next/head'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'

export default function Home() {

  const handleButtonClick = () => {
    alert('Button clicked!');
  };


  return (
  
    <div>
      <Navbar />
  
      <h1 className='title'>Get paid to focus</h1>
      <h2 className='subtitle'>Earn 1 focuscoin for every 2 hours of focused work</h2>
      <h2 className='subtitle'>Spend your focuscoins with our partners</h2>

      <Button label="Join Waitlist" onClick={handleButtonClick} />

    </div>
  )
}
