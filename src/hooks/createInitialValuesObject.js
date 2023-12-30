export default function createInitialValuesObject(keyMap) {
    return Object.fromEntries(Object.keys(keyMap).map((key) => [keyMap[key], '']));
}