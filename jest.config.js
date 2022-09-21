module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    testEnvironment: 'jsdom',
    "moduleNameMapper": {
        "\\.(scss|sass|css)$": "identity-obj-proxy"
    },
    modulePaths: ['<rootDir>/src/']
}
