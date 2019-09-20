import { all } from 'redux-saga/effects';
import stationsListSagas from './stationsList';

export default function* rootSaga() {
  yield all([...stationsListSagas]);
}