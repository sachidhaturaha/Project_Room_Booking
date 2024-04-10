# Room Booking System

## Project Overview
This project is a Room Booking System designed to simplify the process of booking rooms for accommodations. It allows users to view available rooms based on selected dates, book rooms, and manage their bookings. 

## The system utilizes: 
[React](https://reactjs.org/) for the frontend 
[Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) for the backend 
[MongoDB](https://www.mongodb.com/) for database
[Moment.js](https://momentjs.com/) for date handling
[Ant Design (AntD)](https://ant.design/) for UI components


## Features
- View rooms available for booking
- Select date range for booking
- Book rooms with instant confirmation
- Manage existing bookings
- Responsive design for all devices

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/downloads)

### Installation
1. Clone the repository:

   git clone https://github.com/sachidhaturaha/RoomBookingSystem.git

2. Navigate to the project directory:

   cd room-booking-system

3. Install dependencies for the server:

   npm install ---

4. Navigate to the client directory ('react-frontend'):

   cd react-frontend

5. Install dependencies for the client:

   npm install ---

6. Start the server:

   cd ..
   nodemon server

7. In a new terminal, start the client:

   npm start

-- The app should now be running on http://localhost:3000. --

## Usage

To book a room:

-> Register if you are a new user, or login if you have used it before.
-> You'll be redirected to home page, where you can see the details of the room, by clicking on 'View details' button
-> Select the dates for which you want to book the room.
-> You'll get to see the available rooms, based on which, you can click on book now button to reserve your room.
-> You'll get to see the details of the room along with the charges you need to pay for given number of days.
-> Click on confirm booking, and your room will get booked. 
-> Receive instant booking confirmation.











