const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: "" },
            "code::after": { content: "" },
          },
        },
      },
      fontFamily: {
        prompt: ['"Prompt"', "sans-serif"],
      },
      backgroundImage: {
        contacts:
          "url('https://res.cloudinary.com/innovation-upstream/f_auto/InUp/contacts_ufvawe.png')",
        "tools-section-decor":
          "url('https://res.cloudinary.com/innovation-upstream/f_auto/InUp/tools_tyoo2h.svg')",
        "tools-section":
          "url('https://res.cloudinary.com/innovation-upstream/f_auto/InUp/bg-tools_f4u2py.jpg')",
        "first-section":
          "url('https://res.cloudinary.com/innovation-upstream/f_auto/InUp/logo-big_uganzh.svg')",
        "first-section-pattern":
          "url('https://res.cloudinary.com/innovation-upstream/f_auto/InUp/intro-bg_lzbju9.jpg')",
        "button-gradient":
          "linear-gradient(89.94deg, #27e1e1 0.06%, #1f6dd6 99.95%)",
        "text-gradient":
          "linear-gradient(89.94deg, #27E1E1 0.06%, #1F6DD6 99.95%);",
        "about-section":
          "url('https://res.cloudinary.com/innovation-upstream/f_auto/InUp/about-us_phbe0a.svg')",
        "blur-bg":
          "linear-gradient(360deg, rgba(10, 26, 47, 0.5) 35.63%, rgba(10, 26, 47, 0) 100%);",
        "blur-bg-img":
          "url('https://res.cloudinary.com/innovation-upstream/f_auto/InUp/Bg_iefjdy.png')",
        "with-vertical-lines":
          "linear-gradient(to right, transparent 49.75%, rgba(255,255,255, 0.08) 50%, transparent 50.25%)",
        "small-highlight":
          "linear-gradient(89.94deg, #27E1E1 0.06%, #1F6DD6 99.95%)",
        "small-highlight-dull":
          "linear-gradient(89.94deg, #174565 0.06%, #1F6DD6 99.95%)",
        "tree-brunches":
          "url('https://res.cloudinary.com/innovation-upstream/f_auto/InUp/Tree_brunches_debgcb.png')",
        "tree-branches-first":
          "url('https://res.cloudinary.com/innovation-upstream/f_auto/InUp/tree-bg-first_lsbmas.png')",
        "tree-branches-second":
          "url('https://res.cloudinary.com/innovation-upstream/f_auto,q_80/InUp/tree-bg-second_acuicz.png')",
        "hover-card-heading":
          "linear-gradient(89.94deg, #27E1E1 0.06%, #1F6DD6 99.95%)",
        "big-highlight-bright": "rgba(25, 85, 166, 0.5)",
        "articles-tree-branches":
          "url('https://res.cloudinary.com/innovation-upstream/f_auto,c_scale,h_1900,q_80//InUp/articles-bg-tree_ncyiuk.png')",
        "mission-tree":
          "url('https://res.cloudinary.com/innovation-upstream/f_auto/InUp/tree-mission_z7sren.png')",
      },
      backgroundColor: {
        "glass-bg": "rgba(255, 255, 255, 0.04)",
        black: "#0A1A2F",
        "big-highlight": "rgba(25, 85, 166, 0.2)",
        "bigger-highlight": "rgba(21, 130, 220, 0.2)",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        16: "4rem",
        "size-12.5%": "12.5%",
        430: "430px",
        550: "550px",
      },
      backgroundPosition: {
        "tree-position": "60% 10%",
      },
      colors: {
        gray: "#6D7F98",
        "light-gray": "#EFF4FB",
        black: "#0A1A2F",
        blue: "#1F5DB0",
        "light-blue": "#27AAE1",
        "dark-blue": "#10243F",
        primary: colors.lime,
        secondary: colors.orange,
        neutral: colors.gray,
      },
      boxShadow: {
        "card-shadow": "0px 14px 50px -16px rgba(25, 85, 166, 0.2)",
      },
      lineHeight: {
        48: "48px",
      },
      fontSize: {
        h1: "2.5rem",
        h3: "26px",
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(340px, 1fr))",
      },
      lineClamp: {
        8: "8",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addVariant }) {
      addVariant("second", "&:nth-child(2)");
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({ ".no-scrollbar::-webkit-scrollbar": { display: "none" } });
    }),
    require("@tailwindcss/line-clamp"),
  ],
};
