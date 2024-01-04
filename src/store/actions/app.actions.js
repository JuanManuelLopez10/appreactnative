export const CHANGEPAGE = 'CHANGEPAGE'
export const CHANGETASKOPTION = 'CHANGETASKOPTION'
export const CHANGESUBTASKOPTION = 'CHANGESUBTASKOPTION'
export const CHANGETASKCLAIM = 'CHANGETASKCLAIM'
export const OPENPACK = 'OPENPACK'
export const SELECTGIFT = 'SELECTGIFT'

export const changePage = (page) => {
    return async dispatch => {
        try {
            dispatch({
                type: CHANGEPAGE,
                page: page
            })
        }
        catch (error) {
            console.log('error' + error.message);
        }

    }
}
export const changeTaskOption = (Option) => {
    return async dispatch => {
        try {
            dispatch({
                type: CHANGETASKOPTION,
                Option: Option
            })
        }
        catch (error) {
            console.log('error' + error.message);
        }

    }
}
export const openPacks = (array) => {
    return async dispatch => {
        try {
            dispatch({
                type: OPENPACK,
                NewItems: array
            })
        }
        catch (error) {
            console.log('error' + error.message);
        }

    }
}

export const changeSubtaskSelected = (Option) => {
    return async dispatch => {
        try {
            console.log(Option);
            dispatch({
                type: CHANGESUBTASKOPTION,
                SelectedSubtask: Option
            })
        }
        catch (error) {
            console.log('error' + error.message);
        }

    }
}
export const changeTaskClaim = (Option) => {
    return async dispatch => {
        try {
            console.log(Option);
            dispatch({
                type: CHANGETASKCLAIM,
                TaskClaim: Option
            })
        }
        catch (error) {
            console.log('error' + error.message);
        }

    }
}
export const selectGift = (Option) => {
    return async dispatch => {
        try {
            dispatch({
                type: SELECTGIFT,
                giftSelected: Option
            })
        }
        catch (error) {
            console.log('error' + error.message);
        }

    }
}