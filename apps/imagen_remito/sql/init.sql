CREATE DATABASE IF NOT EXISTS remitos_db;
USE remitos_db;

CREATE TABLE IF NOT EXISTS imagenes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_archivo VARCHAR(255) NOT NULL,
    ruta VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS remitos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero_remito VARCHAR(100) NOT NULL,
    imagen_id INT,
    FOREIGN KEY (imagen_id) REFERENCES imagenes(id)
);