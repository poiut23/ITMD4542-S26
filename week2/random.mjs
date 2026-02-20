// below is two ways to import the node:crypto module,
// when using node:crypto, it means importing the randomInt and randomUUID functions from the crypto module in Node.js
// the first way is dynamic import, the second way is static import

// const { randomInt, randomUUID } = await import("node:crypto");
import { randomInt, randomUUID } from "node:crypto";

console.log(randomInt(0, 10));
console.log(randomUUID());
