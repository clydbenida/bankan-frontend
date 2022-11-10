import { fetcher } from "."

export const loginUser = async (username: string, password: string) => {
  const {code, data} = await fetcher("POST", "/user/login", {username, password})
  
  return { code, data }
}