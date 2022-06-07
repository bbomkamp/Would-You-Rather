const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('The Action:', action)
    const result = next(action)
    console.log("The Current State", store.getState())
    return result
}

export default logger