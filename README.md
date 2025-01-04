
# ChatBot-AI

ChatBot-AI is an advanced chatbot application built using **React JS** for the front end and powered by the **Gemini API** as the backend. The chatbot leverages `axios` to handle API calls efficiently. 

**Note**: The Gemini API has a rate limit of **15 calls per minute**.

---

## Steps to Run Locally

To set up and run this project on your local machine, follow these steps:

### 1. Clone the Repository
Clone this repository to your local system using the following command:
```bash
git clone https://github.com/<username>/ChatBot-AI.git
```

### 2. Navigate to the Project Directory
Go to the project folder:
```bash
cd ChatBot-AI
```

### 3. Install Dependencies
Install the required npm packages:
```bash
npm install
```

### 4. Install Axios
Since `axios` is used for making API calls, ensure it's installed:
```bash
npm install axios
```

### 5. Run the Development Server
Start the development server:
```bash
npm run dev
```

This will launch the project on your local development server (e.g., `http://localhost:3000`).

---

## Key Features
- **Front-End Framework**: React JS
- **API Integration**: Uses Gemini API as the backend.
- **API Call Limit**: Rate-limited to 15 API calls per minute.
- **HTTP Client**: Axios is used to handle backend calls seamlessly.

---

## Additional Notes
- Ensure you have **Node.js** and **npm** installed on your system before running the project.
- For production use, consider handling the rate limit of the Gemini API by implementing queueing or throttling mechanisms.

---

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
