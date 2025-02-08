// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "PSDS+ Docs",
      favicon: "/favicon.png",
      logo: {
        dark: "./src/assets/psdsp.png",
        light: "./src/assets/psdsd.png",
        alt: "PSDS+ Logo",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/PSDSPLUS",
      },
      sidebar: [
        {
          label: "Agnes",
          autogenerate: { directory: "agnes" },
        },
        {
          label: "PSDS API",
          autogenerate: { directory: "psdsapi" },
        },
        {
          label: "Skailine",
          autogenerate: { directory: "skailine" },
        },
        {
          label: "Tachyon",
          autogenerate: { directory: "tachyon" },
        },
      ],
      customCss: [
        "./src/tailwind.css",
        "./src/styles.css",
        "@fontsource/pretendard",
        "@fontsource/pretendard/900.css",
        "@fontsource/nanum-gothic-coding",
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
