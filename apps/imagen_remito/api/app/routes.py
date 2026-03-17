from flask import Blueprint, jsonify, request
from werkzeug.utils import secure_filename
import os
import requests
from app.models import Request

api = Blueprint("api", __name__)
sql = Request()

@api.route("/", methods=["GET"])
def home():
    return jsonify({"message": "La API Funciona correctamente"})

@api.route("/manual/cargar_datos", methods=["POST"])
def remito_manual():
    try:
        numero = request.form.get("remito")
        file = request.files.get("imagen")
        UPLOAD_FOLDER = "guardados"
        if  not numero or not file:
            print("faltan datos")
            return jsonify({"error": "Faltan datos"}), 400
        if not os.path.exists(UPLOAD_FOLDER):
            os.makedirs(UPLOAD_FOLDER)
        filename = secure_filename(file.filename)
        ruta = os.path.join(UPLOAD_FOLDER, filename)
        file.save(ruta)
        sql.cargar_datos(numero, filename, ruta)
        return jsonify({"message": "Remito creado correctamente"}), 201
    except FileNotFoundError as e:
        print (e)
        return jsonify({"message": "algo salio mal"}), 400

@api.route("/automatico/cargar_datos", methods=["POST"])
def remito_automatico():
    ruta_docker = "http://ocr:5002/procesar"
    ruta_local = "http://localhost:5002/procesar"
    file = request.files.get("imagen")
    UPLOADS_FOLDER = "guardados"
    if not file:
        return jsonify({"error": "Faltan datos"}), 400
    if not os.path.exists(UPLOADS_FOLDER):
        os.makedirs(UPLOADS_FOLDER)
    filename = secure_filename(file.filename)
    ruta = os.path.join(UPLOADS_FOLDER, filename)
    file.save(ruta)
    try:
        with open(ruta, "rb") as img:
            response = requests.post(
                ruta_docker,
                files={"imagen": img},
                timeout=10
            )
    except requests.exceptions.RequestException as e:
        print(e)
        return jsonify({"error": "No se pudo conectar al OCR"}), 500
    if response.status_code != 200:
        return jsonify({"error": "OCR devolvió error"}), 500
    datos = response.json()
    print("RESPUESTA OCR:", datos)
    remito = datos.get("remito")
    print(remito)
    if not remito:
        return jsonify({"error": "OCR no detectó datos válidos"}), 400
    return jsonify({
        "message": "Remito creado correctamente",
        "remito": remito
        }), 201

@api.route("/descargar_datos", methods=["GET"])
def pedir_datos():
    numero = ""
    if not numero:
        return jsonify({"error": "Faltas datos"}), 400
    sql.consultas(numero)