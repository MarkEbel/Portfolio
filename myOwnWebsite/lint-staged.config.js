import { ESLint } from "eslint";

const removeIgnoredFiles = async (files) => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(
    files.map((file) => eslint.isPathIgnored(file)),
  );
  const filteredFiles = files
    .filter((_, i) => !isIgnored[i])
    .map((file) => `'${file}'`);
  return filteredFiles.join(" ");
};

export default {
  "*.{jsx,js,ts,tsx}": async (files) => {
    const filesToLint = await removeIgnoredFiles(files);
    return filesToLint
      ? [`eslint --cache --fix --max-warnings=0 ${filesToLint}`]
      : [];
  },
  "*.{js,jsx,ts,tsx,md,html,json,css,yml,yaml}": "prettier --write",
};
