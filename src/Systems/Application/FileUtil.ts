import fs from 'fs';
export enum SerializerDir {
  Data = 'Data',
  Config = 'Config',
  ConfigTest = 'ConfigTest'
}
export class TestFileData {
  data = 'data';
}
export class SerializerResult<T> {
  success = false;
  result?: T | undefined;
}
export interface ISerializerService<T> {
  serialize(itemToSerialize: T): Promise<SerializerResult<string>>;
  deserialize(): Promise<SerializerResult<T>>;
  dataExists(): Promise<boolean>;
  write(b: T): Promise<{}>;
  read(): Promise<T>;
  exists(): Promise<boolean>;
}

export abstract class SerializerJsonFileService<T>
  implements ISerializerService<T> {
  constructor(public filename = '', public dir: SerializerDir) {}

  async serialize(itemToSerialize: T): Promise<SerializerResult<string>> {
    const result = new SerializerResult<string>();
    result.result = JSON.stringify(itemToSerialize);

    try {
      await this.write(itemToSerialize);
      result.success = true;
    } catch (error) {
      result.success = false;
    }

    return result;
  }
  filePath = () => {
    let dirname = __dirname;
    const dirs = dirname.split('\\');
    if (dirs.length > 1) {
      dirs[dirs.length - 1] = this.dir.toString();
      dirname = dirs.join('\\');
      if (!fs.existsSync(dirname)) fs.mkdirSync(dirname);
    }

    return `${dirname}\\${this.filename}`;
  };
  async deserialize(): Promise<SerializerResult<T>> {
    const result = new SerializerResult<T>();

    try {
      result.result = await this.read();
      result.success = true;
    } catch (error) {
      result.success = false;
    }
    return result;
  }
  async dataExists(): Promise<boolean> {
    return await this.exists();
  }
  // Writes given text to a file asynchronously.
  // Returns a Promise.
  write(text: T) {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.filePath(), JSON.stringify(text), err => {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  // Reads text from the file asynchronously and returns a Promise.
  read() {
    return new Promise<T>((resolve, reject) => {
      fs.readFile(this.filePath(), 'utf8', (err, data) => {
        if (err) reject(err);
        else resolve(JSON.parse(data) as T);
      });
    });
  }
  exists() {
    return new Promise<boolean>((resolve, reject) => {
      fs.exists(this.filePath(), data => {
        resolve(data);
      });
    });
  }
}

export class TestJsonSerializer extends SerializerJsonFileService<
  TestFileData
> {
  constructor() {
    super('TestFileData.json', SerializerDir.Data);
  }
}
