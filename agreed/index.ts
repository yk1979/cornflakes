import { convert } from "@agreed/typed";
import { api as showUser } from "./users/showUser";

module.exports = convert(showUser);
