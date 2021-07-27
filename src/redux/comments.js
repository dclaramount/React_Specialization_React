import { isCompositeComponent } from 'react-dom/test-utils';
import {COMMENTS} from '../shared/comments';
import * as ActionTypes from './ActionTypes.js';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type){
        
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            return state.concat(comment);

        default:
            return state;

    }
}