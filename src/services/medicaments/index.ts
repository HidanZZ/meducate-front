import apiClient from "src/axios/client"

class MedicamentService {
    static async getAllMedicaments() {
        try {
          const response = await apiClient.get(`/medicaments`)
    
          return response.data
        } catch (err: any) {
          throw err
        }
      }

      static async getMedicamentByDenomination (nom: String) {
        try {
            const response = await apiClient.get(`/medicaments/medicament/${nom}`)
          
          return response.data
        } catch (err: any) {
          throw err
        }
      }

      static async getMedicamentByMolecule (substance: String) {
        try {
            const response = await apiClient.get(`/medicaments/molecule/${substance}`)
          
          return response.data
        } catch (err: any) {
          throw err
        }
      }

      static async getSimilarMedicamentsByDenomination (nom: String) {
        try {
            const response = await apiClient.get(`/medicaments/similar/${nom}`)
          
          return response.data
        } catch (err: any) {
          throw err
        }
      }

}


export default MedicamentService