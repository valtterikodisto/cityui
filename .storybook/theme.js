import { create } from "@storybook/theming";
import logo from "../src/storybook/assets/citydao.png";

export default create({
  base: "light",
  brandTitle: "The DAO for decentralized asset ownership",
  brandUrl: "https://www.citydao.io/",
  brandImage: logo,

  fontBase: '"Rmneuetrial", sans-serif',
  fontCode: "monospace",
});
