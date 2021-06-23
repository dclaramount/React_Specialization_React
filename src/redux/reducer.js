import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';

export const InitState   ={

        dishes:     DISHES,
        comments:   COMMENTS,
        promotions: PROMOTIONS, 
        leaders:     LEADERS
};

export const Reducer = (state = InitState ,action) => {
    return state;
};