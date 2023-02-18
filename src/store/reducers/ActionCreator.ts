import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IUser} from "../../models/IUser";

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try{
            const response = await axios.get<IUser[]>("https://rickandmortyapi.com/api/character");
            // @ts-ignore
            return response.data.results;

        }   catch (e) {
            return  thunkAPI.rejectWithValue('Не удалось загрузить пользователей')
        }


    }

);