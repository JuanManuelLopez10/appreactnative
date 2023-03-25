export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const FILTERED_PRODUCT = 'FILTERED_PRODUCT'

export const selectProduct = (id) => ({
    type: SELECT_PRODUCT,
    productID: id
})
export const filteredProduct = (id) => ({
    type: FILTERED_PRODUCT,
    categoryID: id
})
