# Navigation

Styleguide uses your documentation folder structure to determine the navigation structure.
The navigation consists of two parts, the directory or group, and the link itself.

## Ordering

Ordering is defined by its order in the filesystem (alphabetical) with a few key differences.
Firstly, Styleguide will search for an `introduction.md` or `Introduction.js` to serve as the root.

Secondly, Styleguide treats the following directory names as special:

- `overview`
- `principles`
- `getting-started`
- `branding`
- `basics`
- `advanced`
- `components`
- `api`
- `resources`

These will be ordered, with all other groups following after.

## Root Level Files

You can also include files in the root of your documentation directory.
These will have their own special namespace and get appended to the nav.

## Data Structure

```!jsx
<Debug>{props.styleguide.nav}</Debug>
```
