import React, {useState} from 'react'
import {Rnd} from 'react-rnd'
import {X} from 'lucide-react'

interface TextBoxProps {
  id: string
  text: string
  position: {x: number; y: number}
  size: {width: number; height: number}
  style: {fontFamily: string; fontSize: number; color: string}
  isSelected: boolean
  onSelect: () => void
  onUpdate: (updates: Partial<TextBoxProps>) => void
  onDelete: () => void
}

const TextBoxComponent: React.FC<TextBoxProps> = ({
  id,
  text,
  position,
  size,
  style,
  isSelected,
  onSelect,
  onUpdate,
  onDelete,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Rnd
      position={position}
      size={size}
      onDragStop={(e, d) => onUpdate({position: {x: d.x, y: d.y}})}
      onResizeStop={(e, direction, ref, delta, position) => {
        onUpdate({
          size: {width: ref.offsetWidth, height: ref.offsetHeight},
          position,
        })
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      <div
        className={`p-2 ${isSelected ? 'border-2 border-blue-500' : ''}`}
        style={style}
      >
        {text}
        {isHovered && (
          <button
            className='absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full'
            onClick={onDelete}
          >
            <X size={16} />
          </button>
        )}
      </div>
    </Rnd>
  )
}

export default TextBoxComponent
