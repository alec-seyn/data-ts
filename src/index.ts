import mongoose = require('mongoose');
import { User, UserModel } from './models/user';
 
// Connect
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => run());

// Run basic script
function run()
{
  (async () => {

    // Create a user
    const jazzPlayer = new User();
    jazzPlayer.first = 'Herbie';
    jazzPlayer.last = 'Hancock';
    jazzPlayer.name = "HB";
    
    await UserModel.create(jazzPlayer.serialize());

    // Query users
    const userJsons = await UserModel.find();
    userJsons.forEach(userJson => {
        const user = new User().deserialize(userJson);
        console.log(user.toString());
    });

    // Exit
    process.exit(0);

  })();
}





