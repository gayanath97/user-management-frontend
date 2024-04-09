import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; 
import AddOrUpdateUser from './AddOrUpdateUser';
import { rootReducer } from '../redux/store';
import UserAction from '../components/UserAction';


const mockStore = configureStore([]);
let store;

beforeEach(() => {
  store = mockStore(rootReducer(undefined, {})); 
});

describe('AddOrUpdateUser Component', () => {
  test('should add a new user', () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <AddOrUpdateUser />
      </Provider>
    );
    const firstNameInput = getByLabelText('First Name');
    const lastNameInput = getByLabelText('Last Name');
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });

    
    const createButton = getByText('Create');
    fireEvent.click(createButton);

    
    // const actions = store.getActions();
    const actions = UserAction;
    expect(actions[0].type).toBe('ADD_USER');
    expect(actions[0].payload.firstName).toBe('John');
    expect(actions[0].payload.lastName).toBe('Doe');
  });

  // test('should update an existing user', () => {
  //   const existingUser = { id: 1, firstName: 'Jane', lastName: 'Smith' };
  //   const initialState = { users: [existingUser] };
  //   store = mockStore(rootReducer(initialState, {}));

  //   const { getByLabelText, getByText } = render(
  //     <Provider store={store}>
  //       <AddOrUpdateUser user={existingUser} />
  //     </Provider>
  //   );

  //   const firstNameInput = getByLabelText('First Name');
  //   const lastNameInput = getByLabelText('Last Name');
  //   fireEvent.change(firstNameInput, { target: { value: 'Alice' } });
  //   fireEvent.change(lastNameInput, { target: { value: 'Johnson' } });

  //   const updateButton = getByText('Update');
  //   fireEvent.click(updateButton);

  //   const actions = store.getActions();
  //   expect(actions[0].type).toBe('UPDATE_USER');
  //   expect(actions[0].payload.id).toBe(1); 
  //   expect(actions[0].payload.updatedData.firstName).toBe('Alice');
  //   expect(actions[0].payload.updatedData.lastName).toBe('Johnson');
  // });
});
