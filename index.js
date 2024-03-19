const math = require('mathjs');
const quantum = require('quantum');

// Function to generate a random quantum state
function generateRandomState(dimension) {
    const components = math.random([dimension], 'complex');
    const normalized = math.divide(components, math.norm(components));
    return normalized;
}

// Function to calculate entanglement entropy
function calculateEntanglementEntropy(state) {
    const densityMatrix = quantum.outer(state, quantum.conj(state));
    const eigenvalues = math.eigs(densityMatrix).lambda.x;
    const entropy = math.sum(math.map(eigenvalues, val => -val * math.log(val)));
    return entropy;
}

module.exports = {
    generateRandomState,
    calculateEntanglementEntropy
};
