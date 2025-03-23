import axios, { AxiosResponse } from "axios";
import { PropsProduct } from "../store";
import { apisApp } from "./apis";

// import { useAppFunctions } from "../hooks";

const { baseBackend } = apisApp;

// const { getEndTokenFromCookie } = useAppFunctions();

export class ServicesApp {
  //* Get Data

  // Items
  public static async fetchItems(): Promise<AxiosResponse<PropsProduct>> {
    return await axios.get(`${baseBackend}/products`);
  }

  public static async fetchMockItems(): Promise<PropsProduct> {
    const res = await fetch("http://http://localhost:6600//data.json");
    const json = await res?.json();
    console.log("JSON", json);
    return json;
  }
}
