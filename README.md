# YelpCamp

A simple Yelp-like campground review app built with Node.js, Express, MongoDB, and EJS. This repository contains the YelpCamp project scaffold with routes for campgrounds, reviews, user authentication, and basic CRUD functionality. Use this README to get the project running locally, seed the database, and deploy.

## Features
- User registration, login, and session-based authentication
- Create, read, update, and delete campgrounds
- Add reviews to campgrounds (with basic authorization)
- Image uploads (Cloudinary or local storage — configure via env)
- Input validation and basic error handling

## Tech stack
- Node.js
- Express
- MongoDB (Mongoose)
- EJS templating
- Passport (local strategy) for authentication
- Multer / Cloudinary for image uploads
- Optional: Bootstrap or Tailwind for styling (depending on project files)

## Demo
(If you have a live demo, link it here)
- Live: https://your-deployment-url.example

## Getting started (local development)
1. Clone the repo
   git clone https://github.com/Nerosegnofic/YelpCamp.git
   cd YelpCamp

2. Install dependencies
   npm install

3. Create environment variables
   Copy `.env.example` to `.env` and set the values (see `.env.example` below).

4. Run the app
   - Development (with nodemon): npm run dev
   - Production: npm start

5. Open your browser
   Visit http://localhost:3000 (or the port specified by your env)

## Environment variables (.env)
Create a `.env` file in the project root. Typical variables used by YelpCamp-style projects:

PORT=3000
MONGO_URI=mongodb://localhost:27017/yelpcamp
SESSION_SECRET=your_session_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
# If using Mapbox or another geocoding provider:
MAPBOX_TOKEN=your_mapbox_token

Adjust names to match what the code expects. If you want, I can scan the repo to generate an exact `.env.example`.

## Database seeding
If the project includes seed scripts, run them to populate the database with sample campgrounds and users.

Example (if seed script exists):
npm run seed
or
node seeds/index.js

If there is no seed script, create sample data via the web UI or a custom script.

## Tests
If tests exist, run:
npm test

## Common scripts (package.json)
- npm start — run the app in production mode
- npm run dev — run with nodemon (development)
- npm test — run tests
- npm run seed — seed the database (if provided)

## Deployment
- Set environment variables on your host (e.g., Render, Heroku, Railway, Vercel).
- Ensure MONGO_URI points to a production MongoDB instance (Atlas or managed DB).
- Set NODE_ENV=production and configure session store accordingly.
- If using Cloudinary, ensure the API keys are configured in the environment.

## Contributing
1. Fork the repository
2. Create a branch: git checkout -b feat/my-feature
3. Commit your changes: git commit -m "Add my feature"
4. Push to your fork: git push origin feat/my-feature
5. Open a pull request describing your changes

Please open issues for bugs or feature requests.

## Project structure (example)
- /models — Mongoose models (User, Campground, Review)
- /routes — Express route handlers
- /views — EJS templates
- /public — Static files (CSS, client JS, images)
- /middleware — Custom middleware (authentication, error handling)
- /seeds — Optional seed data and scripts

Adjust the list above to match the actual repository layout.

## Troubleshooting
- MongoDB connection errors: check MONGO_URI and that MongoDB is running.
- Image upload errors: verify Cloudinary keys and upload settings.
- Sessions not persisting: ensure SESSION_SECRET is set and session store is configured.

## License
If you want to add a license, include a LICENSE file (e.g., MIT) and reference it here.

## Acknowledgements
- Colt Steele's "YelpCamp" tutorial (if this repo is based on it) or other learning resources
- Any libraries, contributors, or services used (Cloudinary, Mapbox, etc.)

## Contact
For questions or issues, open an issue on the repository or contact the maintainer: https://github.com/Nerosegnofic
