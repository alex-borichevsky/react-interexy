import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ModalState {
    modal: boolean,
}

const initialState: ModalState = {
    modal: false,
}

export const modalSLice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        rule(state, action: PayloadAction<boolean>) {
            state.modal = action.payload;
        },
    },
})

export default modalSLice.reducer;