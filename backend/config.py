# backend/config.py

import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'a-hard-to-guess-string'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'postgresql://user:password@db:5432/careercompass_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False