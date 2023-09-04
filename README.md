

# Clarus Library Web Application

<h3>Visit: https://library-app-react-context-router.netlify.app/</h3>

<img alt="alt_text" src="./library.gif"/>



## Project Skeleton

```
008 - Library (folder)
|
|----readme.md         # Given to the students (Definition of the project)
SOLUTION
├── public
│     └── index.html
├── src
│    ├── App.js
│    ├── assets
│    │   ├── about.png
│    │   ├── book.jpg
│    │   ├── books.jpg
│    │   └── const.png
│    │   │
│    ├── components
│    │   ├── card
│    │   │   ├── Card.jsx
│    │   │   └── Card.style.jsx
│    │   ├── footer
│    │   │   ├── Footer.jsx
│    │   │   └── Footer.style.jsx
│    │   ├── header
│    │   │   ├── Header.jsx
│    │   │   └── Header.style.jsx
│    │   └── navbar
│    │   │   ├── Navbar.jsx
│    │   │   └── Navbar.style.jsx
│    │   │
│    ├── context
│    │   ├── AuthContext.jsx
│    │   ├── BooksContext.jsx
│    │   └── ThemeContext.jsx
│    │   │
│    ├── index.css
│    ├── index.js
│    │   │
│    ├── pages
│    │   ├── about
│    │   │   ├── About.jsx
│    │   │   └── About.style.jsx
│    │   ├── detail
│    │   │   ├── Detail.jsx
│    │   │   └── Detail.style.jsx
│    │   ├── home
│    │   │   ├── Home.jsx
│    │   │   └── Home.style.jsx
│    │   ├── login
│    │   │   ├── Login.jsx
│    │   │   └── Login.style.jsx
│    │   └── register
│    │   │   ├── Register.jsx
│    │   │   └── Register.style.jsx
│    │   │
│    ├── router
│    │   ├── AppRouter.jsx
│    │   └── PrivateRouter.jsx
│    │   │
│    └── styles
│        ├── Flex.jsx
│        ├── Global.styles.jsx
│        └── theme.js
├── package.json
└── yarn.lock
```


Clarus Library is a web application that allows users to search for books and magazines using the Google Books API. It provides information about books, such as titles, authors, publication dates, and descriptions. Users can also register, log in, and log out of their accounts. The application has a responsive design and allows users to toggle between light and dark themes.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Structure](#project-structure)
- [Usage](#usage)


## Technologies Used

- **React**: The frontend of the application is built using React, a popular JavaScript library for building user interfaces.
- **React Router**: Used for routing and navigation within the application.
- **Styled Components**: Used for styling the components with a CSS-in-JS approach.
- **Context API**: Used for state management and theming in the application.
- **Axios**: Used for making HTTP requests to the Google Books API.
- **GitHub Pages**: The application is hosted on GitHub Pages.
- **Google Books API**: Used to fetch book and magazine data.

## Features

- **Search Books and Magazines**: Users can search for books and magazines by entering keywords and selecting print types (all, books, magazines).
- **User Authentication**: Users can register, log in, and log out. The authentication status is managed using the Context API.
- **Theming**: Users can toggle between light and dark themes throughout the application.
- **Responsive Design**: The application is responsive and works well on various screen sizes.
- **Protected Routes**: Certain routes, such as the user's profile, are protected and can only be accessed when logged in.
- **Detailed Book Information**: Users can click on a book to view detailed information, including the book cover, description, authors, publication date, and publisher.

## Project Structure

The project is structured as follows:

- **src**: Contains the main source code for the application.
  - **components**: Reusable components used throughout the application.
  - **context**: Context providers for state management.
  - **pages**: Individual pages or views for the application.
  - **router**: Routing configuration for the application.
  - **styles**: Global styles and theme definitions.
  - **assets**: Images and other static assets.
  - **helper**: Helper functions and data.



