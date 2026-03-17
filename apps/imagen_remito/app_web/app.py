from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    data = {
        "titulo": "Remitos - Hurin"
    }
    try:
        return render_template("index.html", data = data), 200
    except FileNotFoundError as e:
        print(e)
        return jsonify({"message": "no encontrado"}), 404

@app.route("/html/manual.html")
def manual():
    data = {
        "titulo": "Carga Manual",
        "h2": "Carga Manual",
        "h3": "Manual"
    }
    try:
        return render_template("/html/manual.html", data = data), 200
    except FileNotFoundError as e:
        print(e)
        return jsonify({"message": "no encontrado"}), 404

@app.route("/html/automatico.html")
def automatico():
    data = {
        "titulo": "Carga Automatico",
        "h2": "Carga Automatica",
        "h3": "Automatico",
        "estado": "⚠️ Estamos trabajando en esta pagina, por favor vuelva en un tiempo"
    }
    try:
        return render_template("/html/automatico.html", data = data), 200
    except FileNotFoundError as e:
        print(e)
        return jsonify({"message": "no encontrado"}), 404

@app.route("/html/buscar.html")
def buscar():
    data = {
        "titulo": "Buscar",
        "h2": "Buscar Remito",
        "h3": "Buscar",
        "estado": "⚠️ Estamos trabajando en esta pagina, por favor vuelva en un tiempo"
    }
    try:
        return render_template("/html/buscar.html", data = data), 200
    except FileNotFoundError as e:
        print(e)
        return jsonify({"message": "no encontrado"}), 404

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=5000)