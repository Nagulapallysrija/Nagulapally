var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/user');

var app = express();

// view engine setup
app.set('views',path.join(_dirname,'app_server','views'));
app.set('view engine', 'jade');