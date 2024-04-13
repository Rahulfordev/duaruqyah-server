# duaruqyah API

Dua API is a simple RESTful API built with Express.js and SQLite3, providing endpoints to fetch categories, subcategories, and duas (prayers) data.

## Technologies Used

- express
- SQLite3

## Features

- **Categories Endpoint**: Fetch all categories.
- **Subcategories Endpoint**: Fetch all subcategories and filter by category ID.
- **Duas Endpoint**: Fetch all duas and filter by category ID or individual dua ID.
- **SQLite3 Database**: Data is stored in a SQLite3 database for easy access.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Rahulfordev/duaruqyah-server.git
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```
   PORT=5000
   ```

## Usage

1. Start the server:

2. Access the API endpoints in your web browser or API client at `http://localhost:5000`.

## API Endpoints

- `GET /api/categories`: Retrieve all categories.
- `GET /api/subcategories`: Retrieve all subcategories.
- `GET /api/subcategories/:id`: Retrieve a single subcategory by ID.
- `GET /api/subcategories/cat_id/:id`: Retrieve all subcategories by category ID.
- `GET /api/duas`: Retrieve all duas.
- `GET /api/duas/:id`: Retrieve a single dua by ID.
- `GET /api/duas/cat_id/:id`: Retrieve all duas by category ID.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
