import re

with open("src/app/layout.tsx", "r") as f:
    content = f.read()

# Change string template to string concatenation to avoid syntax error in Render build
search = """            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              } catch (_) {}
            `,"""

replace = """            __html: "try { if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) { document.documentElement.setAttribute('data-theme', 'dark'); } else { document.documentElement.setAttribute('data-theme', 'light'); } } catch (_) {}", """

content = content.replace(search, replace)

with open("src/app/layout.tsx", "w") as f:
    f.write(content)
