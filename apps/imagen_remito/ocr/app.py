from flask import Flask, request, jsonify
from ocr import extraer_datos


app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({"message": "Funcionando ocr"})

@app.route("/procesar", methods=["POST"])
def procesar():
    file = request.files.get("imagen")
    print("imagen obtenida")
    if not file:
        print("la imagen no tiene nada")
        return jsonify({"error": "No se envió imagen"}), 400
    try:
        datos = extraer_datos(file)
        print("extrayendo datos")
        return jsonify(datos), 200
    except Exception as e:
        print(e)
        return jsonify({"error": "Error procesando imagen"}), 500


