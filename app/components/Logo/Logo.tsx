import Image from 'next/image'
import React, { FC } from 'react'

const Logo: FC = () => {

  return (
    <Image 
      alt=''
      src={"/logo.png"}
      width={438}
      height={438}
    />
  )
}

export default Logo