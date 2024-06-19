import path from "path";
import { createDefineMock } from "vite-plugin-mock-dev-server";

export const defineMock = createDefineMock((mock) => {
  // console.log('import.meta.>>>',import.meta.env.VITE_APP_BASE_API)
  // console.log('import.url.>>>',mock)
  
  // 拼接url
  mock.url = path.join(
    (import.meta as any).env.VITE_APP_BASE_API+"/api/v1/", 
    mock.url
  );
  console.log('mock.url',mock)
});
