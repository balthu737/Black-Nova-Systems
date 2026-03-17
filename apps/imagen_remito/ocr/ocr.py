import pytesseract
import cv2
import numpy as np
import re


def extraer_datos(file):

    file_bytes = np.frombuffer(file.read(), np.uint8)
    image = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)

    if image is None:
        print("ERROR: No se pudo leer la imagen")
        return {"remito": None}

    image = cv2.resize(image, None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC)

    h, w, _ = image.shape

    top = image[0:int(h * 0.25), 0:w]

    gray = cv2.cvtColor(top, cv2.COLOR_BGR2GRAY)

    blur = cv2.GaussianBlur(gray, (5, 5), 0)

    thresh = cv2.adaptiveThreshold(
        blur,
        255,
        cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
        cv2.THRESH_BINARY,
        31,
        2
    )

    config = "--psm 6"

    texto = pytesseract.image_to_string(
        thresh,
        lang="spa",
        config=config
    )

    print("----------- TEXTO OCR -----------")
    print(texto)
    print("---------------------------------")

    numeros = re.findall(r"\d{10,15}", texto)

    print("NUMEROS DETECTADOS:", numeros)

    remito = None

    if numeros:
        remito = numeros[0]

    print("REMITO DETECTADO:", remito)

    return {
        "remito": remito
    }