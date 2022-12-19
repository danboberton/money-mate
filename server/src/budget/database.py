# Module Imports
import mariadb
import sys

# Connect to MariaDB Platform
try:
    conn = mariadb.connect(
        user="db_user",
        password="db_user_passwd",
        host="192.0.2.1",
        port=3306,
        database="employees"

    )
except mariadb.Error as e:
    print(f"Error connecting to MariaDB Platform: {e}")
    sys.exit(1)

# Get Cursor
cur = conn.cursor()

cur.execute(
    "SELECT first_name,last_name FROM employees WHERE first_name=?",
    (some_name,))

# Print Result-set
for (first_name, last_name) in cur:
    print(f"First Name: {first_name}, Last Name: {last_name}")