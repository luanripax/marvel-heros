import {createAsyncThunk} from '@reduxjs/toolkit';
import heroAPI from '../../services/heroAPI.service';
import {HeroAPIProps} from '../../services/heroAPI.types';

export const fetchHeroes = createAsyncThunk<HeroAPIProps, number>(
  'heroes/fetch',
  async (page: number) => {
    const data = await heroAPI.fetch(page);
    return data;
  },
);
