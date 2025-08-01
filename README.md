# MCP MySQL Server

Custom Model Context Protocol (MCP) server for MySQL.

## Usage

### Install dependencies
```bash
npm install
```

### Start server
```bash
MYSQL_HOST=localhost MYSQL_PORT=3306 MYSQL_USER=root MYSQL_PASSWORD=your_password MYSQL_DATABASE=your_database_name npm start
```

### Endpoints

- `GET /ping`  
  Cek koneksi ke database.

- `POST /query`  
  Kirim SQL untuk dieksekusi.  
  Body JSON:
  ```json
  {
    "sql": "SELECT * FROM users WHERE id = ?",
    "values": [1]
  }
  ```

## Konfigurasi

Gunakan environment variable untuk konfigurasi koneksi MySQL:
- `MYSQL_HOST`
- `MYSQL_PORT`
- `MYSQL_USER`
- `MYSQL_PASSWORD`
- `MYSQL_DATABASE`
