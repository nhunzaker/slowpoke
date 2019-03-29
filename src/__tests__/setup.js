import LokiJSAdapter from "@nozbe/watermelondb/adapters/lokijs";
import { logger } from "@nozbe/watermelondb/utils/common";
import { setFeature } from "../features";

logger.silence();

/**
 * Use IndexedDB when testing. SQLite is not available
 */
setFeature("databaseAdapter", schema => new LokiJSAdapter({ schema }));
