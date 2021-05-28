import produce from 'immer';
import { handleActions } from 'redux-actions';
import * as menuConstants from './constants';

const initialState = [
  { title: 'Inicio', url: '/' },
  { title: 'Estadisticas', url: '/estadisticas' },
  { title: 'Jugadores', url: '/jugadores' }
];

const defaultHandler = (state, action) => state;

export const menuReducer = produce(
  handleActions(
    {
      [menuConstants.DEFAULT_REDUCER]: defaultHandler
    },
    initialState
  )
);
