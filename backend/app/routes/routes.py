# app/routes.py
from flask import Blueprint, jsonify

api = Blueprint('api', __name__)

@api.route('/signup', methods=['GET','POST'])
def signup():
    text = "This is the backend API for the sign up page"
    return jsonify({"Data": text})



@api.route('/login', methods=['GET','POST'])
def login():
    text = "This is the backend API for the login page"
    return jsonify({"Data": text})
