import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from '../Features/counter';

export default configureStore({
    reducer: {
        counter: CounterReducer
    }
})