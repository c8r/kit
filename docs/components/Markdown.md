# Markdown

```!jsx
<Box bg="orange" p={3}>
  <Text color="white">
    ⚠️ This should never be used with user created content
  </Text>
</Box>
```

Render [MDX][mdx] strings as React elements.

```.jsx
<Markdown>
  {`# Hello`}
</Markdown>
```

[mdx]: https://github.com/mdx-js/mdx
