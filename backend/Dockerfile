# Use the official Python 3.11 slim image as a base
FROM python:3.11.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file first to leverage Docker's build cache
COPY requirements.txt .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the backend application code into the container
COPY . .

# Expose the port that Flask will run on
EXPOSE 5000

# The command to start the Flask server
# --host=0.0.0.0 makes it accessible from outside the container
CMD ["flask", "run", "--host=0.0.0.0"]