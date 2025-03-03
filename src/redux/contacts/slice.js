import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from "./operations";
import { logoutUser } from "../auth/operations";

const initialState = {
  items: [],
  currentContact: null,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    editCurrentContact: (state, action) => {
      state.currentContact = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
        state.currentContact = null;
        state.loading = false;
      })
      .addCase(logoutUser.fulfilled, () => initialState)
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { editCurrentContact } = slice.actions;

export default slice.reducer;
