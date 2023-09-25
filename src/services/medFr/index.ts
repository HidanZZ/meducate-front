import apiClient from "src/axios/client"

class MedFrService {
    static async getMedicamentById(id: string) {
        try {
            const response = await apiClient.get(`/medicaments/medFr/id/${id}`);
            
return response.data;
        } catch (err: any) {
            throw err;
        }
    
    };
    
    static async getMedicamentByDenomination(nomDuMedicament: string) {
        try{
            const responde = await apiClient.get(`/medicaments/medFr/${nomDuMedicament}`); 
            
return responde.data;   
        }
        catch (err:any){
            throw err;
        }
    };
}
export default MedFrService;