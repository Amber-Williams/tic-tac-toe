# Case Study

#### Steps taken are as follows:

1. break down problem
  - make layout
  - make cell clickable
  - when clicked it puts player's X/O in position
  - apply rules, can't click if already there
  - check after each move if won
  - style
  - update old tests
  - write new tests
  - deploy with AWS serverless
2. added bootstrap style
3. while working on working on break down problem steps i ran into need to use redux thunk to access the state store inside the `SELECT_CELL` action so that the `game` reducer could be aware of the `board` reducer and verify if won condition, tie or to carry on.
4. wrote function to scan diagnals, rows and columns for player win
5. moved unility functions to helper functions file
6. moved reducer states into constants file
7. fixed old tests
8. styled and added fun animaition for when user wins
9. game is tied feature
10. separated out Game holder and PlayerMessage 
11. added testing for all actions, reducer’s, helper functions and each component
12. deployed with serverless using AWS creditinals from the `.env` file with set up instructions in README.md

#### TODOS:
play again button
mobile responsive


#### Link to app
http://website-0nza6nd.s3-website.us-east-1.amazonaws.com/