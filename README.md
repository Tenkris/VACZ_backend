# Hospital API

This project is a simple API for managing hospitals.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- MongoDB

### Installing

A step by step series of examples that tell you how to get a development environment running:

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the server with `npm start`

## Usage

### Get all hospitals

GET /api/v1/hospitals

### Get single hospital

GET /api/v1/hospitals/:id

### Create new hospital

POST /api/v1/hospitals

Body:

```json
{
  "name": "Hospital Name",
  "address": "Hospital Address",
  "district": "District",
  "province": "Province",
  "postalcode": "Postal Code",
  "tel": "Telephone Number",
  "region": "Region"
}
