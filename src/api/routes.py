"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os 
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)


@api.route("/login", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity = email)
    return jsonify(access_token=access_token)

#this creates a token using jwt import  Create_access_token and jsonify it when email and password is submited to the db


@api.route('/signup', methods=['POST'])
def create_user():
    first_name = request.json.get('first_name')
    last_name = request.json.get('last_name') 
    email = request.json.get('email')
    password = request.json.get('password')
    phone = request.json.get('phone')
    is_active = request.json.get('is_active')
    new_user = User(first_name=first_name, last_name=last_name, email=email, password=password, phone=phone, is_active=is_active ) #left of = is whats on model and the right is whats in these ('') above it
    db.session.add(new_user)
    db.session.commit()
    return jsonify('new user created'), 200



# @api.route("/hello", methods=["GET"])
# @jwt_required   #<--- this makes it private
# def get_hello():
#     dictionary = {
#         "msg": "hello"
#     }
#     return jsonify(dictionary)


