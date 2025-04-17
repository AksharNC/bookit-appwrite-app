# BookIt Appwrite

BookIt is a room booking application built with [Next.js](https://nextjs.org) and powered by [Appwrite](https://appwrite.io). This project allows users to create, view, and manage room bookings with features like image uploads, user authentication, and dynamic room listings.

## Features

-   **User Authentication**: Secure login and session management using Appwrite.
-   **Room Management**: Create, view, and manage rooms with details like name, description, price, and amenities.
-   **Image Uploads**: Upload and display room images using Appwrite's storage service.
-   **Responsive Design**: Optimized for both desktop and mobile devices.
-   **Error Handling**: Graceful error handling and redirection for invalid sessions or failed operations.

## Getting Started

### Prerequisites

Before running this project, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (v16 or later)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   An [Appwrite](https://appwrite.io) instance with the required configurations

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/bookit-appwrite.git
    cd bookit-appwrite
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:

    ```env
    NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
    NEXT_PUBLIC_APPWRITE_DATABASE=your_database_id
    NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS=your_collection_id
    NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS=your_bucket_id
    ```

    Replace `your_project_id`, `your_database_id`, `your_collection_id`, and `your_bucket_id` with the actual values from your Appwrite console.

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Dependencies

The following dependencies are used in this project:

### Production Dependencies

-   **[luxon](https://moment.github.io/luxon/)**: For date and time manipulation.
-   **[next](https://nextjs.org/)**: Framework for building React applications.
-   **[node-appwrite](https://github.com/appwrite/sdk-for-node)**: Appwrite SDK for interacting with the Appwrite backend.
-   **[react](https://reactjs.org/)**: React library for building user interfaces.
-   **[react-dom](https://reactjs.org/docs/react-dom.html)**: React DOM library for rendering components.
-   **[react-icons](https://react-icons.github.io/react-icons/)**: Icon library for React.
-   **[react-toastify](https://fkhadra.github.io/react-toastify/)**: Library for displaying toast notifications.

### Development Dependencies

-   **[@tailwindcss/postcss](https://tailwindcss.com/docs/installation)**: Tailwind CSS PostCSS plugin.
-   **[tailwindcss](https://tailwindcss.com/)**: Utility-first CSS framework.

To install all dependencies, run:

```bash
    npm install luxon
    npm install next
    npm install node-appwrite
    npm install react
    npm install react-dom
    npm install react-icons
    npm install react-toastify
    npm install @tailwindcss/postcss
    npm install tailwindcss
    ```

## Project Structure

````

bookit-appwrite/
├── app/ # Next.js app directory
│ ├── actions/ # Server-side actions (e.g., getMyRooms, createRoom)
│ ├── rooms/ # Room-related pages
│ └── page.js # Main entry point
├── components/ # Reusable React components (e.g., RoomCard)
├── public/ # Static assets (e.g., images)
├── styles/ # Global styles
├── .env # Environment variables (not included in the repo)
├── README.md # Project documentation
└── package.json # Project dependencies and scripts

````

## Environment Variables

The following environment variables are required for the project to work:

```env
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
NEXT_PUBLIC_APPWRITE_DATABASE=your_database_id
NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS=your_collection_id
NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS=your_bucket_id
````

Make sure to replace the placeholders with the actual values from your Appwrite console.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
-   [Appwrite Documentation](https://appwrite.io/docs) - Learn about Appwrite's features and API.
-   [Vercel Documentation](https://vercel.com/docs) - Learn how to deploy your Next.js app.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
