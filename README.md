# Squarunblownett-jps

This is a Node.js module for quantum computing utilities. It provides functions for generating random quantum states and calculating entanglement entropy.

## Installation

You can install this module via npm: `npm install squarunblownett-jps`

## Usage

```javascript
const quantumUtils = require('quantum-utilities');

// Generate a random quantum state of dimension 2
const state = quantumUtils.generateRandomState(2);
console.log('Random quantum state:', state);

// Calculate the entanglement entropy of the state
const entropy = quantumUtils.calculateEntanglementEntropy(state);
console.log('Entanglement entropy:', entropy);
```
