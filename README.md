# Unexpected NaN with + Operator in JavaScript

This repository demonstrates a common yet easily overlooked bug in JavaScript related to the behavior of the `+` operator when used with `null` and `undefined` values.  The issue stems from JavaScript's loose typing system.

## The Bug

The core problem lies in the way JavaScript handles `null` and `undefined` in arithmetic operations.  Adding `null` often behaves like adding 0, whereas `undefined` leads to `NaN` (Not a Number).

This inconsistency can lead to unexpected results, especially when dealing with functions receiving arguments that might not always be properly initialized.  The `bug.js` file illustrates this unexpected behavior.

## The Solution

The solution involves explicitly checking for `null` or `undefined` values before performing addition. The provided `bugSolution.js` file shows the correction, offering improved robustness.