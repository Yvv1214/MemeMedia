import os
from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(120), unique=True, nullable=False)
    last_name = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    phone = db.Column(db.String(10), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=True)
    user_comment = db.relationship("Comments", backref = 'user')
    user_following = db.relationship('Following', backref = 'user')
    user_followers = db.relationship('Followers', backref = 'user')
    user_blocking = db.relationship('Blocked', backref = 'user')
    user_posts = db.relationship('Posts', backref = 'user')

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "password" : self.password,
            "email": self.email,
            "phone": self.phone
            # do not serialize the password, its a security breach
        }
    

class Comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comment =db.Column(db.String(300), unique=False, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))


class Following(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    your_following = db.Column(db.Boolean(), unique=False, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))



class Followers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    your_followers = db.Column(db.Boolean(), unique=False, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))


class Blocked(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    blocked_user = db.Column(db.Boolean(), unique=False, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))


class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    media = db.Column(db.Boolean(), unique=False, nullable=True)
    description = db.Column(db.String(300), nullable=True)
    hashtag = db.Column(db.String(200), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))




    