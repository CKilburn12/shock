from flask import Blueprint

profile = Blueprint('profile', __name__)

@profile.route("/name")
def index():
    return "john smith"