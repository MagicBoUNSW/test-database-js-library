class Database {
  /* Receives the builder and assigns the values */
  constructor(builder) {
    this.databaseName = builder.databaseName;
    this.columnName = builder.columnName;
    this.columnType = builder.columnType;
  }

  /* Some Business logic and abstract/generic methods here */
}