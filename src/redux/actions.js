import { FETCH_RANDOM_DATA, SET_SELECTED_POINTS } from "./const"

export const fetchRandomData = () => {
    return {type: FETCH_RANDOM_DATA}
}

export const setSelectedPoints = (data) => {
    return {type: SET_SELECTED_POINTS, data}
}