const initState = {
    loadingstatus: false
  
}


export const commonData = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_LOADING_STATUS':
            return Object.assign({}, state, {
                ...state,
                loadingstatus: !state.loadingstatus
            })

        case 'SHOW_LOADING':
             return {
                    loadingstatus: true
             }
        case 'HIDE_LOADING':
               return {
                    loadingstatus: false
             }
        default:
            return state
    }
}