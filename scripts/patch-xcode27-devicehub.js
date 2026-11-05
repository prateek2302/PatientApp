const fs = require('fs');
const path = require('path');

const file = path.join(
  process.cwd(),
  'node_modules/@react-native-community/cli-platform-ios/node_modules/@react-native-community/cli-platform-apple/build/commands/runCommand/runOnSimulator.js'
);

if (!fs.existsSync(file)) {
  console.error('ERROR: Nested React Native CLI file not found:', file);
  process.exit(1);
}

let source = fs.readFileSync(file, 'utf8');

const oldCode = [
  "  _child_process().default.execFileSync('open', [`${activeDeveloperDir}/Applications/Simulator.app`, '--args', '-CurrentDeviceUDID', simulator.udid]);",
  "  if (simulator.state !== 'Booted') {",
  "    bootSimulator(simulator);",
  "  }"
].join('\n');

const newCode = [
  "  const simulatorApp = `${activeDeveloperDir}/Applications/Simulator.app`;",
  "  if (require('fs').existsSync(simulatorApp)) {",
  "    _child_process().default.execFileSync('open', [simulatorApp, '--args', '-CurrentDeviceUDID', simulator.udid]);",
  "    if (simulator.state !== 'Booted') {",
  "      bootSimulator(simulator);",
  "    }",
  "  } else {",
  "    if (simulator.state !== 'Booted') {",
  "      bootSimulator(simulator);",
  "    }",
  "    _child_process().default.execFileSync('open', [`devices://device/open?id=${simulator.udid}`]);",
  "  }"
].join('\n');

if (source.includes(newCode)) {
  console.log('Device Hub patch is already applied.');
  process.exit(0);
}

if (!source.includes(oldCode)) {
  console.error('ERROR: Original CLI code not found. No changes made.');
  process.exit(1);
}

source = source.replace(oldCode, newCode);
fs.writeFileSync(file, source);

console.log('SUCCESS: Xcode 27 Device Hub patch applied.');
