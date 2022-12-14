import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    zones: []
}

const zoneSlice = createSlice({
    name: 'zones',
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
                    if (item.id === action.payload.id) {
                        return { ...item, status: { running: action.payload.active }}
                    }
                    return item
                })
            }
        }
    }
})

export const { addZones, setActive } = zoneSlice.actions

export default zoneSlice.reducer