# Food Recipe App

This is a Food Recipe App built with Next.js, Tailwind CSS, and Firebase. The application utilizes data fetched using Axios from Spoonacooler's API. It is hosted on Vercel and can be accessed at [https://recipie-app-with-next-js.vercel.app/](https://recipie-app-with-next-js.vercel.app/).

## Installation

To run the Food Recipe App locally, follow the instructions below:

1. Clone the repository: `git clone https://github.com/your-username/food-recipe-app.git`
2. Navigate to the project directory: `cd food-recipe-app`
3. Install the dependencies: `npm install`
4. Set up Firebase:
   - Create a new Firebase project and obtain the configuration details.
   - Create a `.env.local` file in the root directory and add your Firebase configuration details as environment variables. Example:
     ```
     NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
     NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
     ```
5. Start the development server: `npm run dev`
6. Access the app in your browser at `http://localhost:3000`

Make sure to have Node.js and npm installed on your machine before proceeding.

## Functionalities

The Food Recipe App offers the following features:

- Fully responsive design to provide a seamless user experience on various devices and screen sizes.
- Protected routes that require users to sign in before accessing certain pages or functionalities.
- Authentication functionalities powered by Firebase, including signing up, logging in, logging out, and Google authentication.
- Storage of favorited recipes using Firebase Cloud Storage.
- Seamless transitioning between pages utilizing Next.js' built-in router system.

## Technologies Used

The Food Recipe App utilizes the following technologies:

- Next.js: A React framework for building server-rendered applications.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.
- Firebase: A comprehensive suite of cloud-based tools for building web and mobile applications.
- Axios: A promise-based HTTP client for making API requests.

## Contributing

Contributions to the Food Recipe App are welcome! If you find any issues or have suggestions for improvements, please submit a pull request with your proposed changes. Make sure to follow the existing code style and guidelines.

## Contact

For any further inquiries or information, please contact the project owner at [tosironj@gmail.com](mailto:tosironj@gmail.com).
