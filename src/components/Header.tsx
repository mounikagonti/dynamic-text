import React from 'react'
import Button from './ui/Button'

const Header: React.FC = () => {
  return (
    <header className='flex justify-between items-center p-4 bg-slate-50 shadow-lg'>
      <h1 className='font-bold'>Personalize.ai</h1>
      <Button>Try it For Free</Button>
    </header>
  )
}

export default Header
