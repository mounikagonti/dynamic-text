import React from 'react'

interface Option {
  value: string
  label: string
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[]
  className?: string
  onValueChange?: (value: string) => void
}

const Select: React.FC<SelectProps> = ({
  options,
  className = '',
  onValueChange,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onValueChange) {
      onValueChange(e.target.value)
    }
  }

  return (
    <select
      className={`px-4 py-2 border border-gray-300 rounded ${className}`}
      onChange={handleChange}
      {...props}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
