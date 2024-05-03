# Summarius

Welcome to Summarius, AI Article Summarizer Website Application. Summarius is a web application built with React and Tailwind CSS, using RapidAPI's Article Extractor and Summarizer API, which extracts news/article body from a URL and uses GPT to summarize the article content. Useful for text mining purposes.

## Features

- **Modern User Interface**: Summarius boasts a sleek and contemporary interface, ensuring a user-friendly experience that's both intuitive and visually appealing.

- **AI-powered Summary Generation**: Users can simply input the URL of a lengthy article, and Summarius leverages AI technology to generate a concise summary of the article's content, making information digestion effortless.

- **History Saving with Local Storage**: Summarius includes a convenient history feature, allowing users to save their summaries locally. This feature offers a seamless way to revisit and manage their reading history, providing enhanced convenience and organization.

- **Copy to Clipboard Functionality**: With Summarius, sharing or storing summarized content is effortless. The application provides a built-in "Copy to Clipboard" functionality, empowering users to easily share or save the summarized content with just a click.

- **Advanced RTK Query API Requests**: Summarius leverages the advanced capabilities of Redux Toolkit (RTK) Query for making API requests. These requests are intelligently fired based on specific criteria, optimizing data fetching and management for a smoother user experience.

## Technologies Used

- **Frontend:** React, Tailwind CSS, Redux Toolkit, Rapid API

## Demo

[View Demo](https://summarius.onrender.com)

## Installation

To run Summarius locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/MartinTomic16/Summarius.git
    ```

2. Install dependencies:

    ```bash
    cd Summarius
    npm install
    ```
3. [Sign up for Rapid API's Article Extractor and Summarizer key](https://rapidapi.com/restyler/api/article-extractor-and-summarizer)

4. Create .env file and put your key as value:

    ```bash
   VITE_RAPID_API_KEY="YOUR_KEY_VALUE_HERE"
    ```
5. Start the development server:

    ```bash
    npm run dev
    ```
6. Open your browser and go to `http://localhost:5173` to view Summarius.

## Contact

For any inquiries or feedback, feel free to reach out to [martin.tomic16@gmail.com](mailto:martin.tomic16@gmail.com).

---

*This project is part of my portfolio. For more projects, visit [mat16.onrender.com](https://mat16.onrender.com).*
