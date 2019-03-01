import fs from 'fs';
import { TestJsonSerializer, TestFileData } from './FileUtil';
describe('TestJsonSerializer', function() {
  const test = new TestJsonSerializer();
  beforeEach(function() {
    if (fs.existsSync(test.filePath())) fs.unlinkSync(test.filePath());
  });
  it('should create file', async function() {
    await test.serialize(new TestFileData());

    expect(fs.existsSync(test.filePath())).toBeTruthy();
  });
  it('should deserialize file', async function() {
    const testData = new TestFileData();
    testData.data = 'hi';
    await test.serialize(testData);
    const data = await test.deserialize();

    expect(data.result.data === 'hi').toBeTruthy();
  });
});
