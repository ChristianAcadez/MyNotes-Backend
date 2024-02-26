import mongoose from 'mongoose';

let NotasSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo: {type: String, required: false},
    nota: {type: String, required: true},
});

export default model('Notas', NotasSchema);