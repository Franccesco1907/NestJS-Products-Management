# Products management API

NestJS/TypeORM service with PostgreSQL, Redis/Keyv caching and JWT authentication. Product data is imported hourly from the Contentful URL configured by `API_CONTENTFUL`.

1. Copy `.env.example` to `.env`; replace the Contentful space/token placeholders, JWT secret and database/cache credentials. `CACHE_PASSWORD` must match `redis.conf`. Keep the real Contentful token out of version control.
2. Run `docker compose -f docker-compose.local.yml up --build`.
3. Open `http://localhost:3000/docs`. The API prefix is `/api/v1`.

Public routes: `POST /auth/register`, `POST /auth/login` and `GET /products` (filters/pagination).
JWT-protected routes: `DELETE /products/:sku`, `GET /products/report/deleted-percentage` and `GET /products/report/non-deleted-percentage`.
Feature boundaries are under `src/modules/<feature>/{domain,application,infrastructure}`; Swagger/DTOs define accepted fields.

For local Node development, use `npm ci`, set `DATABASE_HOST` and `CACHE_HOST` to reachable hosts (usually `localhost`), then run `npm run start:dev`.
Checks: `npm test -- --runInBand`, `npm run test:cov` and `npm run build`. No CI workflow is checked in; coverage claims must come from the current run.

Production image configuration: `docker-compose.prod.yml`. Replace sample secrets and restrict CORS origins before use; the sample does not implement rate limiting or a granular permission system.
[MIT license](LICENSE).
