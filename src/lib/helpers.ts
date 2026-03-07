export enum SkillLevel {
  Beginner = 33,
  "Semi-Advanced" = 67,
  Advanced = 100,
}

export enum PrimarySkill {
  Cpp = "cpp",
  UnrealEngine = "unrealEngine",
  TypeScript = "typeScript",
  React = "react",
  NextJs = "nextJs",
  Java = "java",
  Python = "python",
  RestApi = "restApi",
}

export enum MinorSkill {
  C = "c",
  Css = "css",
  TailwindCss = "tailwindCss",
  Sql = "sql",
  Html = "html",
  Databases = "databases",
  OracleSql = "oracleSql",
  PostgresSql = "postgresSql",
  FastApi = "fastApi",
  Unity = "unity",
  Flutter = "flutter",
  Dart = "dart",
  Linux = "linux",
  UiUx = "uiUx",
  Design = "design",
  Algorithms = "algorithms",
  Testing = "testing",
  MsOffice = "msOffice",
  Math = "math",
  Physics = "physics",
  Econ = "econ",
}

export const PRIMARY_SKILLS = [
  { skill: PrimarySkill.Cpp, level: SkillLevel["Semi-Advanced"] },
  { skill: PrimarySkill.UnrealEngine, level: SkillLevel["Semi-Advanced"] },
  { skill: PrimarySkill.TypeScript, level: SkillLevel["Semi-Advanced"] },
  { skill: PrimarySkill.React, level: SkillLevel["Semi-Advanced"] },
  { skill: PrimarySkill.NextJs, level: SkillLevel["Semi-Advanced"] },
  { skill: PrimarySkill.Java, level: SkillLevel["Semi-Advanced"] },
  { skill: PrimarySkill.Python, level: SkillLevel["Semi-Advanced"] },
  { skill: PrimarySkill.RestApi, level: SkillLevel.Beginner },
] as const;

export const MINOR_SKILLS = [
  MinorSkill.C,
  MinorSkill.Css,
  MinorSkill.TailwindCss,
  MinorSkill.Sql,
  MinorSkill.Html,
  MinorSkill.Databases,
  MinorSkill.OracleSql,
  MinorSkill.PostgresSql,
  MinorSkill.FastApi,
  MinorSkill.Unity,
  MinorSkill.Flutter,
  MinorSkill.Dart,
  MinorSkill.Linux,
  MinorSkill.UiUx,
  MinorSkill.Design,
  MinorSkill.Algorithms,
  MinorSkill.Testing,
  MinorSkill.MsOffice,
  MinorSkill.Math,
  MinorSkill.Physics,
  MinorSkill.Econ,
] as const;

export function getSkillLevelTranslationKey(level: SkillLevel) {
  switch (level) {
    case SkillLevel.Beginner:
      return "skills.levels.beginner";
    case SkillLevel["Semi-Advanced"]:
      return "skills.levels.semiAdvanced";
    case SkillLevel.Advanced:
      return "skills.levels.advanced";
  }
}
