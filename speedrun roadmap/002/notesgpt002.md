DUSKY — OJT DEV BOOTCAMP
DAY 2 CHECKPOINT
────────────────────────────────────────

DAY 2 — MODERN JAVASCRIPT ✅

PART A — OBJECTS, COPYING, MUTATION

SOLID
✓ Object spread syntax
✓ Creating independent object copies
✓ Array spread syntax
✓ Object destructuring
✓ Array destructuring
✓ Rest syntax
✓ Understanding shallow copies
✓ Recognizing nested-object reference issues
✓ Creating updated copies instead of mutating originals

IMPROVING
△ Nested spread syntax
△ Remembering to reference nested objects correctly
  Example:
  ...user.settings
  instead of:
  ...settings

COMMON MISTAKES
- Small syntax slips like missing "="
- Referencing a nested property without its parent object
- Correct logic but occasional JavaScript syntax mistakes

KEY CONCEPT LOCKED IN
Spread with objects:
const copy = {
  ...original
};

Nested update:
const updated = {
  ...original,
  nested: {
    ...original.nested,
    value: newValue
  }
};

IMPORTANT REACT PREP
✓ Understands why React often creates new objects
  instead of directly mutating existing state


PART B — PRACTICAL MODERN JS

SOLID
✓ Default parameters
✓ Optional chaining ?.
✓ Ternary operator
✓ Object shorthand concept
✓ Reading compact JavaScript
✓ Reading React-like function parameters
✓ Understanding API/object fallback patterns

IMPROVING
△ Exact difference between || and ??
△ Destructured function parameters
△ Object shorthand syntax
△ Choosing the simplest expression instead of
  creating an unnecessary function

NEEDS REINFORCEMENT
△ || checks truthiness
△ ?? only falls back for null / undefined

Example:
0 || 10  → 10
0 ?? 10  → 0

△ Extra object properties do NOT cause errors when
  only some properties are destructured

Example:
const fn = ({ name, price }) => ...

fn({
  name: "Keyboard",
  price: 1500,
  stock: 5
});

stock is simply ignored.


DAY 2 CODE-READING LEVEL

✓ Can follow object transformations
✓ Can understand spread + override patterns
✓ Can recognize destructuring in React-style code
✓ Can interpret optional chaining and fallback logic
✓ Can understand ternary-driven UI values
✓ Can reason about nested references

OVERALL DAY 2 ASSESSMENT

Programming logic:         STRONG
Modern JS comprehension:   GOOD
Modern JS syntax:          IMPROVING
Object/reference model:    GOOD
React-readiness foundation: GOOD

MAIN PATTERN OBSERVED

Dusky usually understands WHAT the code should do,
but occasionally writes incorrect syntax or references
the wrong object/property path.

This means the main need is repetition and writing code,
not relearning programming fundamentals.

DAY 2 STATUS: COMPLETE ✅

NEXT:
DAY 3 — FUNCTIONS, SCOPE, CLOSURES,
HIGHER-ORDER FUNCTIONS, CALLBACKS, MODULES