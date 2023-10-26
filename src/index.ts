import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const requestURL: string =
    "https://uct.api.getslideapp.com/2/connect/vouchers/issue/";
const authorizationToken = process.env.AUTHORIZATION_TOKEN;
console.log("TOKEN"+authorizationToken);
async function sendRequest() {
    try {
        const { data, status } = await axios.post(
            requestURL,
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Origin: "https://app.payandconnect.co.za",
                    Referer: "https://app.payandconnect.co.za/u/vouchers",
                    Authorization: authorizationToken,
                },
            }
        );
        console.log("Voucher has been requested");
        console.log(data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("message: ", error.response?.data);
        } else {
            console.log("unexpected error: ", error);
        
        }
    }
}

sendRequest();
