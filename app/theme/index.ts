import { extendTheme } from "@chakra-ui/react";
import foundations from "./foundations";
import * as components from "./components";

const overrides = {
  ...foundations,
  components
};

export default extendTheme(overrides);
