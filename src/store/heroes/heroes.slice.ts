import {createSlice} from '@reduxjs/toolkit';
import {fetchHeroes} from './heroes.actions';
import {HeroDTOProps} from '../../services/heroAPI.types';

export interface HeroesState {
  heroList: HeroDTOProps[];
  loading: string;
  totalResults?: number;
  error: boolean;
}

export const initialState: HeroesState = {
  heroList: [],
  totalResults: undefined,
  loading: 'idle',
  error: false,
};

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    reset: state => {
      state.heroList = initialState.heroList;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchHeroes.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.error = false;
      state.heroList.push(...action.payload.heroes);
      state.totalResults = action.payload.totalResults;
    });
    builder.addCase(fetchHeroes.pending, state => {
      state.error = false;
      state.loading = 'loading';
    });
    builder.addCase(fetchHeroes.rejected, state => {
      state.loading = 'idle';
      state.error = true;
    });
  },
});

export const {reset} = heroesSlice.actions;

export default heroesSlice.reducer;
