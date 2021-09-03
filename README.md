# Atmos Take Home Project

## Tech Stack

- React as SPA framework

- Redux as global state manager

## Functionality

### Styling

- The app currently has almost no styling as I found myself short on time
- Under different circumstances I would create and use a few simple styled-components

### Mock API and Data

- The app consumes all data on initial render of the `App` component
- The Mock API is invoked by means of reducer actions which immediately add the data to the redux store
- Further development would involve refactoring the mock API and Redux Store to deliver and process promises, respectively

### Basic Layout

- Each card contains a link which opens a modal displaying compatible plans/lots for that card
- The modals are ARIA compliant
- Further development would involve wrapping the entire card in a Link and stopping propogation at the heart button
- Currently the nav bar does not highlight the active page, further development would involve highlighting based on the url path

### Query Parameters

- The link on each card sets the url to the corresponding query parameter
- Urls with valid query parameters will open with a modal for the the corresponding card, regardless of whether or not the user navigated to the url by link
- The query parameters appear and disappear with the modal
- Links are shareable
- Currently the query parameters relate to the title of the lots/plans, while the text prompts indicated Ids, the figma path indicated names, I selected names because of the emphasis on sharing

### Saving

- Each lot/plan card includes a heart which will update the corresponding object in state with a `saved` boolean
- Currently there is a bug that prevent saving items when they are rendered in the compatible div, I believe this is a bug in my structure for reusing the card components

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
