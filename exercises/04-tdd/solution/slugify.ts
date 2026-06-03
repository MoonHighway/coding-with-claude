export function slugify(input: string): string {
  return input
    .normalize('NFD') // split accented chars into base + combining mark
    .replace(/[̀-ͯ]/g, '') // strip the combining marks (accents)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // non-alphanumerics → hyphen
    .replace(/^-+|-+$/g, ''); // trim leading/trailing hyphens
}
