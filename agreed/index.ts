import { convert } from "@agreed/typed";
import { api as showUser } from "./users/showUser";
import { api as indexEntries } from "./entries/indexEntries";

module.exports = convert(showUser, indexEntries);
