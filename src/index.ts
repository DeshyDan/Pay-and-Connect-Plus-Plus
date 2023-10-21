import axios from "axios";
import config from "config";

const requestURL: string =
    "https://uct.api.getslideapp.com/2/connect/vouchers/issue/";
const authorizationToken: string = config.get("authorizationToken");

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

        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An unexpected error occurred";
        }
    }
}

sendRequest();
