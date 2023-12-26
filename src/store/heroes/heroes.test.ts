import {it, expect, describe} from '@jest/globals';
import heroesSlice from './heroes.slice';
import {initialState} from './heroes.slice';
import {fetchHeroes} from './heroes.actions';
import {UnknownAction} from '@reduxjs/toolkit';

describe('Heroes reducer', () => {
  it('should return the initial state', () => {
    expect(heroesSlice(undefined, {type: 'undefined'})).toEqual(initialState);
  });

  it('should not change the hero list on action pending', () => {
    const state = heroesSlice(
      initialState,
      fetchHeroes.pending as unknown as UnknownAction,
    );
    expect(state).toEqual(
      expect.objectContaining({
        heroList: [],
      }),
    );
  });

  it('should not change the hero list on action rejected', () => {
    const state = heroesSlice(
      initialState,
      fetchHeroes.rejected as unknown as UnknownAction,
    );
    expect(state).toEqual(
      expect.objectContaining({
        heroList: [],
      }),
    );
  });

  it('should change the hero list on action fulfilled', () => {
    const mockedHeros = [
      {
        name: 'name',
        imageURL: 'image',
        description: 'desc',
        comics: [],
      },
    ];
    const action = {
      type: fetchHeroes.fulfilled,
      payload: {heroes: mockedHeros},
    };
    const state = heroesSlice(undefined, action as unknown as UnknownAction);
    expect(state).toEqual(
      expect.objectContaining({
        heroList: mockedHeros,
      }),
    );
  });
});
