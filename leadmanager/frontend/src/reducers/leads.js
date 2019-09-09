import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from '../actions/types.js';

const initialState={
    leads: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_LEADS:  //called from components/leads/Leads.js
            return {
                ...state,  //this will return whatever else is in the state in addition to leads
                leads: action.payload
            };
        case DELETE_LEAD:  //called from components/leads/Leads.js
            return {
                ...state,
                leads: state.leads.filter(lead => lead.id !== action.payload)
            };
        case ADD_LEAD:  //called from components/leads/Leads.js
            return {
                ...state,
                leads: [...state.leads, action.payload]
            };
        default:
            return state;
    }
}
