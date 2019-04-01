import { useEffect, useState } from "react";

const DEFAULTS = {
  // Initial state
  initial: null,
  // Arguments passed into query, also used to calculate effect dependencies
  args: []
};

export function useDatabase(query, providedOptions = DEFAULTS) {
  let options = Object.assign({}, DEFAULTS, providedOptions);

  let [state, setState] = useState(options.initial);
  let dependencies = [query].concat(options.args);

  useEffect(function() {
    let observer = query(...options.args);
    let subscription = observer.subscribe(setState);

    return () => subscription.unsubscribe();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return state;
}
