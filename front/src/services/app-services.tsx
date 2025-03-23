import axios, { AxiosResponse } from "axios";
import { PropsProduct } from "../store";
import { apisApp } from ".";

const { baseBackend } = apisApp;

export class ServicesApp {
  //* Get Data

  // Items
  public static async fetchProducts(): Promise<AxiosResponse<PropsProduct>> {
    return await axios.get(`${baseBackend}/products`);
  }

  public static async fetchMockItems(): Promise<PropsProduct> {
    const res = await fetch("http://localhost:6600/data.json");
    const json = await res?.json();
    return json;
  }
}
