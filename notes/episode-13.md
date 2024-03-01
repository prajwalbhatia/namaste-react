# Types of testing (developer)
- Unit testing 
- Integration testing 
- End to end testing (E2E Testing)

# We will use React testing library for testing
- React Testing Library is build on DOM testing library.
- React Testing Library use JEST (It is a javascript testing framework)

# Setting up React tESTING lIBRARY
- Install React Testing Library
- Install jest
- Install babel dependencies
- Configure babel by adding babel.config.js
- Config parcel config file to basically default babel transpilation
- Jest configuration by npx jest --init
- Install @babel/preset-react library to make JSX work in test cases
- Include @babel/preset-react inside our babel config
- Install @testing-library/jest-dom

## Note
- describe is function use to group test cases
- we can either us test() or it() to write test cases
- whenever you are using fetch or state update in a component then you have to wrap the render inside act - await act(async () => render(....))