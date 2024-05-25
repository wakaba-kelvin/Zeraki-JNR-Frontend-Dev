# Sales Agent Dashboard Documentation

## Introduction
The Sales Agent Dashboard is a responsive web application designed to streamline the management of school accounts, invoicing, and collections for Zeraki, a company dedicated to revolutionizing education across Africa. This documentation provides an overview of the dashboard's features, technical implementation, and deployment instructions.

## Features
1. **Side Navigation**
   - Divides the application into two primary modules: Dashboard and Schools.
   - Allows comprehensive functionality and user access.

2. **Dashboard Module**
   - Displays dynamic counters for Collections, Sign-ups, Total Revenue, and Bounced Cheques.
   - Provides at-a-glance overview of key performance indicators.

3. **Schools Module**
   - Manages and views detailed information on each school.
   - Includes features for managing invoices and collections per school.

### Dashboard Overview
- **Top Card Metrics**
  - Collections: Total number of collections made.
  - Sign-ups: Total number of new school sign-ups, breakdown by product.
  - Total Revenue: Overall revenue collected, revenue per product.
  - Bounced Cheques: Number of cheques that have bounced.

- **Targets Visualization**
  - Pie charts to visually represent progress towards signup targets for Zeraki's products.
  - Interactivity with tooltips for detailed statistics.

- **Signups Overview**
  - Bar graphs to visually represent distribution of sign-ups across different types of schools for each product.
  - Segmented graphs with interactive elements.

- **Upcoming Invoices**
  - Displays a list of upcoming invoices ordered by due date.
  - Allows direct collection of payments with modal or side-panel forms.

### School Management
- **Schools**
  - Lists all schools with detailed information.
  - Displays school details including name, type, product, county, registration date, contact information, and school balance.

- **Invoices**
  - Manages invoices per school with enhanced filtering and CRUD capabilities.
  - Enables creation, updating, and deletion of invoices with automatic generation of invoice numbers.

- **Collections**
  - Manages collections per school with capabilities to update invoice statuses based on collection outcomes.
  - Allows marking collection status as valid or bounced.

## Technical Implementation
- **Framework**: Developed using the latest stable version of Angular for robustness and scalability.
- **Data Handling**: Utilizes mock JSON data with mock APIs for simulating real-time updates without dependency on a backend server.
- **Mock API Service**: Recommends using json-server npm package for creating a full mock REST API using simple JSON files.

## Submission Guidelines
- **GitHub Repository**: Provides a link to the public GitHub repository containing the complete project code.
- **README Documentation**: Includes setup instructions, project overview, and key design decisions.
- **Local Deployment**: Ensures all necessary configuration files and documentation for local deployment are included.
- **Deployed Version**: Includes a link to a deployed version of the application on platforms like GitHub Pages, Netlify, or Vercel.
- **Detailed Deployment Instructions**: Provides clear instructions for both local and online deployment.

## Evaluation Criteria
- **Functionality**: Ensures all features are fully functional and interact seamlessly, handling user inputs gracefully.
- **Code Quality**: Maintains clean, modular, and well-organized code following best practices for Angular development.
- **Design Implementation**: Focuses on responsiveness, aesthetics, and intuitive interfaces for a consistent user experience.
- **Extra Polish**: Acknowledges additional features or enhancements that improve user experience, performance, or functionality beyond the specified requirements.
