from flask import Flask

from src.routes.profile import profile


def initialize():
    app = Flask(__name__)
    app.register_blueprint(profile, url_prefix="/profile")

    # throw db init and all that

    return app

if __name__ == '__main__':
    initialize().run()