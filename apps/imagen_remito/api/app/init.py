from flask import Flask, send_from_directory
from flask_cors import CORS
from app.routes import api
from app.models import Request

def app():
    app = Flask(__name__)
    CORS(app, resources={r"/api/*": {"origins": "*"}})
    sql = Request()
    with app.app_context():
        sql.crear_tablas
    app.register_blueprint(api, url_prefix="/api")
    app.config["archivos_guardados"] = "guardados"
    @app.route("/uploads/<filename>")
    def guardar_archivo(filename):
        return send_from_directory(app.config["archivos_guardados"], filename)
    return app