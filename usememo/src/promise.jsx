import { data } from "./data";
const promise = {
    watches: new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 5000);
    })
}
export default  promise