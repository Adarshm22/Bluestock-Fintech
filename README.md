# IPO Web Application & REST API Development

## Project Overview
This project involves the development of an **IPO Web Application and REST API** for **Bluestock Fintech**. The application provides real-time IPO-related information, including company details, price bands, listing data, and downloadable reports. The platform is designed to serve both the **Bluestock website/app** and external client platforms, ensuring secure and efficient data access.

## Table of Contents
- [Project Overview](#project-overview)
- [Objective](#objective)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Team](#team)
- [Company](#company)

## Objective
The goal of this project is to build:
1. A web application that presents IPO-related information to users.
2. A REST API that enables seamless data integration for Bluestock and client platforms.

### The application provides details such as:
- **Company Name & Logo**
- **IPO Price & Listing Price**
- **Opening & Closing Dates**
- **Issue Size & Type**
- **Listing Date & Status**
- **Current Market Price (CMP) & Return**
- **Downloadable RHP & DRHP PDFs**

## Tech Stack
### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: JWT-based authentication
- **Cloud Storage**: Cloudinary (for image uploads)
- **Development Tools**: Postman (API Testing), Git & GitHub (Version Control)

### Frontend
- **Library**: React.js
- **State Management**: Context API
- **Styling**: Tailwind CSS
- **Development Environment**: Visual Studio Code (VS Code)

## Features
- Real-time IPO data retrieval
- REST API for seamless data integration
- Secure authentication and authorization
- User-friendly UI built with React.js & Tailwind CSS
- Cloud-based image handling with Cloudinary
- Downloadable IPO-related PDFs

## Getting Started
1. Clone the repository:
   ```sh
   git clone https://github.com/Adarshm22/Bluestock-Fintech.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Bluestock-Fintech
   ```
3. Install backend dependencies:
   ```sh
   cd backend
   npm install
   ```
4. Install frontend dependencies:
   ```sh
   cd ../frontend
   npm install
   ```
5. Set up the environment variables (see [Environment Variables](#environment-variables)).
6. Start the backend server:
   ```sh
   cd backend
   npm start
   ```
7. Start the frontend application:
   ```sh
   cd frontend
   npm start
   ```

## Environment Variables
Create a `.env` file in the root directory and add the following configuration:

```env
# Port for the server to run on
PORT=3000

# MongoDB connection string
MONGODB_URL=your_mongodb_connection_string

# Cloudinary credentials for image uploads
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# JWT access token configuration
ACCESS_TOKEN_SECRET_KEY=your_secret_key
ACCESS_TOKEN_EXPIRES_IN=1h
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
