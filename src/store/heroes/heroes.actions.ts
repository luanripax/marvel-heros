import {createAsyncThunk} from '@reduxjs/toolkit';
import heroAPI from '../../services/heroAPI.service';

export const fetchHeroes = createAsyncThunk(
  'heroes/fetch',
  async (page: number) => {
    const data = await heroAPI.fetch(page);
    return data;
  },
);
