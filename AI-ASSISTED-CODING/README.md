# Express + SQLite + JWT Example

Local minimal REST API using Express, JWT authentication, and a local SQLite database.

Setup

1. Install dependencies:

```bash
npm install
```

2. (Optional) set a strong JWT secret:

```bash
export JWT_SECRET="your_secret_here"
```

On Windows (PowerShell):

```powershell
$env:JWT_SECRET = "your_secret_here"
```

Run

```bash
npm start
```

API

- `POST /api/auth/register` — body `{ "username": "u", "password": "p" }`
- `POST /api/auth/login` — body `{ "username": "u", "password": "p" }` returns `{ token }`
- `GET /api/protected` — send `Authorization: Bearer <token>` header

Notes

- DB file is `database.sqlite` in the project root.
- Change `JWT_SECRET` in environment for production.
