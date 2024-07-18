# Recipe Sharing Web App

Welcome to the Recipe Sharing Web App, a platform designed to bring together food enthusiasts from around the world. Whether you’re a seasoned chef or a home cook, this app provides an easy and fun way to discover, share, and save your favorite recipes.

## Features

- **User Authentication:** Secure sign up, login, and logout using Firebase Authentication to keep your recipe collection private and accessible only to you.
- **Recipe Submission:** Easily submit your recipes with ingredients, step-by-step instructions, and photos.
- **Recipe Discovery:** Browse and search for recipes by category, ingredients, or user ratings.
- **Favorites and Collections:** Save your favorite recipes and organize them into collections for easy access.
- **Ratings and Reviews:** Rate and review recipes you’ve tried to help others find the best recipes.
- **Social Sharing:** Share your favorite recipes with friends and family on social media.
- **Responsive Design:** Enjoy a seamless experience on both desktop and mobile devices.
- **Server-Side Rendering:** Optimized for performance and SEO with Next.js.

## Technologies Used

- **Frontend:** Next.js, React, Redux, Material-UI
- **Backend:** Firebase (Firestore, Authentication, Storage)
- **State Management:** Redux
- **Hosting:** Vercel (for Next.js) and Firebase Hosting

## Getting Started

Join our community of food lovers and start exploring new recipes today. Share your own culinary creations and discover delicious dishes from other members of the community. Bon appétit!

### Prerequisites

Before you begin, ensure you have the following:

- Node.js and npm installed
- Firebase account and project setup

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/recipe-sharing-app.git
    cd recipe-sharing-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up Firebase:
    - Go to the Firebase Console and create a new project.
    - Set up Firestore Database.
    - Enable Firebase Authentication (Email/Password).
    - Enable Firebase Storage.
    - Create a `.env.local` file in the root of your project and add your Firebase configuration:
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

    The app should now be running on [http://localhost:3000](http://localhost:3000).

### Deployment

1. Build the project:
    ```bash
    npm run build
    ```

2. Deploy to Vercel:
    - Follow the instructions on the [Vercel](https://vercel.com/) website to deploy your Next.js app.
    - You can also deploy Firebase functions and other services if necessary using Firebase CLI:
    ```bash
    npm install -g firebase-tools
    firebase login
    firebase init
    firebase deploy
    ```


## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.




