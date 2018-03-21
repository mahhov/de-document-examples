# Overview

Automatically update markdown documentation with examples.

# Syntax

`!!example[a b c a443/ awer.]`

# Examples

## Double

!example[doubler.js whatIsThis]

### Given

let's say we have an array such as:

!example[doubler.js given]

### When we do a map

let's say we do a map

!example[doubler.js double]

### Then we get

!example[doubler.js doubleThen]

## Less than 3

!example[lessThan3.js]

# Injectable, Reusable, & Paramterized Markdowns

## Example 1

!example[templateChild.md process1.js]

## Ecample 2, reusing same template

!example[templateChild.md process2.js]
