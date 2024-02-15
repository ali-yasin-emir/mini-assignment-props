import Input from '@/app/components/Input'
import React from 'react'

const ModalContent = () => {
  return (
    <div className='flex flex-col gap-4'>
       <Input placeholder="Input"/>
       <Input richText placeholder="Textarea"/>
    </div>   
  )
}

export default ModalContent