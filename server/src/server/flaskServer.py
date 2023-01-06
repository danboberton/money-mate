import flask.json
from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/api/test", methods=['GET'])
def test_api():
    test_obj = {
        "test1": "test"
    }
    return flask.json.jsonify(test_obj)
