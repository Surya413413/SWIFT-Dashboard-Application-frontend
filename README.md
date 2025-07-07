SWIFT Dashboard Application
A comprehensive React dashboard application built for the SWIFT Front-End Internship Assignment. This application features a user profile screen and comments management dashboard with advanced filtering, sorting, and pagination capabilities.
### Features
# Profile Screen

User Information Display: Shows detailed user profile from JSONPlaceholder API
Contact Details: Email, phone, website information
Address Information: Complete address with coordinates
Company Details: Company name, catchphrase, and business description
Responsive Design: Optimized for all screen sizes
Navigation: Seamless navigation back to dashboard

# Comments Dashboard

Data Management: Displays all 500 comments from JSONPlaceholder API
Custom Pagination: 10, 50, or 100 records per page
Advanced Search: Partial search across name, email, and comment body
Custom Sorting: Sort by Post ID, Name, and Email with three-state cycling
State Persistence: All filters and settings persist across browser sessions
Responsive Table: Mobile-optimized table layout

# Technical Stack

Frontend Framework: React 18
Language: JavaScript (ES6+)
Styling: Tailwind CSS
Icons: Lucide React
State Management: React Hooks (useState, useEffect)
Data Persistence: localStorage
API: JSONPlaceholder (dummy data)

# Prerequisites
Before running this application, make sure you have the following installed:

Node.js (v14.0.0 or higher)
npm (v6.0.0 or higher) or yarn
Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation & Setup

Clone or download the project
bashgit clone <repository-url>
cd swift-dashboard

Install dependencies
bashnpm install
or
bashyarn install

Start the development server
bashnpm start
or
bashyarn start

Open your browser
Navigate to http://localhost:3000

### Project Structure
swift-dashboard/
├
├── src/
|____components/
|   |___CommentsDashboard.jsx
|   |___ProfileScreen.jsx
|___hooks/
|   |____useLocalStorage.js
|____styles/
|   |__App.css
|
│── App.js          # Main application component
│── App.css         # Application styles
│── index.js        # Entry point
│── index.css       # Base styles
├── package.json
├── README.md
└── .gitignore
# Usage Guide
Dashboard Features

Search Comments

Use the search bar to filter comments by name, email, or content
Search is case-insensitive and supports partial matches


Sort Data

Click on column headers (Post ID, Name, Email) to sort
Three-state sorting: None → Ascending → Descending → None
Only one column can be sorted at a time


Pagination

Choose page size: 10, 50, or 100 records per page
Navigate through pages using pagination controls
Page information displays current range and total records


View Profile

Click "View Profile" button to see user details
Profile shows comprehensive user information
Use "Back to Dashboard" to return



Data Persistence
All user preferences are automatically saved:

Search terms
Sort configuration
Current page
Page size
Filters remain active after browser refresh

### API Endpoints
The application uses JSONPlaceholder API:

Users: https://jsonplaceholder.typicode.com/users

Used for profile information (first record only)


Comments: https://jsonplaceholder.typicode.com/comments

Used for dashboard data (all 500 records)



### Design Features

Modern UI: Clean, professional design with gradients and shadows
Responsive Layout: Works seamlessly on desktop, tablet, and mobile
Interactive Elements: Hover effects, transitions, and visual feedback
Loading States: Smooth loading animations
Empty States: User-friendly messages when no data is found
Accessibility: Proper contrast ratios and semantic HTML

## Browser Compatibility
Tested and compatible with:

# Google Chrome (latest)
# Mozilla Firefox (latest)
# Microsoft Edge (latest)
# Safari (latest)

### Testing
Manual Testing Checklist

 Profile screen displays user information correctly
 Navigation between screens works
 Search functionality works across all fields
 Sorting works for all sortable columns
 Pagination controls work correctly
 Page size changes work
 State persistence works after refresh
 Responsive design works on different screen sizes
 Loading states display correctly
 Error handling works for API failures

### Performance Optimizations

Efficient Rendering: Uses React hooks for optimal re-renders
Memory Management: Proper cleanup of event listeners
Search Optimization: Debounced search for better performance
Pagination: Only renders visible records
localStorage: Efficient state persistence

Assignment Requirements Fulfilled
## Core Requirements

 React for UI construction
 Plain JavaScript (no TypeScript)
 Cross-browser compatibility
 Profile screen with first user record
 Comments dashboard with all 500 records
 Proper routing between screens

### Dashboard Features

 Custom pagination (10, 50, 100 records)
 Partial search (name, email, body)
 Custom sorting (Post ID, Name, Email)
 Three-state sorting cycle
 State persistence with localStorage

### Technical Excellence

 Custom implementation (no library dependencies for core features)
 Responsive design
 Mobile optimization
 Professional UI/UX
 Clean code structure


### Build for Production
To create a production build:
bashnpm run build
This creates a build folder with optimized production files.
## Development Notes

State Management: Uses custom hooks for localStorage integration
Component Structure: Single-file architecture for simplicity
Styling: Tailwind CSS for rapid development
Error Handling: Comprehensive error boundaries and fallbacks
Performance: Optimized for smooth user experience

## Troubleshooting
Common Issues

Application won't start

Ensure Node.js is installed
Delete node_modules and run npm install


Data not loading

Check internet connection
Verify API endpoints are accessible


Styles not applying

Ensure Tailwind CSS is properly configured
Check browser developer tools for CSS errors



### Support
For questions or issues related to this project:

Check the browser console for error messages
Verify all dependencies are installed correctly
Ensure you're using a supported browser version

### License
This project is created for educational purposes as part of the SWIFT Front-End Internship Assignment.
