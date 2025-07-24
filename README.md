# TDD Training

A comprehensive Test-Driven Development (TDD) training repository for learning and practicing TDD methodologies.

## Table of Contents

- [What is TDD?](#what-is-tdd)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [TDD Cycle](#tdd-cycle)
- [Exercise Structure](#exercise-structure)
- [Best Practices](#best-practices)
- [Running Exercises](#running-exercises)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Resources](#resources)
- [License](#license)

## What is TDD?

Test-Driven Development (TDD) is a software development approach where tests are written before the actual code. The process follows a simple cycle:

1. **Red**: Write a failing test that describes the desired functionality
2. **Green**: Write the minimum amount of code necessary to make the test pass
3. **Refactor**: Improve the code structure while keeping all tests passing

### Benefits of TDD
- **Better Design**: Forces you to think about the interface before implementation
- **Living Documentation**: Tests serve as executable specifications
- **Confidence**: Comprehensive test coverage provides safety for refactoring
- **Faster Debugging**: Failing tests quickly pinpoint issues

## Prerequisites

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Basic JavaScript/TypeScript knowledge**
- **Git** for version control
- A code editor (VS Code recommended)

## Setup

```bash
# Clone the repository
git clone https://github.com/InfantAjayVenus/tdd-training-codes.git
cd TDD-Training

# Install dependencies
npm install

# Verify setup by running all tests
npm test

```

## TDD Cycle

The TDD cycle, also known as **Red-Green-Refactor**, consists of:

### 1. Red Phase
- Write a test for the next bit of functionality you want to add
- Run the test and watch it fail (it should fail for the right reason)
- The failure confirms that the test is actually testing something

### 2. Green Phase
- Write the minimal amount of code to make the test pass
- Don't worry about perfect code - just make it work
- Run the test to ensure it passes

### 3. Refactor Phase
- Clean up the code while keeping all tests green
- Improve structure, remove duplication, enhance readability
- Run tests frequently to ensure nothing breaks

## Exercise Structure

Each exercise in this repository follows a consistent pattern:

```
exercises/
├── calculator/
│   ├── calculator.ts      # Implementation file (initially empty)
│   └── calculator.spec.ts # Test file with examples
├── string-utils/
│   ├── string-utils.ts
│   └── string-utils.spec.ts
└── ...
```

## Best Practices

### Writing Tests
- **Start simple**: Begin with the simplest test case
- **Be descriptive**: Use clear test names that explain the behavior
- **Test one thing**: Each test should verify a single behavior
- **Arrange-Act-Assert**: Structure tests with clear setup, execution, and verification

### Writing Code
- **Minimum viable code**: Write only enough code to make tests pass
- **Avoid gold-plating**: Don't add functionality that isn't tested
- **Refactor regularly**: Keep code clean and maintainable

### General Guidelines
- **Keep tests fast**: Tests should run quickly to encourage frequent execution
- **Keep tests independent**: Tests shouldn't depend on each other
- **Version control**: Commit after each successful Red-Green-Refactor cycle

## Running Exercises

### Run All Tests
```bash
npm test
```

## Examples

### Basic TDD Example: Adding Function

1. **Red**: Write a failing test
```javascript
test('should add two numbers', () => {
  expect(add(2, 3)).toBe(5);
});
```

2. **Green**: Make it pass
```javascript
function add(a, b) {
  return a + b;
}
```

3. **Refactor**: Improve if needed (in this case, it's already simple)

## Troubleshooting

### Common Issues

**Tests not running?**
- Ensure Node.js is installed: `node --version`
- Check if dependencies are installed: `npm list`
- Try reinstalling: `rm -rf node_modules package-lock.json && npm install`

**Tests failing unexpectedly?**
- Check test syntax and imports
- Verify file paths are correct
- Ensure you're in the correct directory

**Vitest not found?**
- Install globally: `npm install -g vitest`
- Or use npx: `npx vitest`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-exercise`
3. Follow TDD practices for any new code
4. Ensure all tests pass: `npm test`
5. Add documentation for new exercises
6. Submit a pull request with a clear description

### Adding New Exercises
- Create a new directory under `exercises/`
- Include a README with clear instructions
- Provide test files with examples
- Follow the existing naming conventions

## Resources

### Books
- [Test-Driven Development: By Example - Kent Beck](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530)
- [Growing Object-Oriented Software, Guided by Tests - Freeman & Pryce](https://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627)
- [Clean Code - Robert C. Martin](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)

### Online Resources
- [TDD Guide by Martin Fowler](https://martinfowler.com/bliki/TestDrivenDevelopment.html)
- [Uncle Bob's TDD Rules](http://butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd)

### Video Tutorials
- [TDD Kata Videos](https://kata-log.rocks/tdd)
- [Clean Coders TDD Series](https://cleancoders.com/)

## License

MIT License - see LICENSE file for details
