# Use the official Cypress Docker image as base
FROM cypress/included:8.7.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json /app/

# Install npm dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . /app/

# Expose the port Cypress uses (although typically not necessary for API testing)
EXPOSE 8080

# Command to run your tests using Cypress (replace with your actual Cypress run command)
CMD ["npm", "run", "test:api"]
