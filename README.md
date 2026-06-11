# CodeForce

Django + React project.

## Docker support

Build and run the container:

```bash
docker compose build
docker compose up -d
```

Open the app at `http://localhost:8000`.

## Notes

- The Django app uses SQLite by default.
- The frontend static build is served from `main_front/build`.
- If you need to rebuild the frontend, run:

```bash
cd main_front
npm install
npm run build
```
