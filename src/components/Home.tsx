import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import VideoPlayer from './VideoPlayer'
import ConfigPanel, {TextBox} from './ConfigPanel'
import TextBoxComponent from './TextBoxComponent'
import {RootState} from '../redux/store'
import {addTextBox, deleteTextBox, updateTextBox} from '../redux/textBoxSlice'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const textBoxes = useSelector((state: RootState) => state.textBoxes)
  const [selectedTextBox, setSelectedTextBox] = useState<string | null>(null)

  const handleAddText = () => {
    const newId = Date.now().toString()
    dispatch(
      addTextBox({
        id: newId,
        text: 'Text Sample',
        position: {x: 0, y: 0},
        size: {width: 100, height: 50},
        style: {fontFamily: 'Arial', fontSize: 16, color: '#000000'},
      })
    )
  }

  const handleUpdateTextBox = (id: string, updates: Partial<TextBox>) => {
    dispatch(updateTextBox({id, updates}))
  }

  const handleDeleteTextBox = (id: string) => {
    dispatch(deleteTextBox(id))
    if (selectedTextBox === id) {
      setSelectedTextBox(null)
    }
  }

  return (
    <div className='flex p-6 gap-40'>
      <div className='w-2/3'>
        <VideoPlayer>
          {textBoxes.map((textBox) => (
            <TextBoxComponent
              key={textBox.id}
              {...textBox}
              isSelected={selectedTextBox === textBox.id}
              onSelect={() => setSelectedTextBox(textBox.id)}
              onUpdate={(updates) => handleUpdateTextBox(textBox.id, updates)}
              onDelete={() => handleDeleteTextBox(textBox.id)}
            />
          ))}
        </VideoPlayer>
      </div>
      <div className='w-1/3'>
        <ConfigPanel
          onAddText={handleAddText}
          selectedTextBox={textBoxes.find((tb) => tb.id === selectedTextBox)}
          onUpdateTextBox={handleUpdateTextBox}
        />
      </div>
    </div>
  )
}

export default Home
