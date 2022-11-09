import axios from "axios"

const BASE_URL = "http://localhost:8081"

export const useAPI = async (method: string, path: string, data: any) => {
  try {
    let config = {
      method,
      url: `${BASE_URL}${path}`,
      data: data ?? undefined
    }
    
    const res = await axios(config)
    return {
      code: res?.status,
      data: res?.data,
    }
  } catch (e: any) {
    console.log(`Error on ${method}: ${path} - `, e.message)
    throw new Error(e.message)
  }
}