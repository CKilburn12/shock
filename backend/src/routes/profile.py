from flask import Blueprint
from pymongo import MongoClient

profile = Blueprint('profile', __name__)

# CONFIGURE MONGO DB PROPERLY -- SEE db_structure.md FOR DETAILS

mongocl = MongoClient()
user_db = mongocl.user_info

user_collection = user_db.users
swipes = user_db.swipes
matches = user_db.matches

user_id = 0

@profile.route("/name")
def name():
    return user_collection.find_one({"id": user_id})["name"]

@profile.route("/age")
def age():
	return user_collection.find_one({"id": user_id})["age"]

@profile.route("/bio")
def bio():
	return user_collection.find_one({"id": user_id})["bio"]

@profile.route("/swipe", methods=["POST"])
def swipe():
	swipee_id = request.form["swipee_id"]
	swipes.insert_one({"swiper_id" : user_id, "swipee_id": swipee_id})

	poss_match = swipes.find_one({"swiper_id" : swipee_id})
	if poss_match != None:
		order1 = {"user1_id": user_id, "user2_id": swipee_id}
		order2 = {"user1_id": swipee_id, "user2_id": user_id}
		matches.insert_many([order1, order2])
		return 0
	return 1

@profile.route("/matches")
def matches():
	rtrnList = [m for m in matches.find({"user1_id": user_id})]
	return rtrnList