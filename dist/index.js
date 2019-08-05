"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const user_1 = require("./models/user");
// Connect
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => run());
// Run basic script
function run() {
    (() => __awaiter(this, void 0, void 0, function* () {
        // Create a user
        const jazzPlayer = new user_1.User();
        jazzPlayer.first = 'Herbie';
        jazzPlayer.last = 'Hancock';
        jazzPlayer.name = "HB";
        yield user_1.UserModel.create(jazzPlayer.serialize());
        // Query users
        const userJsons = yield user_1.UserModel.find();
        userJsons.forEach(userJson => {
            const user = new user_1.User().deserialize(userJson);
            console.log(user.toString());
        });
        // Exit
        process.exit(0);
    }))();
}
//# sourceMappingURL=index.js.map