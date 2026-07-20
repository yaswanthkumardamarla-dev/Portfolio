// Type declarations for CSS imports, so the editor's TypeScript server
// accepts them even when it hasn't loaded Next.js's bundled types.

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.css";
