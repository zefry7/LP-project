import {
  registerPlugins,
  Plugin
} from "../../framework/jquery/plugins/plugins";

class Travel extends Plugin {
  // eslint-disable-next-line no-useless-constructor
  constructor($element) {
    super($element);
  }
}

registerPlugins({
  name: "travel",
  Constructor: Travel,
  selector: ".travel"
});
