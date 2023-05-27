// redux/store.js
import { createStore } from 'redux';
import reducer from './reducer';

// 리덕스 스토어 생성
const store = createStore(reducer);

export default store;
