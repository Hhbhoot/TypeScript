export interface IProduct  {
     brand?: string;
     model?: string;
     year?: number;
     price?: number;
     image ?: string,
     owner?: {
       name?: string;
       contact?: string;
       location?: string;
     };
   }