from flask import Flask, render_template, request, redirect, url_for, session
from pymongo import MongoClient
from dotenv import load_dotenv
import os
from functools import wraps


app = Flask(__name__, template_folder=r'C:\Users\Saar\PycharmProjects\group6')

# Load environment variables from .env file
load_dotenv()

# Connect to MongoDB Atlas
uri = os.getenv("DB_URI")

# Check if DB_URI environment variable is set
if uri is None:
    raise ValueError("DB_URI environment variable is not set.")

client = MongoClient(uri)

# Access the default database
db = client.get_default_database()
users_collection = db['users']  # Assuming you have a collection named 'users' for storing user data

# Set secret key for session
app.secret_key = 'your_secret_key'

# Define routes
@app.route('/')
def first_page():
    # Check if user is logged in
    if 'username' in session:
        user = users_collection.find_one({'username': session['username']})
        if user:
            welcome_message = f"Welcome to SoapVibe, {user['firstName']}!"
        else:
            welcome_message = "Welcome to SoapVibe"
        return render_template('FirstPage.html', welcome_message=welcome_message)
    else:
        return render_template('FirstPage.html')


@app.route('/signup', methods=['POST'])
def signup():
    if request.method == 'POST':
        # Retrieve form data
        firstName = request.form['firstName']
        lastName = request.form['lastName']
        username = request.form['username']
        password = request.form['password']

        # Check if the username already exists
        existing_user = users_collection.find_one({'username': username})
        if existing_user:
            return render_template('signup.html', error_message='Username already exists')

        # Store the user's data in the database
        users_collection.insert_one({'firstName': firstName, 'lastName': lastName, 'username': username, 'password': password})

        # Set a session variable to remember the user
        session['username'] = username

        # Redirect to the first page with a success message
        return redirect(url_for('first_page'))


@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        # Retrieve form data
        username = request.form['username']
        password = request.form['password']

        # Check if the username and password match a user in the database
        user = users_collection.find_one({'username': username, 'password': password})

        if user:
            # Set a session variable to remember the user
            session['username'] = username
            # Redirect to the first page with a welcome message
            return redirect(url_for('first_page'))
        else:
            # If username or password is incorrect, render the login page with an error message
            return render_template('login.html', error_message='Invalid username or password')

    # If the request method is not POST, redirect to the first page
    return redirect(url_for('first_page'))


@app.route('/logout')
def logout():
    # Clear the session and redirect to the first page
    session.pop('username', None)
    return redirect(url_for('first_page'))


# Pages
# About Us
from pages.aboutUs.aboutUs import aboutUs
app.register_blueprint(aboutUs)

# contactUs
from pages.contactUs.contactUs import contactUs
app.register_blueprint(contactUs)

# creatingSoaps
from pages.creatingSoaps.creatingSoaps import creatingSoaps
app.register_blueprint(creatingSoaps)

# firstPage
from pages.firstPage.firstPage import firstPage
app.register_blueprint(firstPage)

# likedSoaps
from pages.likedSoaps.likedSoaps import likedSoaps
app.register_blueprint(likedSoaps)

# login
from pages.login.login import login
app.register_blueprint(login)

# shoppingCart
from pages.shoppingCart.shoppingCart import shoppingCart
app.register_blueprint(shoppingCart)

# signup
from pages.signup.signup import signup
app.register_blueprint(signup)

# userDashboard
from pages.userDashboard.userDashboard import userDashboard
app.register_blueprint(userDashboard)

if __name__ == '__main__':
    app.run(debug=True)
