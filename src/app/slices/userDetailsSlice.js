import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//CREATE // (data) from useDispatch.

export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {

    try {
        const response = await fetch("https://67c847110acf98d07085c8d5.mockapi.io/curd", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        // console.log(result)
        return result
    } catch (error) {
        // console.log(error)
        rejectWithValue(error.message)
    }
});

//READ 

export const readUser = createAsyncThunk("readUser", async (args, { rejectWithValue }) => {
    try {
        const response = await fetch("https://67c847110acf98d07085c8d5.mockapi.io/curd")
        const result = await response.json()
        // console.log(result)
        return result;

    } catch (error) {
        rejectWithValue(error.message)
    }
});

// DELETE // (id) from useDispatch.

export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
    try {
        const response = await fetch(`https://67c847110acf98d07085c8d5.mockapi.io/curd/${id}`, {
            method: "DELETE"
        })
        const result = await response.json();
        return result;
    } catch (error) {
        rejectWithValue(error.message)
    }
})

// UPDATE 

export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
    try {
        const response = await fetch(`https://67c847110acf98d07085c8d5.mockapi.io/curd/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        return result;

    } catch (error) {
        rejectWithValue(error.message)
    }
});

const userDetailsSlice = createSlice({
    name: "userDetails",
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchData: []
    },
    reducers: {
        searchUser: (state, action) => {
            state.searchData = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder

            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })


            .addCase(readUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(readUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(readUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload;
                // console.log(`action.payload= ${id}`)
                if (id) {
                    state.users = state.users.filter((ele) => ele.id !== id)
                }

            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(updateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;

                state.users = state.users.map((user) => {
                    user.id === action.payload.id ? action.payload : user
                })


            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }

})

export const { searchUser } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
