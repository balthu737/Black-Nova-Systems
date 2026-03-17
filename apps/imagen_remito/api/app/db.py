import mysql.connector
import os
from dotenv import load_dotenv

load_dotenv()

def conexcion():
    print("MYSQL_HOST:", os.getenv("MYSQL_HOST"))
    print("MYSQL_PORT:", os.getenv("MYSQL_PORT"))
    print("MYSQL_USER:", os.getenv("MYSQL_USER"))
    print("MYSQL_DB:", os.getenv("MYSQL_DB"))
    return mysql.connector.connect(
        host = os.getenv("MYSQL_HOST"),
        port = int(os.getenv("MYSQL_PORT")),
        user = os.getenv("MYSQL_USER"),
        password = os.getenv("MYSQL_PASSWORD"),
        database = os.getenv("MYSQL_DB")
    )
