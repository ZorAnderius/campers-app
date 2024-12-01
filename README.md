# Campers App

## Project Description

**Campers App** is a modern frontend application designed for **TravelTrucks**,
a company specializing in camper rentals. The goal is to provide a user-friendly
interface for exploring, booking, and reviewing campers.

This project leverages cutting-edge web technologies and integrates with a
pre-built backend API.

---

## Features

1. **Home Page**:

   - Interactive banner with a call-to-action.
   - Quick navigation to the camper catalog.

2. **Camper Catalog**:

   - Browse available vehicles.
   - Filter campers by location, type, and other features.
   - Save favorites persistently across sessions.

3. **Camper Details Page**:

   - View detailed specifications.
   - Photo gallery.
   - User reviews and ratings.
   - Camper booking form.

4. **Interactive Filters**:

   - Dynamic search by various parameters.
   - Backend-based filtering and pagination for accuracy.

5. **Responsive Design**:
   - Desktop-first design with intuitive navigation.

---

## Requirements

- **Node.js**: Version 16 or higher.
- **npm** or **yarn**: For package management.

---

## Installation

### Steps to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/ZorAnderius/campers-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd campers-app
   ```

3. Install dependencies: `bash npm install `

or

`bash yarn install `

## Running Locally

### Start the development server:

```bash
npm run dev
```

Open in your browser:

```bash
http://localhost:5173/
```

or

```bash
http://localhost:3000/
```

## Built With

- **React**: For building the user interface.
- **Redux**: For state management.
- **React Router**: For routing.
- **Axios**: For API requests.
- **CSS Modules**: For styling components.
- **Vite**: For fast build and development.

---

## API Integration

This project uses a backend API hosted at:  
[https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers)

### Key Endpoints:

- **`GET /campers`**: Fetch all campers.
- **`GET /campers/:id`**: Fetch detailed information about a specific camper.

---

## Application Routes

- `/` — Home page.
- `/catalog` — Camper catalog page.
- `/catalog/:id` — Camper details page.
- `/catalog/:id/features` — Camper details page with features section (by
  default).
- `/catalog/:id/reviews` — Camper details page with reviews section.
- `*` — error page.

---

## Developer

- **Name**: ZorAnderius
- **GitHub**: [ZorAnderius](https://github.com/ZorAnderius)
- **Email**: gabriel.zorander@gmail.com

---

Thank you for using **Campers App**! 🚐✨
