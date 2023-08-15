import apiClient from "src/axios/client"
import { Medicament } from "src/types/apps/medicament"

class MedicamentService {
    static async getAllMedicaments() {
        try {
          const response = await apiClient.get<Medicament[]>(`/medicaments`)
    
          return response.data
        } catch (err: any) {
          throw err
        }
      }

      static async getMedicamentByDenomination (nom: string) {
        try {
            const response = await apiClient.get<Medicament>(`/medicaments/medicament/${nom}`)
          
          return response.data
        } catch (err: any) {
          throw err
        }
      }

      static async getMedicamentByMolecule (substance: string) {
        try {
            const response = await apiClient.get<Medicament>(`/medicaments/molecule/${substance}`)
          
          return response.data
        } catch (err: any) {
          throw err
        }
      }

      static async getSimilarMedicamentsByDenomination(nom: string) {
        try {
            const response = await apiClient.get<Medicament[]>(`/medicaments/similar/${nom}`)
          
          return response.data
        } catch (err: any) {
          throw err
        }
      }

}



export default MedicamentService