# Cypress API Testing with Docker

## Prerequisites

1. **Visual Studio Code**
2. **Node.js**
3. **Docker Desktop** with authorized user access

## Steps to Run Cypress API Tests with Docker

### Step 1: Clone the Repository

Clone the repository from GitHub:

```bash
git clone https://github.com/restivespace/APIEndpointTestSuite
```

### Step 2: Navigate to the Project Directory

Navigate into the project directory:

```bash
cd <project-directory>
```
### Step 3: Run the project in terminal
```bash
npx cypress run
```

### Step 4: Build the Docker Image

Build the Docker image using Docker CLI:

```bash
docker build -t [preferred-image-name] .
```

Replace `[preferred-image-name]` with your preferred name for the Docker image.

### Step 5: Run the Docker Container

1. Open **Docker Desktop**.
2. Navigate to **Images**.
3. Locate your `[preferred-image-name]` image.
4. Click **Run** to start a container based on this image.

### Step 6: View Test Results

Once the Docker container starts, Cypress will execute your API tests inside the container. You can view the test results either in the terminal where Docker is running or check the generated HTML repot in cypress/reports.
