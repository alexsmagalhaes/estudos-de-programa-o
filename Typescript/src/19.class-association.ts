class Writer {
  private _tool: Tool | null = null;
  constructor(private _name: string) {}

  set tool(tool: Tool) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  write(): void {
    if (this._tool === null) {
      console.log("can't write...");
      return;
    }

    this._tool.write;
  }
}

abstract class Tool {
  constructor(private _name: string) {}

  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

class Pen extends Tool {
  write(): void {
    console.log("writing...");
  }
}

class writingMachine extends Tool {
  write(): void {
    console.log("writing...");
  }
}
