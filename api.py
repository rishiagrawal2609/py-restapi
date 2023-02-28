from flask import Flask, jsonify, request
from flask_restful import Resource, Api
import flask_cors
from flask_httpauth import HTTPAuth
import requests
import logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s %(levelname)s: %(message)s', filename='apilog.log')
app = Flask(__name__)
api = Api(app)
auth = HTTPAuth(app)
cors = flask_cors.CORS(app, resources={r"/corestack/*": {"origins": "*"}})
data_dict = []

class login(Resource):
    def post(self):
        auth_vals = request.get_json()
        uname = auth_vals.get("uname")
        password = auth_vals.get("password")
        if uname == 'admin' and password == 'password':
            logging.info("Login success")
            return jsonify(data_dict)
        else:
            return {"Error":"Login Failure"},400
        
class corestack(Resource):
    def get(self):
        logging.info(msg="Data from DataBase requested")
        return jsonify(data_dict)

    def post(self):
        data = request.get_json()
        name = data.get("name")
        age = data.get("age")
        designation = data.get("designation")
        if(type(name) != str or type(age) != int or type(designation) != str):
            logging.info(msg="Invalid type for the input")
            return {"Error":"Invaid Error"}, 400
        else:
            data_dict.append(data)
            logging.info(msg=f"{data.get('name')} added to database")
            return jsonify({'data': data})


api.add_resource(corestack,'/corestack/employee')
api.add_resource(login,'/corestack/login')

app.run(debug=True)