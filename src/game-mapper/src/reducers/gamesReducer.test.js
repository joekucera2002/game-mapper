import gamesReducer from './gamesReducer';

test('it returns the default state', () => {
  const state = {};
  const newState = gamesReducer(state);

  expect(newState).toBe(state);
});
