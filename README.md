# Alitas Express Full-Stack Ordering Website

## Overview

Alitas Express is a full-stack restaurant ordering website designed for a wings delivery business. The platform transforms a traditional promotional flyer into a modern digital experience where customers can browse available wing flavors, place orders online, and view delivery information.

The application includes a responsive frontend for customers and a backend system that processes and stores order information.

---

## Features

### Customer Features

- View available wing flavors
- Browse restaurant information
- Place delivery orders online
- Mobile-friendly responsive design
- Quick contact and ordering options
- Attractive promotional landing page

### Backend Features

- Order submission processing
- Customer information storage
- Order management API
- Input validation
- Database integration
- RESTful API architecture

---

## Available Flavors

- Classic
- BBQ
- Buffalo
- Hot
- Lemon Pepper
- Mango Habanero
- Teriyaki

---

## Tech Stack

### Frontend

- React
- Next.js
- Tailwind CSS

### Backend

- Node.js
- Express.js

### Database

- PostgreSQL

### Tools & Development

- Git
- GitHub
- REST APIs
- Postman
- npm

---

## Frontend Architecture

The frontend is built using React and Next.js to provide a fast, responsive, and scalable user experience.

Responsibilities:

- Display restaurant information
- Render menu items and wing flavors
- Collect customer order information
- Validate form inputs
- Communicate with backend APIs
- Display order confirmations and error messages

---

## Backend Architecture

The backend follows a RESTful API architecture using Node.js and Express.js.

Responsibilities:

- Receive customer order requests
- Validate incoming data
- Process business logic
- Interact with PostgreSQL database
- Return API responses to the frontend

---

## Database Architecture

PostgreSQL stores all customer and order information.

### Orders Table

| Column | Data Type |
|----------|----------|
| id | SERIAL PRIMARY KEY |
| customer_name | VARCHAR(100) |
| phone_number | VARCHAR(20) |
| delivery_address | TEXT |
| flavor | VARCHAR(50) |
| quantity | INTEGER |
| order_status | VARCHAR(20) |
| created_at | TIMESTAMP |

---

## System Architecture

The application follows a simple full-stack architecture where the frontend, backend, and database work together to handle user requests.

```text
Customer Browser
      ↓
React + Next.js Frontend
      ↓ REST API Requests
Node.js + Express Backend
      ↓ Database Queries
PostgreSQL Database

---

## Application Workflow

1. Customer visits the website.
2. Customer views available wing flavors.
3. Customer selects flavor and quantity.
4. Customer enters contact and delivery information.
5. Frontend sends a POST request to the backend.
6. Express validates the request.
7. Order is stored in PostgreSQL.
8. Backend returns a success response.
9. Customer receives order confirmation.

---

## Future Enhancements

- User authentication
- Customer accounts
- Online payment processing (Stripe)
- Order tracking
- Admin dashboard
- Inventory management
- SMS notifications
- Email order confirmations
- Analytics and reporting
