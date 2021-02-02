const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb+srv:BionicmanAdam:bionicmanadamjensen@cluster0.dpxya.mongodb.net/Cluster0?retryWrites=true&w=majority'); 