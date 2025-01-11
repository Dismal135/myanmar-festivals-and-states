import mongoose from 'mongoose';

const countryStateSchema = new mongoose.Schema({
    name: String,
    url: String,
    description: String
})

const CountryState = mongoose.models.State || mongoose.model("State", countryStateSchema);

export default CountryState