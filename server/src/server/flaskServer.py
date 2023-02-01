import flask.json
from flask import Flask

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
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route("/api/mongoInsert", methods=['POST'])
def mongo_insert():
    # TODO: pass Post object in to mongo database
    pass


@app.route("/api/mongoGet", methods=['GET'])
def mongo_get():
    # TODO: retrieve object from database
    pass


app.run()
