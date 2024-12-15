# JavaScript Type Coercion Pitfall

This example demonstrates a common JavaScript pitfall involving type coercion.  The `+` operator exhibits different behavior depending on the operand types. When used with strings, it concatenates; when used with numbers, it adds.

The `bug.js` file showcases the issue, where the `foo` function produces unexpected results due to implicit type conversion. The `bugSolution.js` file provides a solution using explicit type checking or conversion.

This is a subtle but important bug to be aware of to avoid unexpected behavior and ensure robust code.