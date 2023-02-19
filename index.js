import  express   from 'express';
import mongoose from 'mongoose'

const app = express();

mongoose.connect("mongodb+srv://<username>:<password>@cluster0.eyhty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>{
app.listen(3000, ()=>{console.log('http://localhost:3000')});
});



// listen for requires
// middleware & static files
 
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

