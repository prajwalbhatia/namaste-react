# Two types of imports 
1) default imports/exports - export default ABC - import ABC from "./filename"
2) named imports/exports - export const ABC - import { ABC } from "./filename"

# Hooks
They are just normal js utility functions

# At what thing react is best?
React is best in DOM manipulation, it using something like reconcilation algorithm to update the DOM.

# Reconcilation Algorithm (React Fibre)
It is nothing but comparing two virtual dom and comparing them , after comparing it updates the actual dom.

Virtual dom is basically a representation of actual dom, and virtual dom is a object
So comparing one virtual dom with another virtual dom is fast , that is the reason why React updates DOM so quickly

React will basically find the difference between previous virtual dom and latest virtual dom and update the actual dom accordingly
