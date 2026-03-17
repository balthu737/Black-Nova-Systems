from app import app

api = app
if __name__ == "__main__":
    api.run(debug=True, host="0.0.0.0", port=5002)