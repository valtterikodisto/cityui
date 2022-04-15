## Development

```sh
# Opens storybook on localhost:6006
npm run storybook
```

Create a new component in components directory:

```sh
# Create a new component in components directory
cd src/components/
mkdir MyComponent && cd MyComponent

# MyComponent.tsx contains component code
# index.ts contains exports
touch MyComponent.tsx index.ts

# __stories__ contains MyComponent.stories.tsx
# __tests__ contains MyComponent.test.tsx
mkdir __stories__ __tests__
```

## Testing

```sh
npm test
```

## Publishing

Increment version in `package.json`. NPM will complain if you try to publish a version that's already been published.

```sh
npm login # If you haven't already
npm run rollup
npm publish
```
