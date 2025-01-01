import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
export default {
  input: {
    index: "src/index.ts",
    MainScreen: "src/Components/MainScreen/MainScreen.tsx",
    FileIcon: "src/Components/FileIcon/FileIcon.tsx",
  },
  output: [
    {
      dir: "dist",
      entryFileNames: (chunkInfo) => {
        if (chunkInfo.facadeModuleId.endsWith(".tsx")) {
          // Components 폴더의 파일
          return "component[name].js";
        }
        // 나머지 파일
        return "[name].js";
      },
      format: "esm",
    },
  ],
  plugins: [
    babel({
      babelHelpers: "bundled",
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    typescript({ declaration: true, declarationDir: "dist/types" }),
    postcss({
      extract: true, // CSS 파일을 별도로 추출
      minimize: true, // CSS 압축
      modules: true, // module.css 클래스명 유니크화
    }),
    copy({
      targets: [
        { src: "src/global.d.ts", dest: "dist" }, // global.d.ts 복사
      ],
    }),
  ],
};
