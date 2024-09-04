import React from 'react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Select from '../components/ui/Select'
import PositionSizeForm from './PositionSizeForm'

export interface TextBox {
  id: string
  text: string
  style: {
    fontFamily: string
    fontSize: number
    color: string
  }
}

interface ConfigPanelProps {
  onAddText: () => void
  selectedTextBox: TextBox | undefined
  onUpdateTextBox: (id: string, updates: Partial<TextBox>) => void
}

const ConfigPanel: React.FC<ConfigPanelProps> = ({
  onAddText,
  selectedTextBox,
  onUpdateTextBox,
}) => {
  return (
    <div className='p-4 bg-slate-50 rounded-sm shadow-md'>
      <Button onClick={onAddText}>Add Text</Button>
      <hr className='my-4' />
      <PositionSizeForm />
      <hr className='my-4' />
      <h1 className='font-bold'>Text</h1>
      {selectedTextBox && (
        <div className='mt-4'>
          <Input
            value={selectedTextBox.text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onUpdateTextBox(selectedTextBox.id, {text: e.target.value})
            }
          />
          <div className='mt-2 flex gap-2'>
            <label>Font Family:</label>
            <Select
              value={selectedTextBox.style.fontFamily}
              onValueChange={(value) =>
                onUpdateTextBox(selectedTextBox.id, {
                  style: {...selectedTextBox.style, fontFamily: value},
                })
              }
              options={[
                {value: 'Arial', label: 'Arial'},
                {value: 'Helvetica', label: 'Helvetica'},
                {value: 'Times New Roman', label: 'Times New Roman'},
              ]}
            />
          </div>
          <div className='mt-2 flex gap-2'>
            <label>Font Size:</label>
            <Input
              type='number'
              value={selectedTextBox.style.fontSize}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onUpdateTextBox(selectedTextBox.id, {
                  style: {
                    ...selectedTextBox.style,
                    fontSize: parseInt(e.target.value, 10),
                  },
                })
              }
            />
          </div>
          <div className='mt-2 flex gap-2'>
            <label>Color:</label>
            <Input
              type='color'
              value={selectedTextBox.style.color}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onUpdateTextBox(selectedTextBox.id, {
                  style: {...selectedTextBox.style, color: e.target.value},
                })
              }
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ConfigPanel
