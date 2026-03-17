from app.init import app

a = app()

if __name__ == "__main__":
    a.run(host="0.0.0.0", port=5001, debug=True)
