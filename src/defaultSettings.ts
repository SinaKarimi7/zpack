import { GeneralObject } from "./util";

export const defaultSettings = [
  { "files.autoSave": "afterDelay" },
  { "window.zoomLevel": 1 },
  { "explorer.compactFolders": false },
  { "projectManager.openInNewWindowWhenClickingInStatusBar": true },
  { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  { "editor.formatOnSave": true },
  { "cSpell.userWords": [] },
  { "eslint.alwaysShowStatus": true },
  {
    "eslint.codeAction.showDocumentation": {
      enable: true,
    },
  },
  { "eslint.lintTask.enable": true },
  { "errorLens.statusBarMessageEnabled": true },
  { "errorLens.scrollbarHackEnabled": true },
  { "errorLens.fontStyleItalic": true },
  { "errorLens.statusBarColorsEnabled": true },
  { "errorLens.addNumberOfDiagnostics": true },
  { "errorLens.addAnnotationTextPrefixes": true },
  { "errorLens.gutterIconsEnabled": true },
  { "errorLens.followCursor": "closestProblem" },
  { "workbench.colorTheme": "One Dark Pro" },
  { "workbench.iconTheme": "material-icon-theme" },
  { "editor.fontFamily": "Fira Code" },
  { "editor.fontLigatures": true },
] as GeneralObject[];
