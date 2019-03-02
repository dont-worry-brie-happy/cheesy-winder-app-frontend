import axios from 'axios';

const WinesService = {
    async cheeses() {
        let res = await axios.get("http://cheesywinderdb.cczxcqftpcs4.eu-west-2.rds.amazonaws.com/");
        let data = await res.data;
        return data;
    },

    async wines() {
        let res = await axios.get("http://cheesywinderdb.cczxcqftpcs4.eu-west-2.rds.amazonaws.com/wine{cheeseName}");
        let data = await res.data;
        return data;
    },
 };
 
export default WinesService;