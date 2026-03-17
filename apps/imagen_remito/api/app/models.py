from app.db import conexcion

class Request():
    def crear_tablas():
        conn = conexcion()
        cursor = conn.cursor()
        query = """
CREATE TABLE IF NOT EXISTS imagenes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_archivo VARCHAR(255) NOT NULL,
    ruta VARCHAR(255) NOT NULL
)
CREATE TABLE IF NOT EXISTS remitos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero_remito VARCHAR(100) NOT NULL,
    imagen_id INT,
    FOREIGN KEY (imagen_id) REFERENCES imagenes(id)
)
        """
        cursor.execute(query)
        conn.commit()
        cursor.close()
        conn.close()
    def cargar_datos(self, numero, filename, ruta):
        conn = conexcion()
        cursor = conn.cursor()
        query = f"""
INSERT INTO imagenes (nombre_archivo, ruta) 
VALUES (%s, %s)
        """
        cursor.execute(query, (filename, ruta))
        conn.commit()
        imagen_id = cursor.lastrowid
        query2 = f"""
INSERT INTO remitos (numero_remito, imagen_id)
VALUES (%s, %s)
        """
        cursor.execute(query2, (numero, imagen_id))
        conn.commit()
        cursor.close()
        conn.close()
    def consultas(nom, num):
        nombre = nom
        numero = num
        conn = conexcion()
        cursor = conn.cursor()
        query = f"""
SELECT * FROM remitos
WHERE nombre = %s AND numero = %s
        """
        cursor.execute(query, (nombre, numero))
        conn.commit()
        cursor.close()
        conn.close()