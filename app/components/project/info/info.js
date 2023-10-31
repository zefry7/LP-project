import {
  registerPlugins,
  Plugin
} from "../../framework/jquery/plugins/plugins";

class Info extends Plugin {
  // eslint-disable-next-line no-useless-constructor
  constructor($element) {
    super($element);
  }
}

registerPlugins({
  name: "info",
  Constructor: Info,
  selector: ".info"
});
