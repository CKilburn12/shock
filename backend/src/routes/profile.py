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

@profile.route("/grade")
def age():
	return user_collection.find_one({"id": user_id})["grade"]

@profile.route("/bio")
def bio():
	return user_collection.find_one({"id": user_id})["bio"]

@profile.route("/swipe", methods=["POST"])
def swipe():
	swipee_id = request.form["swipee_id"]
	swipe_dir = request.form["swipe_dir"] # 0 is left, 1 is right
	swipes.insert_one({"swiper_id" : user_id, "swipee_id": swipee_id * (-1 if swipe_dir == 0 else 1)})

	if swipe_dir == 1:
		poss_match = swipes.find_one({"swiper_id" : swipee_id})
		if poss_match != None and poss_match["swipee_id"] == user_id:
			order1 = {"user1_id": user_id, "user2_id": swipee_id}
			order2 = {"user1_id": swipee_id, "user2_id": user_id}
			matches.insert_many([order1, order2])
			return 0
	return 1

@profile.route("/matches")
def matches():
	rtrnList = [m for m in matches.find({"user1_id": user_id})]
	return rtrnList