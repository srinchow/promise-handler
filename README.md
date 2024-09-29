Go style error handling for promises


Usage example: 

```
const { to } = require("promise-handler-to");


async function test() {

    const [error, value] = await to(someFunctionThatReturnsAPromise());

    if (error) {
        console.log(result.error);
    }

    console.log(value);
}
```