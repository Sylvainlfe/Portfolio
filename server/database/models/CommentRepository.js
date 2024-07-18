const AbstractRepository = require("./AbstractRepository");

class ContentRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "comment" });
  }

  // The C of CRUD - Create operation

  async create(comment) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (description, user_id, project_id) values (?, ?, ?)`,
      [comment.text, comment.userId, comment.projectId]
    );

    // Return the ID of the newly inserted item
    return {id : result.insertId, ...comment};
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  async update(comment) {
    const query = `UPDATE ${this.table} SET description = ? WHERE id = ?`;
    const values = [comment.text, comment.id];
    const [result] = await this.database.query(query, values);
    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  async delete(id) {
    await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );

  }
}

module.exports = ContentRepository;
