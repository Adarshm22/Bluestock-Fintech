# IPO Web Application & REST API Development

## Project Overview
This project involves developing an IPO Web Application and REST API for **Bluestock Fintech**. The application provides IPO-related information to the public, displaying details such as company name, logo, price band, opening and closing dates, listing details, and downloadable reports.

## Table of Contents
- [Project Overview](#project-overview)
- [Objective](#objective)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Team](#team)

## Objective
The goal of this project is to develop:
1. A web application providing IPO-related information.
2. A REST API to serve data for both the **Bluestock website/app** and **clients' platforms**.

### The application will display:
- Company Name & Logo
- IPO Price & Listing Price
- Open & Close Dates
- Issue Size & Type
- Listing Date & Status
- Current Market Price (CMP) & Return
- Downloadable RHP & DRHP PDFs

## Tech Stack
### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ORM)
- **API**: RESTful API with JWT authentication
- **Tools**: Postman (API Testing), Git & GitHub (Version Control)

### Frontend
- **Library**: React.js
- **State Management**: Redux (if required)
- **Styling**: CSS/SCSS, Bootstrap 5
- **IDE**: Visual Studio Code (VS Code)

## Features
- Fetch and display IPO details
- REST API integration for data sharing
- Secure and optimized data handling
- User-friendly UI with React.js & Bootstrap 5
- Downloadable IPO-related PDFs

## Getting Started
1. Clone the repository:
   ```sh
   git clone <repo-url>
   ```
2. Install dependencies:
   ```sh
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. Set up environment variables (`.env` file in the root directory):
   ```env
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   PORT=5000
   ```
4. Run the backend server:
   ```sh
   cd backend
   npm start
   ```
5. Run the frontend app:
   ```sh
   cd frontend
   npm start
   ```
   
## Team
| Name                 | Role         | Email                           |
|----------------------|-------------|---------------------------------|
| **Adarsh Kumar Maurya** | Team Lead   | 22.adarsh.03@gmail.com          |
| Gulshan Chauhan     | Co-Team Lead | okaygulshan@gmail.com          |
| Dev Shubhankar      | Developer    | shubhankarrai007@gmail.com     |
| Himanshu Bandiwadekar | Developer    | bandiwadekarhimanshu@gmail.com |
| Om Makwana         | Developer    | ommakwana1406@gmail.com        |
| Durga Prasadu Bomminayuni | Developer    | prasadbommi12345@gmail.com     |
| Sunny Ramnagina Yadav | Developer    | sunnyyadav.developer@gmail.com |
| Yugant Chaudhury   | Developer    | yugant.work@gmail.com          |

## Company  
📧 **hello@bluestock.in**  
🌐 **[Bluestock Fintech Website](http://www.bluestock.in)**

