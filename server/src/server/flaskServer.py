import flask.json
from flask import Flask, request
from flask_cors import CORS
from budget.getMonth import get_month as GetMonth

app = Flask(__name__)
CORS(app)


@app.before_request
def log_request_info():
    app.logger.debug('Request Headers: %s', request.headers)
    app.logger.debug('Request Body: %s', request.get_data())


# @app.after_request
# def log_response_info(response):
#     app.logger.debug('Response Headers: %s', response.headers)
#     app.logger.debug('Response Body: %s', response.get_data())


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/api/test", methods=['GET', 'OPTIONS'])
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


@app.route("/api/getMonth", methods=['POST'])
def get_month():
    if request.is_json:
        # TODO: Validate JSON
        post_data = request.get_json()
    else:
        post_data = None

    response = flask.json.jsonify(GetMonth(post_data, mock=True))
    return response


def run():
    app.run(debug=False)
