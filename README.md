# Personal Blog with Astro & Contentful

This is a personal blog built for a friend using a modern, fast, and easy-to-manage tech stack. The goal was to create a beautiful, content-focused blog that she could easily update herself without needing to touch any code.

The design is inspired by clean, minimalist blog layouts that prioritize readability.

## ✨ Features

-   **Blazing Fast Performance:** Built with Astro for a static site that loads instantly.
-   **Headless CMS:** All content is managed through Contentful, allowing for easy updates.
-   **Styled with Tailwind CSS:** A utility-first CSS framework for rapid and custom UI development.
-   **Fully Responsive:** Looks great on all devices, from mobile phones to desktops.

## 🚀 Tech Stack

-   **Framework:** [Astro](https://astro.build/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Content:** [Contentful (Headless CMS)](https://www.contentful.com/)
-   **Deployment:** (Will be deployed on Vercel/Netlify)

## local-dev-setup How to Run Locally

To run this project on your own machine, you'll need to:

1.  Clone the repository.
2.  Install the dependencies: `npm install`
3.  Create a `.env` file in the root of the project.
4.  Add your own Contentful API keys to the `.env` file:
    ```
    CONTENTFUL_SPACE_ID="YOUR_SPACE_ID"
    CONTENTFUL_DELIVERY_TOKEN="YOUR_DELIVERY_TOKEN"
    ```
5.  Start the development server: `npm run dev`
