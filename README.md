# Code structure following for this project
rms-new/
|-- src/
|   |-- controllers/
|   |   |-- UseController.ts
|   |-- models/
|   |   |-- User.ts
|   |-- services/
|   |   |-- UserService.ts
|   |-- routes/
|   |   |-- userRoutes.ts
|   |-- config/
|   |   |-- database.ts
|   |   |-- appConfig.ts
|   |-- auth/
|   |   |-- login.ts
|   |-- app.ts
|   |-- server.ts
|
|-- dist/
|-- node_modules/
|-- tsconfig.json
|-- package.json

# Explanation for code structure repos
src/:         Contains the source code of your application.
controllers/: Handles HTTP requests, interacts with services, and sends the response back.
models/:      Defines your data structures using TypeScript classes/interfaces.
services/:    Contains the business logic. Handles interaction with the database through models.
routes/:      Defines the API routes and links them to the controllers.
config/:      Stores configuration files, such as database connection details or app configuration.
auth/:        store authentication required for login to application
app.ts:       Entry point for your application.
server.ts:    Sets up the Express server and connects routes.
dist/:        The output folder where TypeScript files are compiled to JavaScript.
node_modules/:Contains project dependencies.
tsconfig.json: TypeScript configuration file.
package.json: Node.js package file with project metadata and dependencies.

# Coding standard needs to follow
# TypeScript Coding Standards:
File Naming:
Use camelCase for filenames.
Use PascalCase for class names.
Use camelCase for function and variable names.
Indentation and Formatting:
Use 2 or 4 spaces for indentation (choose one and be consistent).
Configure your editor to automatically format the code on save.
Use semicolons at the end of statements.
Type Annotations:
Explicitly define types whenever possible.
Avoid using `any` type unless absolutely necessary.
Imports:
Use named imports over default imports.
Group imports based on their origin (external libraries, internal modules, etc.).
Avoid using wildcard imports (import * as moduleName from 'module').
Function Parameters and Return Types:
Explicitly define parameter types and return types for functions.
Interfaces and Types:
Use interfaces for objects and types for union types, primitive types, and aliases.
Classes:
Use PascalCase for class names.
Explicitly define public and private access modifiers for class members.
Avoid using public properties directly; prefer getter and setter methods.
Enums:
Use PascalCase for enum names.
Prefer string enums over number enums for better readability.
Comments:
Write clear and concise comments.
Avoid unnecessary comments; code should be self-explanatory.
 
# Node.js Coding Standards:
Middleware:
Use middleware for reusable code between routes.
Middleware functions should follow the (req, res, next) signature.
Error Handling:
Use try-catch blocks for synchronous code.
Use .catch() for handling promises.
Implement custom error classes when needed.
Async/Await:
Prefer async/await over callbacks for asynchronous operations.
Ensure error handling in async functions.
Environment Variables:
Use environment variables for configuration settings.
Consider using a package like dotenv for local development.
Express.js:
Organize routes logically.
Use the Express Router for modular route handling.
Security:
Sanitize user inputs to prevent injection attacks.
Use middleware for security-related tasks, such as setting HTTP headers.
Logging:
Implement logging for debugging and monitoring.
Use a logging library like Winston for advanced logging features.
Testing:
Write unit tests for critical parts of your application.
Consider using testing libraries like Jest or Mocha.
Project Structure:
Follow a modular project structure for scalability and maintainability.
Separate concerns into controllers, models, services, routes, and middleware.
Documentation:
Provide inline documentation for complex code blocks.
Maintain a README.md file with information about the project, setup, and usage.
