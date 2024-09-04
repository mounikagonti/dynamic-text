import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TextBox {
  id: string;
  text: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  style: { fontFamily: string; fontSize: number; color: string };
}

const initialState: TextBox[] = [];

const textBoxSlice = createSlice({
  name: 'textBoxes',
  initialState,
  reducers: {
    addTextBox: (state, action: PayloadAction<TextBox>) => {
      state.push(action.payload);
    },
    updateTextBox: (state, action: PayloadAction<{ id: string; updates: Partial<TextBox> }>) => {
      const { id, updates } = action.payload;
      const textBox = state.find(tb => tb.id === id);
      if (textBox) {
        Object.assign(textBox, updates);
      }
    },
    deleteTextBox: (state, action: PayloadAction<string>) => {
      return state.filter(tb => tb.id !== action.payload);
    },
  },
});

export const { addTextBox, updateTextBox, deleteTextBox } = textBoxSlice.actions;
export default textBoxSlice.reducer;