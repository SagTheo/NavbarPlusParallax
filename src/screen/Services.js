import React from 'react'
import styles from '../css/Services.module.css'
import Navbar from '../components/Navbar'

const Services = () => {
  return (
    <>
      <Navbar bgAttach={true} />

      <div className={styles.header}></div>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim est magna, non egestas ligula tempus a. Duis in lorem sit amet lorem dapibus vulputate. Suspendisse sit amet lacus nec odio posuere ornare in sed est. Nunc eu elit non purus convallis auctor at scelerisque quam. Morbi eu euismod eros. Sed lacinia felis eget tortor eleifend porta. Donec laoreet suscipit justo, in vehicula eros tincidunt nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ex ultrices odio pulvinar, ut posuere orci rutrum. Nulla vel diam accumsan, vulputate velit id, tincidunt felis. Duis nec leo laoreet, venenatis neque sed, eleifend risus. Suspendisse potenti. Integer sed odio sollicitudin, gravida quam ac, lobortis odio. Donec id mi sed elit feugiat volutpat sed et neque. Vivamus volutpat dignissim aliquam. Curabitur euismod dolor ante, malesuada vestibulum augue convallis a.
        </p>

        <img src='https://picsum.photos/300' alt='pic' />
      </div>
    </>
  )
}

export default Services