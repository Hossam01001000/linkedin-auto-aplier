let wait = (delay:number):any =>
  new Promise((resolve:any) => setTimeout(() => resolve(), delay * 1000));
export{wait}