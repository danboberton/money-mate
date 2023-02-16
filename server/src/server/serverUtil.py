

# pass by reference
def config_response(response):
    # prevents CORS cross scripting errors
    response.headers.add("Access-Control-Allow-Origin", "*")
