import 'react-native-get-random-values';
import {configureStore, createReducer, createSlice} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

const mapContacts = contact => {
  const {name, picture, phone, cell, email} = contact;
  return {
    id: uuidv4(),
    name: `${name.first} ${name.last}`,
    avatar: picture.large,
    phone,
    cell,
    email,
    favorite: Math.random() < 0.1 ? true : false,
  };
};

export const fetchContacts = async () => {
  const data = await fetch('http://randomuser.me/api/?results=3');
  const ContactData = await data.json();
  return ContactData.results.map(mapContacts);
};

// create contacts reducer
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {contacts: []},
  reducers: {
    fetchContactsReducers: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const {fetchContactsReducers} = contactsSlice.actions;

// create profile reducer
const profileContactSlice = createSlice({
  name: 'profile',
  initialState: {profile: {}},
  reducers: {
    getProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const {getProfile} = profileContactSlice.actions;

// create favorites reducer
const favoriteContactSlice = createSlice({
  name: 'favorites',
  initialState: {favorites: []},
  reducers: {
    getFavorites: (state, action) => {
      state.favorites = action.payload;
    },

    addFavorite: (state, action) => {
      const temp = state.favorites;
      for (const element of temp) {
        if (element.id === action.payload.id) {
          console.log('this has already been favorites!');
          return;
        }
      }
      console.log('this has been added into favorites, successfully!');
      state.favorites.push(action.payload);
      return;
    },
    deleteFavorite: (state, action) => {
      const temp = state.favorites;
      const size = state.favorites.length;
      for (let index = 0; index < size; index++) {
        const element = temp[index];
        if (element.id === action.payload.id) {
          state.favorites.splice(index, 1);
          console.log('deleted successfully!');
          return;
        }
        console.log('deleted unsuccessfully!');
      }
    },
  },
});

export const {getFavorites} = favoriteContactSlice.actions;
export const {addFavorite} = favoriteContactSlice.actions;

const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    profile: profileContactSlice.reducer,
    favorites: favoriteContactSlice.reducer,
  },
});

export default store;
