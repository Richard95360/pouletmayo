export interface IDataRow {
    jour: number;
    Nom: string;
    Description: string;
    Vegan: boolean;
  }
  
  const api = () => {
    const getEntreesDuJour = async (): Promise<IDataRow[]> => {
      const res = await fetch("http://localhost:8000/api/entreesdujour", {
            method: "GET",
        });
        return await res.json();
    };
  
    return {
      getEntreesDuJour,
    };
  };
  
  export default api();