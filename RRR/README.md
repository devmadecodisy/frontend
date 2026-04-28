# Mutual Funds Investment Platform

## Project Overview

A comprehensive React-based front-end application for analyzing mutual fund investments, tracking performance, and making informed investment decisions. This is an academic project demonstrating investment perception and selection behavior analysis.

## Features

### 👨‍💼 Admin Dashboard
- Platform overview with key statistics
- User activity monitoring
- Mutual fund content management
- System administration tools

### 💼 Investor UI
- Browse and search mutual funds
- Compare multiple funds
- Detailed fund information pages
- Portfolio tracking and performance analysis
- Investment history

### 📊 Financial Advisor UI
- Create and manage fund recommendations
- Develop educational content
- Advisor dashboard with key metrics

### 📈 Data Analyst UI
- Fund performance dashboards
- Investment trend analysis
- Detailed reports with charts and tables
- Performance metrics vs benchmarks

### Common Features
- Responsive design (mobile + desktop)
- Beautiful UI with Tailwind-inspired styling
- React Router-based navigation
- Interactive charts using Recharts
- Clean folder structure and reusable components

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **React Router v6** - Navigation
- **Recharts** - Data visualization
- **Vite** - Build tool
- **Lucide Icons** - Icon library

## Project Structure

```
src/
├── components/
│   ├── Common/           # Shared components (Login, Home, Navbar, Footer)
│   ├── Admin/            # Admin dashboard components
│   ├── Investor/         # Investor dashboard components
│   ├── Advisor/          # Advisor dashboard components
│   └── Analyst/          # Analyst dashboard components
├── pages/                # Page components
├── data/
│   └── dummyData.ts     # Mock data for the application
├── styles/
│   ├── globals.css      # Global styles
│   ├── Navbar.css
│   ├── Login.css
│   ├── Home.css
│   ├── AdminDashboard.css
│   ├── InvestorFunds.css
│   └── ... (other component styles)
├── App.tsx              # Main app component with routing
└── main.tsx             # Entry point
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Clone or download the project:**
   ```bash
   cd RRR
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The application will open automatically at `http://localhost:3000`

## Running the Application

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Demo Credentials

Use the following credentials to test the application:

- **Email:** demo@example.com
- **Password:** demo123

### Test Different Roles

1. **Admin Dashboard**
   - Select "Admin" role
   - Access complete platform overview and management tools

2. **Investor Dashboard**
   - Select "Investor" role
   - Browse funds, build portfolio, track performance

3. **Advisor Dashboard**
   - Select "Financial Advisor" role
   - Create content and recommendations

4. **Analyst Dashboard**
   - Select "Data Analyst" role
   - View performance charts and trends

## Key Pages

### Public Pages
- **Login** - Role-based authentication interface
- **Home** - Platform overview with feature highlights

### Admin Pages
- `/admin/dashboard` - Admin overview
- `/admin/users` - User activity management
- `/admin/funds` - Mutual fund management

### Investor Pages
- `/investor/funds` - Browse and compare mutual funds
- `/investor/fund/:id` - Detailed fund information
- `/investor/portfolio` - Portfolio overview and tracking

### Advisor Pages
- `/advisor/dashboard` - Content and recommendation management

### Analyst Pages
- `/analyst/dashboard` - Performance analysis and reports

## Responsive Design

The application is fully responsive with:
- Mobile-first design approach
- Adaptive layouts for tablets and desktops
- Touch-friendly interface elements
- Optimized navigation for small screens

## Components Highlights

### Reusable Components
- Card components for consistent layout
- Button variants (primary, secondary, outline, small)
- Form components with validation
- Table components with sorting

### Data Visualization
- Line charts for performance trends
- Area charts for investment distribution
- Pie charts for portfolio allocation
- Bar charts for comparisons

### UI Features
- Smooth animations and transitions
- Loading states
- Error handling
- Success notifications
- Search and filter functionality

## Dummy Data

The application includes comprehensive dummy data for:
- 8 Mutual Funds with detailed metrics
- 5 User accounts with different roles
- 3 Portfolio items with performance data
- 12 months of performance history
- Investment trend data
- Educational content

## Styling

Custom CSS with:
- CSS custom properties (variables) for theme colors
- Responsive grid and flexbox layouts
- Smooth transitions and animations
- Accessibility-focused design
- Professional color scheme

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- React functional components with hooks
- Code splitting with React Router
- Lazy loading of routes
- Optimized re-renders
- Efficient state management

## Academic Evaluation Readiness

This project is prepared for academic evaluation with:
- Clean, well-structured code
- Comprehensive UI implementation
- Multiple user roles and workflows
- Interactive dashboards
- Professional design
- Detailed documentation

## Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Go to vercel.com and sign in
3. Import the repository
4. Vercel will auto-detect React/Vite
5. Click Deploy
6. Your app will be live at `https://yourapp.vercel.app`

### Deploy on Netlify

1. Push your code to GitHub
2. Go to netlify.com and sign in
3. Click "New site from Git"
4. Select your repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Click Deploy

### Deploy on Render

1. Push your code to GitHub
2. Go to render.com and sign in
3. Click "New+" and select "Static Site"
4. Select your repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Click Deploy

## Future Enhancements

- Backend API integration
- User authentication with JWT
- Real-time data updates
- Advanced filtering options
- Comparison reports export
- Investment recommendations algorithm
- Mobile app version
- Dark mode theme
- Multi-language support

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- --port 3001
```

### Module not found errors
```bash
npm install
```

### Build fails
```bash
npm run build -- --force
```

## License

Academic Project - For educational purposes only

## Contact

For questions or support regarding this project, please refer to the project documentation and code comments.

---

**Created for: Investment Perception and Selection Behavior Towards Mutual Funds**
**Academic Project - Ready for FSAD Evaluation**
