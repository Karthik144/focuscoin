import Head from 'next/head'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'

export default function Home() {

  const handleButtonClick = () => {
    // Redirect to the target URL
    window.location.href = 'https://buprfe75fvn.typeform.com/to/ZT4B90kf';
  };


  return (
  
    <div>
      <Navbar />
  
      <h1 className='title'>Get paid to focus</h1>
      <h2 className="subtitle">
        Earn <span className="bold-text">1 focuscoin</span> for every{' '}
        <span className="bold-text">2 hours</span> of focused work
      </h2>
      <h2 className='subtitle'>Spend your focuscoins with our partners</h2>

      <Button label="Join Waitlist" onClick={handleButtonClick} />

    </div>
  )
}
