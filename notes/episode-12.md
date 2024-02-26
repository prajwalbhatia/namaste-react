#  Redux toolkit
When you click on certain button it will dispatch an action -> then that action will call a reducer function -> that will update the respective slice
and to get the data from the redux store let say in header component, the header component is subscribed to respective slice with the help of hooks named as useSelector

# Adding redux store to our app
-Install libraries @reduxjs/toolkit and react-redux
-Create our store
- Connect store to our app
- Create a slice 
- Dispatch an action
- Read the data using selector

# Things to keep in mind
- When we are subscribing to store to get the data in our component then we should keep in mind that we should only subscribe to that portion of the store which is needed, because unnecessary subscribing to complete store can be very inefficient because whenever their will be any change in store then the component that is subscribed to complete store will get affected.

- When we are using reducers in the slice then keyword is 'reducers' because we are creating multiple reducer in it and when we are creating reducer in our app store then keyword is 'reducer' because it denoted one big reducer that contains multiple small reducers

- RTK says either mutate the state or return a new state
