# Redux Saga Todo App

## Overview

A task management application built with **React**, **Redux Toolkit**, **Redux-Saga**, **React Final Form**, and **Material UI**.

The project focuses on asynchronous state management, CRUD operations with external API integration, form validation, and scalable frontend architecture.

---

## Core Features

* Create new tasks
* Display task list from external API
* Delete tasks
* Mark tasks as completed
* Edit existing tasks inline
* Form validation with controlled error states
* Loading state handling during async requests
* Centralized Redux state management
* Side effect management with Redux-Saga

---

## Tech Stack

### Frontend

* React
* Vite
* Material UI (MUI)
* React Final Form

### State Management

* Redux Toolkit
* Redux-Saga
* Redux Logger

### API

* MockAPI REST service

---

## Architecture

### Component Layer

**TodoForm**

* Handles task creation
* Uses React Final Form
* Custom reusable input component
* Validation before submission

**ItemsList**

* Displays all tasks
* Supports:

  * Delete
  * Complete toggle
  * Inline edit
  * Save/Cancel editing states

**Input**

* Reusable Material UI wrapper
* Integrates with Final Form
* Handles validation and submission state

---

## Redux Structure

### Slice Responsibilities

**todoSlice.js**

* Loading states
* CRUD reducers
* Edit state tracking
* Async action triggers

### Saga Responsibilities

**saga.js**

* Fetch todos
* Add todo
* Delete todo
* Toggle completion
* Edit todo
* API error handling

### Store Configuration

* Redux Toolkit store
* Saga middleware
* Logger middleware

---

## Key Engineering Decisions

### Why Redux-Saga?

* Separates side effects from UI logic
* Improves maintainability
* Scales better for larger applications
* Cleaner async workflows than component-level fetches

### Why React Final Form?

* Lightweight form state management
* Validation support
* Reusable field abstractions

### Why Material UI?

* Rapid UI development
* Accessible components
* Consistent design system

---

## Folder Structure

```bash
src/
 ┣ components/
 ┃ ┣ Input.jsx
 ┃ ┣ TodoForm.jsx
 ┃ ┗ ItemsList.jsx
 ┣ redux/
 ┃ ┣ slices/
 ┃ ┃ ┗ todoSlice.js
 ┃ ┣ saga.js
 ┃ ┗ store.js
 ┣ constants/
 ┃ ┗ constants.js
 ┣ helpers/
 ┃ ┗ validators.js
 ┣ App.jsx
 ┗ main.jsx
```

---

## API Operations

### GET

Loads all todos from MockAPI

### POST

Creates new todo

### PUT

Updates:

* Completion status
* Edited task text

### DELETE

Removes task from database

---

## Validation

Implemented basic required field validation:

```js
value ? undefined : 'Required'
```

Prevents empty task creation and improves UX.

---

## Strengths of the Project

* Demonstrates understanding of scalable React architecture
* Practical Redux Toolkit usage
* Real async middleware implementation
* External API integration
* Form abstraction
* UI library integration
* Inline editing logic
* Separation of business logic from presentation

---

## Potential Improvements

* Better error UI for failed API requests
* Optimistic updates
* Pagination/filtering
* Search functionality
* Unit/integration tests
* TypeScript migration
* Better accessibility enhancements
* Persistent authentication

---

## What This Project Shows for Employers

### Junior Level

* Strong understanding of React fundamentals
* Redux ecosystem knowledge
* Async data flow understanding
* API interaction experience
* Component decomposition skills

### Moving Toward Junior+

* Middleware usage
* More maintainable architecture
* Real-world CRUD patterns

---

## Installation

```bash
npm install
npm run dev
```

---

## Conclusion

This project is a solid portfolio example for frontend positions because it demonstrates:

* Real application architecture
* State complexity management
* Async operations
* Form systems
* UI framework usage
* Practical engineering rather than static layout work

It is significantly stronger than simple Todo apps built only with local state because it reflects patterns used in production applications.
