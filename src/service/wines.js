import axios from 'axios';

const WinesService = {
    async getCheese() {
        let res = await axios.get("https://24su2lfd76.execute-api.eu-west-2.amazonaws.com/dev/cheese");
        let data = await res.data;
        return data;
    },

    async getWine(cheeseName) {
        let res = await axios.get("https://24su2lfd76.execute-api.eu-west-2.amazonaws.com/dev/wine/" + cheeseName);
        let data = await res.data;
        return data;
    },
 };
 
export default WinesService;