import app from './expressConfig'
import './dbConfig';

app.listen(app.get('port'));
console.log('server on port ', app.get('port'));