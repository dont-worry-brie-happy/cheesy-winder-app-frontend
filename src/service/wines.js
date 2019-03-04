import axios from 'axios';

const WinesService = {
    async getCheese() {
        let res = await axios.get("https://rsf9otdq98.execute-api.eu-west-2.amazonaws.com/dev/cheese");
        let data = await res.data;
        return data;
    }
};

//     async getWine() {
//         let res = await axios.get("http://cheesywinderdb.cczxcqftpcs4.eu-west-2.rds.amazonaws.com/wine" + cheeseName);
//         let data = await res.data;
//         return data;
//     },
//  };
 
export default WinesService;