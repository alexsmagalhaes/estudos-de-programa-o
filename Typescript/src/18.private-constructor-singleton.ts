export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;

    Database.database = new Database(host, user, password);
    return this.database;
  }

  connect(): void {
    console.log(`Connected :${this.host}, ${this.user}, ${this.password}`);
  }
}

const db = Database.getDatabase("Host", "User", "Password");

const db1 = Database.getDatabase("Host", "User", "Password");

console.log(db === db1);
