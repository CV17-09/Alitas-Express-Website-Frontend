# Alitas Express Frontend

## Overview

Alitas Express Frontend is a modern restaurant ordering website built for a wings delivery business. The application provides customers with an easy-to-use platform to browse available wing flavors, learn about the restaurant, and place delivery orders online.

The frontend is designed to transform a traditional promotional flyer into a responsive digital experience that works across desktop, tablet, and mobile devices.

---

## Features

### Customer Features

* Browse available wing flavors
* View restaurant information
* Place delivery orders online
* Mobile-friendly responsive design
* Quick contact and ordering options
* Modern landing page experience
* Real-time form validation
* Order confirmation feedback

---

## Available Flavors

* Classic
* BBQ
* Buffalo
* Hot
* Lemon Pepper
* Mango Habanero
* Teriyaki

---

## Tech Stack

### Frontend

* React
* Next.js
* Tailwind CSS
* TypeScript

### Tools

* Git
* GitHub
* npm
* REST APIs

---

## Frontend Architecture

The frontend is built using React and Next.js to provide a fast, responsive, and scalable user experience.

### Responsibilities

* Display restaurant information
* Render menu items and wing flavors
* Collect customer order information
* Validate form inputs
* Communicate with backend APIs
* Display order confirmations and error messages

---

## Application Workflow

1. Customer visits the website.
2. Customer browses available wing flavors.
3. Customer selects flavor and quantity.
4. Customer enters contact and delivery information.
5. Frontend validates the form data.
6. Frontend sends a request to the backend API.
7. Customer receives confirmation after successful submission.

---

## API Integration

The frontend communicates with the backend through REST APIs.

### Example Endpoint

```http
POST /api/orders
```

### Request Payload

```json
{
  "customerName": "John Doe",
  "phoneNumber": "(555) 123-4567",
  "deliveryAddress": "123 Main Street",
  "flavor": "Mango Habanero",
  "quantity": 20
}
```

---

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

---

## Future Enhancements

* Customer accounts
* Order tracking
* Online payments
* Loyalty rewards program
* Email confirmations
* SMS notifications
* Customer order history
* Delivery status tracking


