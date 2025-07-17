# Airline-Booking-System
📄 Detailed Documentation
For a comprehensive overview of the Airline Backend System, including functional and non-functional requirements, technical expectations, and feature planning, please refer to the full documentation here:

👉 Read the Full System Documentation: https://docs.google.com/document/d/14KMiTenGv5F-2A6mfVK3wt9u4RoVuaBRFP30bqT8huc/edit?usp=sharing

This document outlines:

- Flight search and booking flow

- User actions and scenarios

- Notification and review system

- Price tracking and filters

- Expected traffic and storage estimation

- Future improvements (V2 roadmap)

#project Setup
- Clone the project on your local
- Execute `npm install` on the same path as your root directory of teh download project 
- Create an `.env` file in the root directory and add the following environment variable:
    - `PORT=3000`
- Inside the `src/config` create a new file `config.json` and then add the following piece of json

```
{
    "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flight_service_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}

```
 