# WeeklyChangelog

Paste `git log --oneline --shortstat` output → get a publish-ready weekly changelog in Markdown. Deterministic template ported from the CLI tool [commit-chronicle](https://github.com/qianbrady/commit-chronicle) — same conventional-commit grouping (feat/fix/docs/chore/refactor), same 中文 section labels, byte-comparable body.

**Live tool:** https://qianbrady.github.io/weeklychangelog/ · 纯离线单文件。

## Fidelity

Verified side-by-side against the Python template on a 6-commit fixture: identical Markdown body (footer timestamp intentionally omitted on web).

## License

MIT © 2025