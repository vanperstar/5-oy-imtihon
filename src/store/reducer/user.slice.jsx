import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const Base_URL = 'https://n36-blog.herokuapp.com'
const id = 287
const { token }  = JSON.parse(localStorage.getItem('token'))
const name = 'users';
export const getUsers = createAsyncThunk("users/getUsers", async function (_, {rejectWithValue}) {
    try {
        const res = await fetch(`${Base_URL}/posts/bycategory?page=0`, {
            method: 'GET',
            headers: {
                categoryname: 'All',
            }
        });

        if(!res.ok) {
            alert('Server errror: ', res.status)
        }

        const data = await res.json();
        return data;
    } catch (error) {
        rejectWithValue(error)
    };
});

export const setUsers = createAsyncThunk("users/setUsers", async function (newPost, {rejectWithValue}) {
    try {
        const res = await fetch(`${Base_URL}/posts`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                token: token,
               
            },
            body: JSON.stringify(newPost),
            });
        if(!res.ok) {
            throw new Error('Server errror: ', res.status)
        }
        const data = await res.json();
        return data;
    } catch (error) {
        rejectWithValue(error)
    };
});

export const deleteUsers = createAsyncThunk("users/deleteUsers", async function (id, {rejectWithValue}) {
    try {
        const res = await fetch(`${Base_URL}/posts/${id}`, {
            method: 'Delete',
            headers: {
                token: token,
                'Content-Type': 'application/json',
            },
        });
        if(!res.ok) {
            throw new Error('Server errror: ', res.status)
        }
        const data = await res.json();
        return data;
    } catch (error) {
        rejectWithValue(error)
    };
});

export const editUsers = createAsyncThunk("users/editUsers", async function (newPost, {rejectWithValue}) {
    try {
        const res = await fetch(`${Base_URL}/posts/491`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                token: token,
            },
            body: JSON.stringify(newPost),
        });
        if(!res.ok) {
            throw new Error('Server errror: ', res.status)
        }
        const data = await res.json();
        return data;
    } catch (error) {
        rejectWithValue(error)
    };
});

// export const singlePost = createAsyncThunk("users/singlePost", async function (id, {rejectWithValue}) {
//     try {
//         const res = await fetch(`${Base_URL}/posts/${id}`, {
//             method: 'GET',
//         });
//         if(!res.ok) {
//             throw new Error('Server errror: ', res.status)
//         }
//         const data = await res.json();
//         console.log(data);
//         const dispatch = useDispatch()
//         dispatch(addPost(data))
//         return data;
//     } catch (error) {
//         rejectWithValue(error)
//     };
// });

const initialState = {
    users: [],
    post: [],
    status: 'idle',
    error: null,
}


const userSlice = createSlice({
    name,
    initialState,
    reducers: {
        deleteUser(state, action) {
            const filterUsers = state.users.posts.filter(item => `${item.id}` !== `${action.payload}`)
            return {...state.users, users:filterUsers}
        },
        addPost(state, action) {
            console.log(action.payload);
            state.users.post.push(action.payload)
        },
    }, 
    extraReducers(builder) {
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = 'success';
                state.error = false;
                state.users = action.payload
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload
            })
            .addCase(getUsers.pending, (state) => {
                state.status = 'loading';
            })
            // .addCase(setUsers.fulfilled, (state, action) => {
            //     state.status = 'success';
            //     state.error = false;
            //     state.users = action.payload
            // })
            // .addCase(setUsers.rejected, (state, action) => {
            //     state.status = 'rejected';
            //     state.error = action.payload
            // })
            // .addCase(setUsers.pending, (state) => {
            //     state.status = 'loading';
            // })
    }
})

export const { deleteUser, addPost } = userSlice.actions
export default userSlice.reducer;