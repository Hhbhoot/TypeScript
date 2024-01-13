export interface IBike  {
     brand: string;
     model: string;
     year: number;
     price: number;
     seller: {
       name: string;
       contact: string;
       location: string;
     };
   }