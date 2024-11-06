module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'],
    testMatch: ['**/*.test.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    // 2 minutes timeout
    testTimeout: 1000 * 60 * 2,
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};