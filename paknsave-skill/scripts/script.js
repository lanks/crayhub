import { SkillEngine } from "@agentwebskills/web-skills"

async function init() {
  const response = await fetch("../SKILL.md")
  const markdown = await response.text()

  const engine = SkillEngine.fromMarkdown(markdown)

  window.webSkill = {
    execute: (name, args) => engine.execute(name, args),
  }
}

init()