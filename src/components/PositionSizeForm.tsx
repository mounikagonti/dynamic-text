import React, {useState} from 'react'

const PositionSizeForm: React.FC = () => {
  const [position, setPosition] = useState({x: 1, y: 2})
  const [size, setSize] = useState({width: 100, height: 45})

  const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setPosition((prev) => ({
      ...prev,
      [name]: Number(value),
    }))
  }

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setSize((prev) => ({
      ...prev,
      [name]: Number(value),
    }))
  }

  return (
    <div className='p-4'>
      <h1 className='font-bold'>Position</h1>
      <div className='mb-4'>
        <div className='flex gap-4'>
          <div className='mb-2'>
            <label
              htmlFor='x'
              className='block text-sm font-medium text-gray-700'
            >
              X
            </label>
            <input
              id='x'
              name='x'
              type='text
              '
              value={position.x}
              onChange={handlePositionChange}
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm'
            />
          </div>
          <div className='mb-2'>
            <label
              htmlFor='y'
              className='block text-sm font-medium text-gray-700'
            >
              Y
            </label>
            <input
              id='y'
              name='y'
              type='text'
              value={position.y}
              onChange={handlePositionChange}
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm'
            />
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='mb-2'>
            <label
              htmlFor='width'
              className='block text-sm font-medium text-gray-700'
            >
              W
            </label>
            <input
              id='width'
              name='width'
              type='text'
              value={size.width}
              onChange={handleSizeChange}
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm'
            />
          </div>
          <div className='mb-2'>
            <label
              htmlFor='height'
              className='block text-sm font-medium text-gray-700'
            >
              H
            </label>
            <input
              id='height'
              name='height'
              type='text'
              value={size.height}
              onChange={handleSizeChange}
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PositionSizeForm
