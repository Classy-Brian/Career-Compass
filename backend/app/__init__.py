from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from app.routes.routes import api


# Extension instances
db = SQLAlchemy()
migrate = Migrate()
bcrypt = Bcrypt()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    app.register_blueprint(api,url_prefic='/api')

    # Initialize extensions with the app
    db.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)

    return app