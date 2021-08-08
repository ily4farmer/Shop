const defaultState = {
    chapter: []
}

const GET__CHAPTER = "GET__CHAPTER"

export const chapterReudcer = (state = defaultState, action) => {
    switch (action.type) {
        case GET__CHAPTER:
            return {...state, chapter: action.payload};   
        default:
            return state;
    }
}