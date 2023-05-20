export const SELECTCATEGORY = 'SELECTCATEGORY'

export const selectCategory= (category) => {
    return async dispatch => {
        try {
            console.log(category);
            dispatch({ 
                type: SELECTCATEGORY, 
                category: category
            })
        }catch(error){
            throw error
        }
    }
}