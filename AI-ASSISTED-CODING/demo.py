# Function to calculate the area of a circle given its radius
def calculateCircleArea(radius):
    pi = 3.14159
    area = pi * (radius ** 2)
    return area

# Function to validate an email address using regex
import re

def validateEmail(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

# Function to fetch data from an API and log the response
import requests
import logging  

logging.basicConfig(level=logging.INFO)

def fetchData(url):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an error for HTTP errors
        logging.info("Data fetched successfully.")
        return response.json()
    except requests.RequestException as e:
        logging.error(f"Error fetching data: {e}")
        return {"error": str(e)}
    

