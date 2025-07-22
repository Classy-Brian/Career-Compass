from flask import Flask
from config import Config

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # A simple test route to make sure everything is working
    @app.route('/api/test')
    def test_route():
        return {'message': 'Hello from the new structured app!'}
    
    # Regist blueprints (routes) here later

    return app