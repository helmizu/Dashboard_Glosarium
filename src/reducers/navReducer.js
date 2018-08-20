import { MODAL_SHOW, NAVBAR_SELECTED, PROFILE_SHOW, BTN_BURGER_SHOW } from "../config/types"

const initialState = {
    modal : false,
    btnBurger : false,
    profile : false,
    navbar : "Glosarium"
}

export default (state = initialState, action) => {
    switch (action.type) {
        
        case MODAL_SHOW:
        return { ...state, modal : action.payload }
        
        case BTN_BURGER_SHOW:
        return { ...state, btnBurger : action.payload }
        
        case PROFILE_SHOW:
        return { ...state, profile : action.payload }
        
        case NAVBAR_SELECTED:
        return { ...state, navbar : action.payload }
        
        default:
        return state
    }
}
