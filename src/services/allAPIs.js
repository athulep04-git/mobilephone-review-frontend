import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

export const addPhoneAPI=async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/phones`,reqBody)
}
export const getPhonesAPI = async () => {
  return await commonAPI("GET", `${serverURL}/phones`, "");
};
export const deletePhoneAPI = async (id) => {
  return await commonAPI("DELETE", `${serverURL}/phones/${id}`, {});
};
export const getPhoneByIdAPI = async (id) => {
  return await commonAPI("GET", `${serverURL}/phones/${id}`, "");
};

export const updatePhoneAPI = async (id, body) => {
  return await commonAPI("PUT", `${serverURL}/phones/${id}`, body);
};
export const addToWishlistAPI = async (phoneData) => {
  return await commonAPI("POST", `${serverURL}/wishlist`, phoneData);
};

export const getWishlistAPI = async () => {
  return await commonAPI("GET", `${serverURL}/wishlist`, "");
};


export const removeWishlistAPI = async (id) => {
  return await commonAPI("DELETE", `${serverURL}/wishlist/${id}`, {});
};
