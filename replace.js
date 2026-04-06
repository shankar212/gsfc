const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, 'components'),
  path.join(__dirname, 'app')
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const initialContent = content;

  // We want to avoid replacing something that's already prefixed with 'dark:'
  // So a naive regex is: /(?<!dark:)text-white/g
  // We'll use lookbehinds.

  const rules = [
    { regex: /(?<![:a-zA-Z0-9-])text-white\/(\d+)(?![\w-])/g, rep: "text-black/$1 dark:text-white/$1" },
    { regex: /(?<![:a-zA-Z0-9-])text-white(?![\w/-])/g, rep: "text-black dark:text-white" },
    { regex: /(?<![:a-zA-Z0-9-])border-white\/(\d+)(?![\w-])/g, rep: "border-black/10 dark:border-white/$1" },
    { regex: /(?<![:a-zA-Z0-9-])border-white(?![\w/-])/g, rep: "border-black/20 dark:border-white" },
    { regex: /(?<![:a-zA-Z0-9-])bg-white\/(\d+)(?![\w-])/g, rep: "bg-black/5 dark:bg-white/$1" },
    { regex: /(?<![:a-zA-Z0-9-])bg-black\/(\d+)(?![\w-])/g, rep: "bg-white/60 dark:bg-black/$1" },
    { regex: /(?<![:a-zA-Z0-9-])bg-black(?![\w/-])/g, rep: "bg-mist dark:bg-black" },
    { regex: /(?<![:a-zA-Z0-9-])shadow-glow(?![\w/-])/g, rep: "shadow-sm dark:shadow-glow" },
    { regex: /(?<![:a-zA-Z0-9-])shadow-glass(?![\w/-])/g, rep: "shadow-md dark:shadow-glass" },
    { regex: /(?<![:a-zA-Z0-9-])bg-hero-overlay(?![\w/-])/g, rep: "bg-white/50 dark:bg-hero-overlay" },
    { regex: /(?<![:a-zA-Z0-9-])bg-background(?![\w/-])/g, rep: "bg-mist dark:bg-background" },
  ];

  for (const rule of rules) {
    content = content.replace(rule.regex, rule.rep);
  }

  if (content !== initialContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      walk(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.js') || filePath.endsWith('.ts')) {
      processFile(filePath);
    }
  }
}

for (const dir of dirs) {
  if (fs.existsSync(dir)) {
    walk(dir);
  }
}
