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
    return flask.json.jsonify(test_obj)


app.run()
