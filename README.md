# NestJS Products Management

## Project Description

**NestJS Products Management** is a robust and scalable backend application developed with **NestJS** that implements a complete product management system following **Hexagonal Architecture (Clean Architecture)** principles. The system includes user management, authentication, role-based authorization, and a complete product administration module with advanced features.

## Architecture and Technologies

This project is built using modern technologies and best practices:

- **Framework**: NestJS with TypeScript
- **Architecture**: Hexagonal (Clean Architecture) with clear layer separation
- **Database**: PostgreSQL with TypeORM
- **Cache**: Redis for performance optimization
- **Authentication**: JWT with Passport
- **Documentation**: Swagger/OpenAPI
- **Testing**: Jest with complete coverage
- **Containerization**: Docker and Docker Compose

## Main Features

### 🛡️ Authentication and Authorization System
- User registration and login
- Secure JWT authentication
- Granular role and permission system
- Custom authorization middleware

### 👥 User Management
- Role system (Admin, User, Manager, etc.)
- Password validation and encryption

### 📦 Advanced Product Management
- Advanced search and filtering
- Custom business validations


### 🚀 Advanced Features

#### Hexagonal Architecture
- **Domain**: Pure entities and business rules
- **Application**: Use cases and orchestration
- **Infrastructure**: Controllers, repositories and external services

#### Optimization and Performance
- **Intelligent caching** with Redis for frequent queries
- **Lazy loading** and **eager loading** optimized with TypeORM
- **Efficient pagination** for large datasets

#### Monitoring and Observability
- **Structured logging** with custom interceptors
- **Health checks** to verify system status
- **Error tracking** and centralized exception handling

#### Security
- **Input validation** with class-validator
- **Automatic data sanitization**
- **Rate limiting** to prevent abuse
- **CORS** configured for security

## API Endpoints

### Authentication
```
POST /api/v1/auth/register    # User registration
POST /api/v1/auth/login       # User login
```

### Products
```
GET    /api/v1/products       # List products (filters and pagination)
GET    /api/v1/products/report/non-deleted-percentage
GET    /api/v1/products/report/deleted-percentage
DELETE /api/v1/products/:sku   # Delete product
```

## Installation and Configuration

### Prerequisites

- **Node.js** (v18 or higher)
- **Docker** and **Docker Compose**
- **Git**

### Environment Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd NestJS-Products-Management
   ```

2. **Configure environment variables**:
   ```bash
   cp .env.example .env
   ```

   Edit the `.env` file with your configurations:
   ```env
   # Database
   DATABASE_HOST=postgres
   DATABASE_PORT=5432
   DATABASE_NAME=products_db
   DATABASE_USERNAME=admin
   DATABASE_PASSWORD=password123

   # Redis
   REDIS_HOST=redis
   REDIS_PORT=6379

   # JWT
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRES_IN=24h

   # App
   PORT=3000
   NODE_ENV=development
   ```

## Project Execution

### Local Development

1. **Run with Docker Compose**:
   ```bash
   docker-compose -f docker-compose.local.yml up -d --build
   ```

2. **Access the application**:
   - **API**: `http://localhost:3000/api/v1`
   - **Swagger Documentation**: `http://localhost:3000/docs`

### Production

```bash
docker-compose -f docker-compose.prod.yml up -d --build
```

### Development without Docker

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the application**:
   ```bash
   npm run start:dev
   ```


## Testing

### Run Tests

```bash
# Unit tests
npm run test

# Tests in watch mode
npm run test:watch

# Tests with coverage
npm run test:cov

# Debug tests
npm run test:debug
```

### Test Coverage
The project maintains test coverage above 30% including:
- Unit tests for all use cases
- Repository tests with in-memory database
- Mocks and stubs for external dependencies

## Project Structure

```
src/
├── app.module.ts                    # Main module
├── main.ts                         # Entry point
├── common/                         # Shared code
│   ├── constants/                  # Global constants
│   ├── decorators/                 # Custom decorators
│   ├── dto/                        # Common response DTOs
│   ├── filters/                    # Exception filters
│   ├── guards/                     # Authorization guards
│   ├── interceptors/               # Global interceptors
│   └── utils/                      # Utilities
├── config/                         # Configuration
│   └── environment/                # Environment variables
├── database/                       # Database configuration
│   ├── cache/                      # Redis configuration
│   ├── migrations/                 # TypeORM migrations
│   └── orm/                        # ORM configuration
└── modules/                        # Business modules
    ├── auth/                       # Authentication and authorization
    │   ├── application/            # Use cases
    │   ├── domain/                 # Entities and business rules
    │   └── infrastructure/         # Controllers, DTOs, services
    ├── users/                      # User management
    └── products/                   # Product management
```

## Scalability and Performance

#### Monitoring and Metrics
- **Health checks**: System status verification

## Deployment

### Containerization

The project includes multiple Docker configurations:

#### Development
```bash
# Use docker-compose for local development
docker-compose -f docker-compose.local.yml up -d
```

#### Production
```bash
# Use docker-compose optimized for production
docker-compose -f docker-compose.prod.yml up -d
```

### CI/CD Pipeline

Recommended configuration for CI/CD pipeline:

```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '22'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm run test:cov
      - name: Run linting
        run: npm run lint
```

### Production Environment Variables

```env
# Production
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://user:pass@host:5432/dbname
REDIS_URL=redis://redis-host:6379
JWT_SECRET=your-production-secret
LOG_LEVEL=info
```

## Security

### Implemented Best Practices

#### Authentication and Authorization
- **JWT tokens** with configurable expiration
- **Custom guards** for protected routes

#### Validation and Sanitization
- **Class-validator** for DTO validation
- **Automatic data transformation**
- **Whitelist** to filter unwanted properties
- **Strict type validation** with TypeScript

#### Vulnerability Protection
- **CORS** properly configured
- **Automatic input sanitization**

## Contributing

### Contributing Guidelines

1. **Fork** the repository
2. Create a **feature branch** (`git checkout -b feature/new-feature`)
3. **Descriptive commits** following conventional commits
4. **Tests** for new features
5. **Pull request** with detailed description

### Code Standards

- **ESLint** for linting
- **Prettier** for formatting
- **Conventional Commits** for messages
- **Unit tests** mandatory for new features

## License

This project is under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Author

**Franccesco Michael Jaimes Agreda**
- GitHub: [@Franccesco1907](https://github.com/Franccesco1907)
- LinkedIn: [Franccesco Michael Jaimes Agreda](https://www.linkedin.com/in/franccesco-michael-jaimes-agreda-7a00511a8/)
- Email: franccescojaimesagreda@gmail.com

---

## Acknowledgments

Thank you for using **NestJS Products Management**. If you have any questions or suggestions, feel free to open an issue or contact me directly.

**⭐ If you find this project useful, consider giving it a star on GitHub ⭐**