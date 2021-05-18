import Database from "../models/Database";

class DatabaseBuilder {
  constructor(){ }

  /* Define all the steps needed to create a profile */

  setDatabaseName(dbame) {
    this.databaseName = dbame;
    return this;
  }

  setColumnName(colName) {
    this.columnName = colName;
    return this;
  }

  setColumnType(colType) {
    this.columnType = colType;
    return this;
  }

  /* Could also be called getProfile() */
  build() {
    return new Database(this);
  }
}

export default DatabaseBuilder