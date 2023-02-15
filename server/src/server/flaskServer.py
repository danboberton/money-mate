import flask.json
from flask import Flask, request
from src.server.serverUtil import config_response
from src.budget.getMonth import get_month as GetMonth

app = Flask("budget-app")


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/api/test", methods=['GET'])
def test_api():
    test_obj = {
        "name": "test",
        "budgetedAmount": 100,
        "budgetSpent": 50
    }

    response = flask.json.jsonify(test_obj)
    config_response(response)
    return response


@app.route("/api/mongoInsert", methods=['POST'])
def mongo_insert():
    # TODO: pass Post object in to mongo database
    pass


@app.route("/api/mongoGet", methods=['GET'])
def mongo_get():
    # TODO: retrieve object from database
    pass


@app.route("/api/getMonth", methods=['POST'])
def get_month():
    if request.is_json:
        # TODO: Validate JSON
        post_data = request.get_json()
    else:
        post_data = None

    response = GetMonth(post_data, mock=True)
    response = flask.json.jsonify(response)
    # TODO: Validate JSON?
    config_response(response)
    return response


app.run()
