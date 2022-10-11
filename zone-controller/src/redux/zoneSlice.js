import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    zones: []
}

const zoneSlice = createSlice({
    name: 'zoneStatus',
    initialState: initialState,
    reducers: {
        addZones: (state, action) => {
            return {
                ...state,
                zones: action.payload
            }
        },
        setActive: (state, action) => {
            return {
                ...state,
                zones: state.zones.map(item => {
                    if (item.id == action.payload.id) {
                        return { ...item, status: { running: action.payload.enabled }}
                    }
                    return item
                })
            }
        },
        // setSuspended: (state, action) => {
        //     const zoneSlice = state.zoneSlice.find(item => item.id === action.payload.id)
        //     console.log("setSuspended: ", zoneSlice)
            // return {
            //     ...state,
            //     suspended: action.bool
            // }
        // }
    }
})

export const { addZones, setActive } = zoneSlice.actions

export default zoneSlice.reducer