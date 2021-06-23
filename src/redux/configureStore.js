import { createStore } from 'redux';
import { Reducer, InitState} from './reducer.js';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer, InitState
    );

    return store;
}