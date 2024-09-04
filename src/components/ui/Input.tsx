import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  className?: string
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  className = '',
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-4 py-2 border border-gray-300 rounded ${className}`}
      {...props}
    />
  )
}

export default Input
